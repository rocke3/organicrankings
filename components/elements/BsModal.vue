<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    default: 'modal-lg',
    validator(value) {
      return ["modal-sm", "modal-lg", "modal-xl"].includes(value);
    },
  },
  showModal: {
    type: Boolean,
    default: false,
  }
});
defineEmits(['update:showModal'])
</script>
<template>
  <div class="modal fade show" aria-modal="true" role="dialog" v-if="showModal">
    <div class="modal-dialog" :class="size">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ title }}</h5>
          <button type="button" class="btn-close" aria-label="Close" @click="$emit('update:showModal', false);"><i
              class="material-icons">close</i></button>
        </div>
        <div class="modal-body">
          {{ showModal }}
          <slot />
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="$emit('update:showModal', false);">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.modal {
  display: block;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-body .material-icons {
  vertical-align: middle;
}

.btn-close {
  padding: 0;
}

.btn-close .material-icons {
  color: black;
  vertical-align: top;
}
</style>
