<script setup>
const router = useRouter();
const menuItems = [
	{ name: 'Dashboard', path: '/user', icon: 'dashboard' },
	{ name: 'Subscription', path: '/user/subscription', icon: 'grade' },
	{
		name: 'SEO Tutorial', path: '/user/seoimprove/', icon: 'ads_click', dropdown:
			[
				{ name: 'SEO Practices', path: '/user/seoimprove/seopractices' },
				{ name: 'SEO Guides', path: '/user/seoimprove/seoguides' },
				{ name: 'Website Content', path: '/user/seoimprove/websitecontent' },
				{ name: 'Improving Content', path: '/user/seoimprove/improvingcontent' },
				{ name: 'Rich Results', path: '/user/seoimprove/richresults' },
				{ name: 'User Experience', path: '/user/seoimprove/userexperience' },
				{ name: 'HTML Validators', path: '/user/seoimprove/htmlvalidators' },
				{ name: 'Critical CSS', path: '/user/seoimprove/criticalcss' },
				{ name: 'Coding htaccess', path: '/user/seoimprove/codingHtaccess' },
				{ name: 'Using Lighthouse', path: '/user/seoimprove/lighthouse' },
				{ name: 'Coding Errors', path: '/user/seoimprove/codingerrors' },
				{ name: 'Website Speed', path: '/user/seoimprove/websitespeed' },
				{ name: 'Maintain Rankings', path: '/user/seoimprove/maintainingrankings' },
				{ name: 'Website Laws', path: '/user/seoimprove/websitelaws' },
				{ name: 'Paid Ads', path: '/user/seoimprove/paidads' },
				{ name: 'Search Conferences', path: '/user/seoimprove/searchconferences' },
				{ name: 'SEO Avenues', path: '/user/seoimprove/seoavenues' },
			]
	},
	{ name: 'Page Analysis', path: '/user/pagespeed', icon: 'speed', free: true },
	{ name: 'HTML Tools', path: '/user/htmltools', icon: 'html' },
	{ name: 'CSS Tools', path: '/user/csstools', icon: 'css' },
	{ name: 'JS Tools', path: '/user/jstools', icon: 'javascript' },
	{ name: 'Image Tools', path: '/user/imagetools', icon: 'image' },
	{ name: 'Htaccess Tools', path: '/user/htaccessTools', icon: 'vpn_lock' },
	{ name: 'Text Tools', path: '/user/texttools', icon: 'text_fields', free: true },
	{ name: 'SEO News', path: '/user/seoNews', icon: 'newspaper' },
]

async function logoutRequest() {
	const response = await $fetch("/logoutRequest", {
		method: "POST"
	});
	if (response) {
		router.push("/signin");
	}
}
function dropdown($event) {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
	let target = $event.target;
	if (!!target.classList.contains('main')) {
		let hasChaild = target.closest('.hasChild'),
			wasShow = hasChaild && hasChaild.classList.contains('show') ? true : false;
		let showed = document.querySelector('.hasChild.show')
		showed && showed.classList.remove("show")
		if (!wasShow && hasChaild)
			hasChaild.classList.add("show")
	}
}
onMounted(() => {
	let hasMenu = document.querySelector('.router-link-exact-active');
	if (hasMenu) {
		const active = document.querySelector('.router-link-exact-active').closest('.hasChild');
		if (active)
			active.classList.add("show")
	}
});
function toggleNavbar() {
	const body = document.body;
	const className = 'g-sidenav-pinned';
	if (body.classList.contains(className)) {
		body.classList.remove(className)
	} else {
		body.classList.add(className)
	}
}
</script>

