<script setup>
defineProps(['formTitle', 'titleClass'])
</script>
<template>
	<div>
		<div class="card my-4">
			<div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
				<div class="bg-gradient-primary shadow-primary border-radius-lg pt-3 pb-2">
					<h6 class="text-white" :class="titleClass">{{ formTitle }}</h6>
				</div>
			</div>
			<div class="card-body pb-2">
				<slot />
			</div>
		</div>
	</div>
</template>


<style scoped>
.material-icons {
	vertical-align: middle;
	font-size: 18px;
}

.card {
	min-width: 320px;
}
</style>
