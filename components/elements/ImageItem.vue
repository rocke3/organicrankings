<script setup>
const props = defineProps({
  file: {
    type: Object,
    required: true,
  },
  invalid: {
    type: Boolean,
    required: false,
  },
  error: {
    type: String,
    required: false,
  }
});
</script>

<template>
  <div>
    <div class="imageItem bg-light shadow" v-if="invalid">
      <div class="name">
        <div><i class="material-icons">image</i> {{ file.name }}</div>

      </div>
      <div class="upSize">{{ file.size }}kb</div>
      <div class="faildError text-danger text-start">
        {{file.msg}}
      </div>
    </div>
    <div class="imageItem bg-light shadow" v-else>
      <div class="name inCol">
        <div>
          <i class="material-icons">image</i> {{ file.name }}
        </div>
      </div>
      <div class="upSize inCol">{{ file.size }}kb</div>
      <div class="progres inCol">
        <div v-if="file.error" v-html="file.error" class="text-danger"></div>
        <div v-else>
          <div class="progress" v-if="file.progress < 100">
            <div class="progress-bar" :class="'w-' + file.progress" role="progressbar">Uploading {{file.progress}}%
            </div>
          </div>
          <div class="progress" v-if="file.progress > 99 && !file.newSize">
            <div class="progress-bar progress-bar-striped progress-bar-animated w-100">Processing</div>
          </div>
          <div class="progress" v-if="file.newSize">
            <div class="progress-bar bg-success w-100">{{ file.compressed }}% compressed</div>
          </div>
        </div>
      </div>
      <div class="downSize inCol">
        <ElementsSpinner color="#e91e63" v-if="!file.newSize" />
        <span v-else>{{ file.newSize }}kb</span>
      </div>
      <div class="download inCol">
        <ElementsSpinner color="#e91e63" v-if="file.newSize == 0" />
        <span v-else>
          <a :href="file.download" class="text-primary nav-link" :title="file.name" download>
            <i class="material-icons">file_download</i> Download
          </a>
        </span>
      </div>
      <div class="expire inCol">
        <ElementsCircleProgress :text="file.timer" :class="file.animate" />
      </div>
    </div>


  </div>
</template>

<style scoped>
.imageItem {
  display: flex !important;
  text-align: center;
  margin-bottom: 15px;
  padding: 5px;
  border-radius: 5px;
  transform: rotatex(90deg);
  animation: showAsNormal .4s linear forwards;
}

@keyframes showAsNormal {
  100% {
    transform: rotatex(0deg);
  }
}

.progres .text-danger {
  line-height: 1;
  font-size: 15px;
}


.imageItem .name,
.imageItem .upSize,
.imageItem .progres,
.imageItem .downSize,
.imageItem .download,
.imageItem .faildError {
  padding: 5px;
  position: relative;
}

.imageItem .expire {
  position: relative;
  width: 10%;
}


.imageItemDiv:first-child .inCol::before {
  position: absolute;
  top: -35px;
  left: 0;
  z-index: 5;
  width: 100%;
  text-align: center;
  color: #e91e63;
  font-size: 15px;
}

.imageItemDiv:first-child .name::before {
  content: "File Name";
  text-align: left;
}

.imageItemDiv:first-child .upSize::before {
  content: "Size";
}

.imageItemDiv:first-child .progres::before {
  content: "Compressed";
  top: -40px;
}

.imageItemDiv:first-child .downSize::before {
  content: "New Size";
}

.imageItemDiv:first-child .download::before {
  content: "Download";
}

.imageItemDiv:first-child .expire::before {
  content: "Expire In";
}

.imageItem i {
  vertical-align: text-bottom;
}

.imageItem .name {
  width: 25%;
  text-align: left;
}

.imageItem .name div {
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


.imageFiles.error .imageItem {
  border: 1px solid #e99c9c;
  opacity: 0.7;
}

.imageFiles.error .faildError {
  width: 60%;
}

.imageFiles.error .upSize {
  width: 11%;
}

.progress {
  background: #cbcbcb;
  height: 17px;
  border-radius: 3px;
  overflow: hidden;
}

.imageItem .progres {
  width: 28%;
  margin-top: 5px;
}


.progress-bar {
  height: 17px;
}



@media only screen and (max-width: 760px) {

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

  .imageItem .compressed,
  .imageItem .expire {
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