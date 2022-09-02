
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


Set up a new Prisma project
$ prisma init

Generate artifacts (e.g. Prisma Client)
$ npx prisma generate

Browse your data
$ npx prisma studio

Create migrations from your Prisma schema, apply them to the database, generate artifacts (e.g. Prisma Client)
$ prisma migrate dev

Pull the schema from an existing database, updating the Prisma schema
$ npx prisma db pull

Push the Prisma schema state to the database
$ prisma db push