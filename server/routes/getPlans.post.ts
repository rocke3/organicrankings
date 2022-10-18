const env = useRuntimeConfig();
import { defineEventHandler } from "h3";
import db from "../connection";
export default defineEventHandler(async (req) => {
	const data = await db
		.promise()
		.query("SELECT * FROM subscription_plan")
		.then(([rows, fields]) => {
			return rows;
		})
		.catch((error) => {
			return { status: false, message: "Something went wrong please try again later" };
		});
	return data;
});
