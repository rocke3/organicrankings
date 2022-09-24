<script setup>
import { ref } from 'vue'
import axios from 'axios'
import formData from 'form-data'

definePageMeta({ layout: "user-layout" });
useHead({ title: "Image Tools - Organic Rankings" });

const userFolder = await axios('http://organicrankings.com:3010/imagefolder');
const imageFolder = "https://www.organicrankings.com/api/compressed/" + userFolder.data;
let images = ref({});
let imagesPrefix = ref(0);
let invalids = ref({});
let showDowload = ref(0);
let qualiy = ref(false)
let convert = ref(false)
let supported = ['jpeg', 'png', 'gif', 'webp'];

async function selectFile(event) {
  const totalFiles = event.target.files.length;
  const upFiles = event.target.files;

  for (let i = 0; i < totalFiles; i++) {
    let size = Math.round(upFiles[i].size / 1024)
    let type = upFiles[i].type.replace("image/", "");
    let imgID = "img" + imagesPrefix.value + i;

    if (supported.includes(type) && size < 6292) {
      images.value[imgID] = { name: upFiles[i].name, size: size, progress: 0, newSize: 0, download: '', compressed: 0, expire: 1800, timer: '30:00', animate: '' };
      uploadImage(upFiles[i], imgID)

    } else {
      let msg = 'File not supported';
      if (size > 6291)
        msg = 'Max allow 6MB file';
      invalids.value[imgID] = { name: upFiles[i].name, size: size, msg: msg };
    }
  }

  imagesPrefix.value++
}

function uploadImage(file, id) {
  const imageData = new formData();
  imageData.append(id, file)
  axios.post('http://www.organicrankings.com:3010/imagetool', imageData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      upload: userFolder.data,
      qualiy: qualiy.value,
      convert: convert.value
    },
    onUploadProgress: function (event) {
      var progress = Math.round((100 * event.loaded) / event.total);
      images.value[id].progress = progress > 10 ? Math.round(progress / 5) * 5 : progress
      images.value[id].animate = "animate";
    }
  })
    .then(function (response) {
      let data = response.data;
      if (!data.error) {
        let imgID = data.key;
        images.value[imgID].newSize = data.newSize;
        images.value[imgID].compressed = data.compressed;
        images.value[imgID].download = imageFolder + "/" + data.path;
        showDowload.value = 1;
        var x = setInterval(function () {
          let expire = images.value[imgID].expire;
          let newTime = expire - 1;
          images.value[imgID].expire = newTime;
          images.value[imgID].timer = Math.trunc(newTime / 60) + ":" + (newTime % 60);
          if (expire <= 0) {
            clearInterval(x);
            delete images.value[imgID]
          }
        }, 1000)
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}
</script>
      
<template>
  <div>
    <ElementsBsCard formTitle="Image Tools" titleClass="ps-3">
      <div class="row justify-content-center">
        <div class="uploadArea col-sm-6 col-md-4 mb-4 ">
          <div class="card mx-auto bg-light" style="max-width: 18rem;">
            <div class="card-body p-0 ">
              <label for="imageUpload" style="margin: 0 !important;">
                <i class="material-icons">upload</i>
                <p>Upload Your Images</p>
                <input class="" id="imageUpload" type="file" accept=".jpeg,.jpg,.png,image/jpeg,image/png"
                  @change="selectFile" multiple />
              </label>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-4 mb-4 ">
          <div class="card mx-auto bg-light" style="max-width: 18rem;">
            <div class="card-body p-3 pt-2">
              <p class="text-bold mb-1">Output Settings</p>
              <hr class="bg-primary mt-0 mb-2">
              <div class="form-check form-switch d-flex align-items-center p-0">
                <div class="toggle me-1" :class="{ 'text-primary': !qualiy }" @click="qualiy = false">
                  <ElementsTooltip tooltip="Best optimization. Prioritize optimization over quality.">
                    Optimization
                  </ElementsTooltip>
                </div>
                <div class="ms-5 me-2">
                  <input class="form-check-input" type="checkbox" v-model="qualiy" />
                </div>
                <div class="toggle " :class="{ 'text-primary': qualiy }" @click="qualiy = true">
                  <ElementsTooltip tooltip="Least optimization. Prioritize quality over optimization.">
                    Quality
                  </ElementsTooltip>
                </div>
              </div>

              <div class="form-check form-switch d-flex align-items-center p-0 mt-2">
                <div class="toggle me-1" :class="{ 'text-primary': !convert }" @click="convert = false">
                  <ElementsTooltip tooltip="Keep the output format the same as your input file.">
                    Same format
                  </ElementsTooltip>
                </div>
                <div class="ms-5 me-2">
                  <input class="form-check-input" type="checkbox" v-model="convert" />
                </div>
                <div class="toggle " :class="{ 'text-primary': convert }" @click="convert = true">
                  <ElementsTooltip
                    tooltip="Convert the output file to WEBP format. Less size better quality. (Work for .jpg,.jpeg,.png)">
                    WEBP
                  </ElementsTooltip>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="imageFiles mt-4 pt-2">
        <div class="imageItemDiv" v-for="file in images">
          <ElementsImageItem :file="file" />
        </div>
      </div>

      <div class="imageFiles error" v-for="file in invalids">
        <ElementsImageItem :file="file" :error="true" />
      </div>
      <div class="text-center" v-if="showDowload && Object.keys(images).length > 0">
        <a class="btn btn-primary mt-3" :href=" imageFolder + '/All_Images.zip'">
          <i class="material-icons">file_download</i>
          Download All (ZIP)
        </a>
        <p class="mt-2">
          <small class="text-info">
            Image URLs will expire after 30 minutes of upload. Please download it before expires
          </small>
        </p>
      </div>

    </ElementsBsCard>
  </div>
</template>
      
<style scoped>
.dark-version .bg-light {
  background-color: #243656 !important;
}

.uploadArea label {
  font-size: 25px;
  position: relative;
  padding: 15px;
}

.uploadArea label i {
  font-size: 40px;
}

#imageUpload {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 5;
  width: 100%;
  height: 100%;
}


.uploadArea {
  text-align: center;
}

.imageUpload input,
.uploadArea label {
  width: 400px;
  max-width: 100%;
  height: 120px;
  margin-bottom: 10px;
}

.uploadArea p {
  font-weight: 600;
}

.uploadArea input {
  opacity: 0;
}

.toggle {
  cursor: pointer;
}
</style>
      