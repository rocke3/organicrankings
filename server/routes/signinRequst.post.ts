const env = useRuntimeConfig();
import md5 from "md5";
import auth from "../auth";
import db from "../connection";
import cookie from "../cookie";
import { defineEventHandler, readBody } from "h3";

export default defineEventHandler(async (req) => {
	const userAgent = md5(cookie.agent(req));
	const body = await readBody(req);

	if (validateInputs(body)) {
		const email = body.email;
		const pass = md5(body.password);

		const login = await db
			.promise()
			.query("SELECT * FROM users WHERE user_email = ? AND user_password = ?", [email, pass])
			.then(([rows, fields]) => {
				var dbUser = rows[0] ?? false;
				if (dbUser) {
					const jwtToken = auth.sign({ user: email });
					if (jwtToken) {
						cookie.set(req, cookie.name.JWT, jwtToken);
						cookie.set(req, cookie.name.AGENT, userAgent);
						return { login: true };
					}
					return { login: false };
				} else {
					return { login: false, message: "Invalid Email or Password." };
				}
			})
			.catch((error) => {
				return { login: false, message: "Something went wrong please try again later", error: error };
			});

		return login;
	}
});

function validateInputs(body) {
	if (body.email == "" || !body.email.match(/^([\w-\.]{2,4})+@([\w-]{2,4})+\.+[\w-]{2,4}$/) || body.password == "" || body.password.length < 6) {
		return false;
	}
	return true;
}
