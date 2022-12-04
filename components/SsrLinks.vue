// Sign in, Sign up & Reset Password link
<template>
	<p class="mt-2 mb-3 text-sm d-flex justify-content-between">
		<NuxtLink v-if="signin" class="text-primary font-weight-bold" to="/signin">
			<i class="material-icons">fingerprint</i> Sign in
		</NuxtLink>
		<NuxtLink v-if="signup" class="text-primary font-weight-bold" to="/signup">
			<i class="material-icons">person_add</i> Sign up
		</NuxtLink>
		<NuxtLink v-if="reset" class="text-primary font-weight-bold" to="/resetpassword">
			<i class="material-icons">lock</i> Reset Password
		</NuxtLink>
	</p>
</template>

<script setup>
const props = defineProps({
	signin: {
		default: true,
	},
	signup: {
		default: true,
	},
	reset: {
		default: true,
	},
});
</script>

<style scoped>
i.material-icons {
	vertical-align: text-bottom;
}
</style>
