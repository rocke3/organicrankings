import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	app: {
		head: {
			meta: [{ name: "viewport", content: "width=device-width, initial-scale=1, shrink-to-fit=no" }],
			script: [
				// <script src="https://myawesome-lib.js"></script>
				//{ src: 'https://awesome-lib.js' }
			],
			link: [
				// <link rel="stylesheet" href="https://myawesome-lib.css">
				{ rel: "stylesheet", href: "/assets/css/main.css" },
			],
			// please note that this is an area that is likely to change
			style: [
				// <style type="text/css">:root { color: red }</style>
				{ children: ":root { color: red }", type: "text/css" },
			],
			noscript: [
				// <noscript>Javascript is required</noscript>
				{ children: "Javascript is required" },
			],
		},
	},
});
