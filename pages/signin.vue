<script setup>
import axios from 'axios'
import { ref } from 'vue'
useHead({ title: "Sign in - Organic Rankings" });
definePageMeta({ layout: "public-layout" });

const checking = ref(false)
const loginStatus = ref('')
const email = ref('test@gmail.com')
const password = ref('123456')
const captcha = ref(false)
const emailCls = ref('')
const passCls = ref('')

async function signinRequst() {
	const router = useRouter();
	if (captcha.value) {
		checking.value = true;
		axios.post('/signinRequst', { email: email.value, password: password.value })
			.then(async function (res) {
				let data = res.data;
				if (data.login) {
					navigateTo("/user");
				} else {
					loginStatus.value = `<span class='text-danger'><i class='material-icons statusIcon'>warning</i>${data.message ?? "Something went wrong please try again later"}</span>`;
				}
			}).catch((error) => {
				console.log(error);
			});

		checking.value = false;
		window.setInterval(() => {
			loginStatus.value = "";
		}, 5000);
	}
}

function getOrgCookie(name) {
	var match = document.cookie.match(RegExp('(?:^|;\\s*)' + name + '=([^;]*)'));
	return match ? match[1] : null;
}
if (process.client) {
	if (getOrgCookie("org_user") != null) {
		navigateTo("/user");
	}
}
</script>

<template>
	<div v-once>

		<ElementsSingCard formTitle="Sign In" titleClass="font-weight-bolder text-center text-uppercase h3">
			<form role="form" class="text-start" @submit.prevent="signinRequst" id="formId">
				<ElementsInputEmail label="Email" v-model:email="email" :class="emailCls" :required="true" />
				<ElementsInputPassword label="Password" v-model:password="password" class="mt-4" :class="passCls"
					:required="true" />
				<div class="mt-3">
					<ElementsInputCaptcha v-model:captchaValid="captcha" />
				</div>
				<div class="form-check form-switch d-flex align-items-center mb-3 mt-4">
					<input class="form-check-input" type="checkbox" id="rememberMe" />
					<label class="form-check-label mb-0 ms-3" for="rememberMe">
						Remember me
					</label>
				</div>
				<div class="text-center">
					<button type="submit" class="btn bg-gradient-primary w-100 mt-2">
						<span v-if="!checking">Sign in</span>
						<div v-if="checking">
							<ElementsSpinner /> Checking
							<ElementsProcessing />
						</div>
					</button>
				</div>
				<div class="text-center" v-bind:innerHTML="loginStatus"></div>
				<SsrLinks :signin="false" />
			</form>
		</ElementsSingCard>
	</div>
</template>

<style>
i.material-icons.statusIcon {
	vertical-align: text-bottom;
	margin-right: 5px;
}
</style>