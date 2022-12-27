import { defineEventHandler } from "h3";
import cookie from "../cookie";
export default defineEventHandler(async (req) => {
	cookie.removeAll(req);
	return true;
});
