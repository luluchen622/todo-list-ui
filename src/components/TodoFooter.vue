<template>
  <!--隐式类型转换-->
  <b-row v-show="total">
    <b-col sm="1" class="d-inline-block pl-6">
      <b-form-checkbox class="px-2 d-inline-block" v-model="isAll"/>
    </b-col>
    <b-col sm="7" class="d-inline-block">
      <div>已完成{{ doneTotal }} / 全部{{total}}</div>
    </b-col>
    <b-col sm="4" class="d-inline-block">
      <button class="btn btn-danger" @click="deleteDoneTodo">清除已完成任務</button>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "TodoFooter",
  props:['todoItems'],
  computed:{
    total(){
      return this.todoItems.length;
    },
    doneTotal(){
      // 遞迴加總，判斷每個checkbox，有勾選+1、沒勾選+0
      return this.todoItems.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0);
    },
    isAll:{
      get(){
        return this.doneTotal === this.total && this.total > 0;
      },
      set(value){
        // 子組件 checkBox 觸發事件時，觸發父組件 changeCheckAllTodo方法
        this.$emit("changeCheckAllTodo", value);
      }
    }
  },
  methods:{
    // 刪除已勾選之todo-list
    deleteDoneTodo(){
      this.$emit("deleteDoneTodoItems");
    }
  },
}
</script>

<style scoped>
.pl-6 {
  padding-left: 30px;
}
</style>