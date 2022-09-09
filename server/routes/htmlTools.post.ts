import { defineEventHandler, getHeader, readBody } from "h3";
import * as HTMLMinifier from "html-minifier";
const minify = HTMLMinifier.minify;

import js_beautify from "js-beautify";

export default defineEventHandler(async (event) => {
	var options = JSON.parse(getHeader(event.req, "options"));
	var output = getHeader(event.req, "output");
	const body = await readBody(event);
	var result = await minify(body, options);
	if (output == "beautify") {
		result = js_beautify.html(result, { indent_size: 2, space_in_empty_paren: true });
	}

	return result;
});