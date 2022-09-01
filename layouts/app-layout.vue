<script setup lang="ts">

</script>

<template>
	<div>
		<AppSidebar/>
		<main class="main-content position-relative max-height-vh-100 h-100">
			<AppNavbar/>
			<div class="container-fluid py-4 pageContent">
				<slot />
			</div>
			<AppFooter/>
		</main>
	</div>
</template>



<style scoped>
main {
	min-height: 100vh;
}
.pageContent {
	min-height: 84vh;
}
@media only screen and (min-width: 1200px) {
	.sidenav.fixed-start + .main-content {
		margin-left: 15.65rem;
	}
}
</style>
