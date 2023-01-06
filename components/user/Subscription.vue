<script setup>
import axios from 'axios'
let plans = ref({});
let userSub = ref({});
let invoice = ref({});
let invoiceLoading = ref(false);
let free = ref({ id: 0, name: "free", processing: false });
let alertMsg = ref({ class: "", msg: "" })
let cancelObj = ref({ action: '', cancel: '' })
let subsObj = ref({ action: '', plan: '' })
let showAlertModal = ref(false)
let alertModal = ref({ title: '', msg: '' })
let cancelProcess = ref(false)

function subscribe(action, plan) {
  subsObj.value.action = action
  subsObj.value.plan = plan
  if (action == "update") {
    alertModal.value.title = "Update subscription"
    alertModal.value.msg = "Are you sure to Upgrade your subscription?"
    showAlertModal.value = true
  } else {
    subscription()
  }
}

function cancelAction(action, cancel) {
  subsObj.value.action = ''
  cancelObj.value.action = action
  cancelObj.value.cancel = cancel
  cancelProcess.value = true;
  if (cancel) {
    alertModal.value.title = "Cancel subscription"
    alertModal.value.msg = "Are you sure to cancel your subscription?"
    showAlertModal.value = true
  } else {
    cancelSubscription()
  }
}


function cancelSubscription() {
  axios.post('/subscriptinAction', cancelObj.value)
    .then(async function (res) {
      removeAllProcessing()
      let data = res.data
      if (data.status) {
        alertMsg.value.msg = data.msg
        alertMsg.value.class = 'alert-success'
        window.location.href = data.url;
      } else {
        alertMsg.value.msg = data.msg
        alertMsg.value.class = 'alert-danger'
      }
    }).catch((error) => {
      console.log(error);
    });
}

function subscription() {
  axios.post('/subscriptinAction', subsObj.value)
    .then(async function (res) {
      removeAllProcessing()
      let resData = res.data;

      if (resData.status) {
        alertMsg.value.class = "alert-success"
        alertMsg.value.msg = resData.msg
        window.location.href = resData.url;
      } else {
        alertMsg.value.class = "alert-danger"
        alertMsg.value.msg = resData.msg
        setTimeout(function () { alertMsg.value.msg = ''; }, 4000);
      }
    }).catch((error) => {
      console.log(error);
    });
}

function removeAllProcessing() {
  showAlertModal.value = cancelProcess.value = showAlertModal.value = free.value.processing = false;
  for (let key in plans.value) {
    plans.value[key].processing = false
  }
}

if (process.client) {
  axios.post('/subscriptionPlans')
    .then(function (res) {
      plans.value = res.data;
    }).catch((error) => {
      console.log(error);
    });
  await axios.post('/getUserSubscription')
    .then(function (res) {
      userSub.value = res.data;
      if (res.data.sb_invoice) {
        invoiceLoading.value = true
      }
    }).catch((error) => {
      console.log(error);
    });

  axios.post('/getUserInvoice', { invoice: userSub.value.sb_invoice })
    .then(function (res) {
      invoice.value = res.data;
      invoiceLoading.value = false
    }).catch((error) => {
      console.log(error);
    });

}
let iiiv = ref('')
function getInv() {
  axios.post('/getUserInvoice', { invoice: iiiv.value })
    .then(function (res) {
      invoice.value = res.data;
      invoiceLoading.value = false
    }).catch((error) => {
      console.log(error);
    });
}
</script>


