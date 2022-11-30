<script setup>
import { ref, watch } from 'vue'
import axios from 'axios'
import _ from 'lodash'
definePageMeta({ layout: "user-layout" });
useHead({ title: "Text Tools - Organic Rankings" });

const text = ref('')
const characters = ref(0)
const totalWords = ref(0)
const sentences = ref(0)
const lines = ref(0)
const uniqueWords = ref(0)
const density = ref({})
const densityAll = ref({})
const showModal = ref(false)
const todo = ref('word')
const website = ref('http://')
const keywords = ref('')
const totalKeywords = ref('')
const loadingKeywords = ref(false)



watch(text, async (string) => {
  let trimdString = _.trim(string.replace(/\n/g, " ").replace('.', " ").toLowerCase())
  characters.value = string.length;
  let wordArr = _.words(trimdString, /[^, ]+/g);

  totalWords.value = wordArr.length
  uniqueWords.value = _.uniq(wordArr).length
  sentences.value = _.compact(_.split(_.trim(string), ".")).length;
  let uniqueCount = _(_.countBy(wordArr)).toPairs().orderBy([1], ['desc']).value()
  densityAll.value = uniqueCount
  density.value = _.chunk(uniqueCount, 5)[0];
  lines.value = string.length > 0 ? string.split("\n").length : 0
})

function analizeKeyword() {
  loadingKeywords.value = true;
  axios.post('https://www.organicrankings.com/api/keyword', website.value, {
    headers: {
      'Content-Type': 'application/octet-stream',
      authorization: useCookie('org_user').value,
    }
  })
    .then(function (res) {
      loadingKeywords.value = false;
      let wordArr = _.words(res.data);
      totalKeywords.value = wordArr.length
      keywords.value = _(_.countBy(wordArr)).toPairs().orderBy([1], ['desc']).value()
    })
}


</script>

<template>
  <div>

    <ElementsBsCard formTitle="Text Tools" titleClass="ps-3">

      <div class="todo">
        <div class="form-check form-check-radio btn btn-outline-primary me-3 mb-3 p-0"
          :class="todo == 'word' ? 'active' : ''">
          <label class="form-check-label m-0 px-3 py-2">
            <input class="form-check-input me-1" type="radio" name="option" value="word" v-model="todo" checked>
            Word Counter
          </label>
        </div>
        <div class="form-check form-check-radio btn btn-outline-primary me-3 mb-3 p-0"
          :class="todo == 'keyword' ? 'active' : ''">
          <label class="form-check-label m-0 px-3 py-2">
            <input class="form-check-input me-1" type="radio" name="option" value="keyword" v-model="todo">
            Keyword Density Checker
          </label>
        </div>

      </div>

      <div class="row" v-if="todo == 'word'">
        <div class="col-md-6 col-xl-7 col-xxl-8">
          <div class="input-group input-group-outline mt-4">
            <label class="form-label">Text </label>
            <textarea class="form-control" rows="10" v-model="text"></textarea>
            <small class="text-info"></small>
          </div>
        </div>
        <client-only>
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
                      <td>Lines</td>
                      <td class="value">{{ lines }}</td>
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
                          {{ value[0] }}
                        </div>
                      </td>
                      <td class="value">{{ value[1] }} <small class="p-0">({{ (value[1] / totalWords *
                          100).toFixed(1)
                      }}%)</small> </td>
                    </tr>
                    <tr>
                      <td colspan="2" class="text-center" v-if="uniqueWords > 5">
                        <button class="btn btn-link text-primary m-0 p-0" @click.prevent="showModal = true">See All
                          ({{
                              uniqueWords
                          }})</button>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </client-only>
      </div>
      <div v-if="todo == 'keyword'">

        <form @submit.prevent="analizeKeyword">
          <div class="input-group mb-3 max-width-500 m-auto">
            <input type="text" class="form-control website" placeholder="Website URL" v-model="website" required>
            <button class="btn btn-primary" type="submit">Analyze keyword</button>
          </div>
        </form>
        <div class="keywords" v-if="(keywords || loadingKeywords)">
          <div v-if="loadingKeywords" class="text-center pt-3">
            <ElementsSpinner color="#e91e63" />
            <div class="genarating text-primary pt-0"> Analizeing keywords <br /> Please wait.</div>
          </div>
          <table class="table table table-hover" v-else>
            <thead>
              <tr>
                <th>Keyword</th>
                <th>Count</th>
                <th>Density</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(value, key) in keywords">
                <td>{{ value[0] }}</td>
                <td>{{ value[1] }}</td>
                <td>{{ (value[1] / totalKeywords *
                    100).toFixed(1)
                }}%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>



      <!-- <div class="mb-1 text-end mt-4">
          <button class="btn btn-primary">
            <span v-if="!processing">Generate</span>
            <div v-if="processing">
              <ElementsSpinner /> Generating
              <ElementsProcessing />
            </div>
          </button>
        </div> -->

    </ElementsBsCard>

    <!-- Modal -->
    <ElementsCodeModal title="Keyword Density" v-model:showModal="showModal" size="modal-lg" :footer=false>
      <ul class="list-group list-inline">
        <li v-for="(value, key) in densityAll" class="list-group-item d-flex">
          <div class="ms-2 me-auto word">
            {{ value[0] }}
          </div>
          <span class="badge rounded-pill value">{{ value[1] }} ({{ (value[1] /
              totalWords *
              100).toFixed(1)
          }}%)</span>

        </li>
      </ul>
    </ElementsCodeModal>

  </div>
</template>


<style scoped>
.keywords {
  border: 1px solid #ccc;
  border-radius: 5px;
  max-width: 600px;
  margin: auto;
}

.keywords td,
.keywords th {
  padding: 5px 15px;
}

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
