import md5 from "md5";
import auth from "../auth";
import getUser from "../database/getUser";
import cookie from "../cookie";
import { defineEventHandler, readBody } from "h3";

export default defineEventHandler(async (req) => {
	const userAgent = md5(cookie.agent(req));
	const body = await readBody(req);

	if (validateInputs(body)) {
		const email = body.email;
		const pass = body.password;
		let userCookie = {};

		const user = await getUser.byEmail(email, true);

		if (user.u_password === md5(pass)) {
			const jwtToken = auth.sign({ user: userAgent, email: email });
			if (jwtToken) {
				cookie.set(req, cookie.name.JWT, jwtToken);
				userCookie["name"] = user.u_name;
				userCookie["email"] = user.u_email;
				userCookie["phone"] = user.u_phone;
				userCookie["active"] = user.sb_active;
				cookie.set(req, cookie.name.User, JSON.stringify(userCookie));
				return { login: true };
			}
		}
	}
	return { login: false };
});

function validateInputs(body) {
	if (body.email == "" || !body.email.match(/^([\w-\.]{2,4})+@([\w-]{2,4})+\.+[\w-]{2,4}$/) || body.password == "" || body.password.length < 6) {
		return false;
	}
	return true;
}
