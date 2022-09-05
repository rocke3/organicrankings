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

// export default defineEventHandler(async (event) => {
// 	var options = JSON.parse(getHeader(event.req, "options"));
// 	const body = await readBody(event);
// 	const result = await minify(body, options);
// 	return result;
// });

// removeAttributeQuotes: true, // Remove quotes around attributes when possible
// continueOnParseError: true,
// collapseInlineTagWhitespace: true, // Remove Inline Tag Whitespace Ex: display:inline; ** Not working
//collapseWhitespace: true, // Minify / Make One line
//conservativeCollapse: true, // Keep Space between each tag (Work for one line / minifid)
//keepClosingSlash: true, // Keep the trailing slash on singleton elements
// preventAttributesEscaping: true, // Keep the trailing slash on singleton elements
// removeEmptyElements: true, // Keep the trailing slash on singleton elements
// removeEmptyAttributes: true, // Remove Empty Attributes. EX: class='' id=""
// removeScriptTypeAttributes: true, // Remove type="text/javascript" from script tags. Other type attribute values are left intact
// removeStyleLinkTypeAttributes: true, // Remove type="text/css" from style and link tags. Other type attribute values are left intact
// sortAttributes: true, // 	Sort attributes by frequency EX: <div a**="" b**="" class="" id="" >
// sortClassName: true, // 	Sort Class Name by frequency EX: class="abc bcd cde"

// var ressss = js_beautify(`var win = navigator.platform.indexOf('Win') > -1;
//     if (win && document.querySelector('#sidenav-scrollbar')) {var options = {damping: '0.5'}
//       Scrollbar.init(document.querySelector('#sidenav-scrollbar'), options);
//     }`,{ indent_size: 2, space_in_empty_paren: true });

// 	return ressss;
