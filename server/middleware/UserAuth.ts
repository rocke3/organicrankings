import { env } from "node:process";
import { defineEventHandler, getCookie } from "h3";
import jwt from "jsonwebtoken";
import md5 from "md5";
import cookie from "../cookie";

const ignoreAuth = ["/requstLogout"];
const noLogin = ["/", "/signin", "/signup", "/resetpassword", "/requstSignin", "/requstSignup", "/requstReset", "/loadcaptcha"];

export default defineEventHandler((event) => {
	const req = event.req,
		res = event.res,
		toUrl = req.originalUrl,
		userAgent = md5(cookie.agent(req)),
		cookieJwt = getCookie(req, cookie.name.JWT),
		cookieAgent = getCookie(req, cookie.name.AGENT);

	if (!ignoreAuth.includes(toUrl)) {
		if (cookieJwt && cookieAgent && cookieAgent == userAgent) {
			jwt.verify(cookieJwt, env.jwtSecret, function (err, decoded) {
				if (!err) {
					if (noLogin.includes(toUrl)) {
						console.log("Access Redirect");
						redirect(res, "/app");
					}
				} else {
					console.log("Invalid sign Redirect");
					cookie.remove(req, cookie.name.JWT);
					cookie.remove(req, cookie.name.AGENT);
					redirect(res, "/signin");
				}
			});
		} else {
			// If Cookei not found & the url is app Redirect to sign
			if (!noLogin.includes(toUrl)) {
				console.log("No cookie Redirect");
				redirect(res, "/signin");
			}
		}
	}
});

function redirect(res, location) {
	res.writeHead(301, { location });
	res.end();
}
