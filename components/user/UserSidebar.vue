<script setup>
const router = useRouter();
function signout() {
	const cookieJwt = useCookie("org_user");
	const cookieAgent = useCookie("org_log");
	cookieJwt.value = '';
	cookieAgent.value = '';
	router.push("/signin");
}

const menuItems = [
	{ name: 'Dashboard', path: '/user', icon: 'dashboard' },
	{ name: 'HTML Tools', path: '/user/htmltools', icon: 'html' },
	{ name: 'CSS Tools', path: '/user/csstools', icon: 'css' },
	{ name: 'JS Tools', path: '/user/jstools', icon: 'javascript' },
	{ name: 'Image Tools', path: '/user/imagetools', icon: 'image' },
	{ name: 'Text Tools', path: '/user/texttools', icon: 'text_fields' },
]

async function logoutRequest() {
	const response = await $fetch("/logoutRequest", {
		method: "POST"
	});
	if (response) {
		router.push("/signin");
	}
}
</script>

<template>
	<aside
		class="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 bg-gradient-dark small"
		id="sidenav-main">
		<div class="sidenav-header">
			<i class="material-icons p-3 cursor-pointer text-white opacity-10 position-absolute end-0 top-0 d-none d-xl-none"
				aria-hidden="true">skip_previous</i>
			<div class="navbar-brand m-0">
				<span class="ms-1 font-weight-bold text-white">Organic Rankings</span>
			</div>
		</div>
		<hr class="horizontal light mt-0 mb-2" />
		<div class="collapse navbar-collapse w-auto" id="sidenav-collapse-main">
			<ul class="navbar-nav">
				<li class="nav-item" v-for="menuItem in menuItems">
					<NuxtLink :to="menuItem.path" class="nav-link text-white">
						<i class="material-icons opacity-10">{{ menuItem.icon }}</i> {{ menuItem.name }}
					</NuxtLink>
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
#sidenav-main {
	margin: 0 !important;
	border-radius: 0;
	/* background-image: url("../../assets/images/sidebarbg.jpg");
	background-size: cover; */
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
	background: linear-gradient(195deg, #EC407A 0%, #D81B60 100%);
}
</style>
