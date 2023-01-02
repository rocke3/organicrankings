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
			const sObject = event.data.object;
			const sb_session = sObject.id;
			await db
				.promise()
				.query("UPDATE `users` SET `u_stripe` = ? WHERE `u_id` = (SELECT `sb_user` FROM `subscriptions` WHERE `sb_session` = ? LIMIT 1)", [sObject.customer, sb_session])
				.then(([rows, fields]) => {
					return "Activated";
				})
				.catch((error) => {
					return error;
				});
			return await db
				.promise()
				.query("UPDATE `subscriptions` SET `sb_subscriptionId` = ?, `sb_active`= 1 WHERE `sb_session` = ?", [sObject.subscription, sb_session])
				.then(([rows, fields]) => {
					return "Activated";
				})
				.catch((error) => {
					return error;
				});
			break;
		case "customer.subscription.updated":
			const object = event.data.object;
			const status = object.status == "active" ? 1 : 0;
			const cancelAtEnd = object.cancel_at_period_end == "active" ? 1 : 0;
			const plan = object.plan.id;
			const subscriptionId = object.id;
			return await db
				.promise()
				.query("UPDATE `subscriptions` SET `sb_plan` = (SELECT `sp_id` FROM `subscription_plans` WHERE `sp_stripePriceId` = ? LIMIT 1), `sb_active`= ?, `sb_cancelAtEnd` = ? WHERE `sb_subscriptionId` = ?", [plan, status, cancelAtEnd, subscriptionId])
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
				.query("UPDATE `subscriptions` SET `sb_active`= 0 WHERE `sb_subscriptionId` = ?", [deleted.id])
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