<template>

  <input type="text" v-model="iiiv">
  <button @click="getInv">Get Invoice</button>

  <div class="subscriptions" id="sbbox">
    <Teleport to="body">
      <!-- Aleart Message -->
      <div class="d-flex justify-content-center msgAlert mt-2 position-fixed z-index-3 w-100" v-if="alertMsg.msg">
        <div class=" alert text-white fade show px-5 shadow-danger" :class="alertMsg.class">
          <i class="material-icons closeBtn cursor-pointer position-absolute end-2" @click="alertMsg.msg = ''">close</i>
          {{ alertMsg.msg }}
        </div>
      </div>
    </Teleport>

    <client-only>
      <div class="row justify-content-center">
        <!-- Free Plan -->
        <div class="d-flex justify-content-center" :class="userSub.sb_invoice ? 'col-md-4' : 'col-12'"
          v-if="!userSub.u_freeUsed && !userSub.sb_active && !userSub.sb_invoice">
          <div class="border rounded bg-white p-4 text-center border-primary shadow-primary mb-4">
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
        <div class="col-md-4" v-if="userSub.sb_active">
          <div class="border border-primary shadow-primary rounded p-2 bg-white planBox mb-4">
            <h5 class="border-bottom text-center py-2">Active Package '{{ userSub.sp_name }}'</h5>
            <h6 class="text-center">Usages</h6>
            <table class="table text-success font-weight-bolder text-sm">
              <tr>
                <td>HTML tools</td>
                <td class="text-end"><span>{{ userSub.sb_html }} of</span>{{ userSub.sp_html }}</td>
              </tr>
              <tr>
                <td>CSS tools</td>
                <td class="text-end"><span>{{ userSub.sb_css }} of</span>{{ userSub.sp_css }}</td>
              </tr>
              <tr>
                <td>JS tools</td>
                <td class="text-end"><span>{{ userSub.sb_js }} of</span>{{ userSub.sp_js }}</td>
              </tr>
              <tr>
                <td>Image tools</td>
                <td class="text-end"><span>{{ userSub.sb_image }} of</span>{{ userSub.sp_image }}
                </td>
              </tr>
              <tr>
                <td>Htaccess tools</td>
                <td class="text-end"><span>{{ userSub.sb_htaccess }} of</span>{{ userSub.sp_htaccess }}</td>
              </tr>
              <tr>
                <td>Page Analysis</td>
                <td class="text-end">Unlimited</td>
              </tr>
              <tr>
                <td>Text tools</td>
                <td class="text-end"><span>{{ userSub.sb_text }} of</span>{{ userSub.sp_text }}</td>
              </tr>

            </table>
          </div>
        </div>

        <div class="col-md-6 col-lg-5 col-xxl-4" v-if="userSub.sb_invoice">
          <div class="card mb-4">
            <div class="card-body p-3">
              <h5 class="text-center py-2" v-if="invoiceLoading">Loading Invoice...</h5>
              <div v-else>
                <h5 class="text-center " :class="invoice.paid ? 'text-success' : 'text-danger'">
                  Last Invoice ${{ invoice.total / 100 }}
                  <span class="text-uppercase">USD {{ invoice.paid ? "" : '(Failed)' }}</span>
                </h5>
                <div class="visaCard m-auto shadow">
                  <h5 class="text-white">
                    Payment Card <span class="float-end">VISA</span>
                  </h5>
                  <h5 class="text-white letter-spacing-5 py-3 text-center">**** **** **** 5656</h5>
                  <div class="row">
                    <div class="col-6 text-center">
                      Card Holder <br />
                      <strong>Mamunur Rashid</strong>
                    </div>
                    <div class="col-6 text-center">
                      Expired<br />
                      <strong>12/22</strong>
                    </div>
                  </div>
                </div>
                <div class="text-center">
                  <a class="btn btn-primary me-2 mt-3 mb-0" target="_blank" :href="invoice.hosted_invoice_url">
                    {{ invoice.paid ? "View Invoice" : 'Pay Now' }}
                  </a>
                  <a class="btn btn-primary mt-3 mb-0" :href="invoice.invoice_pdf">Download Invoice</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <pre>
  {{ invoice }}
</pre>

      <div class="row">

        <div class="col-xl-3 col-md-6" v-for="plan in plans">
          <div class="card mb-5 planBox mt-4"
            :class="(userSub.sb_plan == plan.sp_id && userSub.sb_active) ? 'active' : ''">
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
            <div class="card-bpdy p-3">
              <h5 class="text-center">Package Details</h5>
              <p class="mb-2 text-secondery text-sm font-weight-bolder text-center">
              </p>
              <table class="table text-success font-weight-bolder text-sm">
                <tr>
                  <td>HTML tools</td>
                  <td class="text-end">{{ plan.sp_html }}</td>
                </tr>
                <tr>
                  <td>CSS tools</td>
                  <td class="text-end">{{ plan.sp_css }}</td>
                </tr>
                <tr>
                  <td>JS tools</td>
                  <td class="text-end">{{ plan.sp_js }}</td>
                </tr>
                <tr>
                  <td>Image tools</td>
                  <td class="text-end">{{ plan.sp_image }}
                  </td>
                </tr>
                <tr>
                  <td>Htaccess tools</td>
                  <td class="text-end">{{ plan.sp_htaccess }}</td>
                </tr>
                <tr>
                  <td>Page Analysis</td>
                  <td class="text-end">Unlimited</td>
                </tr>
                <tr>
                  <td>Text tools</td>
                  <td class="text-end">{{ plan.sp_text }}</td>
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

    <div class="modal fade show" aria-modal="true" role="dialog" v-if="showAlertModal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ alertModal.title }}</h5>
            <button type="button" class="btn-close" aria-label="Close" @click="removeAllProcessing"><i
                class="material-icons">close</i></button>
          </div>
          <div class="modal-body">
            <h5 class="text-center text-danger">{{ alertModal.msg }}</h5>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary float-start" @click="removeAllProcessing">No</button>
            <button type="button" class="btn btn-danger" @click="subscription" v-if="subsObj.action">Yes</button>
            <button type="button" class="btn btn-danger" @click="cancelSubscription" v-else>Yes</button>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>
		
		
<style>
.visaCard {
  max-width: 330px;
  background: #0f0c29;
  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29);
  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #24243e, #302b63, #0f0c29);
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  color: #fff;
  border-radius: 10px;
  padding: 10px;
}

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

.btn-close .material-icons {
  color: black;
  vertical-align: top;
}
</style>
