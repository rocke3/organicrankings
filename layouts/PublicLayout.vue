<script setup>
useHead({
	link: [{ body: true, rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Rubik+Iso&display=swap" }],
});
</script>
<template>
	<div>
		<PublicNavbar v-once />
		<main class="main-content mt-0">
			<div class="page-header align-items-start min-vh-100" style="background-image: url('/assets/images/org-bg.jpg')">
				<span class="mask bg-gradient-dark opacity-6"></span>
				<div class="container my-auto">
					<div class="row">
						<div class="col-12 mx-auto">
							<slot />
						</div>
					</div>
				</div>
			</div>
		</main>
		<PublicFooter v-once />
	</div>
</template>

<style>

</style>
