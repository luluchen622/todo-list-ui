<template>
  <div class="todo-header">
    <b-form-input type="text" placeholder="請輸入todo，輸入完按Enter" v-model="inputValue" @keyup.enter="add"/>
  </div>
</template>

<script>
export default {
  name: "TodoHeader",
  props: ['addTodo'],
  data() {
    return {
      inputValue: '',
      todoId: 0
    }
  },
  methods: {
    add(){
      // 如果為空，則結束
      if (!this.inputValue) return;
      // 每新增一筆 id + 1
      this.todoId = this.todoId + 1;
      const todoItem = {id: this.todoId, title: this.inputValue, done:false}
      this.addTodo(todoItem);
      this.inputValue = '';
    }
  },

}
</script>

<style scoped>
  /*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
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