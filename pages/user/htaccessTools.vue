<script setup>
import { ref, watch } from 'vue'
import axios from "axios";
definePageMeta({ layout: "user-layout" });
useHead({ title: "Text Tools - Organic Rankings" });

const showOutputModal = ref(false)
const htaccessCode = ref('')
const domain = ref({
  protocol: true,
  subdomain: true,
  url: '',
})

const cache = ref({
  media: [
    { name: 'ico', value: true },
    { name: 'jpg', value: true },
    { name: 'jpeg', value: true },
    { name: 'png', value: true },
    { name: 'gif', value: true },
    { name: 'webp', value: true },
    { name: 'swf', value: false },
    { name: 'svg', value: false },
  ],
  code: [
    { name: 'html', value: true },
    { name: 'htm', value: true },
    { name: 'js', value: true },
    { name: 'css', value: true },
    { name: 'xml', value: false },
    { name: 'txt', value: false },
    { name: 'xsl', value: false },
  ],
  font: [
    { name: 'ttf', value: true },
    { name: 'otf', value: true },
    { name: 'otf', value: true },
    { name: 'eot', value: true },
    { name: 'woff', value: true },
    { name: 'woff2', value: true },
  ]
})

const cacheDuration = ref({
  media: { duration: 1, unit: 604800 },
  code: { duration: 2, unit: 604800 },
  font: { duration: 5, unit: 604800 },
})

const compress = ref([
  { name: 'text', value: true },
  { name: 'html', value: true },
  { name: 'css', value: true },
  { name: 'javascript', value: true },
  { name: 'xml', value: true },
])
const prevent = ref([
  { name: 'htaccess', value: true },
  { name: 'htpasswd', value: true },
  { name: 'ini', value: true },
  { name: 'log', value: true },
])

const errorPages = ref({
  pg400: '',
  pg401: '',
  pg403: '',
  pg404: '',
  pg500: '',
})

const otherSettings = ref({
  defaultPage: '',
  directoryListings: true,
  upLimit: false,
  upSize: 5
})

const processing = ref(false)

function createHtaccess() {
  processing.value = true;
  showOutputModal.value = true;
  let sendData = {
    domain: domain.value,
    cache: cache.value,
    cacheDuration: cacheDuration.value,
    compress: compress.value,
    prevent: prevent.value,
    errorPages: errorPages.value,
    otherSettings: otherSettings.value,
  }
  axios.post('/htaccessTools', sendData)
    .then(function (res) {
      let data = res.data;
      htaccessCode.value = data;
      processing.value = false;
    })
    .catch(function (error) {
      processing.value = false;
    });
}

watch(domain.value, (newPosts) => {
  domain.value.url = domain.value.url.replace("www.", '');
  domain.value.url = domain.value.url.replace("/", '');
  domain.value.url = domain.value.url.replace(/^https?:/, '');
})
</script>

