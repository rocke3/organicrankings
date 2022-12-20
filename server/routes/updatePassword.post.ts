import { defineEventHandler, readBody } from "h3";
const env = useRuntimeConfig();
import md5 from "md5";
import db from "../connection";
export default defineEventHandler(async (event) => {
	const body = await readBody(event);
	const email = body.email;
	const hash = body.hash;
	const password = body.password;
	const confpassword = body.confpassword;

	if (hash && email && password && confpassword && password == confpassword) {
		return await db
			.promise()
			.query("SELECT u_email FROM users WHERE u_email = ? AND u_reset = ?", [email, hash])
			.then(([rows, fields]) => {
				if (rows[0]) {
					let newPass = md5(password);
					return db
						.promise()
						.query("UPDATE users SET u_password = ?, u_reset = NULL WHERE u_email = ?", [newPass, email])
						.then(() => {
							return { status: true };
						})
						.catch((error) => {
							return { status: false };
						});
				} else {
					return { status: false, message: "Invalid email or reset link" };
				}
			})
			.catch((error) => {
				return { status: false };
			});
	} else {
		return { status: false };
	}
});
