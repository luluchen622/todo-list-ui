<template>
  <div class="content">
    <TodoHeader :addTodo="addTodo"/>
    <TodoList :todoItems="todoItems" :checkTodo="checkTodo" :deleteTodo="deleteTodo"/>
    <TodoFooter :todoItems="todoItems"/>
  </div>
</template>

<script>
import TodoHeader from "@/components/TodoHeader";
import TodoList from "@/components/TodoList";
import TodoFooter from "@/components/TodoFooter";

export default {
  name: 'App',
  components: {
    TodoHeader,
    TodoList,
    TodoFooter
  },
  data() {
    return{
      // 所有待辦事項
      todoItems:[
        {id: '001', title: '123', done:true},
        {id: '002', title: '456', done:false},
        {id: '003', title: '789', done:true}
      ]
    }
  },
  methods: {
    // Header 新增 todo時，加至todoItems第一筆，並傳給 TodoList
    addTodo(todoItem){
      this.todoItems.unshift(todoItem);
    },
    // 檢核todo勾選狀態，改變TodoItem
    checkTodo(id){
      this.todoItems.forEach((todo) =>{
        // 找到勾選的那個todo項目，改變勾選狀態
        if(todo.id === id) todo.done = !todo.done;
      })
    },
    // 刪除該項todo
    deleteTodo(id){
      this.todoItems = this.todoItems.filter((todo) => todo.id !== id);
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.content {
  margin-left: 30px;
  width: 560px;
}
</style>
