import { defineEventHandler, getHeader, readBody } from "h3";
import * as HTMLMinifier from "html-minifier";
const minify = HTMLMinifier.minify;
export default defineEventHandler(async (event) => {
	var options = JSON.parse(getHeader(event.req, "options"));
	const body = await readBody(event);
	const result = await minify(body, options);
	return result;
	return result;
});

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
