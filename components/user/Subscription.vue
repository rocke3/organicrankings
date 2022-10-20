<script setup>
import axios from 'axios'
let plans = ref({});
let free = ref({ id: 0, name: "free", processing: false });
let alertMsg = ref({ class: "", msg: "" })

if (process.client) {
  axios.post('/subscriptionPlans')
    .then(function (res) {
      plans.value = res.data;
    }).catch((error) => {
      console.log(error);
    });
}

function subscribe(plan_id, price_id) {
  axios.post('/subscriptin', { plan_id: plan_id, price_id: price_id })
    .then(async function (res) {
      free.value.processing = false
      for (let key in plans.value) {
        plans.value[key].processing = false
      }
      let data = res.data;
      if (data.status) {
        window.location.href = data.url;
      } else {
        alertMsg.value.class = "alert-danger"
        alertMsg.value.msg = data.msg
        setTimeout(function () { alertMsg.value.msg = ''; }, 4000);
      }
    }).catch((error) => {
      console.log(error);
    });
}
</script>


<template>
  <div class="subscriptions">
    <!-- Aleart Message -->
    <div class="d-flex justify-content-center msgAlert" v-if="alertMsg.msg">
      <div class=" alert text-white fade show px-5 shadow-danger" :class="alertMsg.class">
        <i class="material-icons closeBtn" @click="alertMsg.msg =''">close</i>
        {{ alertMsg.msg }}
      </div>
    </div>

    <div class="row">
      <div class="col-12 d-flex justify-content-center mb-4">
        <div class="border rounded bg-white p-4 text-center border-primary shadow-primary mb-4">
          <p class="text-bold text-primary m-0">Try our all tools for free, No card or bank information required</p>
          <p class="text-bold text-primary">One-click activation</p>
          <button class="btn btn-primary mb-0" @click="subscribe(free.id,free.name); free.processing = true;">
            <div v-if="free.processing">Loading
              <ElementsSpinner class="ms-2" />
            </div>
            <span v-else>Try For Free</span>
          </button>
        </div>
      </div>

      <div class="col-xl-3 col-md-6" v-for="plan in plans">
        <div class="card mb-5 planBox">
          <div class="card-header p-3 pt-2 pb-2 bg-transparent">
            <div class="bg-gradient-success shadow-success text-center border-radius-xl mt-n4 position-absolute">
              <h3 class="m-0 py-1 px-4 text-white">{{ plan.plan_name }}</h3>
            </div>
            <div class="text-end pt-2">
              <div class="mb-0 mt-4">
                <small class="float-start mt-2">Monthly</small>
                <h4>${{plan.plan_price}} USD</h4>
              </div>
            </div>
          </div>
          <hr class="horizontal my-0 dark">
          <div class="card-footer p-3">
            <h5 class="text-center">Requst can use</h5>
            <p class="mb-2 text-secondery text-sm font-weight-bolder text-center"
              :class="plan.plan_extra != 0 ? 'text-primary' : ''">
              {{plan.plan_extra == 0 ? "No extra benefits" : `Free ${plan.plan_extra} extra requst` }}
            </p>
            <p class="mb-1 text-success text-sm font-weight-bolder">
              HTML tools
              <span class="float-end">{{plan.plan_html}}
                <span class="text-primary" v-if="plan.plan_extra">+{{plan.plan_extra}}</span>
              </span>
            </p>
            <p class="mb-1 text-success text-sm font-weight-bolder">
              CSS tools
              <span class="float-end">{{plan.plan_css}}
                <span class="text-primary" v-if="plan.plan_extra">+{{plan.plan_extra}}</span>
              </span>
            </p>
            <p class="mb-1 text-success text-sm font-weight-bolder">
              JS tools
              <span class="float-end">{{plan.plan_js}}
                <span class="text-primary" v-if="plan.plan_extra">+{{plan.plan_extra}}</span>
              </span>
            </p>
            <p class="mb-1 text-success text-sm font-weight-bolder">
              Image
              <span class="float-end">{{plan.plan_image}}
                <span class="text-primary" v-if="plan.plan_extra">+{{plan.plan_extra}}</span>
              </span>
            </p>
            <div class="text-center mt-4">
              <button class="btn btn-primary" @click="subscribe(plan.plan_id,plan.plan_price_id); plan.processing = 1">
                <div v-if="plan.processing">Loading
                  <ElementsSpinner class="ms-2" />
                </div>
                <span v-else>Subscribe now</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>
		
		
<style scoped>
.closeBtn {
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
  padding: 5px;
  opacity: 0.8;
  transition: 0.3s all;
}

.closeBtn:hover {
  opacity: 1;
}

.msgAlert {
  position: fixed;
  z-index: 9;
  top: 10px;
  left: 50%;
}

.planBox {
  max-width: 320px;
  margin: auto;
}
</style>
