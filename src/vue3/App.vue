<template id="app-vue3">
  <div class="content">
    <Demo/>
    <TodoHeader :addTodo="addTodo"/>
    <TodoList :checkTodo="checkTodo" :deleteTodo="deleteTodo" :editTodo="editTodo"/>
    <TodoFooter @changeCheckAllTodo="changeCheckAllTodo" @deleteDoneTodoItems="deleteDoneTodoItems"/>
  </div>
</template>

<script>
import TodoHeader from "@/vue3/components/TodoHeader";
import TodoList from "@/vue3/components/TodoList";
import TodoFooter from "@/vue3/components/TodoFooter";
import Demo from "@/vue3/components/Demo";
import {provide, reactive, toRefs, watch} from "vue";


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
    let todoItems = reactive(JSON.parse(localStorage.getItem("todoItems")) || [])

    // Header 新增 todo時，加至todoItems第一筆，並傳給 TodoList
    function addTodo(todoItem){
      todoItems.unshift(todoItem);
    }
    // 檢核todo勾選狀態，改變TodoItem
    function checkTodo(id){
      console.log("checkTodo",id)
      todoItems.forEach((todo) =>{
        // 找到勾選的那個todo項目，改變勾選狀態
        if(todo.id === id) todo.done = !todo.done;
      })
    }
    // 刪除該項todo
    function deleteTodo(id){
      todoItems = todoItems.filter((todo) => todo.id !== id);
    }
    // 編輯該項todo
    function editTodo(id, title){
      todoItems.map((todo) => {
        if (todo.id === id) {
          todo.title = title;
        }
      })
    }

    // 全選或全不選todo-list
    function changeCheckAllTodo(done){
       console.log("done",done)
      todoItems.map(item => item.done = done);
    }
    // 刪除已勾選之todo-list
    function deleteDoneTodoItems(){
      todoItems = todoItems.filter((todo) => !todo.done);
    }
    // 儲存至localStorage
    function saveTodoItems(){
      localStorage.setItem("todoItems", JSON.stringify(todoItems));
    }
    // 偵測todo-list項目是否有異動，若有新增或刪除會重新儲存到localStorage
    watch(todoItems, () => {
      saveTodoItems();
    })

    provide('todoItems',todoItems)

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
