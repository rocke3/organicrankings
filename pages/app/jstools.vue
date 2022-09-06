<script setup>
import { ref, watch } from 'vue'
definePageMeta({ layout: "app-layout" });
useHead({ title: "JS Tools - Organic Rankings" });


const htmlOptionsArr = [
]

const js = ref('')
const processing = ref(false)
const jsLength = ref(0)
const showOutputModal = ref(false)
const outputJs = ref('')
const upload = ref(false)
const genarate = ref(false)
const beautify = ref(false)
const indent = ref(false)


const htmlOptions = ref(htmlOptionsArr)

function copyToClipboard() {
  var range = document.createRange();
  range.selectNode(document.getElementById("outputJs"));
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
}

async function genarateJs() {
  showOutputModal.value = true;
  processing.value = true;
  outputJs.value = '';

  await $fetch("/jsTools", {
    method: "POST",
    body: js.value,
    headers: {
      output: beautify.value ? 'beautify' : 'minify',
      indent: indent.value ? 4 : 2,
      "content-type": "application/octet-stream",
      "cache-control": "no-cache"
    }
  }).then((res) => {
    processing.value = false;
    outputJs.value = res;
  }).catch((err) => {
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
          <form @submit.prevent="genarateJs">

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
                      {{item.label}}
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
                <span v-if="!processing">Genarate</span>
                <div v-if="processing">
                  <ElementsSpinner /> Genarating
                  <ElementsProcessing />
                </div>
              </button>
            </div>
          </form>
        </ElementsBsCard>
      </div>
    </div>

    <!-- Modal -->
    <div class="modal fade show" aria-modal="true" role="dialog" v-if="showOutputModal">
      <div class="modal-dialog modal-dialog-scrollable modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Output ({{ outputJs.length }} character)</h5>
            <button type="button" class="btn-close" @click="showOutputModal = false">
              <i class="material-icons">close</i>
            </button>
          </div>
          <div class="modal-body">
            <div v-if="processing" class="text-success text-center">
              <p>
                <ElementsSpinner color="green" v-if="!upload" /><i v-if="upload" class='material-icons'>task_alt</i>
                Uploading Your Code.
              </p>
              <p v-if="upload">
                <ElementsSpinner color="green" v-if="!genarate && upload" /><i v-if="genarate"
                  class='material-icons'>task_alt</i> Genarating Code.
              </p>
              <p v-if="genarate">
                <ElementsSpinner color="green" /> Downloading Code.
              </p>
            </div>
            <pre><code id="outputJs" data-language="html" class="html">{{ outputJs }}</code></pre>

          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary" @click="showOutputModal = false">
              Close
            </button>
            <button v-if="outputJs" class="btn btn-primary" @click="copyToClipboard">
              Copy Code
            </button>
          </div>
        </div>
      </div>
    </div>
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
    
    .form-check:not(.form-switch) .form-check-input[type="checkbox"]:after {
      content: "";
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
    