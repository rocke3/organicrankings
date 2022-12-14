<script setup>
const showModal = ref(false)
const copyright = new Date().getFullYear();
</script>
<template>
	<footer class="footer position-absolute py-2 w-100">
		<div class="container">
			<div class="row align-items-center justify-content-lg-between">
				<div class="col-12 col-md-6 my-auto">
					<div class="copyright text-center text-sm text-white text-lg-start sm-mb-2">
						©{{ copyright }} - OrganicRankings.com
					</div>
				</div>
				<div class="col-12 col-md-6">
					<ul class="nav nav-footer justify-content-center justify-content-lg-end">
						<li class="nav-item">
							<a href="https://www.organicrankings.com/" class="nav-link text-white">Home</a>
						</li>
						<li class="nav-item">
							<a href="https://www.organicrankings.com/about.php" class="nav-link text-white">About Us</a>
						</li>
						<li class="nav-item">
							<a href="#" class="nav-link pe-0 text-white" @click="showModal = true">Contact us</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<ElementsContactUsModal v-model:showModal="showModal" />
	</footer>
</template>

<style scoped>
.footer {
	bottom: 0;
}

.footer .nav-link {
	padding: 5px 15px !important;
	transition: .3s all;
	border-radius: 5px;
}

.nav-link:hover {
	background: rgba(255, 255, 255, 0.7);
	color: #007c9d !important;
}
</style>
 