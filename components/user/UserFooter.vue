<script setup>
const showModal = ref(false)
const copyright = new Date().getFullYear();
const props = defineProps({
	data: {
		type: Object,
		required: true,
	}
});
</script>
<template>
	<footer class="footer py-2">

		<div class="container-fluid">
			<div class="row align-items-center justify-content-lg-between">
				<div class="col-lg-6 mb-lg-0 mb-4">
					<div class="copyright text-center text-sm text-muted text-lg-start">
						©{{ copyright }} - OrganicRankings.com
					</div>
				</div>
				<div class="col-lg-6">
					<ul class="nav nav-footer justify-content-center justify-content-lg-end">
						<li class="nav-item">
							<a href="https://www.organicrankings.com/about.php" class="nav-link text-muted">About Us</a>
						</li>
						<li class="nav-item">
							<a href="#" class="nav-link pe-0 text-muted" @click="showModal = true">Contact Us</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<ElementsContactUsModal :data="data" v-model:showModal="showModal" />
	</footer>
</template>
