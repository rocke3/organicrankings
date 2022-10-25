const env = useRuntimeConfig();
import { createError, defineEventHandler, getHeader, readRawBody } from "h3";
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
			const session = event.data.object;

			const activated = await db
				.promise()
				.query("UPDATE `subscriptions` SET `sub_subscription` = ?, `sub_active`= 1 WHERE `sub_session` = ?", [session.subscription, session.id])
				.then(([rows, fields]) => {
					return "Activated";
				})
				.catch((error) => {
					return error;
				});

			return activated;
			break;
		case "customer.subscription.updated":
			const subscription = event.data.object;
			return subscription;
			break;
		case "customer.subscription.deleted":
			const subscription2 = event.data.object;
			return subscription2;
			break;

		// ... handle other event types
		default:
			return `Unhandled event type ${event.type}`;
	}
});
