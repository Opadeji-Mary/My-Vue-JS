<script setup>
import {ref} from "vue";
 const name = "Mary";
 const num = ref(5);
 const day =("Tuesday")
 const check = ref(true);

 const students=[
  {id: 1, name: "Favour", paid: true},
  {id: 2, name: "James", paid: false},
  {id: 3, name: "Pelumi", paid: false},
  {id: 4, name: "oyin", paid: true},
  {id: 5, name: "Joshua", paid: true},
 ]

 const togglePaid = (id) => {
  students.find((students)=> students.id == id)
  student.paid = !student.paid;



 }
</script>

<template>
 <h4>Hello welcome to Vue 3</h4>

 <p>{{name}}</p>
 <button @click="num++">increase num</button>
 <p>{{num}}</p>

 <div v-for="(student, index) in students" :key="index">
  <p :id="student.paid ? 'paid':'notpaid'" class="btn px-2 py-1" @click="togglePaid()">{{student.id}}</p>
 </div>
 
 <div v-if="day=='Tuesday'">Today is Tuesday</div>
 <div v-else-if="day=='Wednesday'">Today is Wednesday</div>
 <div v-else>Today is not Tuesday</div>

 <div v-show="check">Today is Wednesday</div>
</template>

<style scoped>
#paid{
  background-color: pink;
}
#notpaid{
  background-color: black;
  color: white;
}
/* h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
} */
</style>
