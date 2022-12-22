import db from "../connection";
import _ from "lodash";
import { defineEventHandler, readBody } from "h3";

export default defineEventHandler(async (req) => {
	const body = await readBody(req);
	const domain = body.domain;
	const errorPages = body.errorPages;
	const otherSettings = body.otherSettings;
	const cacheDuration = body.cacheDuration;

	let options = {
		cache: {
			code: [],
			font: [],
			media: [],
		},
		compress: [],
		prevent: [],
	};

	_.forIn(body.cache, function (objec, key) {
		_.forIn(objec, function (value, a) {
			if (value.value) options.cache[key].push(value.name);
		});
	});

	_.forIn(body.compress, function (value, key) {
		if (value.value) options.compress.push(value.name);
	});

	_.forIn(body.prevent, function (value, key) {
		if (value.value) options.prevent.push(value.name);
	});

	let htaccess = generateHtaccess(domain, errorPages, otherSettings, cacheDuration, options);
	return htaccess.replace(/\t/g, "");
});

function insartIntoDatabase(body) {
	let user = body.user ?? 0;
	let userInfo = user ? "" : JSON.stringify({ name: body.name, email: body.email, phone: body.phone });
	return db
		.promise()
		.query("INSERT INTO `subscriptions`(`fs_user`, `fs_userInfo`, `fs_msg`) VALUES (?,?,?)", [user, userInfo, body.message])
		.then(([rows]) => {
			if (rows) return true;
			return false;
		});
}

function generateHtaccess(domain, errorPages, otherSettings, cacheDuration, options) {
	let changeDirectoryPage =
		otherSettings.defaultPage != ""
			? `
		
			## Change default directory page
			DirectoryIndex ${otherSettings.defaultPage}`
			: "";

	let preventDirectoryListings = otherSettings.directoryListings
		? `

		## Prevent directory listings
		Options All -Indexes`
		: "";

	let protectFiles = _.isEmpty(options.prevent)
		? ""
		: `

		## PROTECT FILES
		<FilesMatch "\.(${_.join(options.prevent, "|")})$">
		Order Allow,Deny
		Deny from all
		</FilesMatch>`;

	let caching =
		_.isEmpty(options.cache.code) || _.isEmpty(options.cache.font) || _.isEmpty(options.cache.media)
			? ""
			: `

			## Add Caching.`;

	_.forIn(options.cache, function (value, key) {
		if (!_.isEmpty(value)) {
			caching += `
			<FilesMatch ".(${_.join(value, "|")})$">
				Header set Cache-Control "max-age=${cacheDuration[key].duration * cacheDuration[key].unit}"
			</FilesMatch>`;
		}
	});

	let compress = _.isEmpty(options.compress)
		? ""
		: `

			## Compress `;
	_.forIn(options.compress, function (value, key) {
		if (value == "text") {
			compress += `
			AddOutputFilterByType DEFLATE text/plain`;
		} else if (value == "html") {
			compress += `
			AddOutputFilterByType DEFLATE text/html`;
		} else if (value == "css") {
			compress += `
			AddOutputFilterByType DEFLATE text/css`;
		} else if (value == "javascript") {
			compress += `
			AddOutputFilterByType DEFLATE application/javascript
			AddOutputFilterByType DEFLATE application/x-javascript`;
		} else if (value == "xml") {
			compress += `
			AddOutputFilterByType DEFLATE text/xml
			AddOutputFilterByType DEFLATE application/xml
			AddOutputFilterByType DEFLATE application/xhtml+xml
			AddOutputFilterByType DEFLATE application/rss+xml`;
		}
	});
	let hasErrorPage = false;
	let errorPage = `

	## Custom error pages`;
	_.forIn(errorPages, function (value, key) {
		if (value) {
			hasErrorPage = true;
			let page = key.replace(/pg/g, "");
			errorPage += `
			ErrorDocument ${page} ${value}`;
		}
	});

	let uploadLimit = "";

	if (otherSettings.upLimit) {
		uploadLimit += `

		## LIMIT UPLOAD FILE SIZE TO PROTECT AGAINST DOS ATTACK
		LimitRequestBody ${1000000 * otherSettings.upSize} #bytes 
		`;
	}

	let protocol = domain.protocol ? "https" : "http";

	return `## URL normalization
	RewriteEngine on 
	RewriteCond %{HTTPS} ${domain.protocol ? "on" : "off"}
	RewriteCond %{HTTP_HOST} ${domain.subdomain ? "!^www\\." : "^www\\.(.*)$"} [NC]
	RewriteRule .* ${protocol}://${domain.subdomain ? "www." : ""}${domain.url} [R=301,L] ${changeDirectoryPage}${preventDirectoryListings}${protectFiles}${caching}${compress}${hasErrorPage ? errorPage : ""}${uploadLimit}`;
}
