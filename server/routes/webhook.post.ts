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
				.query("UPDATE `subscriptions` SET `sub_subscription` = ?, `sub_active`= 1 WHERE `sub_session` = ?", [payment.subscription, payment.id])
				.then(([rows, fields]) => {
					return "Activated";
				})
				.catch((error) => {
					return error;
				});
			break;
		case "customer.subscription.updated":
			const updated = event.data.object;
			const sub_end = formatTimestamp(updated.current_period_end);
			return await db
				.promise()
				.query("UPDATE `subscriptions` SET `sub_end`= ? WHERE `sub_subscription` = ?", [sub_end, updated.id])
				.then(([rows, fields]) => {
					return "Updated";
				})
				.catch((error) => {
					return error;
				});
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

function formatTimestamp(time: number) {
	var dateTime = new Date(time * 1000).toISOString().split("T");
	return dateTime[0] + " " + dateTime[1].split(".")[0];
}
