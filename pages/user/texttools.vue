<script setup>
import { ref, watch } from 'vue'
import axios from 'axios'
import _ from 'lodash'
definePageMeta({ layout: "user-layout" });
useHead({ title: "Text Tools - Organic Rankings" });

const text = ref('')

const showModal = ref(false)
const todo = ref('counter')
const website = ref('https://organicrankings.com')
const keywords = ref('')
const keywordsOrder = ref('')
const totalKeywords = ref('')
const keywordError = ref('')
const loadingKeywords = ref(false)
const showAll = ref(false)

const counter = ref({ characters: 0, words: 0, uniqueWords: 0, sentences: 0, lines: 0, density: {}, densityAll: {} })
const checker = ref({ characters: 0, words: 0, uniqueWords: 0, densityAll: {} })

watch(text, async (string) => {
  let trimdString = _.trim(string.replace(/\n/g, " ").replace('(', " ").replace(')', " ").toLowerCase())
  counter.value.characters = string.length;
  let wordArr = _.words(trimdString);
  counter.value.words = wordArr.length
  counter.value.uniqueWords = _.uniq(wordArr).length
  counter.value.sentences = _.compact(_.split(_.trim(string), ".")).length;
  let uniqueCount = _(_.countBy(wordArr)).toPairs().orderBy([1], ['desc']).value()
  counter.value.densityAll = uniqueCount
  counter.value.density = _.chunk(uniqueCount, 5)[0];
  counter.value.lines = string.length > 0 ? string.split("\n").length : 0
})

function analizeKeyword() {
  loadingKeywords.value = true;
  keywordError.value = ""
  axios.post('https://www.organicrankings.com/api/keyword', website.value, {
    headers: {
      'Content-Type': 'application/octet-stream',
      authorization: useCookie('org_session').value,
    }
  })
    .then(function (res) {
      loadingKeywords.value = false;
      let data = res.data;
      if (data.error) {
        keywordError.value = data.error
      } else {
        let trimdString = _.trim(data.replace(/\n/g, " ").replace('(', " ").replace(')', " ").toLowerCase())
        checker.value.characters = trimdString.replace(' ', " ").length;
        let wordArr = _.words(trimdString);
        checker.value.words = wordArr.length
        checker.value.uniqueWords = _.uniq(wordArr).length
        let uniqueCount = _(_.countBy(wordArr)).toPairs().orderBy([1], ['desc']).value()
        checker.value.densityAll = uniqueCount
      }
    })
}

</script>

