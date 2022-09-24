<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  class: {
    type: String,
    required: true,
  }
});
</script>

<template>
  <div class="row d-flex justify-content-center" :class="class">
    <div class="progress blue">
      <span class="progress-left">
        <span class="progress-bar"></span>
      </span>
      <span class="progress-right">
        <span class="progress-bar"></span>
      </span>
      <div class="progress-value">{{text}}</div>
    </div>
  </div>
</template>

<style scoped>
.progress {
  width: 36px;
  height: 35px !important;
  float: left;
  line-height: 50px;
  background: none;
  box-shadow: none;
  position: relative;
}

.progress:after {
  content: "";
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 3px solid #fff;
  position: absolute;
  top: 0;
  left: 0;
}

.progress>span {
  width: 50%;
  height: 100%;
  overflow: hidden;
  position: absolute;
  top: 0;
  z-index: 1;
}

.progress .progress-left {
  left: 0;
}

.progress .progress-bar {
  width: 100%;
  height: 100%;
  background: none;
  border-width: 3px;
  border-style: solid;
  position: absolute;
  top: 0;
}

.progress .progress-left .progress-bar {
  left: 100%;
  border-top-right-radius: 80px;
  border-bottom-right-radius: 80px;
  border-left: 0;
  -webkit-transform-origin: center left;
  transform-origin: center left;
}

.progress .progress-right {
  right: 0;
}

.progress .progress-right .progress-bar {
  left: -100%;
  border-top-left-radius: 80px;
  border-bottom-left-radius: 80px;
  border-right: 0;
  -webkit-transform-origin: center right;
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
  transform-origin: center right;
}



.progress .progress-value {
  width: 100%;
  height: 100%;
  font-size: 10px;
  color: #000;
  text-align: center;
  line-height: 3.5;
  position: absolute;
  top: 0;
  left: 0%;
  z-index: 5;
  text-align: center;
}

.progress.blue .progress-bar {
  border-color: #049dff;
}

.progress.blue .progress-left .progress-bar {
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
}

.animate .progress .progress-right .progress-bar {
  animation: loading-1 900s linear forwards 900s;
}

.animate .progress.blue .progress-left .progress-bar {
  animation: loading-2 900s linear forwards;
}

.progress.yellow .progress-bar {
  border-color: #fdba04;
}


.progress.yellow .progress-left .progress-bar {
  animation: none;
}

@keyframes loading-1 {

  100% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
}

@keyframes loading-2 {


  100% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
}
</style>