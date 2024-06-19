<template>
    This is our Home Page
   <home-details>
    <template #tope>
         <!-- <h1>{{ topeProps }}</h1> -->
        <p>More details about home</p>
        <p>for more question</p>
    </template>
    <template v-slot:mary>
        <p>Mary's Details</p>
    </template>
   </home-details>

</template>
<script setup>
import HomeDetails from "../components/HomeDetails.vue"
</script>