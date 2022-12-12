<script setup>
const showModal = ref(false)
const title = ref("")

function openModal(value) {
  title.value = value;
  showModal.value = true
}

async function submit() {

  let transporter = {
    host: "smtp.organicrankings.com ",
    port: 465,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'info@organicrankings.com', // generated ethereal user
      pass: 'Q)AheoBGx{XA', // generated ethereal password
    },
  };

}
</script>
<template>
  <div class="my-4">
    <div class="border rounded shadow p-3 text-primary text-bold text-center" style="max-width:700px;margin:auto;">
      <h6 class="text-bold">
        <slot />
      </h6>
      <div class="mt-3">
        <button class="btn btn-primary me-3 mb-2" @click="openModal('Need Help')">Get Help</button>
        <button class="btn btn-primary d-inline-block mb-2" @click="openModal('Hire an expert')">Hire an
          expert</button>
      </div>
    </div>

    <div class="modal fade show" aria-modal="true" role="dialog" v-if="showModal">
      <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ title }}</h5>
            <button type="button" class="btn-close" @click="showModal = false;">
              <i class="material-icons">close</i>
            </button>
          </div>
          <div class="modal-body">
            <form @submit="submit">
              <div class="input-group input-group-outline mb-4">
                <select class="form-control" v-model="title">
                  <option>Need Help</option>
                  <option>Hire an expert</option>
                </select>
              </div>
              <div class="input-group input-group-outline my-4">
                <label class="form-label">Email</label>
                <input type="email" class="form-control" />
              </div>
              <div class="input-group input-group-outline my-4">
                <label class="form-label">Phone Number</label>
                <input type="text" class="form-control" />
              </div>
              <div class="input-group input-group-outline my-4">
                <label class="form-label">Message</label>
                <textarea class="form-control" rows="4"></textarea>
              </div>
            </form>
          </div>
          <div class="modal-footer d-block">
            <button class="btn btn-secondary" @click="(showModal = false)">Close</button>
            <button class="btn btn-primary float-end" @click="copyToClipboard">Send</button>
          </div>
        </div>
      </div>
    </div>
  </div>
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
</style>