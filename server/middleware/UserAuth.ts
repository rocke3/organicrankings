import { defineEventHandler, getCookie } from "h3";
const env = useRuntimeConfig();
import jwt from "jsonwebtoken";
import md5 from "md5";
import cookie from "../cookie";

const server = env.server ?? "";

const ignoreAuth = ["/requstLogout"];
let noLogin = ["/signin", "/signup", "/resetpassword", "/requstSignin", "/requstSignup", "/requstReset", "/loadcaptcha", "/public"];
if (server != "local") {
	noLogin = ["/app", "/app/signin", "/app/signup", "/app/resetpassword", "/app/requstSignin", "/app/requstSignup", "/app/requstReset", "/app/loadcaptcha", "/public"];
}

export default defineEventHandler((event) => {
	const req = event.req,
		res = event.res,
		toUrl = req.originalUrl,
		userAgent = md5(cookie.agent(req)),
		cookieJwt = getCookie(req, cookie.name.JWT),
		cookieAgent = getCookie(req, cookie.name.AGENT);

	if (toUrl == "/") {
		redirect(res, "/user");
	} else {
		if (!ignoreAuth.includes(toUrl)) {
			if (cookieJwt && cookieAgent && cookieAgent == userAgent) {
				jwt.verify(cookieJwt, env.jwtSecret, function (err, decoded) {
					if (!err) {
						if (noLogin.includes(toUrl)) {
							console.log("Access Redirect");
							redirect(res, "/user");
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
	}
});

function redirect(res, location) {
	res.writeHead(301, { location });
	res.end();
}
