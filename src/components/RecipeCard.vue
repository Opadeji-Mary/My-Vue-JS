<template>

  <div class="col-md-4 border border-danger rounded">
    <div class="card row" style="width: 23rem;">
      <img :src="recipedetails.image" class="card-img-top" alt="...">
      <div class="card-body">
        <div class="card-title d-flex gap-5 ">
          <h6>{{recipedetails.name}}</h6>
          <h6>heart</h6>
          <button @click="emit('updateFavourites')">Send Item to Parent</button>
          <i :class="`${added?'fa-solid':'fa-regular'} text-danger fa-heart`" @click="toggleFave"></i>
        </div>
        <div class="d-flex gap-3 p-3">
          <p class="">{{recipedetails.prepTimeMinutes}}min</p>
          <button
            type="button"
            class="btn btn-danger col"
            data-bs-toggle="modal"
            :data-bs-target="`#exampleModal${recipedetails.id}`">Make this</button>
            <div
              class="modal fade"
              :id="`exampleModal${recipedetails.id}`"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true">
          </div>
        </div>
      </div>
     </div>
  </div>



<!-- <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img   class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title</h5>
        <p  class="card-text">ingredients: </p>
        <p class="card-text">{{recipedetails.instructions}}</p>
        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago{{recipedetails.prepTimeMinutes}}</small></p>
      </div>
    </div>
  </div>
</div> -->
  <!-- {{ recipedetails }} -->
  <!-- <div class="col-md-3">
    <img :src="recipedetails.image" width="100" alt="" />
    <h6>    {{ updatedName || recipedetails.name }}</h6> -->
    <!-- <button @click="emit('updateFavourites')">Send Item to Parent</button> -->
    <!-- <i :class="`${added?'fa-solid':'fa-regular'} text-danger fa-heart`" @click="toggleFave"></i> -->

    <!-- Button trigger modal -->
    <!-- <button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      :data-bs-target="`#exampleModal${recipedetails.id}`">Make this</button> -->

    <!-- Modal -->
    <!-- <div
      class="modal fade"
      :id="`exampleModal${recipedetails.id}`"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    > -->
      <!-- <RecipeModal 
            :recipelist="recipedetails" 
            @update-name-to-parent="updateName"
      /> -->
    <!-- </div>
  </div> -->
</template>
<script setup>
import { ref } from 'vue';
import RecipeModal from './RecipeModal.vue';
defineProps(['recipedetails'])
const emit = defineEmits(['updateFavourites','changeName'])
const added = ref(false)
const toggleFave = ()=>{
  emit('updateFavourites',added.value)
  added.value = !added.value
}
const updatedName = ref('')
const updateName = (name)=>{
  console.log(name)
  updatedName.value = name
}

//  defineProps(['recipeDetail'])
</script>