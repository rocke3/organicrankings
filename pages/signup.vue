<script setup lang="ts">
import { ref } from 'vue'
useHead({ title: "Sign up - Organic Rankings" });
definePageMeta({
	layout: "public-layout",
});

const checking = ref(false)
const email = ref('')
const emailCls = ref('')
const signupStatus = ref('')
const password = ref('')
const confpass = ref('')

async function requstSignup() {
	if ((email.value && email.value.length > 7) && (password.value && password.value.length > 5) && (password.value === confpass.value)) {
		const router = useRouter();
		checking.value = true;
		const response = await $fetch("/requstSignup", {
			method: "POST",
			body: { email: email.value, password: password.value, confpass: confpass.value },
		});
		if (response.signup) {
			router.push("/app");
		} else {
			signupStatus.value = `<span class='text-danger'><i class='material-icons statusIcon'>warning</i>${response.message}</span>`;
		}
		checking.value = false;
		window.setInterval(() => {
			signupStatus.value = "";
		}, 3500);
	} else {
		if (!email.value || email.value.length < 6)
			emailCls.value = "is-invalid";

		window.setInterval(() => {
			emailCls.value = "";
		}, 2000);
	}
}
</script>

<template>
	<div v-once>
		<ElementsBsCard formTitle="Sign Up" titleClass="font-weight-bolder text-center text-uppercase h3">
			<form role="form" class="text-start" @submit.prevent="requstSignup">
				<ElementsInputEmail label="Email" v-model:email="email" :class="emailCls" :required="true" />
				<ElementsInputPassword label="Password" v-model:password="password" class="mt-4" />
				<ElementsInputPassword label="Confirm Password" v-model:password="confpass" class="mt-4" />
				<div class="text-center">
					<button type="submit" class="btn bg-gradient-primary w-100 mt-2">
						<span v-if="!checking">Sign up</span>
						<div v-if="checking">
							<ElementsSpinner /> Checking
							<ElementsProcessing />
						</div>
					</button>
				</div>
				<div class="text-center" v-bind:innerHTML="signupStatus"></div>
				<SsrLinks :signup="false" />
			</form>
		</ElementsBsCard>
	</div>
</template>

