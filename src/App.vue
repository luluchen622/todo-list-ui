<template id="app">
  <div class="content">
    <TodoHeader :addTodo="addTodo"/>
    <TodoList :todoItems="todoItems" :checkTodo="checkTodo" :deleteTodo="deleteTodo" :editTodo="editTodo"/>
    <TodoFooter :todoItems="todoItems" @changeCheckAllTodo="changeCheckAllTodo" @deleteDoneTodoItems="deleteDoneTodoItems"/>
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
      todoItems: JSON.parse(localStorage.getItem("todoItems")) || []
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
    // 編輯該項todo
    editTodo(id, title){
      console.log("aaa")
      this.todoItems.map((todo) => {
        if (todo.id === id) {
          todo.title = title;
        }
      });
    },
    // 全選或全不選todo-list
    changeCheckAllTodo(done){
      this.todoItems.map(item => item.done = done);
    },
    // 刪除已勾選之todo-list
    deleteDoneTodoItems(){
      this.todoItems = this.todoItems.filter((todo) => !todo.done);
    },
    // 儲存至localStorage
    saveTodoItems(){
      localStorage.setItem("todoItems", JSON.stringify(this.todoItems));
    },
  },
  watch:{
    // 偵測todo-list項目是否有異動，若有新增或刪除會重新儲存到localStorage
    todoItems: {
      deep: true,
      handler() {
        this.saveTodoItems();
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 60px;
  font-size: 16px;
}
.content {
  margin-left: 30px;
  width: 560px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 10px;
}
</style>
