import db from "../connection";
import axios from "axios";
import { defineEventHandler, readBody } from "h3";

export default defineEventHandler(async (req) => {
	const body = await readBody(req);
	var params = new URLSearchParams(body);
	return await axios
		.post("https://www.organicrankings.com/sendmail/", params)
		.then(async function (res) {
			if (res.data) {
				insartIntoDatabase(body);
				return 1;
			} else {
				return 0;
			}
		})
		.catch((error) => {
			return 0;
		});
});

function insartIntoDatabase(body) {
	let user = body.user ?? 0;
	let userInfo = user ? "" : JSON.stringify({ name: body.name, email: body.email, phone: body.phone });
	return db
		.promise()
		.query("INSERT INTO `form_submitted`(`fs_user`, `fs_userInfo`, `fs_msg`) VALUES (?,?,?)", [user, userInfo, body.message])
		.then(([rows]) => {
			if (rows) return true;
			return false;
		});
}
