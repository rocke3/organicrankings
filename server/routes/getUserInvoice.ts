import { defineEventHandler, readBody, getCookie } from "h3";
import stripe from "../stripe";

export default defineEventHandler(async (req) => {
	let body = await readBody(req);
	let invoice = await stripe.getInvoice(body.invoice);
	let paymentIntent: any;
	if (invoice.payment_intent) paymentIntent = await stripe.getPaymentIntent(invoice.payment_intent);
	return {
		amount: paymentIntent.amount / 100,
		url: invoice.hosted_invoice_url,
		pdf: invoice.invoice_pdf,
		paid: invoice.paid,
		status: invoice.status,
	};
});
