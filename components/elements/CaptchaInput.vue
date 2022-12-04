<script setup>
import { ref } from 'vue'
useHead({
  link: [{ body: true, rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Rubik+Iso&display=swap" }],
});
defineProps(['captchaValid'])
defineEmits(['update:captchaValid'])

const rotate = ref(0)
const captchaError = ref(false)
const captchaInput = ref('')
let captchaCode = ref(makeCaptcha(4))

function refresh($emit) {
  rotate.value = rotate.value + 360;
  $emit('update:captchaValid', false)
  document.getElementById("refresh").style.transform = `rotate(${rotate.value}deg)`;
  captchaCode.value = makeCaptcha(4)
}

function makeCaptcha(length) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
watch(captchaInput, (newVal, oldVAl) => {
  captchaError.value = false
  if (captchaCode.value != newVal && newVal != '') {
    captchaError.value = true
  }
});

</script>

<template>
  <div class="row pt-2">
    <div class="col-7">
      <div class="captcha w-100">
        <ClientOnly fallback-tag="span" fallback=". . . . .">
          {{ captchaCode == '' ? '. . . . .' : captchaCode }}
        </ClientOnly>

        <button type="button" class="btn btn-outline-primary refresh" @click="refresh($emit)">
          <i class="material-icons" id="refresh">sync</i>
        </button>
        <div class="layar"></div>
      </div>
    </div>
    <div class="col-5">
      <div class="input-group input-group-outline captchaInput" :class="captchaError ? 'captchaError' : ''">
        <label class="form-label">Captcha</label>
        <input @input="$emit('update:captchaValid', ($event.target.value == captchaCode) ? true : false)" type="text"
          class="form-control" v-model="captchaInput" :pattern="captchaCode"
          oninvalid="this.setCustomValidity(this.validity.valueMissing ? 'Captcha cannot be empty' : 'Invalid Captcha')"
          oninput="this.setCustomValidity(this.validity.patternMismatch ? 'Invalid Captcha' : '')" required />
      </div>
    </div>
  </div>
</template>


<style scoped>

</style>
