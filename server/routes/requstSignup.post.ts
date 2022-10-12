const env = useRuntimeConfig();
import { defineEventHandler, getHeader, readBody } from "h3";
import jwt from "jsonwebtoken";
import md5 from "md5";
import db from "../connection";
import cookie from "../cookie";

export default defineEventHandler(async (req) => {
	const userAgent = processUserAgent(getHeader(req, "user-agent"));
	const body = await readBody(req);

	if (validateInputs(body)) {
		const email = body.email;
		const pass = md5(body.password);
		const isSignup = await db
			.promise()
			.query("INSERT INTO `users` (`user_email`, `user_password`) VALUES (?,?)", [email, pass])
			.then(async (response) => {
				const jwtData = { user: email };
				const jwtToken = jwt.sign(jwtData, env.jwtSecret, { expiresIn: "3h" });
				if (jwtToken) {
					cookie.set(req, cookie.name.JWT, jwtToken);
					cookie.set(req, cookie.name.AGENT, userAgent);
					return { signup: true };
				}
				return { signup: false };
			})
			.catch((error) => {
				if (error.code == "ER_DUP_ENTRY") {
					return { signup: false, message: "Email already used" };
				} else {
					return { signup: false, message: "Something went wrong please try again later" };
				}
			});
		console.log(isSignup);

		if (isSignup.signup) {
			return { signup: true };
		} else {
			return { signup: false, message: isSignup.message };
		}
	}
});

function validateInputs(body) {
	const email = body.email;
	const pass = body.password;
	const confpass = body.confpass;
	if (email == "" || !email.match(/^([\w-\.]{2,4})+@([\w-]{2,4})+\.+[\w-]{2,4}$/) || pass == "" || pass.length < 6 || confpass == "" || confpass.length < 6) {
		return false;
	}
	return true;
}

function processUserAgent(text: String) {
	return md5(text.replace(/\s/g, "").toLowerCase() + env.agentSecret);
}
