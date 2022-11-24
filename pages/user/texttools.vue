<script setup>
import { ref, watch } from 'vue'
import axios from 'axios'
import _ from 'lodash'
definePageMeta({ layout: "user-layout" });
useHead({ title: "Text Tools - Organic Rankings" });

const text = ref('')
const cssClass = ref('')
const processing = ref(false)
const characters = ref(0)
const totalWords = ref(0)
const sentences = ref(0)

const uniqueWords = ref(0)
const density = ref({})
const densityAll = ref({})
const showOutputModal = ref(false)
const outputcss = ref('')
const outputError = ref('')
const todo = ref('critical')

let progress = ref(0)


watch(text, async (string) => {
  characters.value = string.length;
  let wordArr = _.words(string);
  totalWords.value = wordArr.length
  uniqueWords.value = _.uniq(wordArr).length
  sentences.value = _.compact(_.split(_.trim(string), ".")).length;
  let uniqueCount = _(_.countBy(wordArr)).toPairs().orderBy([1], ['desc']).value()
  densityAll.value = Object.fromEntries(new Map(uniqueCount));
  density.value = Object.fromEntries(new Map(_.chunk(uniqueCount, 5)[0]));

})

</script>

<template>
  <div>

    <ElementsBsCard formTitle="Text Tools" titleClass="ps-3">
      <form @submit.prevent="genarateCss">

        <div class="todo">
          <div class="form-check form-check-radio btn btn-outline-primary me-3 mb-3 p-0"
            :class="todo == 'critical' ? 'active' : ''">
            <label class="form-check-label m-0 px-3 py-2">
              <input class="form-check-input me-1" type="radio" name="option" value="critical" v-model="todo" checked>
              Text
            </label>
          </div>

        </div>

        <div class="row">
          <div class="col-md-6 col-xl-7 col-xxl-8">
            <div class="input-group input-group-outline mt-4" :class="cssClass">
              <label class="form-label">Text </label>
              <textarea class="form-control" rows="10" v-model="text"></textarea>
            </div>
          </div>

          <div class="col-md-6 col-xl-5 col-xxl-4">
            <div class="row">
              <div class="col-sm-6">
                <div class="pe-2 mt-3">
                  <p class="text-bold mb-1">Details</p>
                  <table class="table table-bordered">
                    <tr>
                      <td>Characters</td>
                      <td class="value">{{ characters }}</td>
                    </tr>
                    <tr>
                      <td>Words</td>
                      <td class="value">{{ totalWords }}</td>
                    </tr>
                    <tr>
                      <td>Unique Words</td>
                      <td class="value">{{ uniqueWords }}</td>
                    </tr>
                    <tr>
                      <td>Repeated Words</td>
                      <td class="value">{{ totalWords - uniqueWords }}</td>
                    </tr>
                    <tr>
                      <td>Sentences</td>
                      <td class="value">{{ sentences }}</td>
                    </tr>
                    <tr>
                      <td>Word length</td>
                      <td class="value">{{ sentences }}</td>
                    </tr>
                  </table>

                </div>
              </div>
              <div class="col-sm-6">
                <div class="pe-2  mt-3">
                  <p class="text-bold mb-1">Keyword Density</p>
                  <table class="table table-bordered">
                    <tr v-for="(value, key) in density">
                      <td style="max-width:50px">
                        <div class="word">
                          {{ key }}
                        </div>
                      </td>
                      <td class="value">{{ value }} <small class="p-0">({{ (value / totalWords *
                          100).toFixed(1)
                      }}%)</small> </td>
                    </tr>
                    <tr>
                      <td colspan="2" class="text-center" v-if="uniqueWords > 5">
                        <a href="#" class="text-primary" @click.prevent>See All ({{ uniqueWords }})</a>
                      </td>
                    </tr>
                  </table>
                </div>

              </div>
            </div>
          </div>
        </div>

        <small class="text-info"></small>

        <!-- <div class="mb-1 text-end mt-4">
          <button class="btn btn-primary">
            <span v-if="!processing">Generate</span>
            <div v-if="processing">
              <ElementsSpinner /> Generating
              <ElementsProcessing />
            </div>
          </button>
        </div> -->
      </form>
    </ElementsBsCard>

    <!-- Modal -->
    <ElementsCodeModal :showModal="showOutputModal" :body="outputcss" :error="outputError" :progress="progress" />

  </div>
</template>


<style scoped>
.word {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
  padding: 0;
}

tr td {
  padding: 2px;
}

.value {
  text-align: center;
  color: #e91e63;
}

.todo input {
  display: none;
}

.form-check.active label {
  color: #fff !important
}


.modal {
  display: block;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-body .material-icons {
  vertical-align: middle;
}

.btn-close {
  padding: 0;
}

.btn-close .material-icons {
  color: black;
  vertical-align: top;
}

.form-switch {
  padding-left: 0 !important;
}

.todo label {
  text-transform: capitalize;
}

.toggle {
  cursor: pointer;
}

.form-check-input {
  margin-right: 5px;
  vertical-align: text-bottom;
}


.outputSettings {
  display: inline-block;
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
</style>
