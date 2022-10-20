<script setup>
definePageMeta({ layout: "user-layout" });
useHead({ title: "Dashboard - Organic Rankings" });

const color = useColor();
</script>


<template>
	<div>
		{{color}}
		<UserSubscription />
	</div>
</template>
		
		
<style scoped>

</style>
