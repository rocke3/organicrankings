<script setup lang="ts">
import { ref  } from 'vue'
useHead({ title: "Sign up - Organic Rankings" });
definePageMeta({
	layout: "public-layout",
});

const email = ref('')
const password = ref('')
const confpassword = ref('')
</script>

<template>
	<div v-once>
		<ElementsBsCard formTitle="Sign Up" titleClass="font-weight-bolder text-center text-uppercase h3">
			<form role="form" class="text-start">
				<ElementsInputEmail label="Email" v-model:email="email"/>
				<ElementsInputPassword label="Password" v-model:password="password" class="mt-4"/>
				<ElementsInputPassword label="Confirm Password" v-model:password="confpassword" class="mt-4"/>
				<div class="text-center">
					<button type="button" class="btn bg-gradient-primary w-100 mt-4">
						Sign up
					</button>
				</div>
				<SsrLinks :signup="false" />
			</form>
		</ElementsBsCard>
	</div>
</template>

