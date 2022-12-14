<script setup>
</script>

<template>
	<div>
		<UserSidebar />
		<main class="main-content position-relative max-height-vh-100 h-100">
			<UserNavbar />
			<div class="container-fluid py-4 pageContent">
				<slot />
			</div>
			<UserFooter />
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
