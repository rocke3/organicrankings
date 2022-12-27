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

const getUser = {
	byId: byId,
	byEmail: byEmail,
};

export default getUser;
