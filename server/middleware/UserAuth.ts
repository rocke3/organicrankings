import { env } from "node:process";
import jwt from "jsonwebtoken";
import md5 from "md5";

export default defineEventHandler((event) => {
	const nologin = ["/", "/signin", "/signup", "/resetpassword", "/requstSignin", "/requstSignup", "/requstReset", "/loadcaptcha"];
	const req = event.req,
		res = event.res,
		next = event.next;
	const userAgent = md5(getRequestHeader(req, "user-agent").replace(/\s/g, "").toLowerCase() + "org@agrnt");
	const cookieJwt = useCookie(req, "org_user");
	const cookieAgent = useCookie(req, "org_log");

	if (cookieJwt && cookieAgent && cookieAgent == userAgent) {
		jwt.verify(cookieJwt, env.jwt_secret, function (err, decoded) {
			if (!err) {
				if (nologin.includes(req.url)) {
					console.log("access Redirect");
					redirect(res, "/app");
				}
			} else {
				redirect(res, "/signin");
			}
		});
	} else {
		// If Cookei not found & the url is app Redirect to sign
		if (!nologin.includes(req.url)) {
			console.log("No access Redirect");
			redirect(res, "/signin");
		}
	}
});

function redirect(res, location) {
	res.writeHead(301, { location });
	res.end();
}
