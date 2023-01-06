import { defineEventHandler, readBody, getCookie } from "h3";
import stripe from "../stripe";

export default defineEventHandler(async (req) => {
	let body = await readBody(req);
	let invoice = await stripe.getInvoice(body.invoice);
	if (invoice) {
		let charge: any;
		if (invoice.charge) charge = await stripe.getCharge(invoice.charge);
		let expMonth = charge.payment_method_details.card.exp_month < 10 ? "0" + charge.payment_method_details.card.exp_month : charge.payment_method_details.card.exp_month;
		return {
			amount: charge.amount / 100,
			card: charge.payment_method_details.card.brand,
			currency: charge.currency,
			name: charge.billing_details.name,
			paid: invoice.paid,
			pdf: invoice.invoice_pdf,
			status: invoice.status,
			url: invoice.hosted_invoice_url,
			last4: charge.payment_method_details.card.last4,
			exp: expMonth + "/" + charge.payment_method_details.card.exp_year,
			receipt: charge.receipt_url,
		};
	}
	return { status: false };
});
