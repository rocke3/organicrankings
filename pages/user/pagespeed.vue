<script setup>
definePageMeta({ layout: "user-layout" });
useHead({ title: "Page Speed - Organic Rankings" });


</script>


<template>
  <div>
    <ElementsBsCard formTitle="Page Speed Analyze" titleClass="ps-3">
      <form>
        <div class="input-group mb-3 max-width-500 m-auto">
          <input type="text" class="form-control website" placeholder="Website URL" required>
          <button class="btn btn-primary" type="submit">Analyze</button>
        </div>
      </form>
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link " aria-current="page" href="#">Active</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Link</a>
        </li>
      </ul>
    </ElementsBsCard>
  </div>
</template>
		
		
<style scoped>
.form-control.website {
  height: 40px;
  border: 1px solid #e91e63;
  border-right: 0;
  padding-left: 10px !important;
}
</style>
