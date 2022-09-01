import jwt from "jsonwebtoken";
import md5 from "md5";
const jwtSecret = "hb(*Y*^jknasd";
const cookieMaxAge = 3600;
const cookieName = "org_user";
export default defineEventHandler(async (req) => {
	deleteCookie(req, cookieName);
	deleteCookie(req, "org_log");

	const userAgent = await getRequestHeader(req, "user-agent").replace(/\s/g, "").toLowerCase();

	const body = await useBody(req);
	const email = body.email;
	const pass = body.password;

	//Validate
	if (email == "" || !email.match(/^([\w-\.]{2,4})+@([\w-]{2,4})+\.+[\w-]{2,4}$/) || pass == "" || pass.length < 6) {
		return { login: false, message: "Invalid Email or Password" };
	}

	const jwtData = { user: email };
	if (email == "test@gmail.com" && pass == "123456") {
		try {
			const jwtToken = jwt.sign(jwtData, jwtSecret + userAgent, { expiresIn: cookieMaxAge });
			setCookie(req, cookieName, jwtToken, { maxAge: cookieMaxAge, httpOnly: true, secure: true, sameSite: true });
			setCookie(req, "org_log", md5(userAgent), { maxAge: cookieMaxAge, httpOnly: true, secure: true, sameSite: true });
			return { login: true };
		} catch (err) {
			return { login: false, err: err };
		}
	} else {
		return { login: false, message: "Invalid Email or Password" };
	}
	return { login: false, message: "Something went wrong please try again later" };
});
