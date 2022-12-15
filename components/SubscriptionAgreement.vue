<script setup>
const showModal = ref(false)
const { pending, data: posts } = useLazyFetch('https://www.organicrankings.com/policy/toc.php')
</script>

<template>
  <div class="d-inline-block">
    <a href="#" @click="showModal = true">Subscription Agreement</a>
    <Teleport to="body">
      <div class="modal fade show" aria-modal="true" role="dialog" v-if="showModal">
        <div class="modal-dialog modal-dialog-scrollable modal-xl">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Subscription Agreement</h5>
              <button type="button" class="btn-close" @click="showModal = false;">
                <i class="material-icons">close</i>
              </button>
            </div>
            <div class="modal-body">
              <div v-if="pending" class="text-center text-2xl text-bold">
                Loading Agreement ...
              </div>
              <div v-html="posts"></div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" @click="showModal = false;">Close</button>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </div>

</template>



<style scoped>
.modal {
  display: block;
  background-color: rgba(0, 0, 0, 0.5);
}

.btn-close .material-icons {
  color: black;
  vertical-align: top;
}
</style>
