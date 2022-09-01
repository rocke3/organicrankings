
<script setup lang="ts">
import { ref, watch } from 'vue'
defineProps(['label', 'email'])
defineEmits(['update:email'])
const variable = ref(2)

watch(variable, async (newVal) => {
  this.inputClass = "";
      if (val != "") {
        if (val.match(/^([\w-\.]{2,4})+@([\w-]{2,4})+\.+[\w-]{2,4}$/)) {
          this.inputClass = "is-valid";
        } else {
          this.inputClass = "is-invalid";
        }
      }
})

</script>

<i class="material-icons opacity-10">code</i>