import { defineEventHandler } from "h3";
import cookie from "../cookie";
export default defineEventHandler(async (req) => {
	cookie.remove(req, cookie.name.JWT);
	cookie.remove(req, cookie.name.AGENT);
	return true;
});
