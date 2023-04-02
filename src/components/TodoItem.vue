<template>
    <li>
      <b-col sm="1" class="d-inline-block pl-3">
        <b-form-checkbox class="px-2" :checked="item.done" @change="handleCheck(item.id)"/>
      </b-col>
      <b-col sm="9" class="d-inline-block mt-2 mb-2">
        <span>{{item.title}}</span>
      </b-col>
      <b-col sm="2" class="d-inline-block">
        <button class="btn btn-danger" @click="handleDelete(item.id)">删除</button>
      </b-col>
    </li>
</template>

<script>
export default {
  name: "TodoItem",
  props:['item', 'checkTodo', 'deleteTodo'],
  data() {
    return {
    }
  },
  methods: {
    // checkBox勾選後觸發，傳遞id
    handleCheck(id){
      // 使用父元素App.vue的 checkTodo方法，改變位於父元素的todoItems中該項todo 的 checked的狀態
      this.checkTodo(id);
    },
    // 刪除該項todo
    handleDelete(id){
      this.deleteTodo(id);
    },
  },
}
</script>

<style scoped>
  .pl-3 {
    padding-left: 15px;
  }
  li {
    list-style: none;
    border-bottom: 1px solid #ddd;
  }
  li button {
    float: right;
    display: none;
  }
  li:before {
    content: initial;
  }
  li:last-child {
    border-bottom: none;
  }
  li:hover{
    background: #ddd;
    height: 40px;
    line-height: 25px;
  }
  li:hover button{
    display: block;
  }
</style>