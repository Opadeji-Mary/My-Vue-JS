import {defineStore} from "pinia";
import axios from "axios"
// import useToDoStor   e from "../views/ToDo.vue"

export const useToDoStore = defineStore('todostore',{
   state: ()=>{
    return{
        todos:[],
    }
   },
   getters:{
    todoCount:(state) => state.todos.length,
    completedTodo(state){
        return state.todos.filter((todo)=> todo.completedTodo)
    }
   },
   actions:{
    getAllTodos(){
        axios.get('https://dummyjson.com/todos')
        .then((response)=>{
            console.log(response.data.todos);
            this.todos = response.data.todos
        })
    }
   },
   persist:true
})