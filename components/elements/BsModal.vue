<template>
	<button
		type="button"
		class="btn btn-primary"
		data-bs-toggle="modal"
		:data-bs-target="'#' + bsid"
	>
		Show The Modal
	</button>
	<Teleport to="body">
		<!-- Modal -->
		<div
			class="modal fade"
			:id="bsid"
			tabindex="-1"
			aria-hidden="true"
			data-bs-backdrop="static"
		>
			<div
				:class="[{ 'modal-dialog-scrollable': scrollable }, size]"
				class="modal-dialog"
			>
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title">{{ title }}</h5>
						<button
							type="button"
							class="btn-close"
							data-bs-dismiss="modal"
							aria-label="Close"
						>
							<i class="material-icons">close</i>
						</button>
					</div>
					<div class="modal-body">
						<slot />
					</div>
					<div class="modal-footer" v-if="footer">
						<button
							type="button"
							class="btn btn-secondary"
							data-bs-dismiss="modal"
						>
							Close
						</button>
					</div>
				</div>
			</div>
		</div>
	</Teleport>
</template>

<script setup>
const props = defineProps({
	bsid: {
		type: String,
		required: true,
	},
	title: {
		type: String,
		required: true,
	},
	scrollable: {
		type: Boolean,
		default: false,
	},
	size: {
		type: String,
		default: "",
		validator(value) {
			return ["", "modal-lg", "modal-xl"].includes(value);
		},
	},
	footer: {
		type: Boolean,
		default: true,
	},
});
</script>

<style scoped>
.btn-close {
	color: #333;
}
.btn-close .material-icons {
	vertical-align: top;
}
</style>
