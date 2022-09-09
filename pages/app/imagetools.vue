<script setup>
import { ref, watch } from 'vue'
import axios from 'axios'
import formData from 'form-data'
definePageMeta({ layout: "app-layout" });
useHead({ title: "JS Tools - Organic Rankings" });

const processing = ref('');
var files = ref([]);
const uploadPercentage = ref(0);



async function selectFile(event) {
  const totalFiles = event.target.files.length;
  const upFiles = event.target.files;
  for (let i = 0; i < totalFiles; i++) {
    files.value[i] = { name: upFiles[i].name, size: upFiles[i].size, progress: 0, newSize: 0, download: '', compressed: 0 };
  }

  const imageData = new formData();

  const axiosConfig = {
    headers: {
      'accept': 'application/json',
      'Accept-Language': 'en-US,en;q=0.8',
      'Content-Type': `multipart/form-data;`,
    },
    onUploadProgress: function (event) {
      var progress = Math.round((100 * event.loaded) / event.total);

      console.log(progress);
    }
  };

  imageData.append('image', upFiles[0])

  axios.post('/imageTools', imageData, axiosConfig)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

}

</script>
      
<template>
  <div>
    {{files}}
    <ElementsBsCard formTitle="Image Tools" titleClass="ps-3">
      <div class="uploadArea">
        <label for="imageUpload">
          <i class="material-icons">upload</i>
          <p>Upload Your Image</p>
          <input id="imageUpload" type="file" accept=".jpeg,.jpg,.png,image/jpeg,image/png" @change="selectFile"
            multiple />
        </label>
      </div>

      <div class="">
        <div class="imageFiles" v-for="file in files">
          <div class="imageItem">
            <div class="name">
              <i class="material-icons">image</i> {{ file.name }}
            </div>
            <div class="upSize">{{ Math.floor(file.size / 1000) }}kb</div>
            <div class="progres">
              <div class="progress">
                <div class="progress-bar" :class="'w-' + file.progress" role="progressbar" v-if="file.progress < 100">
                </div>
              </div>
              <div class="progress" v-if="file.progress > 99 && !file.newSize">
                <div class="progress-bar progress-bar-striped progress-bar-animated w-100"></div>
              </div>
            </div>
            <div class="downSize">
              <ElementsSpinner color="#e91e63" v-if="!file.newSize" />
              <span v-else>{{ file.output.size }}</span>
            </div>
            <div class="download">
              <ElementsSpinner color="#e91e63" v-if="!file.newSize" />
              <span v-else>
                <a href="" class="text-primary">
                  <i class="material-icons">file_download</i> Download
                </a>
              </span>
            </div>
            <div class="compressed">
              <ElementsSpinner color="#e91e63" v-if="!file.newSize" />
              <span v-else>{{ file.compressed }}%</span>
            </div>
          </div>
        </div>
        <div class="text-center mt-4">
          <button class="btn btn-primary"><i class="material-icons">file_download</i> Download All (ZIP)</button>
        </div>
      </div>

    </ElementsBsCard>
  </div>
</template>
      
<style scoped>
.uploadArea label {
  position: relative;
  padding: 15px;
  font-size: 25px;
}

.uploadArea label i {
  font-size: 25px;
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
  background-color: #f1f1f1;
  margin-bottom: 10px;
}

.uploadArea input {
  opacity: 0;
}

.imageItem {
  display: flex !important;
  text-align: center;
  margin-top: 10px;
  background: #f1f1f1;
  padding: 5px;
  color: #444;
}

.imageItem i {
  vertical-align: text-bottom;
}

.imageItem .name,
.imageItem .upSize,
.imageItem .progres,
.imageItem .downSize,
.imageItem .download,
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

.progress {
  background: #cbcbcb;
  height: 10px;
  border-radius: 3px;
  overflow: hidden;
}

.imageItem .progres {
  width: 30%;
  margin-top: 8px;
}

.progress-bar {
  height: 10px;
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
      