<template>
  <div>
    <ElementsBsCard formTitle="Htaccess Tools" titleClass="ps-3">
      <form @submit.prevent="createHtaccess">
        <div class="row">
          <div class="col-lg-6 mb-3">
            <fieldset>
              <legend>Domain Settings</legend>
              <div class="input-group input-group-outline mt-2">
                <div class="input-group-append me-2">
                  <div class="form-check form-switch d-flex align-items-center border rounded p-2">
                    <div class="toggle me-1" :class="{ 'text-primary': !domain.protocol }"
                      @click="domain.protocol = false">
                      <ElementsTooltip tooltip="Domain without SSL">HTTP</ElementsTooltip>
                    </div>
                    <div class="ms-5 me-2">
                      <input class="form-check-input" type="checkbox" v-model="domain.protocol" />
                    </div>
                    <div class="toggle " :class="{ 'text-primary': domain.protocol }" @click="domain.protocol = true">
                      <ElementsTooltip tooltip="Domain with SSL">HTTPS</ElementsTooltip>
                    </div>
                  </div>
                </div>
                <div class="input-group-append me-2">
                  <div class="form-check form-switch d-flex align-items-center border rounded p-2">
                    <div class="toggle me-1" :class="{ 'text-primary': !domain.subdomain }"
                      @click="domain.subdomain = false">
                      <ElementsTooltip tooltip="Do not force www/no-www domain" style="text-decoration: line-through;">
                        WWW
                      </ElementsTooltip>
                    </div>
                    <div class="ms-5 me-2">
                      <input class="form-check-input" type="checkbox" v-model="domain.subdomain" />
                    </div>
                    <div class="toggle " :class="{ 'text-primary': domain.subdomain }" @click="domain.subdomain = true">
                      <ElementsTooltip tooltip="Redirect to domain with 'www'">WWW</ElementsTooltip>
                    </div>
                  </div>
                </div>
                <input class="form-control domain" type="text" v-model="domain.url"
                  pattern="[a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)"
                  oninvalid="this.setCustomValidity(this.validity.valueMissing ? 'Domain cannot be empty' : 'Please enter valid domain')"
                  oninput="this.setCustomValidity(this.validity.patternMismatch ? 'Please enter valid domain' : '')"
                  placeholder="your-domain.com" required />
              </div>
            </fieldset>

            <fieldset class="mt-4">
              <legend>Change default directory page</legend>
              <div class="input-group input-group-outline mt-3">
                <label class="form-label">File Name</label>
                <input class="form-control " type="text" v-model="otherSettings.defaultPage"
                  placeholder="public.html" />
              </div>
            </fieldset>

            <fieldset class="mt-4">
              <legend>Media Caching</legend>
              <div class="form-check ps-0">
                <label class="form-check-label me-3 text-uppercase" v-for="(item, key) in cache.media">
                  <input class="form-check-input me-1" type="checkbox" v-model="item.value">
                  {{ item.name }}
                </label>
              </div>
              <div class="d-inline-block me-2 mb-2 autoWidth">
                <div class="input-group input-group-outline mt-3">
                  <label class="form-label">Cache Duration</label>
                  <input type="number" class="form-control" v-model="cacheDuration.media.duration">
                  <div class="input-group-append">
                    <select id="customSelect" class="form-control" v-model="cacheDuration.media.unit">
                      <option value="60">Minutes</option>
                      <option value="3600">Hours</option>
                      <option value="86400">Days</option>
                      <option value="604800">Weeks</option>
                      <option value="2592000">Months</option>
                    </select>
                  </div>
                </div>
              </div>
            </fieldset>

            <fieldset class="mt-4">
              <legend>Code Caching</legend>
              <div class="form-check ps-0">
                <label class="form-check-label me-3 text-uppercase" v-for="(item, key) in cache.code">
                  <input class="form-check-input me-1" type="checkbox" v-model="item.value">
                  {{ item.name }}
                </label>
              </div>
              <div class="d-inline-block me-2 mb-2 autoWidth">
                <div class="input-group input-group-outline mt-3">
                  <label class="form-label">Cache Duration</label>
                  <input type="number" class="form-control" v-model="cacheDuration.code.duration">
                  <div class="input-group-append">
                    <select id="customSelect" class="form-control" v-model="cacheDuration.code.unit">
                      <option value="60">Minutes</option>
                      <option value="3600">Hours</option>
                      <option value="86400">Days</option>
                      <option value="604800">Weeks</option>
                      <option value="2592000">Months</option>
                    </select>
                  </div>
                </div>
              </div>
            </fieldset>

            <fieldset class="mt-4">
              <legend>Fonts Caching</legend>
              <div class="form-check ps-0">
                <label class="form-check-label me-3 text-uppercase" v-for="(item, key) in cache.font">
                  <input class="form-check-input me-1" type="checkbox" v-model="item.value">
                  {{ item.name }}
                </label>
              </div>
              <div class="d-inline-block me-2 mb-2 autoWidth">
                <div class="input-group input-group-outline mt-3">
                  <label class="form-label">Cache Duration</label>
                  <input type="number" class="form-control" v-model="cacheDuration.font.duration">
                  <div class="input-group-append">
                    <select id="customSelect" class="form-control" v-model="cacheDuration.font.unit">
                      <option value="60">Minutes</option>
                      <option value="3600">Hours</option>
                      <option value="86400">Days</option>
                      <option value="604800">Weeks</option>
                      <option value="2592000">Months</option>
                    </select>
                  </div>
                </div>
              </div>
            </fieldset>

          </div>
          <div class="col-lg-6 mb-3">
            <fieldset>
              <legend>Compression</legend>
              <div class="form-check ps-0">
                <label class="form-check-label me-3 text-uppercase" v-for="(item, key) in compress">
                  <input class="form-check-input me-1" type="checkbox" v-model="item.value">
                  {{ item.name }}
                </label>
              </div>
            </fieldset>
            <fieldset class="mt-4">
              <legend>Prevent Viewing</legend>
              <div class="form-check ps-0">
                <label class="form-check-label me-3">
                  <input class="form-check-input me-1" type="checkbox" v-model="otherSettings.directoryListings">
                  Directory Listings
                </label>
                <label class="form-check-label me-3" v-for="(item, key) in prevent">
                  <input class="form-check-input me-1" type="checkbox" v-model="item.value">
                  .{{ item.name.split('_').join(' ') }}
                </label>
              </div>
            </fieldset>

            <fieldset class="mt-4">
              <legend>Limit Upload Size</legend>
              <div class="form-check ps-0">
                <div class="form-check ps-0">
                  <label class="form-check-label me-3 text-uppercase">
                    <input class="form-check-input me-1" type="checkbox" v-model="otherSettings.upLimit">
                    limit upload <span class="text-primary">{{ otherSettings.upSize }}mb</span>
                  </label>
                </div>
                <input type="range" class="d-block w-100" min="0" max="100" v-model="otherSettings.upSize">
              </div>
            </fieldset>
            <fieldset class="mt-4">
              <legend>Custom error pages</legend>
              <div class="input-group input-group-outline mt-3">
                <label class="form-label">Custom 400</label>
                <input class="form-control " type="text" v-model="errorPages.pg400" placeholder="/home/www/400.html" />
              </div>
              <div class="input-group input-group-outline mt-4">
                <label class="form-label">Custom 401</label>
                <input class="form-control " type="text" v-model="errorPages.pg401" placeholder="/home/www/401.html" />
              </div>
              <div class="input-group input-group-outline mt-4">
                <label class="form-label">Custom 403</label>
                <input class="form-control " type="text" v-model="errorPages.pg403" placeholder="/home/www/403.html" />
              </div>
              <div class="input-group input-group-outline mt-4">
                <label class="form-label">Custom 404</label>
                <input class="form-control " type="text" v-model="errorPages.pg404" placeholder="/home/www/404.html" />
              </div>
              <div class="input-group input-group-outline mt-4">
                <label class="form-label">Custom 500</label>
                <input class="form-control " type="text" v-model="errorPages.pg500" placeholder="/home/www/500.html" />
              </div>
            </fieldset>
          </div>
        </div>
        <div class="mb-1 text-end">
          <button class="btn btn-primary">
            <span v-if="!processing">Generate</span>
            <div v-if="processing">
              <ElementsSpinner /> Generating
              <ElementsProcessing />
            </div>
          </button>
        </div>
      </form>
    </ElementsBsCard>

    <!-- Modal -->
    <ElementsCodeModal v-model:showModal="showOutputModal" :body="htaccessCode" error="" />


    <div class=" bg-warning text-white p-2 rounded">
      <p>
        Use our htaccess code at your own risk. Please make sure you keep a backup of your current htaccess file in case
        you have to revert back to it. This is important since some errors can bring your website down immediately.
        Please
        note that CMS systems are notorious for changing your htaccess file, such as if you change Permalinks. In
        addition, it is important not to add or change anything between the # BEGIN and # END tags in your htaccess
        file.
        Instead, all new code should be added after this block. Not all updates or plugins necessarily follow this rule
        though most of them will.
      </p>
      <p>
        At this point, all you need to do is add your code after the # END tags and save the file. When you’re including
        multiple new functions, it’s best to save and test each one separately. If an error occurs, this will make it
        much easier to troubleshoot which change caused the problem.
      </p>
      <p>
        You can also change the file permissions on .htaccess to a readonly file to prevent it from being overwritten by
        any CMS updates or plugins.
      </p>
    </div>
  </div>
</template>


<style scoped>
.title {
  border-bottom: 1px solid #ccc;
  margin-bottom: 15px;
}

.toggle {
  cursor: pointer;
}

.domain {
  min-width: 250px;
  height: 44px;
}

#customSelect {
  border-bottom-left-radius: 0 !important;
  border-top-left-radius: 0 !important;
}
</style>
