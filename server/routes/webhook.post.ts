const env = useRuntimeConfig();
import { defineEventHandler, getHeader, readRawBody } from "h3";
import db from "../connection";
import Stripe from "stripe";
const stripe = new Stripe(env.stripeSk, { apiVersion: "2022-08-01" });

export default defineEventHandler(async (req) => {
	const body = await readRawBody(req);
	const sig = getHeader(req, "stripe-signature");

	let event;

	try {
		event = stripe.webhooks.constructEvent(body, sig, env.stripeSs);
	} catch (err) {
		return `Webhook Error: ${err.message}`;
	}

	// Handle the event
	switch (event.type) {
		case "checkout.session.completed":
			const payment = event.data.object;
			return await db
				.promise()
				.query("UPDATE `subscriptions` SET `sub_subscription` = ?, `sub_active`= 1, `sub_end` = ? WHERE `sub_session` = ?", [payment.subscription, payment.id, payment.id])
				.then(([rows, fields]) => {
					return "Activated";
				})
				.catch((error) => {
					return error;
				});
			break;
		case "customer.subscription.updated":
			const updated = event.data.object;
			return await db
				.promise()
				.query("UPDATE `subscriptions` SET `sub_end`= ? WHERE `sub_subscription` = ?", [updated.current_period_end, updated.id])
				.then(([rows, fields]) => {
					return "Activated";
				})
				.catch((error) => {
					return error;
				});
			return updated;
			break;
		case "customer.subscription.deleted":
			const deleted = event.data.object;
			return deleted;
			break;

		// ... handle other event types
		default:
			return `Unhandled event type ${event.type}`;
	}
});
