<script setup lang="ts">
import axios from 'axios'
import { ref } from 'vue'
useHead({ title: "Reset Password - Organic Rankings" });
definePageMeta({ layout: "public-layout" });
const route = useRoute()
const hash = route.query.hash ?? ''
const formResponse = ref('')
const email = ref('')
const confemail = ref('')
const resetemail = ref('')
const password = ref('')
const confpassword = ref('')
const captchaValid = ref(false)

async function passwordResetRequst() {
	captchaValid.value = true
	if (email.value && confemail.value && email.value == confemail.value) {
		axios.post('/passwordresetrequst', { email: email.value, confemail: confemail.value })
			.then(async function (res) {
				if (res.data) {
					formResponse.value = `<span class='text-success'><i class='material-icons statusIcon'>check_circle</i> A reset link has been sent to your email</span>`
					email.value = ''
					confemail.value = ''
				}
				else
					formResponse.value = `<span class='text-danger'><i class='material-icons statusIcon'>warning</i> Something went wrong please try again later</span>`
			}).catch((error) => {
				formResponse.value = `<span class='text-danger'><i class='material-icons statusIcon'>warning</i> Something went wrong please try again later</span>`
			});

	} else {
		formResponse.value = `<span class='text-danger'><i class='material-icons statusIcon'>warning</i>Confemail Email dosen't match</span>`
	}

	setTimeout(function () { formResponse.value = ''; captchaValid.value = false }, 3000);
}
async function updatePassword() {
	captchaValid.value = true

	if (resetemail.value && password.value && confpassword.value && password.value == confpassword.value) {
		axios.post('/updatePassword', { password: password.value, confpassword: confpassword.value, email: resetemail.value, hash: hash })
			.then(async function (res) {
				if (res.data.status) {
					formResponse.value = `<span class='text-success'><i class='material-icons statusIcon'>check_circle</i> Password successfully updated</span>`
					resetemail.value = ''
					password.value = ''
					confpassword.value = ''
					setTimeout(function () { navigateTo('/'); }, 1000);
				}
				else
					formResponse.value = `<span class='text-danger'><i class='material-icons statusIcon'>warning</i>` + res.data.message + `</span>`
			}).catch((error) => {
				formResponse.value = `<span class='text-danger'><i class='material-icons statusIcon'>warning</i>Something went wrong please try again later</span>`
			});

	} else {
		formResponse.value = `<span class='text-danger'><i class='material-icons statusIcon'>warning</i>Password dosen't match</span>`
	}

	setTimeout(function () { formResponse.value = ''; }, 3000);
}
</script>

<template>
	<div v-once>

		<ElementsSingCard :formTitle="hash ? 'New Password' : 'Reset Password'"
			titleClass="font-weight-bolder text-center text-uppercase h3">
			<form v-if="hash" @submit.prevent="updatePassword()">
				<ElementsInputEmail label="Email" v-model:email="resetemail" :required="true" />
				<ElementsInputPassword label="New Password" v-model:password="password" class="mt-4" :required="true" />
				<ElementsInputPassword label="Confirm Password" v-model:password="confpassword" class="mt-4" :required="true" />
				<div class="text-center mt-2">
					<button type="submit" class="btn btn-primary w-100 mt-3">Update Password</button>
				</div>
				<div v-html="formResponse" class="text-center"></div>
			</form>
			<form v-else role="form" class="text-start" @submit.prevent="passwordResetRequst()">
				<ElementsInputEmail label="Email" v-model:email="email" :required="true" />
				<ElementsInputEmail label="Confirm Email" v-model:email="confemail" class="mt-4" :required="true" />
				<div class="mt-3">
					<ClientOnly fallback-tag="span" fallback="Loading Captcha . . . . .">
						<ElementsCaptchaInput v-model:captchaValid="captchaValid" />
					</ClientOnly>
				</div>
				<div class="text-center mt-2">
					<button type="submit" class="btn btn-primary w-100 mt-3">Send request</button>
				</div>
				<div v-html="formResponse" class="text-center"></div>
			</form>
			<SsrLinks :reset="false" />
		</ElementsSingCard>
	</div>
</template>

<style>

</style>