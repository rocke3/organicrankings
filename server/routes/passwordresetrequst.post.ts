import { defineEventHandler, readBody } from "h3";
const env = useRuntimeConfig();
import md5 from "md5";
import axios from "axios";
import db from "../connection";
export default defineEventHandler(async (event) => {
	const body = await readBody(event);
	const email = body.email;
	const confemail = body.confemail;

	//Validate email format
	if (!email.match(/^([\w-\.]{2,4})+@([\w-]{2,4})+\.+[\w-]{2,4}$/) || !confemail.match(/^([\w-\.]{2,4})+@([\w-]{2,4})+\.+[\w-]{2,4}$/)) {
		return { login: false, message: "Invalid Email" };
	}

	if (email && confemail && email == confemail) {
		return await db
			.promise()
			.query("SELECT user_name,user_email FROM users WHERE user_email = ?", [email])
			.then(([rows, fields]) => {
				if (rows[0]) {
					const name = rows[0].user_name;
					const time = new Date().getTime();
					const unique = Math.random().toString().substring(10, 15);
					const user_reset = md5(email + time + unique);
					db.promise().query("UPDATE users SET user_reset = ? WHERE user_email = ?", [user_reset, email]);
					var params = new URLSearchParams({ form: "resetPass", email: email, hash: user_reset, name: name });
					axios.post("https://www.organicrankings.com/sendmail/", params);
					return true;
				} else {
					return false;
				}
			})
			.catch((error) => {
				return { login: false, message: "Something went wrong please try again later", error: error };
			});
	} else {
		return { login: false, message: "Confemail Email dosen't match" };
	}
});
