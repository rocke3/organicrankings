import { defineEventHandler, readBody, getCookie } from "h3";
import stripe from "../stripe";

export default defineEventHandler(async (req) => {
	let body = await readBody(req);
	let invoice = await stripe.getInvoice(body.invoice);
	let paymentIntent: any;
	if (invoice.payment_intent) paymentIntent = await stripe.getPaymentIntent(invoice.payment_intent);
	return { invoice: invoice, paymentIntent: paymentIntent };
});