<template>
	<aside
		class="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 bg-gradient-dark small"
		id="sidenav-main">
		<div class="sidebarToggle" @click="toggleNavbar">
			<div class="sidenav-toggler-inner">
				<i class="sidenav-toggler-line"></i>
				<i class="sidenav-toggler-line"></i>
				<i class="sidenav-toggler-line"></i>
			</div>
		</div>
		<div class="sidenav-header">
			<i class="material-icons p-3 cursor-pointer text-white opacity-10 position-absolute end-0 top-0 d-none d-xl-none"
				aria-hidden="true">skip_previous</i>
			<div class="navbar-brand m-0">
				<span class="ms-1 font-weight-bold text-white">OrganicRankings.com</span>
			</div>
		</div>
		<hr class="horizontal light mt-0 mb-2" />
		<div class="collapse navbar-collapse w-auto" id="sidenav-collapse-main">
			<ul class="navbar-nav">
				<li class="nav-item " v-for="menuItem in menuItems" :class="menuItem.dropdown ? 'hasChild' : ''"
					@click="dropdown($event)">
					<NuxtLink :to="menuItem.path" class="nav-link text-white main">
						<i class="material-icons opacity-10">{{ menuItem.icon }}</i> {{ menuItem.name }}
						<span v-if="menuItem.free" class="badge bg-warning">Free</span>
					</NuxtLink>
					<div class="dropdown collapse" v-if="menuItem.dropdown">
						<ul class="nav ">
							<li class="nav-item" v-for="dropdownItem in menuItem.dropdown">
								<NuxtLink :to="dropdownItem.path" class="nav-link text-white">
									<i class="material-icons opacity-10">forward</i> {{ dropdownItem.name }}
								</NuxtLink>
							</li>
						</ul>
					</div>
				</li>

			</ul>
		</div>
		<div class="sidenav-footer position-absolute w-100 bottom-1 navbar-nav">
			<div class="nav-item">
				<a @click="logoutRequest" class="nav-link" type="button"><i class="material-icons opacity-10">logout</i>
					<span class="nav-link-text ms-1">Sign out</span></a>
			</div>
		</div>
	</aside>
</template>

<style scoped>
.nav-item a {
	position: relative;
}

.nav-item .badge {
	padding: 2px 4px 1px;
	border-radius: 3px;
	font-size: 11px;
	position: absolute;
	right: 10px;
	font-weight: 400;
}

.navbar-vertical.navbar-expand-xs {
	overflow: inherit;
}

.sidebarToggle {
	position: absolute;
	right: -35px;
	z-index: 10;
	display: none;
	width: 36px;
	height: 50px;
	top: 0;
	padding: 19px 10px;
}

.sidenav-toggler-inner {
	cursor: pointer;
}


#sidenav-main {
	margin: 0 !important;
	border-radius: 0;
}

@media (max-width: 1199.98px) {
	.sidebarToggle {
		display: block;

	}

	.sidenav {
		transform: translateX(-251px) !important;
	}

	.g-sidenav-pinned .sidenav {
		transform: translateX(0) !important;
	}

	.g-sidenav-pinned .sidenav-toggler-line {
		display: none;
	}

	.g-sidenav-pinned .sidenav-toggler-line:first-child,
	.g-sidenav-pinned .sidenav-toggler-line:last-child {
		width: 100% !important;
		transform: translateX(0) !important;
		display: block;
	}

	.g-sidenav-pinned .sidenav-toggler-line:first-child {
		transform: rotate(45deg) !important;
		top: 7px;
	}

	.g-sidenav-pinned .sidenav-toggler-line:last-child {
		transform: rotate(-45deg) !important;
		top: 2px;
	}

	.g-sidenav-pinned .sidebarToggle {
		width: calc(100vw - 250px);
		left: 250px;
		position: fixed;
		height: 100vh;
	}

	.navbar .sidenav-toggler-inner {
		width: 20px;
		height: 20px;
	}
}

.dropdown {
	height: 0 !important;
	display: block;
	overflow: hidden;
}

.show .dropdown {
	height: max-content !important;
}

.hasChild .nav-link {
	position: relative;
}

.hasChild .main:after {
	content: "\276F";
	right: 10px;
	position: absolute;
	transform: rotate(90deg);
	transition: .3s all;
}

.show .main:after {
	transform: rotate(-90deg);
}

.nav-item .material-icons {
	width: 33px !important;
	text-align: left !important;
}

.navbar-vertical.navbar-expand-xs .navbar-collapse {
	height: calc(100vh - 124px);
}

.sidenav-header {
	height: auto;
}

.sidenav .navbar-brand {
	padding: 15px 20px;
}

.navbar-nav .nav-link {
	padding: 9px 10px !important;
}

.router-link-active {
	background: linear-gradient(195deg, #007c9d 0%, #0088ad 100%);
}

.nav-item .dropdown {
	margin-left: 18px;
	border-left: 2px solid #344767;
}

.dropdown .nav-link {
	margin-left: 0;
}
</style>
