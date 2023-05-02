<template>
  <div class="todo-header mb-3 mt-1">
    <b-form-input type="text" placeholder="請輸入todo，輸入完按Enter" v-model="inputValue" @keyup.enter="add"/>
  </div>
</template>

<script>

import { v4 as uuid } from 'uuid';
import {ref} from "vue";

export default {
  name: "TodoHeader",
  props:['addTodo'],
  setup(props){
    let inputValue = ref('');

    function add(){
      // 如果為空，則結束
      if (!inputValue.value) return;
      // ID設為UUID
      const uniqueId = uuid();
      const todoItem = {id: uniqueId, title: inputValue.value, done:false}
      props.addTodo(todoItem);
      inputValue.value = '';
    }

    return {
      inputValue,
      add
    }

  }
}
</script>

<style scoped>
  /*header*/
.todo-header input {
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}
.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
</style>