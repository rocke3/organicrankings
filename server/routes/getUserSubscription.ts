import { defineEventHandler, getCookie } from "h3";
import db from "../connection";
import auth from "../auth";
import cookie from "../cookie";
import stripe from "../stripe";

export default defineEventHandler(async (req) => {
	let verifyed = await auth.verify(getCookie(req, cookie.name.JWT)); //! verify cookie JWT token
	if (verifyed) {
		let user = JSON.parse(getCookie(req, cookie.name.User));
		return await db
			.promise()
			.query(
				"SELECT sb_invoice,sb_plan,sb_html,sb_css,sb_js,sb_image,sb_pageSpeed,sb_text,sb_htaccess,sb_active,sb_cancelAtEnd,sp_id,sp_name,sp_price,sp_html,sp_css,sp_js,sp_image,sp_pageSpeed,sp_text,sp_htaccess,u_freeUsed FROM `subscriptions` LEFT JOIN `users` ON u_id = sb_user LEFT JOIN `subscription_plans` ON sp_id = sb_plan WHERE `u_email` = ? OR (sb_active = 1 OR sb_invoice IS NOT NULL) ORDER BY sb_created LIMIT 1",
				[user.email]
			)
			.then(async ([rows]) => {
				if (rows) {
					return rows[0];
				}
				return false;
			});
	}

	return false;
});
