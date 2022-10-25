<script setup>
import axios from 'axios'
let plans = ref({});
let unserInfo = ref({});
let subActive = ref(0);
let free = ref({ id: 0, name: "free", processing: false });
let alertMsg = ref({ class: "", msg: "" })

if (process.client) {
  axios.post('/subscriptionPlans')
    .then(function (res) {
      plans.value = res.data;
    }).catch((error) => {
      console.log(error);
    });

  axios.post('/userInfo')
    .then(function (res) {
      unserInfo.value = res.data;
      subActive.value = res.data.sub_active
    }).catch((error) => {
      console.log(error);
    });
}

function subscribe(plan_id, price_id, subActive) {
  axios.post('/subscriptin', { plan_id: plan_id, price_id: price_id, upgrade: subActive })
    .then(async function (res) {
      free.value.processing = false
      for (let key in plans.value) {
        plans.value[key].processing = false
      }
      let data = res.data;
      if (data.status) {
        if (subActive) {
          alertMsg.value.class = "alert-success"
          alertMsg.value.msg = data.msg
          setTimeout(function () { window.location.href = data.url; }, 1500);
        } else {
          window.location.href = data.url;
        }
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
        <i class="material-icons closeBtn" @click="alertMsg.msg = ''">close</i>
        {{ alertMsg.msg }}
      </div>
    </div>

    <div class="row">
      <div class="col-12 d-flex justify-content-center mb-4">
        <div class="border rounded bg-white p-4 text-center border-primary shadow-primary mb-4"
          v-if="unserInfo.plan_id == 0 && subActive">
          <p class="text-bold text-primary">You are using a Free trial.<br />Upgrade your plan to increase the
            limitation
          </p>
          <h5 class="text-bold text-dark">Limit Used</h5>
          <div class="text-start">
            <table class="table text-success">
              <tr>
                <td>HTML tools</td>
                <td class="text-end">{{ unserInfo.sub_html_used }} out of {{ unserInfo.plan_limit }}</td>
              </tr>
              <tr>
                <td>CSS tools</td>
                <td class="text-end">{{ unserInfo.sub_css_used }} out of {{ unserInfo.plan_limit }}</td>
              </tr>
              <tr>
                <td>JS tools</td>
                <td class="text-end">{{ unserInfo.sub_js_used }} out of {{ unserInfo.plan_limit }}</td>
              </tr>
              <tr>
                <td>Image</td>
                <td class="text-end">{{ unserInfo.sub_img_used }} out of {{ unserInfo.plan_limit }}</td>
              </tr>
            </table>
          </div>
        </div>
        <div class="border rounded bg-white p-4 text-center border-primary shadow-primary mb-4" v-else>
          <p class="text-bold text-primary m-0">Try our all tools for free, No card or bank information required</p>
          <p class="text-bold text-primary">One-click activation</p>
          <button class="btn btn-primary mb-0"
            @click="subscribe(free.id, free.name, subActive); free.processing = true;">
            <div v-if="free.processing">Loading
              <ElementsSpinner class="ms-2" />
            </div>
            <span v-else>Try For Free</span>
          </button>
        </div>
      </div>

      <div class="col-xl-3 col-md-6" v-for="plan in plans">
        <div class="card mb-5 planBox active" v-if="(unserInfo.plan_id == plan.plan_id && subActive)">
          <div class="card-header p-3 pt-2 pb-2 bg-transparent">
            <div class="bg-gradient-success shadow-success text-center border-radius-xl mt-n4 position-absolute">
              <h3 class="m-0 py-1 px-4 text-white">{{ plan.plan_name }}</h3>
            </div>
            <div class="text-end pt-2">
              <div class="mb-0 mt-4">
                <small class="float-start mt-2">Monthly</small>
                <h4>${{ plan.plan_price }} USD</h4>
              </div>
            </div>
          </div>
          <hr class="horizontal my-0 dark">
          <div class="card-footer p-3">
            <h5 class="text-center">Requst used</h5>
            <p class="mb-2 text-secondery text-sm font-weight-bolder text-center"
              :class="plan.plan_extra != 0 ? 'text-primary' : ''">
              {{ plan.plan_extra == 0 ? "No extra benefits" : `Free ${plan.plan_extra} extra requst` }}
            </p>
            <table class="table text-success font-weight-bolder text-sm">
              <tr>
                <td>HTML tools</td>
                <td class="text-end"><span class="text-dark p-0">{{ unserInfo.sub_html_used }}</span> of {{
                    plan.plan_limit +
                    plan.plan_extra
                }}</td>
              </tr>
              <tr>
                <td>CSS tools</td>
                <td class="text-end"><span class="text-dark p-0">{{ unserInfo.sub_css_used }}</span> of {{
                    plan.plan_limit +
                    plan.plan_extra
                }}</td>
              </tr>
              <tr>
                <td>JS tools</td>
                <td class="text-end"><span class="text-dark p-0">{{ unserInfo.sub_js_used }}</span> of {{
                    plan.plan_limit +
                    plan.plan_extra
                }}</td>
              </tr>
              <tr>
                <td>Image</td>
                <td class="text-end"><span class="text-dark p-0">{{ unserInfo.sub_img_used }}</span> of {{
                    plan.plan_limit +
                    plan.plan_extra
                }}</td>
              </tr>
            </table>

            <div class="text-center mt-4">
              <button class="text-bold btn btn-outline-primary font-weight-bolder" disabled>
                Currently Using
              </button>
            </div>
          </div>

        </div>
        <div class="card mb-5 planBox" v-else>
          <div class="card-header p-3 pt-2 pb-2 bg-transparent">
            <div class="bg-gradient-success shadow-success text-center border-radius-xl mt-n4 position-absolute">
              <h3 class="m-0 py-1 px-4 text-white">{{ plan.plan_name }}</h3>
            </div>
            <div class="text-end pt-2">
              <div class="mb-0 mt-4">
                <small class="float-start mt-2">Monthly</small>
                <h4>${{ plan.plan_price }} USD</h4>
              </div>
            </div>
          </div>
          <hr class="horizontal my-0 dark">
          <div class="card-footer p-3">
            <h5 class="text-center">Requst can use</h5>
            <p class="mb-2 text-secondery text-sm font-weight-bolder text-center"
              :class="plan.plan_extra != 0 ? 'text-primary' : ''">
              {{ plan.plan_extra == 0 ? "No extra benefits" : `Free ${plan.plan_extra} extra requst` }}
            </p>
            <table class="table text-success font-weight-bolder text-sm">
              <tr>
                <td>HTML tools</td>
                <td class="text-end">{{ plan.plan_limit }}<span class="text-primary" v-if="plan.plan_extra">+{{
                    plan.plan_extra
                }}</span></td>
              </tr>
              <tr>
                <td>CSS tools</td>
                <td class="text-end">{{ plan.plan_limit }}<span class="text-primary" v-if="plan.plan_extra">+{{
                    plan.plan_extra
                }}</span></td>
              </tr>
              <tr>
                <td>JS tools</td>
                <td class="text-end">{{ plan.plan_limit }}<span class="text-primary" v-if="plan.plan_extra">+{{
                    plan.plan_extra
                }}</span></td>
              </tr>
              <tr>
                <td>Image</td>
                <td class="text-end">{{ plan.plan_limit }}<span class="text-primary" v-if="plan.plan_extra">+{{
                    plan.plan_extra
                }}</span></td>
              </tr>
            </table>

            <div class="text-center mt-4">
              <button v-if="unserInfo.plan_id == plan.plan_id && subActive"
                class="text-bold btn btn-outline-primary font-weight-bolder" disabled>
                Currently Using
              </button>
              <button class="btn btn-primary"
                @click="subscribe(plan.plan_id, plan.plan_price_id, subActive); plan.processing = 1"
                :disabled="(plan.plan_id < unserInfo.plan_id && subActive) ? true : false" v-else>
                <div v-if="plan.processing">Loading
                  <ElementsSpinner class="ms-2" />
                </div>
                <span v-else>
                  <span v-if="subActive">Upgrade Now</span>
                  <span v-else>Subscribe now</span>
                </span>
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

.table> :not(:first-child) {
  border-style: ridge;
}

.planBox {
  max-width: 320px;
  margin: auto;
}

.planBox.active {
  outline: 1px solid #e91e63;
}

.btn-outline-primary {
  padding: 9px 24px !important;
}
</style>
