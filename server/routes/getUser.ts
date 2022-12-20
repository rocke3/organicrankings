import { defineEventHandler, readBody, getCookie } from "h3";
import db from "../connection";
import auth from "../auth";
import cookie from "../cookie";

export default defineEventHandler(async (req) => {
	let verifyed = await auth.verify(getCookie(req, cookie.name.JWT)); //! verify cookie JWT token
	if (verifyed) {
		return await db
			.promise()
			.query("SELECT u_id,u_name,u_email,u_phone,u_freeUsed FROM `users` WHERE `u_email` = ?", [verifyed.user])
			.then(([rows]) => {
				if (rows.length) return rows[0];
				return false;
			});
	}

	return false;
});
