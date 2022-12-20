<script setup>
import axios from "axios";
const data = ref({}); //? Store All data for use across all files, This variable will pass to all page & component. You can use this data by adding a props: data
if (process.client) {
	axios.get('/getUser').then(function (res) { data.value.userInfo = res.data; });
	axios.get('/getUserSubscription').then(function (res) { data.value.subscription = res.data; });
}

</script>

<template>
	<div>
		<UserSidebar :data="data" />
		<main class="main-content position-relative max-height-vh-100 h-100">
			<UserNavbar />
			<div class="container-fluid py-4 pageContent">
				<nuxt-child :data="data" />
			</div>
			<UserFooter :data="data" />
		</main>

	</div>
</template>



<style scoped>
main {
	min-height: 100vh;
}

.pageContent {
	min-height: calc(100vh - 116px);
}

@media only screen and (min-width: 1200px) {
	.sidenav.fixed-start+.main-content {
		margin-left: 15.65rem;
	}
}
</style>
