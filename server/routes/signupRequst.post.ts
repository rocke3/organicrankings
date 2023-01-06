import { defineEventHandler, getHeader, readBody } from "h3";
import auth from "../auth";
import md5 from "md5";
import db from "../connection";
import cookie from "../cookie";

export default defineEventHandler(async (req) => {
	const userAgent = auth.userAgent(getHeader(req, "user-agent"));
	const body = await readBody(req);

	if (validateInputs(body)) {
		const email = body.email;
		const pass = md5(body.password);
		const isSignup = await db
			.promise()
			.query("INSERT INTO `users` (`u_email`, `u_password`) VALUES (?,?)", [email, pass])
			.then(async (response) => {
				const jwtToken = auth.sign({ user: email });
				if (jwtToken) {
					cookie.set(req, cookie.name.JWT, jwtToken);
					cookie.set(req, cookie.name.User, userAgent);
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
