<script setup>
const props = defineProps({ data: Object });

</script>

<template>
  <div class="text-center">

    <div class="m-auto border border-info rounded shadow p-3 my-4" style="max-width: 400px;">
      <h6>
        <slot />
      </h6>
      <NuxtLink to="/user/subscription" class="btn btn-primary mb-2">
        <i class="material-icons opacity-10">mail</i> SIGN UP FOR FREE
      </NuxtLink>
      <p class="m-0">No risk. No credit card required.</p>
    </div>
  </div>
</template>