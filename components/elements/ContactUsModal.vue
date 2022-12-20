<script setup>
import axios from 'axios'
const props = defineProps({ showModal: Boolean, data: Object });
defineEmits(['update:showModal'])
const message = ref("")
const sending = ref(false)
const sendRes = ref("")

function sendEmail() {
  sending.value = true
  axios.post('/sendmail', { user: user.value, name: name.value, email: email.value, phone: phone.value, message: message.value, form: 'contactus' })
    .then(async function (res) {
      if (res.data) {
        sendRes.value = `<div><i class="material-icons" style="font-size: 25px;">done_all</i> <p style="font-size: 25px;">Message successfully sent</p></div>`;
      } else {
        sendRes.value = `<div><i class="material-icons" style="font-size: 25px;">warning</i> <p style="font-size: 25px;">Something went wrong please try again later</p></div>`;
      }
      sending.value = false
    }).catch((error) => {
      sendRes.value = `<div><i class="material-icons" style="font-size: 25px;">warning</i> <p style="font-size: 25px;">Something went wrong please try again later</p></div>`;
      sending.value = false
    });

  setTimeout(
    function () {
      sendRes.value = ""
    }, 3000);
}

</script>

<template>
  <client-only>
    <div class="modal fade show" aria-modal="true" role="dialog" v-if="showModal">
      <div class="modal-dialog modal-dialog-scrollable">
        <form @submit.prevent="sendEmail">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Contact Us</h5>
              <button type="button" class="btn-close" @click="$emit('update:showModal', false);">
                <i class="material-icons">close</i>
              </button>
            </div>
            <div class="modal-body">
              <div class="sending" v-if="sending">
                <div>
                  <ElementsSpinner size="30px" />
                  <p class="mt-4">Sending your message ..</p>
                </div>
              </div>
              <div class="sendRes" v-if="sendRes">
                <div v-html="sendRes"></div>
              </div>
              <div class="input-group input-group-outline my-4">
                <label class="form-label">Name</label>
                <input type="text" class="form-control" v-model="data.userInfo.u_name" required />
              </div>
              <div class="input-group input-group-outline my-4">
                <label class="form-label">Email</label>
                <input type="email" class="form-control" v-model="data.userInfo.u_email" required />
              </div>
              <div class="input-group input-group-outline my-4">
                <label class="form-label">Phone</label>
                <input type="text" class="form-control" v-model="data.userInfo.u_phone" required />
              </div>
              <div class="input-group input-group-outline my-4">
                <label class="form-label">Message</label>
                <textarea class="form-control" v-model="message" required> </textarea>
              </div>
            </div>
            <div class="modal-footer d-block">
              <button type="button" class="btn btn-secondary" @click="$emit('update:showModal', false);">Close</button>
              <button type="submit" class="btn btn-primary float-end" :disabled="sending">Send</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </client-only>
</template>



<style scoped>
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

.sending,
.sendRes {
  text-align: center;
  position: absolute;
  z-index: 9;
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  color: #fff;
}

.sending div,
.sendRes div {
  transform: translate(0, 90%);
}

.sending p,
.sendRes p {
  font-size: 25px !important;
}
</style>
