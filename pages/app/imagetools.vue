<script setup>
import { ref, watch } from 'vue'
import axios from 'axios'
import formData from 'form-data'
definePageMeta({ layout: "app-layout" });
useHead({ title: "JS Tools - Organic Rankings" });

const processing = ref('');

let images = ref({});
let imagesPrefix = ref(0);
let invalids = ref({});
let showDowload = ref(0);
const uploadPercentage = ref(0);



async function selectFile(event) {
  const totalFiles = event.target.files.length;
  const upFiles = event.target.files;

  const axiosConfig = {
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    onUploadProgress: function (event) {
      var progress = Math.round((100 * event.loaded) / event.total);

      console.log(progress);
    }
  };

  for (let i = 0; i < totalFiles; i++) {
    let size = Math.floor(upFiles[i].size / 1000)
    let imgID = "img" + imagesPrefix.value + i
    if (size > 6291) {
      invalids.value[imgID] = { name: upFiles[i].name, size: size };
    } else {
      images.value[imgID] = { name: upFiles[i].name, size: size, progress: 0, newSize: 0, download: '', compressed: 0 };
    }
    uploadImage(upFiles[i], imgID)
  }

  imagesPrefix.value++
}

function uploadImage(file, id) {
  const imageData = new formData();
  imageData.append(id, file)
  axios.post('http://localhost:3005/', imageData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    onUploadProgress: function (event) {
      var progress = Math.round((100 * event.loaded) / event.total);
      images.value[id].progress = progress
      console.log(progress);
    }
  })
    .then(function (response) {
      let data = response.data;
      console.log(data.error);
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

</script>
      
<template>
  <div>
    <ElementsBsCard formTitle="Image Tools" titleClass="ps-3">
      <div class="uploadArea mb-4">
        <div class="card mx-auto bg-light" style="width: 18rem;">
          <div class="card-body p-0 ">
            <label for="imageUpload">
              <i class="material-icons">upload</i>
              <p>Upload Your Images</p>
              <input class="" id="imageUpload" type="file" accept=".jpeg,.jpg,.png,image/jpeg,image/png"
                @change="selectFile" multiple />
            </label>
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
              <a :href="file.download" class="text-primary nav-link" download>
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

      <div class="imageFiles" v-for="file in invalids">
        <div class="imageItem bg-light shadow">
          <div class="name">
            <i class="material-icons">image</i> {{ file.name }}
          </div>
          <div class="upSize">{{ file.size }}kb</div>
          <div class="faildError text-danger text-start">
            File should less then 6Mb
          </div>
        </div>
      </div>

      <div class="text-center" v-if="showDowload">
        <button class="btn btn-primary mt-2"><i class="material-icons">file_download</i> Download All (ZIP)</button>
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
}

.uploadArea {
  text-align: center;
}

.uploadArea input,
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

.imageItem .faildError {
  width: 60%;
}

.progress {
  background: #cbcbcb;
  height: 15px;
  border-radius: 3px;
  overflow: hidden;
}

.imageItem .progres {
  width: 30%;
  margin-top: 5px;
}

.progress-bar {
  height: 15px;
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
      