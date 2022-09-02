import { env } from "node:process";
import jwt from "jsonwebtoken";
import md5 from "md5";
import db from "../connection";

export default defineEventHandler(async (req) => {
	const cookieMaxAge = 3600;
	const userAgent = getRequestHeader(req, "user-agent").replace(/\s/g, "").toLowerCase();
	const body = await useBody(req);

	if (validateInputs(body)) {
		const isSignup = await db
			.promise()
			.query("INSERT INTO `users` (`email`, `password`) VALUES (?,?)", [body.email, body.password])
			.then((response) => {
				const jwtData = { user: body.email };
				const jwtToken = jwt.sign(jwtData, env.JWT_SECRET + userAgent, { expiresIn: cookieMaxAge });
				setCookie(req, env.COOKIE_NAME, jwtToken, { maxAge: cookieMaxAge, httpOnly: true, sameSite: true }); //secure: true,
				setCookie(req, "org_log", md5(userAgent), { maxAge: cookieMaxAge, httpOnly: true, sameSite: true }); //secure: true,
				return { signup: true };
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
