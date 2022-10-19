import { defineEventHandler, readBody, getCookie } from "h3";
const env = useRuntimeConfig();
import Stripe from "stripe";
import db from "../connection";
import jwt from "jsonwebtoken";
import cookie from "../cookie";

const stripe = new Stripe(env.stripeSk, {});
export default defineEventHandler(async (req) => {
	const body = await readBody(req);
	let data = "";
	if (body.price_id && body.plan_id) {
		data = await stripe.checkout.sessions
			.create({
				success_url: "http://localhost:3000/user",
				cancel_url: "http://localhost:3000/user",
				line_items: [{ price: body.price_id, quantity: 1 }],
				mode: "subscription",
			})
			.then(
				async function (result) {
					let cookieJwt = getCookie(req, cookie.name.JWT);
					let verifyed = jwt.verify(cookieJwt, env.jwtSecret, async function (err, decoded) {
						if (!err) {
							let userEmail = decoded.user;
							let insearted = await db
								.promise()
								.query("INSERT INTO `subscriptions`(`sub_user`, `sub_stripe_id`, `sub_plan`) VALUES ((SELECT user_id FROM `users` WHERE `user_email` = ?),?,?)", [userEmail, result.id, body.plan_id])
								.then(([ResultSetHeader]) => {
									if (ResultSetHeader.affectedRows > 0) {
										return true;
									}
								})
								.catch((error) => {
									return false;
								});

							if (insearted) return true;
							return false;
						} else {
							return false;
						}
					});

					if (verifyed) return result.url;
					return "false";
				},
				function (err) {
					return "false";
				}
			);
	} else {
		data = "false";
	}

	return data;
});
