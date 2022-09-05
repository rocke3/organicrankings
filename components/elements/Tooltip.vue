<script setup>
 defineProps({
		tooltip: "",
});
</script>

<template>
  <div class="cus-tooltip">
    <slot />
    <span class="cus-tooltiptext">{{tooltip}}</span>
  </div>
</template>

<style scoped>
.cus-tooltip {
  position: relative;
  display: inline-block;
}

.cus-tooltip .cus-tooltiptext {
  visibility: hidden;
  width: 220px;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px;
  position: absolute;
  z-index: 10;
  bottom: 150%;
  left: 50%;
  margin-left: -60px;
  opacity: 0;
  transition: opacity 0.3s;
  transform: translate(-25%);
}

.cus-tooltip .cus-tooltiptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}

.cus-tooltip:hover .cus-tooltiptext {
  visibility: visible;
  opacity: 1;
}
</style>