<script setup>
import { ref } from 'vue'
import axios from 'axios'
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
      <div class="captcha outline-primary w-100">
        {{ captchaCode == '' ? '. . . . .' : captchaCode }}
        <button type="button" class="btn btn-outline-primary refresh" @click="refresh($emit)">
          <i class="material-icons" id="refresh">sync</i>
        </button>
        <div class="layar"></div>
      </div>
    </div>
    <div class="col-5">
      <div class="input-group input-group-outline" :class="captchaError ? 'captchaError' : ''">
        <label class="form-label">Captcha</label>
        <input @input="$emit('update:captchaValid', ($event.target.value == captchaCode) ? true : false)" type="text"
          class="form-control" v-model="captchaInput" ref="captha" required />
      </div>
    </div>
  </div>
</template>


<style scoped>
input {
  transition: 0s all !important;
}

.captcha button {
  position: absolute;
  top: -1px;
  right: 0;
  padding: 7px !important;
  border-right: 0;
  height: calc(100% + 2px);
  z-index: 5;
  background: #fff;
}

.captcha .layar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.btn-outline-primary .material-icons {
  font-size: 25px;
  transition: 0.3s transform;
}

.captcha {
  position: relative;
  font-family: 'Rubik Iso', cursive;
  font-size: 33px;
  line-height: 1.2;
  padding-right: 40px;
  text-align: center;
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

.btn-outline-primary {
  margin: 0;
}

.refresh:focus,
.refresh.btn-outline-primary:hover:not(.active) {
  background: #fff !important;
  color: #e91e63;
  box-shadow: none !important;
  opacity: 1;
}

.captchaError input {
  border-color: red !important;
}

@media only screen and (max-width: 400px) {
  .captcha {
    font-size: 30px
  }
}
</style>
