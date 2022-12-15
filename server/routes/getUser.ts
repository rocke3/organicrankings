import { defineEventHandler, readBody, getCookie } from "h3";
import db from "../connection";
import auth from "../auth";
import cookie from "../cookie";

export default defineEventHandler(async (req) => {
	let verifyed = await auth.verify(getCookie(req, cookie.name.JWT)); //! verify cookie JWT token
	if (verifyed) {
		return await db
			.promise()
			.query(
				"SELECT user_id,user_name,user_email,uesr_phone,user_free_used,sub_active,plan_id,plan_name,plan_price,plan_limit,plan_extra,plan_price_id FROM `users` LEFT JOIN `subscriptions` ON user_id = sub_user LEFT JOIN `subscription_plan` ON plan_id = sub_plan WHERE `user_email` = ?",
				[verifyed.user]
			)
			.then(([rows]) => {
				if (rows.length) return rows[0];
				return false;
			});
	}

	return false;
});
