<script setup lang="ts">
	import { ref  } from 'vue'
	useHead({
		title: "Reset Password - Organic Rankings"
	});
	definePageMeta({ layout: "public-layout" });

	const form = ref({ email: 'asd',confemail: '',captchaValid: false, })

	async function passwordResetRequst(form){
		if( form.email && form.confemail && form.captchaValid && form.email == form.confemail){
			const response = await $fetch("/passwordresetrequst", {
				method: "POST",
				body: { email: form.email, confemail: form.confemail },
			});
		}else{

		}
	}
</script>

<template>
	<div v-once>
		<ElementsBsCard formTitle="Reset Password" titleClass="font-weight-bolder text-center text-uppercase h3">
			<form role="form" class="text-start" @submit.prevent="passwordResetRequst(form)">
				<ElementsInputEmail label="Email" v-model:email="form.email" :required="true"/>
				<ElementsInputEmail label="Confirm Email" v-model:email="form.confemail" class="mt-4" :required="true"/>
				<div class="mt-4">
					<ElementsInputCaptcha v-model:captchaValid="form.captchaValid"/>
				</div>
				<div class="text-center mt-2">
					<button type="submit" class="btn bg-gradient-primary w-100 mt-3">Reset</button>
				</div>
				<SsrLinks :reset="false" />
			</form>
		</ElementsBsCard>
	</div>
</template>

<style>

.captcha button {
	position: absolute;
	top: -1px;
	right: 0;
	padding: 10px 7px !important;
	border-right: 0;
	height: calc(100% + 2px);
	z-index: 5;
	background: #fff;
}
.captcha .layar{
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}
.btn-outline-primary .material-icons{
	font-size: 25px;
	transition: 0.5s transform;
}
.captcha {
	position: relative;
	font-family: 'Rubik Iso', cursive;
	font-size: 33px;
	line-height: 1.2;
	padding-left: 8px;
	border: 1px solid #e91e63;
	color: #e91e63;
	border-radius: 10px;
	-webkit-touch-callout: none;
    -webkit-user-select: none;
     -khtml-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
	background-image: linear-gradient(45deg, transparent 20%, brown 25%, transparent 25%),
                      linear-gradient(-45deg, transparent 20%, brown 25%, transparent 25%),
                      linear-gradient(-45deg, transparent 75%, brown 80%, transparent 0);
  background-size: 20px 20px, 20px 20px;

}
.btn-outline-primary{
	margin: 0;
}

.refresh:focus,
.refresh.btn-outline-primary:hover:not(.active){
	background: #fff !important;
	color: #e91e63;
	box-shadow: none !important;
	opacity: 1;
}
</style>