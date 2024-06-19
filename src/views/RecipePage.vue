<template>
   <div>
    <h1 class="text-center text-danger p-5">FOODS RECIPE</h1>
   </div>
     <div>
        <span>Count: {{Count}}</span>
     </div>
   <div class="container">
    <div class="row">
      <RecipeCard
        v-for="(recipe, index) in recipes"
        :key="index"
        :recipedetails="recipe"
        @update-favourites="updateMe"
      />
    </div>
  </div>
</template>



<script setup>
// import {onMounted, ref} from 'vue'
// import {useRecipeStore} from '@/store/recipeStore'
// import RecipeCard from "../components//RecipeCard.vue"
// import { storeToRefs } from 'pinia'


// const store = useRecipeStore()
// const {recipes} = storeToRefs(store)
// const count = ref(0)
// console.log(store)

// onMounted(() =>{
//     store.getAllRecipes()
// })
// const updateMe = (me) =>{
//  console.log(me)
//  console.log('from child')
//  if(!me){
//     count.value++
//  }else{
//     count.value--
//  }
// }

import { onMounted, ref } from 'vue'
import { useRecipeStore } from '@/store/recipeStore'
import RecipeCard from '../components/RecipeCard.vue'
import { storeToRefs } from 'pinia'

const store = useRecipeStore()
const { recipes } = storeToRefs(store)
const count = ref(0)

onMounted(() => {
  store.getAllRecipes()
})
const updateMe = (me) => {
  console.log(me)
  console.log('from child')
  if (!me) {
    count.value++
  } else {
    count.value--
  }
}
</script>



