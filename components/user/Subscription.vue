<script setup>
import axios from 'axios'
let plans = ref({});
let userSub = ref({});
let free = ref({ id: 0, name: "free", processing: false });
let alertMsg = ref({ class: "", msg: "" })
let cancelObj = ref({ action: '', cancel: '' })
const showCloseModal = ref(false)
const cancelProcess = ref(false)
onMounted(() => {
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
});

function subscribe(action, plan) {
  axios.post('/subscriptinAction', { action: action, plan: plan })
    .then(async function (res) {
      free.value.processing = false
      for (let key in plans.value) {
        plans.value[key].processing = false
      }
      let resData = res.data;
      if (resData.status) {
        if (plan == 'free') {
          alertMsg.value.class = "alert-success"
          alertMsg.value.msg = resData.msg
          window.location.href = resData.url;
        } else {
          await navigateTo(resData.url, { external: true })
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

function cancelAction(action, cancel) {
  cancelProcess.value = true;
  showCloseModal.value = true
  cancelObj.value.action = action
  cancelObj.value.cancel = cancel
}


function cancelSubscription() {
  axios.post('/subscriptinAction', cancelObj.value)
    .then(async function (res) {
      cancelProcess.value = false;
      showCloseModal.value = false
      let data = res.data
      if (data.status) {
        alertMsg.value.msg = data.msg
        alertMsg.value.class = 'alert-success'
      } else {
        alertMsg.value.msg = data.msg
        alertMsg.value.class = 'alert-danger'
      }
    }).catch((error) => {
      console.log(error);
    });
}

</script>


<template>
  <div class="subscriptions" id="sbbox">
    <Teleport to="body">
      <!-- Aleart Message -->
      <div class="d-flex justify-content-center msgAlert mt-2 position-fixed z-index-3 w-100" v-if="alertMsg.msg">
        <div class=" alert text-white fade show px-5 shadow-danger" :class="alertMsg.class">
          <i class="material-icons closeBtn float-end ms-4" @click="alertMsg.msg = ''">close</i>
          {{ alertMsg.msg }}
        </div>
      </div>
    </Teleport>

    <client-only>
      <div class="row">
        <!-- Free Plan -->
        <div class="col-12 d-flex justify-content-center mb-4">
          <div class="border rounded bg-white p-4 text-center border-primary shadow-primary mb-4"
            v-if="userSub.sb_plan == 0 && userSub.sb_active">
            <p class="text-bold text-primary">You are using a Free trial.<br />Upgrade your plan to increase the
              limitation.
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
                  <td>Image tools</td>
                  <td class="text-end">{{ userSub.sb_image ?? 0 }} out of {{ userSub.sp_image }}
                  </td>
                </tr>
                <tr>
                  <td>Htaccess tools</td>
                  <td class="text-end">{{ userSub.sb_htaccess ?? 0 }} out of {{ userSub.sp_htaccess }}</td>
                </tr>
                <tr>
                  <td>Page Analysis</td>
                  <td class="text-end">Unlimited</td>
                </tr>
                <tr>
                  <td>Text tools</td>
                  <td class="text-end">{{ userSub.sb_text ?? 0 }} out of {{ userSub.sp_text }}</td>
                </tr>

              </table>
            </div>
          </div>
          <div class="border rounded bg-white p-4 text-center border-primary shadow-primary mb-4"
            v-else-if="!userSub.u_freeUsed && !userSub.sb_active">
            <p class="text-bold text-primary m-0">Try our all tools for free,</p>
            <p class="text-bold text-primary m-0">No card or bank information required.</p>
            <p class="text-bold text-primary">One-click activation</p>
            <button class="btn btn-primary mb-0" @click="subscribe('new', free.name); free.processing = true;">
              <div v-if="free.processing">Loading
                <ElementsSpinner class="ms-2" />
              </div>
              <span v-else>Try For Free</span>
            </button>
            <p class="m-0 mt-3 text-success text-sm">Trial valid for 1 week</p>

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
              <h5 class="text-center">Package Details</h5>
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
                  <td>Image tools</td>
                  <td class="text-end"><span>{{ userSub.sb_image }} of</span>{{ plan.sp_image }}
                  </td>
                </tr>
                <tr>
                  <td>Htaccess tools</td>
                  <td class="text-end"><span>{{ userSub.sb_htaccess }} of</span>{{ plan.sp_htaccess }}</td>
                </tr>
                <tr>
                  <td>Page Analysis</td>
                  <td class="text-end">Unlimited</td>
                </tr>
                <tr>
                  <td>Text tools</td>
                  <td class="text-end"><span>{{ userSub.sb_text }} of</span>{{ plan.sp_text }}</td>
                </tr>

              </table>

              <div class="text-center mt-4">
                <button v-if="(userSub.sb_plan == plan.sp_id && userSub.sb_active)"
                  @click="cancelAction('cancel', userSub.sb_cancelAtEnd ? false : true);"
                  :disabled="cancelProcess ? true : false" class="text-bold btn  font-weight-bolder"
                  :class="userSub.sb_cancelAtEnd ? 'btn-success' : 'btn-danger'">
                  <div v-if="cancelProcess">Loading
                    <ElementsSpinner class="ms-2" />
                  </div>
                  <span v-else>
                    {{ userSub.sb_cancelAtEnd ? "Reactive Subscription" : "Cancel Subscription" }}
                  </span>

                </button>
                <button class="btn btn-primary"
                  @click="subscribe(userSub.sb_active ? 'update' : 'new', plan.sp_stripePriceId); plan.processing = 1"
                  :disabled="(plan.sp_id < userSub.sb_plan && userSub.sb_active) ? true : false" v-else>
                  <div v-if="plan.processing">Loading
                    <ElementsSpinner class="ms-2" />
                  </div>
                  <span v-else>
                    {{ userSub.sb_active ? "Upgrade Now" : "Subscribe now" }}
                  </span>
                </button>
              </div>

            </div>
          </div>


        </div>
      </div>
    </client-only>

    <div class="modal fade show" aria-modal="true" role="dialog" v-if="showCloseModal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Cancel subscription</h5>
            <button type="button" class="btn-close" aria-label="Close" @click="showCloseModal = false"><i
                class="material-icons">close</i></button>
          </div>
          <div class="modal-body">
            <h5 class="text-center text-danger">Are you sure to cancel your subscription?</h5>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary float-start" @click="showCloseModal = cancelProcess =
  showCloseModal = false;">No</button>
            <button type="button" class="btn btn-danger" @click="cancelSubscription">Yes</button>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>
		
		
<style>
#sbbox .closeBtn {
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
  padding: 5px;
  opacity: 0.8;
  transition: 0.3s all;
}

#sbbox .closeBtn:hover {
  opacity: 1;
}


#sbbox .table> :not(:first-child) {
  border-style: ridge;
}

#sbbox .text-end span {
  display: none;
  color: #2fbdae;
}

#sbbox .planBox.active .text-end span {
  display: initial;
}

#sbbox .planBox {
  max-width: 320px;
  margin: auto;
}

#sbbox .planBox.active {
  outline: 1px solid #007c9d;
}

#sbbox .btn-outline-primary {
  padding: 9px 24px !important;
}

#sbbox .planBox.active:after {
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

.modal {
  display: block;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-body .material-icons {
  vertical-align: middle;
}

.btn-close {
  padding: 0;
}

.btn-close .material-icons {
  color: black;
  vertical-align: top;
}
</style>
