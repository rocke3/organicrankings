import { defineEventHandler, getHeader, readBody } from "h3";
import * as HTMLMinifier from "html-minifier";
import js_beautify from "js-beautify";
import UglifyJS from "uglify-js";
const minify = HTMLMinifier.minify;

export default defineEventHandler(async (event) => {
	var output = getHeader(event.req, "output");
	var indent = getHeader(event.req, "indent");
	const body = await readBody(event);
	if (output == "beautify") {
		var result = js_beautify(body, { indent_size: indent });
	} else {
		var result = await UglifyJS.minify(body, { annotations: false });
		result = result.code;
	}

	return result;
});
