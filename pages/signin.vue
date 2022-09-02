<script setup>
import { ref } from 'vue'
useHead({ title: "Sign in - Organic Rankings" });
definePageMeta({ layout: "public-layout" });

const checking = ref(false)
const loginStatus = ref('')
const email = ref('test@gmail.com')
const password = ref('123456')
const emailCls = ref('')
const passCls = ref('')

async function requstSignin() {
	const router = useRouter();
	checking.value = true;
	const response = await $fetch("/requstSignin", {
		method: "POST",
		body: { email: email.value, password: password.value },
	});
	if (response.login) {
		loginStatus.value = "<span class='text-success'><i class='material-icons statusIcon'>task_alt</i>Login Sucess.</span>";
		router.push("/app");
	} else {
		loginStatus.value = `<span class='text-danger'><i class='material-icons statusIcon'>warning</i>${response.message}</span>`;
	}
	checking.value = false;
	window.setInterval(() => {
		loginStatus.value = "";
	}, 3500);
}

</script>


<template>
	<div v-once>
		<ElementsBsCard formTitle="Sign In" titleClass="font-weight-bolder text-center text-uppercase h3">
			<form role="form" class="text-start" @submit.prevent="requstSignin">
				<ElementsInputEmail label="Email" v-model:email="email" :class="emailCls" :required="true" />
				<ElementsInputPassword label="Password" v-model:password="password" class="mt-4" :class="passCls"
					:required="true" />
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
		</ElementsBsCard>
	</div>
</template>

<style>
i.material-icons.statusIcon {
	vertical-align: text-bottom;
	margin-right: 5px;
}
</style>