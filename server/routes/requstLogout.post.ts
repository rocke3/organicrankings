import cookie from "../cookie";
export default defineEventHandler(async (req) => {
	cookie.remove(req, "user");
	cookie.remove(req, "log");
	return true;
});
