<script setup>
definePageMeta({ layout: "user-layout" });
useHead({ title: "Subscription - Organic Rankings" });
const props = defineProps({ data: Object });
</script>


<template>
  <div>
    <UserSubscription :data="data" />
  </div>
</template>
		
		
<style scoped>

</style>
