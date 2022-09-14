const env = useRuntimeConfig();
import * as mysql from "mysql2";

const db = mysql.createConnection({
	host: env.dbHost,
	user: env.dbUser,
	password: env.dbPass,
	database: env.dbDb,
});

export default db;