<template>
  <div>
    <ElementsBsCard formTitle="Text Tools" titleClass="ps-3">

      <div class="todo">
        <div class="form-check form-check-radio btn btn-outline-primary me-3 mb-3 p-0 overflow-visible"
          :class="todo == 'counter' ? 'active' : ''">
          <span class="badge bg-warning">Free</span>
          <label class="form-check-label m-0 px-3 py-2">
            <input class="form-check-input me-1" type="radio" name="option" value="counter" v-model="todo" checked>
            Word Counter
          </label>
        </div>
        <div class="form-check form-check-radio btn btn-outline-primary me-3 mb-3 p-0"
          :class="todo == 'checker' ? 'active' : ''">
          <label class="form-check-label m-0 px-3 py-2">
            <input class="form-check-input me-1" type="radio" name="option" value="checker" v-model="todo">
            Keyword Density Checker
          </label>
        </div>

      </div>

      <div class="row" v-if="todo == 'counter'">
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
                      <td class="value">{{ counter.characters }}</td>
                    </tr>
                    <tr>
                      <td>Words</td>
                      <td class="value">{{ counter.words }}</td>
                    </tr>
                    <tr>
                      <td>Unique Words</td>
                      <td class="value">{{ counter.uniqueWords }}</td>
                    </tr>
                    <tr>
                      <td>Repeated Words</td>
                      <td class="value">{{ counter.words - counter.uniqueWords }}</td>
                    </tr>
                    <tr>
                      <td>Sentences</td>
                      <td class="value">{{ counter.sentences }}</td>
                    </tr>
                    <tr>
                      <td>Lines</td>
                      <td class="value">{{ counter.lines }}</td>
                    </tr>
                  </table>

                </div>
              </div>
              <div class="col-sm-6">
                <div class="pe-2  mt-3">
                  <p class="text-bold mb-1">Keyword Density</p>
                  <table class="table table-bordered">
                    <tr v-for="(value, key) in counter.density">
                      <td style="max-width:50px">
                        <div class="word">
                          {{ value[0] }}
                        </div>
                      </td>
                      <td class="value">{{ value[1] }} <small class="p-0">({{ (value[1] / counter.words *
    100).toFixed(1)
}}%)</small> </td>
                    </tr>
                    <tr>
                      <td colspan="2" class="text-center" v-if="counter.uniqueWords > 5">
                        <button class="btn btn-link text-primary m-0 p-0" @click.prevent="showModal = true">See All
                          ({{
    counter.uniqueWords
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
      <div v-if="todo == 'checker'">

        <form @submit.prevent="analizeKeyword">
          <div class="input-group mb-3 max-width-500 m-auto">
            <input type="url" class="form-control website" placeholder="Website URL" v-model="website"
              oninvalid="this.setCustomValidity(this.validity.valueMissing ? 'Please enter valid URL' : 'Enter URL incluiding http: / https:')"
              oninput="this.setCustomValidity(this.validity.patternMismatch ? 'Enter URL incluiding http: / https:' : '')"
              required>
            <button class="btn btn-primary" type="submit">Analyze keyword</button>
          </div>
        </form>
        <div class="alert alert-danger text-white max-width-500 m-auto text-center" v-if="keywordError">
          {{ keywordError }}
        </div>
        <div>
          <div v-if="loadingKeywords" class="text-center pt-3">
            <ElementsSpinner color="#e91e63" />
            <div class="genarating text-primary pt-0"> Analyzing keywords <br /> Please wait.</div>
          </div>
          <div class="row" v-else-if="checker.words">
            <div class="col-md-6">
              <div class="pe-2 mt-3">
                <p class="text-bold mb-1">Details</p>
                <table class="table table-bordered">
                  <tr>
                    <td>Characters</td>
                    <td class="value">{{ checker.characters }}</td>
                  </tr>
                  <tr>
                    <td>Words</td>
                    <td class="value">{{ checker.words }}</td>
                  </tr>
                  <tr>
                    <td>Unique Words</td>
                    <td class="value">{{ checker.uniqueWords }}</td>
                  </tr>
                  <tr>
                    <td>Repeated Words</td>
                    <td class="value">{{ checker.words - checker.uniqueWords }}</td>
                  </tr>
                </table>
              </div>
              <div class="keywordCloud">
                <p class="text-bold mb-1">Keyword Cloud</p>
                <div class=" ">
                  <div v-for="(value, key) in checker.densityAll" class="d-inline-block">
                    <ElementsTooltip :tooltip="value[1] + ' (' + (value[1] / checker.words *
  100).toFixed(1) + '%)'" class="item">
                      {{ value[0] }}
                    </ElementsTooltip>

                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="keywords">
                <table class="table table table-hover mb-0">
                  <thead>
                    <tr>
                      <th>Keyword</th>
                      <th>Count</th>
                      <th>Density</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(value, key) in checker.densityAll"
                      :class="(key > (checker.uniqueWords / 100) * 10 && checker.uniqueWords > 30 && !showAll ? 'hiddenItem' : '')">
                      <td>{{ value[0] }}</td>
                      <td>{{ value[1] }}</td>
                      <td>{{ (value[1] / checker.words *
    100).toFixed(1)
}}%</td>
                    </tr>
                  </tbody>
                </table>

                <div v-if="((((checker.uniqueWords / 100) * 10) < checker.uniqueWords))" class="text-center showAll">
                  <button class="btn btn-link text-primary mt-4" @click="(showAll = true)" v-if="!showAll">Show
                    All</button>
                  <button class="btn btn-link text-primary mt-4" @click="(showAll = false)" v-if="showAll">Show
                    Less</button>

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>


    </ElementsBsCard>

    <!-- Modal -->
    <ElementsCodeModal title="Keyword Density" v-model:showModal="showModal" size="modal-lg" :footer=false>
      <table class="table table table-hover keywords">
        <thead>
          <tr>
            <th>Keyword</th>
            <th>Count</th>
            <th>Density</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(value, key) in counter.densityAll">
            <td>{{ value[0] }}</td>
            <td>{{ value[1] }}</td>
            <td>{{ (value[1] / counter.words *
    100).toFixed(1)
              }}%</td>
          </tr>
        </tbody>
      </table>

    </ElementsCodeModal>

  </div>
</template>


<style scoped>
.form-check .badge {
  padding: 2px 4px 1px;
  border-radius: 3px;
  font-size: 11px;
  position: absolute;
  right: -5px;
  top: -10px;
  font-weight: 400;
}

.keywords {
  border: 1px solid #ccc;
  border-radius: 5px;
  max-width: 600px;
  margin: auto;
}

.hiddenItem {
  display: none;
}

.keywords td,
.keywords th {
  padding: 5px 15px;
}

.keywords td:not(:first-child),
.keywords th:not(:first-child) {
  text-align: center;
}

.keywordCloud .item {
  cursor: pointer;
  padding: 4px 6px;
  margin: 0 5px 5px 0;
  border: 1px solid #007c9d;
  border-radius: 5px;
  line-height: 1;
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
  color: #007c9d;
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
