import db from "../connection";
import _ from "lodash";
import { defineEventHandler, readBody } from "h3";

export default defineEventHandler(async (req) => {
	const body = await readBody(req);
	const domain = body.domain;
	const directory = body.directory;
	const directoryListings = body.directoryListings;
	const errorPages = body.errorPages;
	const upLimit = body.upLimit;

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

	let htaccess = generateHtaccess(domain, directory, directoryListings, errorPages, upLimit, options);
	return htaccess.replace(/[\r\n]{2,}/g, "\n").replace(/\t/g, "");
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

function generateHtaccess(domain, directory, directoryListings, errorPages, upLimit, options) {
	let changeDirectoryPage =
		directory != ""
			? `
			## Change default directory page
		DirectoryIndex ${directory}`
			: "";

	let preventDirectoryListings = directoryListings
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
					Header set Cache-Control "max-age=300"
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

	if (upLimit.limit) {
		uploadLimit += `
		## LIMIT UPLOAD FILE SIZE TO PROTECT AGAINST DOS ATTACK
		LimitRequestBody ${1000000 * upLimit.size} #bytes 
		`;
	}

	return `## URL normalization
	RewriteEngine on 
	RewriteBase /
	RewriteCond %{HTTPS} on
	RewriteCond %{HTTP_HOST} ${domain.subdomain ? "!" : ""}^www.(.*)$ [NC]
	RewriteRule ^(.*)$ ${domain.protocol ? "https" : "http"}://${domain.subdomain ? "www." : ""}${domain.url} [L,R=301]
	RewriteRule ^ ${domain.protocol ? "https" : "http"}://${domain.subdomain ? "www." : ""}%{HTTP_HOST}%{REQUEST_URI} [R=301,L]

	${changeDirectoryPage}

	${preventDirectoryListings}

	${protectFiles}

	${caching}

	${compress}

	${hasErrorPage ? errorPage : ""}

	${uploadLimit}`;
}
