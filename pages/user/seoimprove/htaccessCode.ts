const htaccessCode = (protocol: any, subdomain: any, url: string, cache: number, duration: string) => {
	protocol = protocol ? "https" : "http";
	subdomain = subdomain ? "www." : "";
	duration = cache > 1 ? duration + "s" : duration;
	return `<IfModule mod_rewrite.c>
    Options -Indexes
    RewriteEngine On
    RewriteBase /
    RewriteRule ^index.php$ ${protocol}://${subdomain}${url}/ [L,R=301]
    RewriteEngine On
    RewriteCond %{HTTP_HOST} !^www\. [NC]
    RewriteRule ^ %{REQUEST_SCHEME}://www.%{HTTP_HOST}%{REQUEST_URI} [R=301,L]
  </IfModule>

  <If "%{HTTP_USER_AGENT} !~ /(iPhone; CPU iPhone OS 1[0-3]|iPad; CPU OS 1[0-2]|iPod touch; CPU iPhone OS 1[0-3]|Macintosh; Intel Mac OS X.*Version\x2F1[0-3].*Safari|Macintosh;.*Mac OS X 10_14.* AppleWebKit.*Version\x2F1[0-3].*Safari)/i">
    Header edit Set-Cookie ^(.*)$ $1;SameSite=None;Secure
  </If>

  AddType application/vnd.ms-fontobject .eot
  AddType application/x-font-ttf .ttf
  AddType application/x-font-opentype .otf
  AddType application/x-font-woff .woff
  AddType image/svg+xml .svg

  <ifModule mod_expires.c>
    ExpiresActive On
    ExpiresByType image/jpg "access plus ${cache} ${duration}"
    ExpiresByType image/jpeg "access plus ${cache} ${duration}"
    ExpiresByType image/gif "access plus ${cache} ${duration}"
    ExpiresByType image/png "access plus ${cache} ${duration}"
    ExpiresByType image/webp "access plus ${cache} ${duration}"
    ExpiresByType text/css "access plus ${cache} ${duration}"
    ExpiresByType application/pdf "access plus ${cache} ${duration}"
    ExpiresByType text/x-javascript "access ${cache} ${duration}"
    ExpiresByType application/x-shockwave-flash "access plus ${cache} ${duration}"
    ExpiresByType image/x-icon "access plus ${cache} ${duration}"
    ExpiresByType application/vnd.ms-fontobject "access plus ${cache} ${duration}"
    ExpiresByType application/x-font-ttf "access plus ${cache} ${duration}"
    ExpiresByType application/x-font-opentype "access plus ${cache} ${duration}"
    ExpiresByType application/x-font-woff "access plus ${cache} ${duration}"
    ExpiresByType image/svg+xml "access plus ${cache} ${duration}"
  </ifModule>

  <filesMatch ".(ico|jpg|jpeg|png|gif|swf|ico|ttf|otf|eot|svg|woff|woff2)$">
    Header set Cache-Control "max-age=16934400, public"
  </filesMatch>

  <filesMatch ".(css|js)$">
    Header set Cache-Control "max-age=16934400, public"
  </filesMatch>

  <filesMatch ".(HTML|php)$">
    Header set Cache-Control "max-age=3600, public"
  </filesMatch>

  <ifModule mod_headers.c>
    Header unset ETag
  </ifModule>
  FileETag None

  <ifModule mod_headers.c>
    Header unset Last-Modified
  </ifModule>

  <IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/HTML
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE text/javascript
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE image/x-icon
    AddOutputFilterByType DEFLATE image/svg+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xHTML+xml
    AddOutputFilterByType DEFLATE application/x-font
    AddOutputFilterByType DEFLATE application/x-font-truetype
    AddOutputFilterByType DEFLATE application/x-font-ttf
    AddOutputFilterByType DEFLATE application/x-font-otf
    AddOutputFilterByType DEFLATE application/x-font-opentype
    AddOutputFilterByType DEFLATE application/vnd.ms-fontobject
    AddOutputFilterByType DEFLATE font/ttf
    AddOutputFilterByType DEFLATE font/otf
    AddOutputFilterByType DEFLATE font/opentype
    BrowserMatch ^Mozilla/4 gzip-only-text/HTML
    BrowserMatch ^Mozilla/4\.0[678] no-gzip
    BrowserMatch \bMSIE !no-gzip !gzip-only-text/HTML
  </IfModule>

  <files *.HTML>
    SetOutputFilter DEFLATE
  </files>
  <files *.php>
    SetOutputFilter DEFLATE
  </files>
  <files *.js>
    SetOutputFilter DEFLATE
  </files>

  <IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteCond %{HTTP_ACCEPT} image/webp
    RewriteCond %{DOCUMENT_ROOT}/$1.webp -f
    RewriteRule (.+)\.(jpe?g|png|gif)$ $1.webp [T=image/webp,E=REQUEST_image]
  </IfModule>

  <IfModule mod_headers.c>
    Header append Vary Accept env=REQUEST_image
  </IfModule>

  <IfModule mod_mime.c>
    AddType image/webp .webp
  </IfModule>`;
};

export default htaccessCode;
