<template id="app-vue3">
  <div class="content">
    <Demo/>
    <TodoHeader :addTodo="addTodo"/>
    <TodoList :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo" :editTodo="editTodo"/>
    <TodoFooter :todos="todos" @changeCheckAllTodo="changeCheckAllTodo" @deleteDoneTodoItems="deleteDoneTodoItems"/>
  </div>
</template>

<script>
import TodoHeader from "@/vue3/components/TodoHeader";
import TodoList from "@/vue3/components/TodoList";
import TodoFooter from "@/vue3/components/TodoFooter";
import Demo from "@/vue3/components/Demo";
import {onMounted, reactive, toRefs, watch} from "vue";


export default {
  name: 'App',
  components: {
    Demo,
    TodoHeader,
    TodoList,
    TodoFooter
  },
  setup() {
    // 所有待辦事項
    let todoItems = reactive({
      todos: []
    })

    // 頁面加載完 再讀取
    onMounted(() => {
      todoItems.todos = JSON.parse(localStorage.getItem("todoItems")) || [];
    })

    // Header 新增 todo時，加至todoItems第一筆，並傳給 TodoList
    function addTodo(todoItem){
      todoItems.todos.unshift(todoItem);
    }
    // 檢核todo勾選狀態，改變TodoItem
    function checkTodo(id){
      console.log("checkTodo",id)
      todoItems.todos.forEach((todo) =>{
        // 找到勾選的那個todo項目，改變勾選狀態
        if(todo.id === id) todo.done = !todo.done;
      })
    }
    // 刪除該項todo
    function deleteTodo(id){
      todoItems.todos = todoItems.todos.filter((todo) => todo.id !== id);
    }
    // 編輯該項todo
    function editTodo(id, title){
      todoItems.todos.map((todo) => {
        if (todo.id === id) {
          todo.title = title;
        }
      })
    }

    // 全選或全不選todo-list
    function changeCheckAllTodo(done){
      todoItems.todos.map(item => item.done = done);
    }
    // 刪除已勾選之todo-list
    function deleteDoneTodoItems(){
      todoItems.todos = todoItems.todos.filter((todo) => !todo.done);
    }
    // 儲存至localStorage
    function saveTodoItems(value){
      localStorage.setItem("todoItems", JSON.stringify(value));
    }
    // 偵測todo-list項目是否有異動，若有新增或刪除會重新儲存到localStorage
    // watch(() => todoItems.todos, (value) => {
    //   saveTodoItems(value);
    // },{deep: true})

    watch(() => todoItems.todos, saveTodoItems, {deep: true})

    return {
      ...toRefs(todoItems),
      addTodo,
      checkTodo,
      deleteTodo,
      editTodo,
      changeCheckAllTodo,
      deleteDoneTodoItems,
      saveTodoItems,
      watch
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
