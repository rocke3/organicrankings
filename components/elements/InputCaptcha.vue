<script setup>
import { ref  } from 'vue'
useHead({
	link: [{ body: true, rel:"stylesheet", href: "https://fonts.googleapis.com/css2?family=Rubik+Iso&display=swap" }],
});
defineProps(['captchaValid'])
defineEmits(['update:captchaValid'])

const rotate = ref(0)
const { pending, data: captchaCode } = useLazyAsyncData('captchaCode', () => $fetch('/loadcaptcha'))

function refresh($emit) {
	rotate.value = rotate.value+360;
  $emit('update:captchaValid', false )
	document.getElementById("refresh").style.transform = `rotate(${rotate.value}deg)`;
	refreshNuxtData('captchaCode')
}
</script>

<template>
  <div class="row">
    <div class="col-7">
      <div class="captcha outline-primary" >
        {{ pending ? '. . . . .' : captchaCode }}
        <button type="button" class="btn btn-outline-primary refresh" @click="refresh($emit)">
          <i class="material-icons" id="refresh">sync</i>
        </button>
        <div class="layar"></div>
      </div>
    </div>
    <div class="col-5">
      <div class="input-group input-group-outline">
        <label class="form-label">Captcha</label>
        <input @input="$emit('update:captchaValid', ($event.target.value == captchaCode) ? true : false )" type="text" class="form-control" required/>
      </div>
    </div>
  </div>
</template>


<style scoped>

</style>
