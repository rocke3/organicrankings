<script setup>
definePageMeta({ layout: "user-layout" });
useHead({ title: "SEO - Organic Rankings" });
onMounted(() => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
</script>
 
<template>
  <div>
    <div class="card">
      <div class="card-header pb-0">
        <h5 class="mb-0">Lighthouse Audit</h5>
        <p class="mb-0">Learn how you can improve your website's usability and speed by updating your code.</p>
        <hr />
      </div>
      <div class="card-body pb-2">
        <div class="row">
          <div class="col-sm-4 col-md-3 text-center">
            <img class="img-fluid mb-3" src="https://www.organicrankings.com/assets/lighthouseaudits.jpg"
              alt="Lighthouse Improvements" />
          </div>
          <div class="col-sm-8 col-md-9">
            <h6>Understanding the different Lighthouse Audits</h6>
            <p>You can better understand the coding changes needed for your website below is what you would need to
              update to improve your website's speed, user experience and overall rankings for Lighthouse.</p>

          </div>
        </div>
        <div class="mt-3 px-xl-5">

        </div>
        <div class="my-4">
          <div class="border rounded shadow p-3 text-primary text-bold text-center"
            style="max-width: 700px;margin: auto;">
            <h6 class="text-bold">
              The above information is a brief explanation of this technique. To learn more about
              how we can help your company improve its rankings in the SERPs, contact our team below.
            </h6>
            <div class="mt-3">
              <a class="btn btn-primary me-3" href="">Get Help</a>
              <a class="btn btn-primary d-inline-block" href="">hire an expert</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
    
    
<style scoped>
.list-inline li {
  width: 25%;
  min-width: 220px;
}

.htmlCode {
  color: #e06150;
}

.htmlCode:before {
  content: "<";
}

.htmlCode:after {
  content: ">";
}
</style>


