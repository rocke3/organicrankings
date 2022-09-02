import { env } from "node:process";
import jwt from "jsonwebtoken";
import md5 from "md5";
import db from "../connection";

export default defineEventHandler(async (req) => {
	const cookieMaxAge = 3600;
	const userAgent = getRequestHeader(req, "user-agent").replace(/\s/g, "").toLowerCase();
	const body = await useBody(req);

	if (validateInputs(body)) {
		const isLogin = await db
			.promise()
			.query("SELECT * FROM users WHERE email = ?", [body.email])
			.then(([rows, fields]) => {
				var dbUser = rows[0] ?? false;
				if (dbUser && dbUser.password == body.password) {
					const jwtData = { user: body.email };
					const jwtToken = jwt.sign(jwtData, env.JWT_SECRET + userAgent, { expiresIn: cookieMaxAge });
					setCookie(req, env.COOKIE_NAME, jwtToken, { maxAge: cookieMaxAge, httpOnly: true, sameSite: true }); //secure: true,
					setCookie(req, "org_log", md5(userAgent), { maxAge: cookieMaxAge, httpOnly: true, sameSite: true }); //secure: true,
					return { login: true };
				} else {
					return { login: false, message: "Invalid Email or Password" };
				}
			})
			.catch((error) => {
				console.log(error);
				return { login: false, message: "Something went wrong please try again later" };
			});

		if (isLogin.login) {
			return { login: true };
		} else {
			return { login: false, message: isLogin.message };
		}
	}
});

function validateInputs(body) {
	if (body.email == "" || !body.email.match(/^([\w-\.]{2,4})+@([\w-]{2,4})+\.+[\w-]{2,4}$/) || body.password == "" || body.password.length < 6) {
		return false;
	}
	return true;
}
