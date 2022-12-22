<script setup>
import { ref, watch } from 'vue'
import axios from 'axios'
definePageMeta({ layout: "user-layout" });
useHead({ title: "JS Tools - Organic Rankings" });


const htmlOptionsArr = [
]

const js = ref('')
const processing = ref(false)
const jsLength = ref(0)
const showOutputModal = ref(false)
const outputJs = ref('')
const outputError = ref('')
const beautify = ref(false)
const indent = ref(false)
let progress = ref(0)

const htmlOptions = ref(htmlOptionsArr)

async function generateJs() {
  showOutputModal.value = true;
  processing.value = true;
  outputJs.value = '';
  outputError.value = '';
  progress.value = 1;

  axios.post('https://www.organicrankings.com/api/jstool', js.value, {
    headers: {
      'Content-Type': 'application/octet-stream',
      authorization: useCookie('org_user').value,
      output: beautify.value ? 'beautify' : 'minify',
      indent: indent.value ? 4 : 2
    },
    onUploadProgress: function (event) {
      var uploaded = Math.round((100 * event.loaded) / event.total);
      if (uploaded > 99) {
        progress.value = 2;
        window.setTimeout(() => { if (processing.value) { progress.value = 3; } }, 1000);
      }
    }
  })
    .then(function (res) {
      let data = res.data;
      processing.value = false;
      progress.value = 0;
      if (typeof data === 'object') {
        outputError.value = data.message;
      } else {
        outputJs.value = data;
      }
    })
    .catch(function (error) {
      processing.value = false;
      outputJs.value = "Something went wrong please try again";
    });

}

watch(js, async (val) => {
  jsLength.value = val.length;
})


</script>
    
<template>
  <div>
    <div class="row">
      <div class="col-12">
        <ElementsBsCard formTitle="Javascript Tools" titleClass="ps-3">
          <form @submit.prevent="generateJs">

            <div class="pb-2">
              <div class="outputSettings mt-2">
                <label class="settingLvl">Output Settings</label>
                <div class="form-check form-switch d-flex align-items-center ps-0 mt-1">
                  <div class="toggle me-1" :class="{ 'text-primary': !beautify }" @click="beautify = false">Minify
                  </div>
                  <div class="ms-5 me-2">
                    <input class="form-check-input" type="checkbox" v-model="beautify" />
                  </div>
                  <div class="toggle" :class="{ 'text-primary': beautify }" @click="beautify = true">Beautify</div>
                </div>

                <div class="form-check ps-0 mt-2">
                  <label class="form-check-label me-3 mt-2" v-if="beautify">
                    <input class="form-check-input me-1" type="checkbox" v-model="indent">
                    <ElementsTooltip tooltip="Indent Size 4, Default indent size is 2.">
                      Indent Size 4
                    </ElementsTooltip>
                  </label>

                  <label class="form-check-label me-3 mt-2" v-for="(item, index) in htmlOptions">
                    <input class="form-check-input me-1" type="checkbox" v-model="item.value"
                      @click="minify = (item.name == 'collapseWhitespace') ? true : false;">
                    <ElementsTooltip :tooltip="item.toltip">
                      {{ item.label }}
                    </ElementsTooltip>
                  </label>
                </div>
              </div>
            </div>


            <div class="input-group input-group-outline mt-4">
              <label class="form-label">All Javascript </label>
              <textarea class="form-control" rows="10" v-model="js"></textarea>
            </div>
            <div class="text-end">
              <small>{{ jsLength }} character</small>
            </div>
            <div class="mb-1 text-end mt-4">
              <button class="btn btn-primary">
                <span v-if="!processing">Generate</span>
                <div v-if="processing">
                  <ElementsSpinner /> Generating
                  <ElementsProcessing />
                </div>
              </button>
            </div>
          </form>
        </ElementsBsCard>
      </div>
    </div>

    <!-- Modal -->
    <ElementsCodeModal v-model:showModal="showOutputModal" :body="outputJs" :error="outputError" :progress="progress" />


  </div>
</template>
    
    
<style scoped>
#outputJs {
  white-space: break-spaces;
}

.todo input {
  display: none;
}

.form-check.active label {
  color: #fff !important
}

.cssLength {
  float: right;
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

.form-switch {
  padding-left: 0 !important;
}

.todo label {
  text-transform: capitalize;
}

.toggle {
  cursor: pointer;
}

.form-check-input {
  margin-right: 5px;
  vertical-align: text-bottom;
}

.form-check:not(.form-switch) .form-check-input[type="radio"]:after {
  width: 0.8rem;
  height: 0.8rem;
}

.outputSettings {
  display: inline-block;
  position: relative;
  border: 1px solid #d2d6da;
  border-radius: 0.375rem;
  margin: 30px 0 0 0;
  padding: 15px 10px 10px 10px;
}

.outputSettings .settingLvl {
  position: absolute;
  top: -15px;
  font-weight: bold;
  background: #fff;
  left: 2px;
  padding: 3px;
}
</style>
    