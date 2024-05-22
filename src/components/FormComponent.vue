<template>
  <div class="container">
    <form action="" class="card col-sm-6 col-md-120 col-sm-12 px-4 mt-5 mx-auto shadow" @submit.prevent="signUP">
      <h4 class="text-center mt-3">Sign-up form</h4>
      <div>
        <label for="" class="my-2">Firstname</label>
        <input type="text"
          placeholder="firstname"
          class="form-control"
          v-model="firstname"
          name=""
          id=""
        />
        <label for="" class="my-2">Lastname</label>
        <input
          type="text"
          placeholder="lastname"
          class="form-control"
          v-model="lastname"
          name="lastname"
          id=""
        />
        <label for="" class="mx-1 my-2">Gender: </label>

        <label for="">Male</label>
        <input
          type="radio"
          placeholder="Male"
          class="mt-3 mx-1"
          v-model="gender"
          name=""
          value="Male"
          id=""
        />
        <label for="">female</label>
        <input
          type="radio"
          placeholder="password"
          class="mt-3 mx-1"
          v-model="gender"
          value="Female"
          id=""
        />

        <div>
          <label for="">Skills: </label><br />
          <input
            type="checkbox"
            class="mx-1"
            value="React js"
            v-model="skill"
          />
          <label for="">React js</label><br />
          <input
           type="checkbox"
           class="mx-1" 
           value="Vue" 
           v-model="skill"
           />
          <label for="">Vue</label><br />
          <input 
          type="checkbox" 
          class="mx-1" 
          value="Laravel" 
          v-model="skill" />
          <label for="">Laravel</label><br />
        </div>

        <div>
          <label for="" class="mt-4">Occupation</label><br />
          <select
            name=""
            value="seel"
            id=""
            v-model="occupation"
            class="form-control"
          >
            <option value="student">Student</option>
            <option value="trader">Trader</option>
            <option value="civil servant">Civil Servant</option>
            <option value="unemployed">Unemployed</option>
          </select>
        </div>
        <div>
          <button class="btn btn-primary w-100 mt-3 mb-3">Sign up</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
// export default {

import { onMounted, ref } from "vue";

const firstname = ref("");
const lastname = ref("");
const gender = ref([]);
const skill = ref([]);
const occupation = ref("");
const users = ref([]);

const signUP = () => {
  const userObject = {
    name: firstname.value,
    last: lastname.value,
    sex: gender.value,
    skill: skill.value,
    work: occupation.value,
  };
  users.value.push(userObject);
  // console.log(users.value);

  localStorage.setItem("user", JSON.stringify(users.value));
};

onMounted(() => {
  // const getLocal
  users.value = localStorage["user"]
    ? JSON.parse(localStorage.getItem("user"))
    : [];
  // console.log(getLocal);
  // users.value = getLocal;
});
// }
</script>
<style></style>