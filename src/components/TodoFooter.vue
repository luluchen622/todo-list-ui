<template>
  <!--隐式类型转换-->
  <b-row>
    <b-col sm="1" class="d-inline-block pl-6">
      <b-form-checkbox class="px-2 d-inline-block" v-model="isAll"/>
    </b-col>
    <b-col sm="7" class="d-inline-block">
      <div>已完成{{ doneTotal }} / 全部{{todoItems.length}}</div>
    </b-col>
    <b-col sm="4" class="d-inline-block">
      <button class="btn btn-danger">清除已完成任务</button>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "TodoFooter",
  props:['todoItems'],
  computed:{
    doneTotal(){
      // 遞迴加總，判斷每個checkbox，有勾選+1、沒勾選+0
      return this.todoItems.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0);
    },
  },
  data() {
    return {
      isAll: ''
    }
  }
}
</script>

<style scoped>
.pl-6 {
  padding-left: 30px;
}
.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}
.todo-footer button {
  float: right;
}
</style>