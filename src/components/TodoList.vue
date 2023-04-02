<template>
  <ul class="todo-main">
    <TodoItem
        v-for="item in todoItems"
        :key="item.id"
        :item="item"
        :checkTodo = "checkTodo"
        :deleteTodo = "deleteTodo"
    />
  </ul>
</template>

<script>
import TodoItem from "@/components/TodoItem";

export default {
  name: "TodoList",
  components:{
    TodoItem
  },
  // 從父容器App.vue 接收 todoItems，傳給TodoItem逐筆遍歷出來
  props:['todoItems', 'checkTodo', 'deleteTodo'],
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
.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>