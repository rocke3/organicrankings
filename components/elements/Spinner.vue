<script setup>
const props = defineProps({
	color: {
		default: "white",
	},
});
</script>

<template>
	<div class="lds-ring" >
		<div :style="{ 'border-left-color': color}"></div>
		<div :style="{ 'border-left-color': color}"></div>
		<div :style="{ 'border-left-color': color}"></div>
		<div :style="{ 'border-left-color': color}"></div>
	</div>
</template>



<style scoped>
.lds-ring {
	vertical-align: text-top;
	display: inline-block;
	position: relative;
	width: 22px;
	height: 12px;
}
.lds-ring div {
	box-sizing: border-box;
	display: block;
	position: absolute;
	width: 18px;
	height: 18px;
	margin: 0px;
	border: 3px solid;
	border-radius: 50%;
	animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
	border-color: transparent;
}
.lds-ring div:nth-child(1) {
	animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
	animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
	animation-delay: -0.15s;
}
@keyframes lds-ring {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
</style>
