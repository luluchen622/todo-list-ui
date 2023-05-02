<template>
  <ul class="todo-main">
    <TodoItem
        v-for="item in todoItems"
        :key="item.id"
        :item="item"
        :checkTodo = "checkTodo"
        :deleteTodo = "deleteTodo"
        :editTodo = "editTodo"
    />
  </ul>
</template>

<script>
import TodoItem from "@/vue3/components/TodoItem";
import {inject} from "vue";

export default {
  name: "TodoList",
  components:{
    TodoItem
  },
  // 從父容器App.vue 接收 todoItems，傳給TodoItem逐筆遍歷出來
  props:['checkTodo', 'deleteTodo', 'editTodo'],
  // 從父容器App.vue 接收 todoItems，傳給TodoItem逐筆遍歷出來
  setup(){
    const todoItems = inject('todoItems');
    return{
      todoItems
    }
  }

}
</script>

<style scoped>
.todo-main {
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}
</style>