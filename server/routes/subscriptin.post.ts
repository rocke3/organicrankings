import { defineEventHandler, readBody, getCookie } from "h3";
import db from "../connection";
import auth from "../auth";
import cookie from "../cookie";
import stripe from "../stripe";

export default defineEventHandler(async (req) => {
	const body = await readBody(req);

	let verifyed = await auth.verify(getCookie(req, cookie.name.JWT)); //! verify cookie JWT token
	if (verifyed) {
		const user = await getUserInfo(verifyed.email);
		if (body.price && user) {
			const price = body.price;
			const plan = body.plan;
			const upgrade = body.upgrade ?? 0;
			let response = { status: false, url: "/user", msg: "" };
			let stripe_id = "",
				active = 1;

			//! If any subscription exist
			if (user.u_id != null) {
				//! Return if same plan alredy active
				if (plan == user.sb_plan && user.sb_active) {
					response.msg = "You are already subscribed to this plan";
					return response;
				}

				//! Return if trying to downgrade plan
				if (plan < user.sb_plan && user.sb_active) {
					response.msg = `You alredy have a active plan '${user.plan_name}'`;
					return response;
				}
				//! Return if Free trial already used
				if (price == "free" && user.u_freeUsed > 0) {
					response.msg = "Your Free trial limit over";
					return response;
				}

				//! Remove if have any inactive subscription Or Free subscription
				deleteUserSubscription(user.u_id);
			}

			if (!upgrade) {
				//! If Plan is not free
				if (price != "free") {
					const striprInfo = await stripe.checkoutSessions(price); //! Generate Stripe subscription session
					stripe_id = striprInfo.id;
					response.url = striprInfo.url;
					active = 0;
				}

				//! Inseart subscription in database (subscription will active using stripe webhook if plan is not free)
				await db
					.promise()
					.query("INSERT INTO `subscriptions`(`sb_user`, `sb_session`, `sb_plan`, `sb_active`) VALUES (?,?,?,?)", [user.u_id, stripe_id, plan, active])
					.then((res) => {
						if (price == "free") {
							db.promise().query("UPDATE `users` SET `u_freeUsed` = 1 WHERE u_id = ?", [user.u_id]);
						}
						response.status = true;
					});
			} else {
				console.log(user);

				if (user.sb_id != null && user.sb_subscriptionId != null) {
					const striprInfo = await stripe.upgradePlan(user.sb_subscriptionId, price); //! Update subscription session
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
		.query("SELECT * FROM `users` LEFT JOIN `subscriptions` ON u_id = sb_user LEFT JOIN `subscription_plans` ON sp_id = sb_plan WHERE `u_email` = ?", [userEmail])
		.then(([rows]) => {
			if (rows.length) return rows[0];
			return false;
		});
}

function deleteUserSubscription(u_id) {
	db.promise().query("DELETE FROM subscriptions WHERE `sb_user` = ? AND (`sb_plan` = 0 OR `sb_active` = 0)", [u_id]);
}
