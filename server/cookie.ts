import { setCookie, deleteCookie, getHeader } from "h3";
const env = useRuntimeConfig();

enum cookieName {
	JWT = "org_user",
	AGENT = "org_log",
}

const agent = (req) => {
	return getHeader(req, "user-agent").replace(/\s/g, "").toLowerCase() + env.agentSecret;
};

const set = (req, name: cookieName, value: string) => {
	setCookie(req, name, value, { maxAge: 3600 * 4, httpOnly: true, sameSite: true });
};

const remove = (req, name: cookieName) => {
	deleteCookie(req, name);
};

const cookie = {
	agent: agent,
	set: set,
	remove: remove,
	name: cookieName,
};

export default cookie;
