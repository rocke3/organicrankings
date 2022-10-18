import { defineEventHandler, readBody } from "h3";
const env = useRuntimeConfig();
import Stripe from "stripe";

const stripe = new Stripe(env.stripeSk, {});
export default defineEventHandler(async (req) => {
	const body = await readBody(req);
	const data = await stripe.checkout.sessions
		.create({
			success_url: "http://localhost:3000/user",
			cancel_url: "http://localhost:3000/user",
			line_items: [{ price: body.price, quantity: 1 }],
			mode: "subscription",
		})
		.then(
			function (result) {
				return result.url;
			},
			function (err) {
				return false;
			}
		);

	return data;
});
