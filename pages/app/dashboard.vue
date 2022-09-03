<script setup lang="ts">
definePageMeta({ layout: "app-layout" });
useHead({ title: "Dashboard - Organic Rankings" });
</script>
  
<template>
  <div>
    <div class="row">
      <div class="col-lg-7 position-relative z-index-2">
        <div class="row">
          <div class="col-lg-5 col-sm-5">
            <div class="card  mb-2">
              <div class="card-header p-3 pt-2">
                <div
                  class="icon icon-lg icon-shape bg-gradient-dark shadow-dark shadow text-center border-radius-xl mt-n4 position-absolute">
                  <i class="material-icons opacity-10">weekend</i>
                </div>
                <div class="text-end pt-1">
                  <p class="text-sm mb-0 text-capitalize">Bookings</p>
                  <h4 class="mb-0">281</h4>
                </div>
              </div>
              <hr class="dark horizontal my-0">
              <div class="card-footer p-3">
                <p class="mb-0">
                  <span class="text-success text-sm font-weight-bolder">+55% </span>than last week
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-5 col-sm-5 mt-sm-0 mt-4">
            <div class="card  mb-2">
              <div class="card-header p-3 pt-2 bg-transparent">
                <div
                  class="icon icon-lg icon-shape bg-gradient-success shadow-success text-center border-radius-xl mt-n4 position-absolute">
                  <i class="material-icons opacity-10">store</i>
                </div>
                <div class="text-end pt-1">
                  <p class="text-sm mb-0 text-capitalize ">Revenue</p>
                  <h4 class="mb-0 ">34k</h4>
                </div>
              </div>
              <hr class="horizontal my-0 dark">
              <div class="card-footer p-3">
                <p class="mb-0 ">
                  <span class="text-success text-sm font-weight-bolder">+1% </span>than yesterday
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  
  <style scoped>
  </style>
  