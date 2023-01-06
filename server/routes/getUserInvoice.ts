import { defineEventHandler, readBody, getCookie } from "h3";
import stripe from "../stripe";

export default defineEventHandler(async (req) => {
	let body = await readBody(req);

	return await stripe.getInvoice(body.invoice);
});
