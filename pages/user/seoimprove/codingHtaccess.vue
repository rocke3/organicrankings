<script setup>
import htaccess from "./htaccessCode";
definePageMeta({ layout: "user-layout" });
useHead({ title: "SEO - Organic Rankings" });

const url = ref('your-domain.com')
const protocol = ref(true)
const subdomain = ref(true)
const cache = ref(1)
const duration = ref('week')
</script>
 
<template>
  <div>

    <div class="card">

      <div class="card-header pb-0">
        <h5 class="mb-0">Step #7: Coding htaccess</h5>
        <p class="mb-0">Compress your files to help your website load faster and increase the load time</p>
        <hr />
      </div>
      <div class="card-body pb-2">
        <div class="row">
          <div class="col-sm-4 col-md-3 text-center">
            <img class="img-fluid mb-3" src="https://www.organicrankings.com/assets/codinghtaccess.jpg"
              alt="Modifying Website htaccess for SEO" />
          </div>
          <div class="col-sm-8 col-md-9">
            <h6>Coding for htaccess</h6>
            <p>Having an htaccess file that is properly configured will help you to dramatically <NuxtLink
                to="/user/seoimprove/websitespeed">improve your site's speed</NuxtLink> as it controls the
              functionality of your website and its interaction with the web. If you do not
              have any other scripts on your server or site that are compressing your files or are adding a cache length
              to your files then you will want to change or update your htaccess code to improve the speed of your
              website.</p>
            <p>The code snippet below is an example for a Linux server (not Windows) that will improve your overall
              speed. If you use the code below you will need to save it to a text file and then name the file .htaccess
              or use an existing .htaccess file from your server and then upload it to the root of your server. It is
              important to download a copy of any existing .htaccess file on your server first and add the code to the
              current file or modify it as some of the elements may already exist on the file. If you do not properly
              combine, modify or delete the code for your .htaccess file you could make your website go down especially
              if you have a database driven website such as WordPress, Joomla, Magento, etc. Always keep a copy of the
              original .htaccess file as a backup in case you have any errors in the code. If you use the code below you
              do it at your own risk. I highly recommend that you ask your hosting provider or your web developer who is
              experienced with .htaccess for assistance before you make it live. They will need to change the
              “your-domain.com” to your current domain name and may need to modify the code slightly for their servers.
            </p>
          </div>
        </div>
        <div class="mt-3 px-xl-5">
          <div class="mb-4 form-inline">
            <div class="outputSettings mt-2">
              <label class="settingLvl">Output Settings</label>
              <div class="d-inline-block me-2 mb-2 autoWidth">
                <div class="form-check form-switch d-flex align-items-center border rounded p-2">
                  <div class="toggle me-1" :class="{ 'text-primary': !protocol }" @click="protocol = false">HTTP</div>
                  <div class="ms-5 me-2">
                    <input class="form-check-input" type="checkbox" v-model="protocol" />
                  </div>
                  <div class="toggle " :class="{ 'text-primary': protocol }" @click="protocol = true">HTTPS</div>
                </div>
              </div>
              <div class="d-inline-block me-2 mb-2 autoWidth">
                <div class="form-check form-switch d-flex align-items-center border rounded p-2">
                  <div class="toggle me-1" style="text-decoration: line-through;"
                    :class="{ 'text-primary': !subdomain }" @click="subdomain = false">WWW</div>
                  <div class="ms-5 me-2">
                    <input class="form-check-input" type="checkbox" v-model="subdomain" />
                  </div>
                  <div class="toggle " :class="{ 'text-primary': subdomain }" @click="subdomain = true">WWW</div>
                </div>
              </div>
              <div class="d-inline-block me-2 mb-2 autoWidth">
                <div class="input-group input-group-outline mt-3">
                  <label class="form-label">URL</label>
                  <input class="form-control" type="url" v-model="url" />
                </div>
              </div>
              <div class="d-inline-block me-2 mb-2 autoWidth">
                <div class="input-group input-group-outline mt-3">
                  <label class="form-label">Cache</label>
                  <input type="number" class="form-control" v-model="cache">
                  <div class="input-group-append">
                    <select id="customSelect" class="form-control" v-model="duration">
                      <option value="minute">Minutes</option>
                      <option value="hour">Hours</option>
                      <option value="day">Days</option>
                      <option value="week">Weeks</option>
                      <option value="month">Months</option>
                    </select>
                  </div>
                </div>
              </div>


            </div>

          </div>

          <span class="form-control px-3" style="background: #eee;">
            <code><pre>{{ htaccess(protocol, subdomain, url, cache, duration) }}</pre></code>
          </span>
          <UserSubscribeAction>Get the code for htaccess for speed for your website</UserSubscribeAction>
        </div>

        <UserGetHelpOrHire>
          The above information is a brief explanation of this technique. To learn more about
          how we can help your company improve its rankings in the SERPs, contact our team below.
        </UserGetHelpOrHire>

      </div>
    </div>
  </div>
</template>
    
    
<style scoped>
#customSelect {
  border-bottom-left-radius: 0 !important;
  border-top-left-radius: 0 !important;
}

.autoWidth {
  width: 200px;
  max-width: 100%;
}

.htmlCode {
  color: #e06150;
}

.htmlCode:before {
  content: "<";
}

.htmlCode:after {
  content: ">";
}

.outputSettings {
  position: relative;
  border: 1px solid #d2d6da;
  border-radius: 0.375rem;
  margin: 30px 0 0 0;
  padding: 15px 10px 10px 10px;
}

.outputSettings .settingLvl {
  position: absolute;
  top: -15px;
  font-weight: bold;
  background: #fff;
  left: 2px;
  padding: 3px;
}

.toggle {
  cursor: pointer;
}
</style>


