const env = useRuntimeConfig();
import { defineEventHandler, getCookie } from "h3";
import jwt from "jsonwebtoken";
import md5 from "md5";
import cookie from "../cookie";

export default defineEventHandler(async (event) => {
	const req = event.req,
		res = event.res,
		toUrl = req.originalUrl,
		userAgent = md5(cookie.agent(req)), //? For an extra layer of security. Match MD5 user agent/browser info. (previously saved during login)
		cookieJwt = getCookie(req, cookie.name.JWT), //? JWT Tokan (User info)
		cookieAgent = getCookie(req, cookie.name.AGENT), //? MD5 user agent/browser info (previously saved during login)
		path = toUrl.split("/");

	if (cookieJwt && cookieAgent && cookieAgent == userAgent) {
		let verify = await jwt.verify(cookieJwt, env.jwtSecret, function (err, decoded) {
			return err ? false : true;
		});

		if (path[1] == "user" && !verify) {
			redirect(res, "/");
		}
	} else if (path[1] == "user") {
		// If Cookie not found & trying to access restricted page Redirect to signin
		console.log("No cookie Redirect");
		redirect(res, "/");
	}
});

function redirect(res, location) {
	res.writeHead(301, { location });
	res.end();
}
