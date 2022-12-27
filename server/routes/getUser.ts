import { defineEventHandler, readBody, getCookie } from "h3";
import auth from "../auth";
import cookie from "../cookie";
import getUser from "../database/getUser";

export default defineEventHandler(async (req) => {
	let verifyed = await auth.verify(getCookie(req, cookie.name.JWT)); //! verify cookie JWT token
	if (verifyed) {
		return getUser.byEmail(verifyed.user);
	}
	return false;
});
