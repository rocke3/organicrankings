import { defineEventHandler, readBody, getCookie } from "h3";
import db from "../connection";
import auth from "../auth";
import cookie from "../cookie";
import stripe from "../stripe";

export default defineEventHandler(async (req) => {
	const body = await readBody(req);
	let verifyed = await auth.verify(getCookie(req, cookie.name.JWT)); //! verify cookie JWT token
	if (verifyed) {
		const user = await getUserInfo(verifyed.user);

		if (body.price_id && user) {
			const price_id = body.price_id;
			const plan_id = body.plan_id;
			const upgrade = body.upgrade;
			let response = { status: false, url: "/user", msg: "" };
			let stripe_id = "",
				active = 1;

			//! If any subscription exist
			if (user.sub_id != null) {
				//! Return if same plan alredy active
				if (plan_id == user.sub_plan && user.sub_active) {
					response.msg = "You are already subscribed to this plan";
					return response;
				}

				//! Return if trying to downgrade plan
				if (plan_id < user.sub_plan && user.sub_active) {
					response.msg = `You alredy have a active plan '${user.plan_name}'`;
					return response;
				}

				//! Return if Free trial already used
				if (price_id == "free" && user.user_free_used > 0) {
					response.msg = "Your Free trial limit over";
					return response;
				}

				//! Remove if have any inactive subscription Or Free subscription
				deleteUserSubscription(user.user_id);
			}

			if (!upgrade) {
				//! If Plan is not free
				if (price_id != "free") {
					const striprInfo = await stripe.checkoutSessions(price_id); //! Genarate Stripe subscription session
					stripe_id = striprInfo.id;
					response.url = striprInfo.url;
					active = 0;
				}

				//! Inseart subscription in database (subscription will active using stripe webhook if plan is not free)
				await db
					.promise()
					.query("INSERT INTO `subscriptions`(`sub_user`, `sub_session`, `sub_plan`, `sub_active`) VALUES (?,?,?,?)", [user.user_id, stripe_id, plan_id, active])
					.then((res) => {
						response.status = true;
					});
			} else {
				if (user.sub_id != null) {
					const striprInfo = await stripe.upgradePlan(user.sub_subscription, price_id); //! Update subscription session
					if (striprInfo) {
						response.status = true;
						response.msg = "Upgrade in progress. Please wait";
						return response;
					}
				}
				response.msg = "Something went wrong. Please refresh the page and try again";
			}

			return response;
		}

		if (body.status) {
			return user;
		}
	}
});

function getUserInfo(userEmail) {
	return db
		.promise()
		.query("SELECT * FROM `users` LEFT JOIN `subscriptions` ON user_id = sub_user LEFT JOIN `subscription_plan` ON plan_id = sub_plan WHERE `user_email` = ?", [userEmail])
		.then(([rows]) => {
			if (rows.length) return rows[0];
			return false;
		});
}

function deleteUserSubscription(user_id) {
	db.promise().query("DELETE FROM subscriptions WHERE `sub_user` = ? AND (`sub_plan` = 0 OR `sub_active` = 0)", [user_id]);
}
