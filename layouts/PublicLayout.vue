<script setup>
definePageMeta({
	middleware: 'UserMiddleware'
})

</script>
<template>
	<div>
		<PublicNavbar v-once />
		<main class="main-content mt-0">
			<div class="page-header align-items-start min-vh-100" style="background-image: url('/assets/images/org-bg.jpg')">
				<span class="mask bg-gradient-dark opacity-6"></span>
				<div class="container my-auto">
					<div class="row">
						<div class="col-lg-4 col-md-8 col-12 mx-auto">
							<slot />
						</div>
					</div>
				</div>
			</div>
		</main>
		<PublicFooter v-once />
	</div>
</template>

<style scoped>
@media only screen and (min-width: 500px) {
	.card {
		min-width: 350px;
		max-width: 380px;
		margin: auto;
	}
}
</style>
