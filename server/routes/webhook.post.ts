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
			const status = updated.status == "active" ? 1 : 0;
			const plan = updated.plan.id;
			return await db
				.promise()
				.query("UPDATE `subscriptions` SET `sub_plan` = (SELECT `plan_id` FROM `subscription_plan` WHERE `plan_price_id` = ? LIMIT 1), `sub_active`= ? WHERE `sub_subscription` = ?", [plan, status, updated.id])
				.then(([rows, fields]) => {
					return "Updated";
				})
				.catch((error) => {
					return error;
				});
			break;
		case "customer.subscription.deleted":
			const deleted = event.data.object;
			return await db
				.promise()
				.query("UPDATE `subscriptions` SET `sub_active`= 0 WHERE `sub_subscription` = ?", [deleted.id])
				.then(([rows, fields]) => {
					return "Deactivated";
				})
				.catch((error) => {
					return error;
				});
			break;

		// ... handle other event types
		default:
			return `Unhandled event type ${event.type}`;
	}
});
