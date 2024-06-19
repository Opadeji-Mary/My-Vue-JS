<template>

<div class="bg-dark text-info fs-5 p-3 text-center">To Do list</div>
<div class="p-5">
    <div class="d-flex justify-content-between">
        <span>Count: {{todoCount}}</span>
        <button class="btn btn-warning" @click="store.$reset()">Reset state</button>
    </div>
    <table class="table">
        <thead>
            <tr>
                <th>#</th>
                <th>To do menu</th>
                <th>status</th>
            </tr>
        </thead>
        <tbody>
            <tr :key="index" v-for="(todo, index) in todos">
                <th scope="row">{{ todo.id }}</th>
                <td>{{ todo.todo }}</td>
                <td>{{ todo.completed ? 'complete' : 'pending'}}</td>

            </tr>
        </tbody>
        
    </table>    
</div>
</template>

<script setup>
import {useToDoStore } from "../store/todostore.js"
import {onMounted } from 'vue'
import {storeToRefs} from 'pinia'

 const store = useToDoStore()
 const {todos, todoCount } = storeToRefs(store)


 const animals = {
    name: 'tiger',
    color: 'Orange'
 }
 const {name, color} = animals
 console.log(name)
 console.log(color)

//  const {todos} = store.todos
 console.log(store)

 onMounted(() =>{
    console.log(todoCount);
    if (!todoCount.value) {
        store.getAlltodos()
    }
 })

 
</script>