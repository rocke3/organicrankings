import { env } from "node:process";
import { defineEventHandler, getHeader, readBody } from "h3";
import jwt from "jsonwebtoken";
import md5 from "md5";
import db from "../connection";
import cookie from "../cookie";

export default defineEventHandler(async (req) => {
	const userAgent = processUserAgent(getHeader(req, "user-agent"));
	const body = await readBody(req);

	if (validateInputs(body)) {
		const isSignup = await db
			.promise()
			.query("INSERT INTO `users` (`email`, `password`) VALUES (?,?)", [body.email, body.password])
			.then((response) => {
				const jwtData = { user: body.email };

				jwt.sign(jwtData, env.jwtSecret, { expiresIn: "3h" }, function (err, token) {
					cookie.set(req, cookie.name.JWT, token);
					cookie.set(req, cookie.name.AGENT, md5(userAgent));
					return { signup: true };
				});
			})
			.catch((error) => {
				if (error.code == "ER_DUP_ENTRY") {
					return { signup: false, message: "Email already used" };
				} else {
					return { signup: false, message: "Something went wrong please try again later" };
				}
			});

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
