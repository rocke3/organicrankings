import { defineEventHandler, readBody, getCookie } from "h3";
import db from "../connection";
import auth from "../auth";
import cookie from "../cookie";
import stripe from "../stripe";

export default defineEventHandler(async (req) => {
	const body = await readBody(req);
	let response = { status: false, url: "/user/subscription", msg: "Authentication failed. please refresh the page and try again.", code: 101 };
	let verifyed = await auth.verify(getCookie(req, cookie.name.JWT)); //! verify cookie JWT token

	if (!verifyed) return response; //! Return Error if JWT token invalid or expaire

	const user = await getUserInfo(verifyed.email);
	if (!user) return response; //! Return Error if user not found
	const action = body.action ?? false;
	const cancel = body.cancel ?? false;

	if (action == "cancel") {
		const subscription = await stripe.cancelAtPeriodEnd(user.sb_subscriptionId, cancel);
		if (subscription) {
			response.status = true;
			if (cancel) {
				response.msg = "Your subscription will be canceled at end of the subscription period.";
			} else {
				response.msg = "Subscription Reactivated";
			}
			return response;
		}
		response.msg = "Subscription not found Or already canceled";
		return response;
	} else {
		const plan = await getSubscriptionPlans(body.plan);
		if (plan) {
			let stripe_id = "",
				active = 1;

			//! Return if Free trial already used
			if (plan.sp_stripePriceId == "free" && user.u_freeUsed > 0) {
				response.msg = "Your Free trial limit over";
				return response;
			}

			//! If any subscription exist
			if (user.sb_plan != null) {
				//! Return if same plan alredy active
				if (plan.sp_id == user.sb_plan && user.sb_active) {
					response.msg = "You are already subscribed to this plan";
					return response;
				}

				//! Return if trying to downgrade plan
				if (plan.sp_id < user.sb_plan && user.sb_active) {
					response.msg = `You alredy have a active plan '${user.sp_name}'`;
					return response;
				}
				//! Remove if have any inactive subscription Or Free subscription
				deleteUserSubscription(user.u_id);
			}

			if (user.sb_subscriptionId != null && plan.sp_id > user.sb_plan && user.sb_active) {
				//? Upgrade Plan
				const striprInfo = await stripe.upgradePlan(user.sb_subscriptionId, plan.sp_stripePriceId); //! Update subscription session
				if (striprInfo) {
					response.status = true;
					response.msg = "Upgrade in progress. Please wait";
					return response;
				}
			} else {
				//! If Plan is not free
				if (plan.sp_stripePriceId != "free") {
					const striprInfo = await stripe.checkoutSessions(plan.sp_stripePriceId); //! Generate Stripe subscription session
					stripe_id = striprInfo.id;
					response.url = striprInfo.url;
					active = 0;
				}

				//! Inseart subscription in database (subscription will active using stripe webhook if plan is not free)
				await db
					.promise()
					.query("INSERT INTO `subscriptions`(`sb_user`, `sb_session`, `sb_plan`, `sb_active`) VALUES (?,?,?,?)", [user.u_id, stripe_id, plan.sp_id, active])
					.then((res) => {
						if (plan.sp_stripePriceId == "free") {
							db.promise().query("UPDATE `users` SET `u_freeUsed` = 1 WHERE u_id = ?", [user.u_id]);
						}
						response.msg = "Activating subscription. Please wait";
						response.status = true;
					});
			}
		}
	}
	response.code = 202;
	return response;
});

function getUserInfo(userEmail) {
	return db
		.promise()
		.query("SELECT * FROM `users` LEFT JOIN `subscriptions` ON u_id = sb_user LEFT JOIN `subscription_plans` ON sp_id = sb_plan WHERE `u_email` = ?", [userEmail])
		.then(([rows]) => {
			if (rows[0]) return rows[0];
			return false;
		});
}

function deleteUserSubscription(u_id) {
	db.promise().query("DELETE FROM subscriptions WHERE `sb_user` = ? AND (`sb_active` = 0 AND sb_created < (NOW() - INTERVAL 2 MINUTE))", [u_id]);
}

function getSubscriptionPlans(sp_stripePriceId) {
	return db
		.promise()
		.query("SELECT * FROM `subscription_plans` WHERE `sp_stripePriceId` = ?", [sp_stripePriceId])
		.then(([rows]) => {
			if (rows[0]) return rows[0];
			return false;
		});
}
