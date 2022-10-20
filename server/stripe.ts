const env = useRuntimeConfig();
import Stripe from "stripe";
const stripe = new Stripe(env.stripeSk, { apiVersion: "2022-08-01" });

const checkoutSessions = (price_id: string) => {
	return stripe.checkout.sessions
		.create({
			success_url: "http://localhost:3000/user",
			cancel_url: "http://localhost:3000/user",
			line_items: [{ price: price_id, quantity: 1 }],
			mode: "subscription",
		})
		.then(
			async function (result) {
				return { status: true, id: result.id, url: result.url };
			},
			function (err) {
				return { status: false, id: "", url: err };
			}
		);
};

export default {
	checkoutSessions: checkoutSessions,
};
