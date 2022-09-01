<script>
export default {
  props: {label:String, email:String,required: {type: Boolean,default: false}},
  emits: ['update:email'],
  data() {
    return {
      inputClass: ""
    };
  },
  watch: {
    email: function (val, oldVal) {
      this.inputClass = "";
      if (val != "") {
        if (val.match(/^([\w-\.]{2,4})+@([\w-]{2,4})+\.+[\w-]{2,4}$/)) {
          this.inputClass = "is-valid";
        } else {
          this.inputClass = "is-invalid";
        }
      }
    }
  },
};
</script>

<template>
  <div class="input-group input-group-outline mt-3" :class="inputClass">
    <label class="form-label">{{ label }}</label>
    <input :value="email" @input="$emit('update:email', $event.target.value)" class="form-control" type="email" :required="required" />
  </div>
</template>


<style scoped>

</style>

