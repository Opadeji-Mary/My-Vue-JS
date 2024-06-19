<template>
 <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 v-if="!editStatus" class="modal-title fs-5" id="exampleModalLabel">{{updatedName || recipelist.name}}
            <i class="fas fa-edit" @click="editName"></i></h1>
            <div v-else class="d-flex">
              <input type="text" class="form-control" v-model="inputValue">
              <button class="btn btn-info ms-2" @click="saveChanges">Save</button>
            </div>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">...</div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    <!-- <div class="modal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div> -->
<!-- <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 v-if="!editStatus" class="modal-title fs-5" id="exampleModalLabel">{{updatedName || recipelist.name}}
            <i class="fas fa-edit" @click="editName"></i></h1>
            <div v-else class="d-flex">
              <input type="text" class="form-control" v-model="inputValue">
              <button class="btn btn-info ms-2" @click="saveChanges">Save</button>
            </div>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">...</div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div> -->
</template>
<script setup>
import { ref } from 'vue';

const propsValue = defineProps(['recipelist','name'])
const emitValue2 = defineEmits(['updateNameToParent','changeName'])
// defineProps({
//   recipelist:{
//     type:Object,
//     required:true
//   }
// })
const inputValue = ref(propsValue.recipelist.name)
const updatedName = ref('')
const editStatus = ref(false)
const editName = ()=>{
  editStatus.value = true
}
const saveChanges = ()=>{
  editStatus.value = false
  updatedName.value = inputValue.value
  console.log(emitValue2)
  emitValue2('updateNameToParent',updatedName.value)
  
}

// import { ref } from 'vue';

// const propsValue = defineProps(['recipelist','name'])
// const emitValue2 = defineEmits(['updateNameToParent','changeName'])
// // defineProps({
// //   recipelist:{
// //     type:Object,
// //     required:true
// //   }
// // })
// const inputValue = ref(propsValue.recipelist.name)
// const updatedName = ref('')
// const editStatus = ref(false)
// const editName = ()=>{
//   editStatus.value = true
// }
// const saveChanges = ()=>{
//   editStatus.value = false
//   updatedName.value = inputValue.value
//   console.log(emitValue2)
//   emitValue2('updateNameToParent',updatedName.value) 
// }
</script>