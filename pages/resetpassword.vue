<script setup lang="ts">
import axios from 'axios'
import { ref } from 'vue'
useHead({
	title: "Reset Password - Organic Rankings"
});
definePageMeta({ layout: "public-layout" });

const formResponse = ref('')
const email = ref('')
const confemail = ref('')
const captchaValid = ref(false)

async function passwordResetRequst(form) {
	captchaValid.value = true
	if (email.value && confemail.value && email.value == confemail.value) {
		axios.post('/passwordresetrequst', { email: email.value, confemail: confemail.value })
			.then(async function (res) {
				let data = res.data;
				if (res.data)
					formResponse.value = `<span class='text-success'><i class='material-icons statusIcon'>check_circle</i>A reset link has been sent to your email</span>`
				else
					formResponse.value = `<span class='text-danger'><i class='material-icons statusIcon'>warning</i>Something went wrong please try again later</span>`
			}).catch((error) => {
				formResponse.value = `<span class='text-danger'><i class='material-icons statusIcon'>warning</i>Something went wrong please try again later</span>`
			});

	} else {
		formResponse.value = `<span class='text-danger'><i class='material-icons statusIcon'>warning</i>Confemail Email dosen't match</span>`
	}
	email.value = ''
	confemail.value = ''
	setTimeout(function () { formResponse.value = ''; captchaValid.value = false }, 3000);
}
</script>

<template>
	<div v-once>
		<ElementsSingCard formTitle="Reset Password" titleClass="font-weight-bolder text-center text-uppercase h3">
			<form role="form" class="text-start" @submit.prevent="passwordResetRequst()">
				<ElementsInputEmail label="Email" v-model:email="email" :required="true" />
				<ElementsInputEmail label="Confirm Email" v-model:email="confemail" class="mt-4" :required="true" />
				<div class="mt-3">
					<ClientOnly fallback-tag="span" fallback="Loading Captcha . . . . .">
						<ElementsCaptchaInput v-model:captchaValid="captchaValid" />
					</ClientOnly>
				</div>
				<div class="text-center mt-2">
					<button type="submit" class="btn btn-primary w-100 mt-3">Reset</button>
				</div>
				<div v-html="formResponse" class="text-center"></div>
				<SsrLinks :reset="false" />
			</form>
		</ElementsSingCard>
	</div>
</template>

<style>

</style>