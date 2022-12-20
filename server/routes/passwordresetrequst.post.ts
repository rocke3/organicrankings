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
			.query("SELECT u_name,u_email FROM users WHERE u_email = ?", [email])
			.then(([rows, fields]) => {
				if (rows[0]) {
					const name = rows[0].u_name;
					const time = new Date().getTime();
					const unique = Math.random().toString().substring(10, 15);
					const u_reset = md5(email + time + unique);
					db.promise().query("UPDATE users SET u_reset = ? WHERE u_email = ?", [u_reset, email]);
					var params = new URLSearchParams({ form: "resetPass", email: email, hash: u_reset, name: name });
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
