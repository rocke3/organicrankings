import { env } from "node:process";

const set = (req: object, name: string, value: string) => {
	const cookieName = name == "user" ? env.cookie_user : env.cookie_log;
	setCookie(req, cookieName, value, { maxAge: 3600 * 4, httpOnly: true, sameSite: true });
};

const remove = (req: object, name: string) => {
	const cookieName = name == "user" ? env.cookie_user : env.cookie_log;
	deleteCookie(req, cookieName);
};

export default { set, remove };
