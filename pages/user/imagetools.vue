<script setup>
import { ref } from 'vue'
import axios from 'axios'
import formData from 'form-data'
definePageMeta({ layout: "user-layout" });
useHead({ title: "Image Tools - Organic Rankings" });

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
      images.value[imgID] = { name: upFiles[i].name, size: size, progress: 0, newSize: 0, download: '', compressed: 0 };
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
      'Content-Type': 'multipart/form-data'
    },
    params: {
      qualiy: qualiy.value,
      convert: convert.value
    },
    onUploadProgress: function (event) {
      var progress = Math.round((100 * event.loaded) / event.total);
      images.value[id].progress = progress
      console.log(progress);
    }
  })
    .then(function (response) {
      let data = response.data;
      if (!data.error) {
        let imgID = data.key;
        images.value[imgID].newSize = data.newSize;
        images.value[imgID].compressed = data.compressed;
        images.value[imgID].download = data.path;
        showDowload.value = 1;
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}

function downloadAll() {
  axios({
    method: 'post',
    url: 'http://www.organicrankings.com:3010/downloadall',
    responseType: 'arraybuffer',
    data: dates
  }).then(function (response) {
    let blob = new Blob([response.data], { type: 'application/pdf' })
    let link = document.createElement('a')
    link.href = window.URL.createObjectURL(blob)
    link.download = 'Report.pdf'
    link.click()
  })
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

      <div class="imageFiles" v-for="file in images">
        <div class="imageItem bg-light shadow">
          <div class="name">
            <i class="material-icons">image</i> {{ file.name }}
          </div>
          <div class="upSize">{{ file.size }}kb</div>
          <div class="progres">
            <div class="progress" v-if="file.progress < 100">
              <div class="progress-bar" :class="'w-' + file.progress" role="progressbar">Uploading {{file.progress}}%
              </div>
            </div>
            <div class="progress" v-if="file.progress > 99 && !file.newSize">
              <div class="progress-bar progress-bar-striped progress-bar-animated w-100">Processing</div>
            </div>
            <div class="progress" v-if="file.newSize">
              <div class="progress-bar bg-success w-100">Done</div>
            </div>
          </div>
          <div class="downSize">
            <ElementsSpinner color="#e91e63" v-if="!file.newSize" />
            <span v-else>{{ file.newSize }}kb</span>
          </div>
          <div class="download">
            <ElementsSpinner color="#e91e63" v-if="file.newSize == 0" />
            <span v-else>
              <a :href="file.download" class="text-primary nav-link" :title="file.name" download>
                <i class="material-icons">file_download</i> Download
              </a>
            </span>
          </div>
          <div class="compressed">
            <ElementsSpinner color="#e91e63" v-if="file.newSize == 0" />
            <span v-else>{{ file.compressed }}%</span>
          </div>
        </div>
      </div>

      <div class="imageFiles error" v-for="file in invalids">
        <div class="imageItem bg-light shadow">
          <div class="name">
            <i class="material-icons">image</i> {{ file.name }}
          </div>
          <div class="upSize">{{ file.size }}kb</div>
          <div class="faildError text-danger text-start">
            {{file.msg}}
          </div>
        </div>
      </div>

      <div class="text-center" v-if="showDowload">
        <button class="btn btn-primary mt-2" @click="downloadAll"><i class="material-icons">file_download</i> Download
          All (ZIP)</button>
      </div>

    </ElementsBsCard>
  </div>
</template>
      
<style scoped>
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

.toggle {
  cursor: pointer;
}

.imageFiles.error .imageItem {
  border: 1px solid #e99c9c;
  opacity: 0.7;
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

.imageItem {
  display: flex !important;
  text-align: center;
  margin-bottom: 15px;
  padding: 5px;
  border-radius: 5px;
}

.imageItem i {
  vertical-align: text-bottom;
}

.imageItem .name,
.imageItem .upSize,
.imageItem .progres,
.imageItem .downSize,
.imageItem .download,
.imageItem .faildError,
.imageItem .compressed {
  padding: 5px;
}

.imageItem .name {
  width: 25%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
}

.imageItem .upSize {
  width: 10%;
}



.imageItem .downSize {
  width: 10%;
}

.imageItem .download {
  width: 17%;
}

.imageItem .compressed {
  width: 8%;
}

.imageFiles.error .faildError {
  width: 60%;
}

.imageFiles.error .upSize {
  width: 15%;
}

.progress {
  background: #cbcbcb;
  height: 17px;
  border-radius: 3px;
  overflow: hidden;
}

.imageItem .progres {
  width: 30%;
  margin-top: 5px;
}

.progress-bar {
  height: 17px;
}

.dark-version .bg-light {
  background-color: #243656 !important;
}

@media only screen and (max-width: 750px) {

  .imageItem .upSize,
  .imageItem .downSize {
    display: none;
  }

  .imageItem .name {
    width: 35%;
  }

  .imageFiles.error .faildError {
    width: 65%;
  }

  .imageItem .download {
    width: 25%;
  }

  .imageItem .compressed {
    width: 10%;
  }

}

@media only screen and (max-width: 750px) {
  .imageItem .compressed {
    display: none;
  }

  .imageItem .name,
  .imageItem .progres,
  .imageItem .download {
    width: 33.33%;
  }

}

@media only screen and (max-width: 420px) {
  .imageItem i {
    display: none;
  }

}
</style>
      