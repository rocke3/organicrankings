import db from "./connection";

const byId = async (userID: Number) => {
	return await db
		.promise()
		.query("SELECT u_id,u_name,u_email,u_phone,u_freeUsed,sb_active FROM `users` LEFT JOIN subscriptions ON sb_user = u_id WHERE `u_id` = ?", [userID])
		.then(([rows, fields]) => {
			if (rows) return rows[0];
			return false;
		});
};

const byEmail = async (userEmail: String, getPassword = false) => {
	return await db
		.promise()
		.query(`SELECT u_id,u_name,u_email,u_phone,u_freeUsed,sb_active ${getPassword ? ",u_password" : ""} FROM users LEFT JOIN subscriptions ON sb_user = u_id WHERE u_email = ?`, [userEmail])
		.then(([rows, fields]) => {
			if (rows) return rows[0];
			return false;
		});
};

const withSubscriptions = async (userEmail: String) => {
	return await db
		.promise()
		.query(
			"SELECT u_id,sb_plan,sb_html,sb_css,sb_js,sb_image,sb_pageSpeed,sb_text,sb_htaccess,sb_active,sb_cancelAtEnd,sp_id,sp_name,sp_price,sp_html,sp_css,sp_js,sp_image,sp_pageSpeed,sp_text,sp_htaccess,u_freeUsed FROM `users` LEFT JOIN `subscriptions` ON u_id = sb_user  AND sb_active = 1 LEFT JOIN `subscription_plans` ON sp_id = sb_plan WHERE `u_email` = ?",
			[userEmail]
		)
		.then(([rows, fields]) => {
			if (rows) return rows[0];
			return false;
		});
};

const getUser = {
	byId: byId,
	byEmail: byEmail,
	withSubscriptions: withSubscriptions,
};

export default getUser;
