<script setup lang="ts">
import axios from 'axios'
import { ref } from 'vue'
useHead({
	title: "Reset Password - Organic Rankings"
});
definePageMeta({ layout: "public-layout" });

const form = ref({ email: '', confemail: '', captchaValid: false, })

async function passwordResetRequst(form) {
	if (form.email && form.confemail && form.captchaValid && form.email == form.confemail) {
		axios.post('/requstSignup', { email: form.email, confemail: form.confemail })
			.then(async function (res) {
				let data = res.data;

			}).catch((error) => {
				console.log(error);
			});

	} else {

	}
}
</script>

<template>
	<div v-once>
		<ElementsSingCard formTitle="Reset Password" titleClass="font-weight-bolder text-center text-uppercase h3">
			<form role="form" class="text-start" @submit.prevent="passwordResetRequst(form)">
				<ElementsInputEmail label="Email" v-model:email="form.email" :required="true" />
				<ElementsInputEmail label="Confirm Email" v-model:email="form.confemail" class="mt-4" :required="true" />
				<div class="mt-3">

					<ClientOnly fallback-tag="span" fallback=". . . . .">
						<ElementsCaptchaInput v-model:captchaValid="form.captchaValid" />
					</ClientOnly>
				</div>
				<div class="text-center mt-2">
					<button type="submit" class="btn btn-primary w-100 mt-3">Reset</button>
				</div>
				<SsrLinks :reset="false" />
			</form>
		</ElementsSingCard>
	</div>
</template>

<style>

</style>