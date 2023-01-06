const env = useRuntimeConfig();
import { maxHeaderSize } from "http";
import Stripe from "stripe";
const stripe = new Stripe(env.stripeSk, { apiVersion: "2022-08-01" });

const checkoutSessions = (price_id: string) => {
	return stripe.checkout.sessions
		.create({
			success_url: "https://app.organicrankings.com/stripeRedirect",
			cancel_url: "https://app.organicrankings.com/stripeRedirect",
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

const upgradePlan = async (subscriptionId: string, oldPrice: string, newPrice: string) => {
	const subscription = await stripe.subscriptions.retrieve(subscriptionId);
	return stripe.subscriptions
		.update(subscriptionId, {
			cancel_at_period_end: false,
			proration_behavior: "always_invoice",
			items: [
				{
					id: subscription.items.data[0].id,
					price: oldPrice,
					deleted: true,
				},
				{
					price: newPrice,
				},
			],
		})
		.then(
			function (result) {
				return true;
			},
			function (err) {
				console.log(err);

				return false;
			}
		);
};

const cancelAtPeriodEnd = async (subscriptionId: string, action: boolean) => {
	return stripe.subscriptions
		.update(subscriptionId, {
			cancel_at_period_end: action,
		})
		.then(
			function (result) {
				return true;
			},
			function (err) {
				return false;
			}
		);
};

const getInvoice = async (invoiceID: string) => {
	return stripe.invoices.retrieve(invoiceID);
};

const getCharge = async (charge: string) => {
	return await stripe.charges.retrieve(charge);
};

export default {
	checkoutSessions: checkoutSessions,
	upgradePlan: upgradePlan,
	cancelAtPeriodEnd: cancelAtPeriodEnd,
	getInvoice: getInvoice,
	getCharge: getCharge,
};
