import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	app: {
		head: {
			meta: [{ name: "viewport", content: "width=device-width, initial-scale=1, shrink-to-fit=no" }],
			link: [{ rel: "stylesheet", href: "/assets/css/main.css" }],
			noscript: [{ children: "Javascript is required" }],
		},
	},
	runtimeConfig: {
		dbHost: process.env.dbHost,
		dbUser: process.env.dbUser,
		dbDb: process.env.dbDb,
		dbPass: process.env.dbPass,
		jwtSecret: process.env.jwtSecret,
		agentSecret: process.env.agentSecret,
		stripePk: process.env.stripePk,
		stripeSk: process.env.stripeSk,
	},
});
