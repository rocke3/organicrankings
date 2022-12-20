import db from "../server/connection";
const org_session = useCookie("org_session");
const userID = org_session.value;

const user = await db
	.promise()
	.query("SELECT u_id,u_name,u_email,u_phone,u_freeUsed FROM `users` WHERE `u_id` = ?", [userID])
	.then(([rows, fields]) => {
		if (rows.length) return rows[0];
		return false;
	});

// const subscription = await db
// 	.promise()
// 	.query("SELECT u_freeUsed FROM `users` WHERE `u_id` = ?", [userID])
// 	.then(([rows]) => {
// 		if (rows.length) return rows[0];
// 		return false;
// 	});

export const getUser = () => useState("getUser", () => user);

export const getSubscription = () => useState("getSubscription", () => "subscription");
