
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

pm2 start app.js --name "css" -i max


# To customize this VirtualHost use an include file at the following location
# Include "/etc/apache2/conf.d/userdata/ssl/2_4/organicrankings/app.organicrankings.com/*.conf"

ProxyPass "/app" "http://132.148.77.56:3000/"
ProxyPassReverse "/app" "http://132.148.77.56:3000/""

/scripts/ensure_vhost_includes --user=organicrankings
/scripts/rebuildhttpdconf
/scripts/restartsrv_httpd