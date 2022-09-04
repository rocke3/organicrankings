import { env } from "node:process";
import jwt from "jsonwebtoken";
import md5 from "md5";
import db from "../connection";
import cookie from "../cookie";
import { defineEventHandler, readBody } from "h3";

export default defineEventHandler(async (req) => {
	const userAgent = md5(cookie.agent(req));
	const body = await readBody(req);

	if (validateInputs(body)) {
		const isLogin = await db
			.promise()
			.query("SELECT * FROM users WHERE email = ?", [body.email])
			.then(([rows, fields]) => {
				var dbUser = rows[0] ?? false;
				if (dbUser && dbUser.password == body.password) {
					const jwtData = { user: body.email };
					const jwtToken = jwt.sign(jwtData, env.jwtSecret, { expiresIn: "3h" });

					cookie.set(req, cookie.name.JWT, jwtToken);
					cookie.set(req, cookie.name.AGENT, userAgent);

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
