<script setup>
import axios from 'axios'
let plans = ref({});
let userSub = ref({});
let free = ref({ id: 0, name: "free", processing: false });
let alertMsg = ref({ class: "", msg: "" })


axios.post('/subscriptionPlans')
  .then(function (res) {
    plans.value = res.data;
  }).catch((error) => {
    console.log(error);
  });
axios.post('/getUserSubscription')
  .then(function (res) {
    userSub.value = res.data;
  }).catch((error) => {
    console.log(error);
  });


function subscribe(plan, price, subActive) {
  axios.post('/subscriptin', { plan: plan, price: price, upgrade: subActive })
    .then(async function (res) {
      free.value.processing = false
      for (let key in plans.value) {
        plans.value[key].processing = false
      }
      let resData = res.data;
      if (resData.status) {
        if (subActive) {
          alertMsg.value.class = "alert-success"
          alertMsg.value.msg = resData.msg
          setTimeout(function () { window.location.href = resData.url; }, 1500);
        } else {
          //window.location.href = resData.url;
        }
      } else {
        alertMsg.value.class = "alert-danger"
        alertMsg.value.msg = resData.msg
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
      <!-- Free Plan -->
      <div class="col-12 d-flex justify-content-center mb-4">
        <div class="border rounded bg-white p-4 text-center border-primary shadow-primary mb-4"
          v-if="userSub.sb_plan == 0 && userSub.sb_active">
          <p class="text-bold text-primary">You are using a Free trial.<br />Upgrade your plan to increase the
            limitation
          </p>
          <h5 class="text-bold text-dark">Limit Used</h5>
          <div class="text-start">
            <table class="table text-success">
              <tr>
                <td>HTML tools</td>
                <td class="text-end">{{ userSub.sb_html ?? 0 }} out of {{ userSub.sp_html }}
                </td>
              </tr>
              <tr>
                <td>CSS tools</td>
                <td class="text-end">{{ userSub.sb_css ?? 0 }} out of {{ userSub.sp_css }}
                </td>
              </tr>
              <tr>
                <td>JS tools</td>
                <td class="text-end">{{ userSub.sb_js ?? 0 }} out of {{ userSub.sp_js }}
                </td>
              </tr>
              <tr>
                <td>Image</td>
                <td class="text-end">{{ userSub.sb_img ?? 0 }} out of {{ userSub.sp_image }}
                </td>
              </tr>
              <tr>
                <td>Page Speed</td>
                <td class="text-end">{{ userSub.sb_pageSpeed ?? 0 }} out of {{ userSub.sp_pageSpeed }}
                </td>
              </tr>
              <tr>
                <td>Text tools</td>
                <td class="text-end">{{ userSub.sb_text ?? 0 }} out of {{ userSub.sp_text }}</td>
              </tr>
              <tr>
                <td>Htaccess tools</td>
                <td class="text-end">{{ userSub.sb_htaccess ?? 0 }} out of {{ userSub.sp_htaccess }}</td>
              </tr>
            </table>
          </div>
        </div>
        <div class="border rounded bg-white p-4 text-center border-primary shadow-primary mb-4"
          v-if="!userSub.u_freeUsed">
          <p class="text-bold text-primary m-0">Try our all tools for free,</p>
          <p class="text-bold text-primary m-0">No card or bank information required.</p>
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
        <div class="card mb-5 planBox" :class="(userSub.sb_plan == plan.sp_id && userSub.sb_active) ? 'active' : ''">
          <div class="card-header p-3 pt-2 pb-2 bg-transparent">
            <div class="bg-gradient-success shadow-success text-center border-radius-xl mt-n4 position-absolute">
              <h3 class="m-0 py-1 px-4 text-white">{{ plan.sp_name }}</h3>
            </div>
            <div class="text-end pt-2">
              <div class="mb-0 mt-4">
                <small class="float-start mt-2">Monthly</small>
                <h4>${{ plan.sp_price }} USD</h4>
              </div>
            </div>
          </div>
          <hr class="horizontal my-0 dark">
          <div class="card-footer p-3">
            <h5 class="text-center">Requst used</h5>
            <p class="mb-2 text-secondery text-sm font-weight-bolder text-center">
            </p>
            <table class="table text-success font-weight-bolder text-sm">
              <tr>
                <td>HTML tools</td>
                <td class="text-end"><span>{{ userSub.sb_html }} of</span>{{ plan.sp_html }}</td>
              </tr>
              <tr>
                <td>CSS tools</td>
                <td class="text-end"><span>{{ userSub.sb_css }} of</span>{{ plan.sp_css }}</td>
              </tr>
              <tr>
                <td>JS tools</td>
                <td class="text-end"><span>{{ userSub.sb_js }} of</span>{{ plan.sp_js }}</td>
              </tr>
              <tr>
                <td>Image</td>
                <td class="text-end"><span>{{ userSub.sb_image }} of</span>{{ plan.sp_image }}
                </td>
              </tr>
              <tr>
                <td>Page Speed</td>
                <td class="text-end"><span>{{ userSub.sb_pageSpeed }} of</span>{{ plan.sp_pageSpeed }}</td>
              </tr>
              <tr>
                <td>Text tools</td>
                <td class="text-end"><span>{{ userSub.sb_text }} of</span>{{ plan.sp_text }}</td>
              </tr>
              <tr>
                <td>Htaccess tools</td>
                <td class="text-end"><span>{{ userSub.sb_htaccess }} of</span>{{ plan.sp_htaccess }}</td>
              </tr>
            </table>


            <div class="text-center mt-4">
              <button v-if="(userSub.sb_plan == plan.sp_id && userSub.sb_active)"
                class="text-bold btn btn-outline-primary font-weight-bolder" disabled>
                Currently Using
              </button>
              <button class="btn btn-primary"
                @click="subscribe(plan.sp_id, plan.sp_stripePrice, userSub.sb_active); plan.processing = 1"
                :disabled="(plan.sp_id < userSub.sb_plan && userSub.sb_active) ? true : false" v-else>
                <div v-if="plan.processing">Loading
                  <ElementsSpinner class="ms-2" />
                </div>
                <span v-else>
                  <span v-if="userSub.sb_active">Upgrade Now</span>
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

.table span {
  display: none;
  color: #2fbdae;
}

.planBox.active .table span {
  display: initial;
}

.planBox {
  max-width: 320px;
  margin: auto;
}

.planBox.active {
  outline: 1px solid #007c9d;
}

.btn-outline-primary {
  padding: 9px 24px !important;
}

.planBox.active:after {
  content: "Active";
  position: absolute;
  right: -18px;
  top: -3px;
  background: #2fbdae;
  color: #fff;
  padding: 0 5px;
  border-radius: 5px;
  transform: rotate(45deg);
}
</style>
