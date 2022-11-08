const env = useRuntimeConfig();
import * as mysql from "mysql2";

const database = mysql.createConnection({
	host: env.dbHost,
	user: env.dbUser,
	password: env.dbPass,
	database: env.dbDb,
});

const db = mysql.createPool({
	host: env.dbHost,
	user: env.dbUser,
	password: env.dbPass,
	database: env.dbDb,
	waitForConnections: true,
	connectionLimit: 10,
	queueLimit: 0,
});

export default db;
