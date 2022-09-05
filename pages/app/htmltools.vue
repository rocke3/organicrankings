<script setup>
definePageMeta({ layout: "app-layout" });
useHead({ title: "HTML Tools - Organic Rankings"});


const htmlOptionsArr = [
	{name: 'minifyJS', value: true, label: "Minify Internal JS", toltip: "Minify Internal Javascript code"},
	{name: 'minifyCSS', value: true, label: "Minify Internal CSS", toltip: "Minify Internal CSS code"},
	{name: 'removeComments', value: true, label: "Remove Comments", toltip: "Remove all Comments from code"},
	{name: 'collapseBooleanAttributes', value: true, label: "Collapse Boolean Attributes", toltip: "Boolean attributes—“selected”, “disabled”, “checked”, etc. instead of  <input disabled='disabled'>, convert to <input disabled>"},
	{name: 'removeEmptyElements', value: true, label: "Remove Empty Elements", toltip: "Remove Empty Elements. EX: <span></span>"},
	{name: 'removeEmptyAttributes', value: false, label: "Remove Empty Attributes", toltip: "Remove Empty Attributes. EX: class=''"},
	{name: 'collapseInlineTagWhitespace', value: false, label: "Collapse Inline Tag Whitespace", toltip: "Remove any spaces between display:inline; elements"},
	{name: 'conservativeCollapse', value: false, label: "Conservative Collapse", toltip: "Keep a space before and after each tag"},
	{name: 'keepClosingSlash', value: false, label: "Keep Closing Slash", toltip: "Keep the trailing slash on singleton elements"},
	{name: 'removeAttributeQuotes', value: false, label: "Remove Attribute Quotes", toltip: "Remove Attribute Quotes for single value. EX: class=btn"},
	{name: 'removeScriptTypeAttributes', value: false, label: "Remove Script `Type` Attributes", toltip: "Remove Script `Type` Attributes"},
	{name: 'removeStyleLinkTypeAttributes', value: false, label: "Remove Link `Type` Attributes", toltip: "Remove Link `Type` Attributes"},
	{name: 'sortAttributes', value: true, label: "Sort Attributes", toltip: "Sort attributes by frequency"},
	{name: 'sortClassName', value: true, label: "Sort Class Name", toltip: "Sort style classes by frequency"}
]


const html = ref('')
const htmlOptions = ref(htmlOptionsArr)
const cssClass = ref('')
const processing = ref(false)
const htmlLength = ref(0)
const showOutputModal = ref(false)
const outputHtml = ref('')
const upload = ref(false)
const genarate = ref(false)
const beautify = ref(false)

async function optimizeHtml() {
  showOutputModal.value = true;
  processing.value = true;
  var options = {collapseWhitespace: true}
  for (var val of htmlOptions.value) {
    options[val.name] = val.value;
  }
  await $fetch("/htmlTools", {
    method: "POST",
    body: html.value,
    headers: {
      options: JSON.stringify(options),
      beautify: beautify.value,
      "content-type": "application/octet-stream",
      "cache-control": "no-cache"
    }
  }).then((res) => {
    processing.value = false;
    outputHtml.value = res;
  }).catch((err) => {
    processing.value = false;
    outputHtml.value = "Something went wrong please try again";
  });
}


function copyToClipboard() {
	var range = document.createRange();
	range.selectNode(document.getElementById("outputHtml"));
	window.getSelection().removeAllRanges();
	window.getSelection().addRange(range);
	document.execCommand("copy");
	window.getSelection().removeAllRanges();
}

watch(html, async (val) => {
	htmlLength.value = val.length;
})

</script>
  
<template>
  <div>
    <div class="row">
      <div class="col-12">
        <ElementsBsCard formTitle="HTML Tools" titleClass="ps-3">
          <form @submit.prevent="optimizeHtml">
            <div class="pb-2">
              <div class="outputSettings me-3">
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

            <div class="input-group input-group-outline mt-4" :class="cssClass">
              <label class="form-label">All HTML </label>
              <textarea class="form-control" rows="10" v-model="html"></textarea>
            </div>
            <div class="text-end">
              <small>{{ htmlLength }} character</small>
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
            <h5 class="modal-title">Output ({{ outputHtml.length }} character)</h5>
            <button type="button" class="btn-close" @click="showOutputModal = false">
              <i class="material-icons">close</i>
            </button>
          </div>
          <div class="modal-body">
            <div v-if="processing" class="text-success text-center">
              <p>
                <ElementsSpinner color="green" v-if="!upload" /><i v-if="upload" class='material-icons'>task_alt</i>
                Uploading Your CODE.
              </p>
              <p v-if="upload">
                <ElementsSpinner color="green" v-if="!genarate && upload" /><i v-if="genarate"
                  class='material-icons'>task_alt</i> Genarating CODE.
              </p>
              <p v-if="genarate">
                <ElementsSpinner color="green" /> Downloading CODE.
              </p>
            </div>
            <div>
              <pre><code id="outputHtml" data-language="html" class="html">{{ outputHtml }}</code></pre>
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary" @click="showOutputModal = false">
              Close
            </button>
            <button v-if="outputHtml" class="btn btn-primary" @click="copyToClipboard">
              Copy code
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  
  <style scoped>
  #outputHtml {
    white-space: break-spaces;
  }
  
  .list-inline-item {
    min-width: 235px;
  }
  
  .todo input {
    display: none;
  }
  
  .form-check.active label {
    color: #fff !important
  }
  
  .toggle {
    cursor: pointer;
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
  
  .todo label {
    text-transform: capitalize;
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
  
  .form-check:not(.form-switch) .form-check-input[type="checkbox"]:after {
    content: "";
  }
  
  .form-check:not(.form-switch) .form-check-input[type="checkbox"] {
    margin: 1px 2px 0 0;
  }
  </style>
  