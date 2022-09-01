<script lang="ts">
export default {
  props: {label:String, password:String,required: {type: Boolean,default: false}},
  emits: ['update:password'],
  data() {
    return {
      inputClass: "",
    };
  },
  watch: {
    password: function (val) {
      this.inputClass = "";
      if (val != "") {
        if (val.length > 5) {
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
  <div class="passGrpup">
    <div class="input-group input-group-outline mt-3" :class="inputClass">
      <label class="form-label">{{ label }}</label>
      <input :value="password" @input="$emit('update:password', $event.target.value)" class="form-control" type="password" :required="required"  />
    </div>
  </div>
</template>


<style scoped>

</style>
