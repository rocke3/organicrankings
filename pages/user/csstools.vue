<script setup>
import { ref, watch } from 'vue'
import axios from 'axios'
definePageMeta({ layout: "user-layout" });
useHead({ title: "CSS Tools - Organic Rankings" });

const website = ref('')
const css = ref('')
const urlClass = ref('')
const cssClass = ref('')
const processing = ref(false)
const cssLength = ref(0)
const showOutputModal = ref(false)
const outputcss = ref('')
const outputError = ref('')
const beautify = ref(false)
const todo = ref('critical')
const optimize = ref(1)
const websiteInput = ref(null);

let progress = ref(0)

async function genarateCss() {
	outputError.value = '';
	if (css.value) {
		let requiredWebsite = todo.value == 'critical' ? true : false;
		if (!requiredWebsite || (website.value != '')) {

			showOutputModal.value = true;
			processing.value = true;
			progress.value = 1;
			outputcss.value = "";
			urlClass.value = "";
			cssClass.value = "";

			axios.post('https://www.organicrankings.com/api/csstool', css.value, {
				headers: {
					'Content-Type': 'application/octet-stream',
					authorization: useCookie('org_user').value,
					website: website.value,
					todo: todo.value,
					optimize: optimize.value,
					output: beautify.value ? 'beautify' : 'minify',
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
						outputcss.value = data;
					}
				})
				.catch(function (error) {
					processing.value = false;
					outputcss.value = "Something went wrong please try again";
				});
		} else {
			urlClass.value = "is-invalid"
			websiteInput.value.focus();
		}
	} else {
		cssClass.value = "is-invalid"
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
							<input type="url" class="form-control" v-model="website" ref="websiteInput" />
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
		<ElementsCodeModal :showModal="showOutputModal" :body="outputcss" :error="outputError" :progress="progress" />

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
