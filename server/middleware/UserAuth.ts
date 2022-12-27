const env = useRuntimeConfig();
import { defineEventHandler, getCookie } from "h3";
import jwt from "jsonwebtoken";
import md5 from "md5";
import cookie from "../cookie";

export default defineEventHandler(async (event) => {
	const req = event.req,
		res = event.res,
		toUrl = req.originalUrl,
		requestAgent = md5(cookie.agent(req)), //? For an extra layer of security. Match MD5 user agent/browser info. (previously saved during login)
		cookieJwt = getCookie(req, cookie.name.JWT), //? JWT Tokan (Browser Info)
		cookieUser = getCookie(req, cookie.name.User), //? User Information
		path = toUrl.split("/")[1];

	if (cookieJwt && cookieUser) {
		let verify = await jwt.verify(cookieJwt, env.jwtSecret, function (err, decoded) {
			if (decoded.user == requestAgent && !err) return true;
			return false;
		});

		if (path == "user" && !verify) {
			cookie.removeAll(req);
			redirect(res, "/");
		}
	} else if (path == "user") {
		// If Cookie not found & trying to access restricted page Redirect to signin AND remove all cookie
		console.log("No cookie Redirect");
		cookie.removeAll(req);
		redirect(res, "/");
	}
});

function redirect(res, location) {
	res.writeHead(301, { location });
	res.end();
}
