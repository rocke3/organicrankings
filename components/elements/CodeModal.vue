<script setup>
const props = defineProps({
	showModal: {
		type: Boolean,
		default: false,
	},
	title: {
		type: String,
		default: "Output Code",
	},
	body: {
		type: String
	},
	error: {
		type: String,
	},
	scrollable: {
		type: Boolean,
		default: false,
	},
	size: {
		type: String,
		default: "modal-xl",
		validator(value) {
			return ["modal-sm", "modal-lg", "modal-xl"].includes(value);
		},
	},
	copyBtnTxt: {
		type: String,
		default: "Copy Code",
	},
	footer: {
		type: Boolean,
		default: true,
	},
	progress: {
		type: Number,
		default: 0,
	},
});
defineEmits(['update:showModal'])
const copyBtnTxt = ref(props.copyBtnTxt)

function copyToClipboard() {
	let range = document.createRange();
	range.selectNode(document.getElementById("outputCode"));
	window.getSelection().removeAllRanges();
	window.getSelection().addRange(range);
	document.execCommand("copy");
	window.getSelection().removeAllRanges();
	let btnTxt = copyBtnTxt.value;
	copyBtnTxt.value = "&#10004; Copied"
	setTimeout(function () {
		copyBtnTxt.value = btnTxt
	}, 500)
}
</script>

<template>
	<div class="modal fade show" aria-modal="true" role="dialog" v-if="showModal">
		<div class="modal-dialog modal-dialog-scrollable" :class="size">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title">{{ title }}</h5>
					<button type="button" class="btn-close" @click="$emit('update:showModal', false);">
						<i class="material-icons">close</i>
					</button>
				</div>
				<div class="modal-body">

					<!-- The Process view -->
					<div v-if="progress" class="text-success text-center">
						<p>
							<ElementsSpinner color="green" v-if="progress == 1" /><i v-if="progress > 1"
								class='material-icons'>task_alt</i>
							Uploading Code.
						</p>
						<p v-if="progress > 1">
							<ElementsSpinner color="green" v-if="progress == 2" /><i v-if="progress > 2"
								class='material-icons'>task_alt</i> Genarating Code.
						</p>
						<p v-if="progress == 3">
							<ElementsSpinner color="green" /> Downloading Code.
						</p>
					</div>

					<slot></slot>

					<!-- Output code -->
					<div v-if="error" class="text-center">
						<div class="d-flex justify-content-center mb-2">
							<div class="alert alert-danger text-white text-bold px-5" v-html="error"></div>
						</div>
						<p class="text-bold text-danger">Click below button to Activate / Upgrade subscription</p>
						<a href="" class="btn btn-primary">Subscription</a>
					</div>
					<pre v-else><code id="outputCode">{{ body }}</code></pre>
				</div>
				<div class="modal-footer" v-if="footer">
					<button class="btn btn-secondary" @click="$emit('update:showModal', false);">
						Close
					</button>
					<button class="btn btn-primary" @click="copyToClipboard" v-html="copyBtnTxt"></button>
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

#outputCode {
	white-space: break-spaces;
}
</style>
