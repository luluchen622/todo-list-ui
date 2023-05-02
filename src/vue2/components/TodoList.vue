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
import TodoItem from "@/vue2/components/TodoItem";

export default {
  name: "TodoList",
  components:{
    TodoItem
  },
  // 從父容器App.vue 接收 todoItems，傳給TodoItem逐筆遍歷出來
  props:['todoItems', 'checkTodo', 'deleteTodo', 'editTodo'],
  data() {
    return {
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