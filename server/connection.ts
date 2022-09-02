import { env } from "node:process";
import * as mysql from "mysql2";

const db = mysql.createConnection({
	host: env.DB_HOST,
	user: env.DB_UESR,
	password: env.DB_PAS,
	database: env.DB_DB,
});

export default db;
