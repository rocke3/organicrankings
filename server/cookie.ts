import { setCookie, deleteCookie, getHeader } from "h3";
const env = useRuntimeConfig();

enum cookieName {
	JWT = "org_session",
	User = "org_user",
}

const agent = (req) => {
	return getHeader(req, "user-agent").replace(/\s/g, "").toLowerCase() + env.agentSecret;
};

const set = (req, name: cookieName, value: string) => {
	setCookie(req, name, value, { maxAge: 3600 * 4, secure: true, sameSite: true });
};

const remove = (req, name: cookieName) => {
	deleteCookie(req, name);
};

const removeAll = (req) => {
	deleteCookie(req, cookieName.JWT);
	deleteCookie(req, cookieName.User);
};

const cookie = {
	agent: agent,
	set: set,
	remove: remove,
	removeAll: removeAll,
	name: cookieName,
};

export default cookie;
