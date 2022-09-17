<script setup>
import { ref, watch } from 'vue'
definePageMeta({ layout: "app-layout" });
useHead({ title: "CSS Tools - Organic Rankings" });

const website = ref('https://www.organicrankings.com/')
const css = ref('')
const urlClass = ref('')
const cssClass = ref('')
const processing = ref(false)
const cssLength = ref(0)
const showOutputModal = ref(false)
const outputcss = ref('')
const upload = ref(false)
const genarate = ref(false)
const beautify = ref(false)
const todo = ref('critical')
const optimize = ref(1)



function copyToClipboard() {
	var range = document.createRange();
	range.selectNode(document.getElementById("criricalcss"));
	window.getSelection().removeAllRanges();
	window.getSelection().addRange(range);
	document.execCommand("copy");
	window.getSelection().removeAllRanges();
}

async function genarateCss() {
	if (website.value) {
		showOutputModal.value = true;
		processing.value = true;
		upload.value = false;
		genarate.value = false;
		outputcss.value = "";
		urlClass.value = "";
		cssClass.value = "";
		window.setTimeout(() => { if (processing.value) { upload.value = true; } }, 1500);
		window.setTimeout(() => { if (processing.value) { genarate.value = true; } }, 3000);


		await $fetch("https://www.organicrankings.com/cssapi", {
			method: "POST",
			body: css.value,
			headers: {
				website: website.value,
				todo: todo.value,
				optimize: optimize.value,
				output: beautify.value ? 'beautify' : 'minify',
				"content-type": "application/octet-stream",
				"url": "https://www.organicrankings.com/",
				"cache-control": "no-cache"
			}
		}).then((res) => {
			processing.value = false;
			outputcss.value = res;
		}).catch((err) => {
			processing.value = false;
			outputcss.value = "Something went wrong please try again";
		});
	} else {
		if (!website.value) {
			urlClass.value = "is-invalid"
		}
		if (!css.value) {
			cssClass.value = "is-invalid"
		}
	}
}

watch(css, async (val) => {
	cssLength.value = val.length;
})

</script>

<template>
	<div>
		<div class="row">
			<div class="col-12">
				<ElementsBsCard formTitle="CSS Tools" titleClass="ps-3">
					<form @submit.prevent="genarateCss">

						<div class="todo">
							<div class="form-check form-check-radio btn btn-outline-primary me-3 mb-3 p-0"
								:class="todo == 'critical' ? 'active' : ''">
								<label class="form-check-label m-0 px-3 py-2">
									<input class="form-check-input me-1" type="radio" name="option" value="critical" v-model="todo"
										checked>
									Genarate Critical CSS
								</label>
							</div>
							<div class="form-check form-check-radio btn btn-outline-primary me-3 mb-3 p-0"
								:class="todo == 'minify' ? 'active' : ''">
								<label class="form-check-label m-0 px-3 py-2">
									<input class="form-check-input me-1" type="radio" name="option" value="minify" v-model="todo">
									Minify CSS
								</label>
							</div>
							<div class="form-check form-check-radio btn btn-outline-primary p-0  mb-3"
								:class="todo == 'beautify' ? 'active' : ''">
								<label class="form-check-label m-0 px-3 py-2">
									<input class="form-check-input me-1" type="radio" name="option" value="beautify" v-model="todo">
									Beautify CSS
								</label>
							</div>
						</div>

						<div class="input-group input-group-outline mt-3" :class="urlClass" v-if="todo == 'critical'">
							<label class="form-label">Website URL</label>
							<input type="url" class="form-control" v-model="website" />
						</div>


						<div class="pb-2">
							<div class="outputSettings me-3" v-if="todo == 'critical'">
								<label class="settingLvl">Output Settings</label>
								<div class="form-check form-switch d-flex align-items-center">
									<div class="toggle me-1" :class="{ 'text-primary': !beautify }" @click="beautify = false">Minify</div>
									<div class="ms-5 me-2">
										<input class="form-check-input" type="checkbox" v-model="beautify" />
									</div>
									<div class="toggle " :class="{ 'text-primary': beautify }" @click="beautify = true">Beautify</div>
								</div>
							</div>

							<div class="outputSettings" v-if="todo == 'minify' || (todo == 'critical' && !beautify)">
								<label class="settingLvl">Optimization</label>
								<div class="form-check form-check-radio optimize p-0">
									<label class="form-check-label m-0 pe-3">
										<input class="form-check-input" type="radio" name="optimize" value="0" v-model="optimize">
										<ElementsTooltip tooltip="No Optimization">NO</ElementsTooltip>
									</label>
									<label class="form-check-label m-0 pe-3">
										<input class="form-check-input" type="radio" name="optimize" value="1" v-model="optimize" checked>
										<ElementsTooltip
											tooltip="Level 1 optimization. Turn rgb colors to a shorter hex representation, remove comments">
											Level 1</ElementsTooltip>
									</label>
									<label class="form-check-label m-0 pe-3">
										<input class="form-check-input" type="radio" name="optimize" value="2" v-model="optimize">
										<ElementsTooltip
											tooltip="Level 2 optimization. Turn rgb colors to a shorter hex representation, remove comments, remove duplicate rules, remove properties redefined further down a stylesheet, or restructure rules by moving them around.">
											Level 2</ElementsTooltip>
									</label>
								</div>
							</div>
						</div>

						<div class="input-group input-group-outline mt-4" :class="cssClass">
							<label class="form-label">All CSS </label>
							<textarea class="form-control" rows="10" v-model="css"></textarea>
						</div>
						<small class="text-info">Copy all CSS styles from your website and paste them above.</small>
						<small class="cssLength">{{ cssLength }} character</small>
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
		<div class="modal fade show" aria-modal="true" role="dialog" v-if="showOutputModal">
			<div class="modal-dialog modal-dialog-scrollable modal-xl">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title">CSS Output ({{ outputcss.length }} character)</h5>
						<button type="button" class="btn-close" @click="showOutputModal = false">
							<i class="material-icons">close</i>
						</button>
					</div>
					<div class="modal-body">
						<div v-if="processing" class="text-success text-center">
							<p>
								<ElementsSpinner color="green" v-if="!upload" /><i v-if="upload" class='material-icons'>task_alt</i>
								Uploading Your CSS.
							</p>
							<p v-if="upload">
								<ElementsSpinner color="green" v-if="!genarate && upload" /><i v-if="genarate"
									class='material-icons'>task_alt</i> Genarating Critical CSS.
							</p>
							<p v-if="genarate">
								<ElementsSpinner color="green" /> Downloading Critical CSS.
							</p>
						</div>
						<div id="criricalcss">
							<pre v-if="todo == 'beautify' || (todo == 'critical' && beautify)">{{ outputcss }}</pre>
							<div v-else>{{ outputcss }}</div>
						</div>
					</div>
					<div class="modal-footer">
						<button class="btn btn-secondary" @click="showOutputModal = false">
							Close
						</button>
						<button v-if="outputcss" class="btn btn-primary" @click="copyToClipboard">
							Copy Css
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>


<style scoped>
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
