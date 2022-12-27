<script setup>
const showModal = ref(false)
const copyright = new Date().getFullYear();
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
				<div class="col-lg-6 text-end">
					<ul class=" list-inline">
						<li class="list-inline-item">
							<a href="https://www.organicrankings.com/about.php">About Us</a>
						</li>
						<li class="list-inline-item">
							<a class="ms-1 cursor-pointer" @click="showModal = true">Contact Us</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<ElementsContactUsModal v-model:showModal="showModal" />
	</footer>
</template>
