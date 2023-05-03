<template>
    <li>
      <b-col sm="1" class="d-inline-block pl-3 pt-2">
        <b-form-checkbox :checked="item.done" @click="handleCheck(item.id)"/>
      </b-col>
      <b-col sm="8" class="d-inline-block">
        <span v-show="!item.isEdit" @click="handleCheck(item.id)">{{item.title}}</span>
        <b-form-input
            type="text"
            v-show="item.isEdit"
            :value="item.title"
            @blur="doEditTodo(item, $event)"
            ref="inputTitle"
        />
      </b-col>
      <b-col sm="3" class="d-inline-block">
        <button class="btn btn-success" @click="handleEdit(item)">編輯</button>
        <button class="btn btn-danger" @click="handleDelete(item.id)">删除</button>
      </b-col>
    </li>
</template>

<script>


import {nextTick, ref} from "vue";

export default {
  name: "TodoItem",
  props:['item', 'checkTodo', 'deleteTodo', 'editTodo'],
  setup(props){
    let inputTitle = ref(null)

    // checkBox勾選後觸發，傳遞id
    function handleCheck(id){
      // 使用父元素App.vue的 checkTodo方法，改變位於父元素的todoItems中該項todo 的 checked的狀態
      props.checkTodo(id);
    }
    // 刪除該項todo
    function handleDelete(id){
      props.deleteTodo(id);
    }
    // 編輯該項todo
    function handleEdit(item){
      item.isEdit = true;
      // 點選編輯後就自動觸發focus事件，讓不需點選input，而點選其他區域也能取消編輯狀況
      nextTick(() => {
        inputTitle.value.focus()
      })
    }
    // 執行編輯
    function doEditTodo(item, e){
      item.isEdit = false;
      if(!e.target.value){
        return alert("請勿空白");
        // title有異動才執行編輯
      } else if(e.target.value !== item.title){
        props.editTodo(item.id, e.target.value);
      }
    }

    return {
      inputTitle,
      handleCheck,
      handleDelete,
      handleEdit,
      doEditTodo
    }

  }
}
</script>

<style scoped>
  .pt-2{
    padding-top:10px;
  }
  .pl-3 {
    padding-left: 15px;
  }
  li {
    list-style: none;
    border-bottom: 1px solid #ddd;
    height: 40px;
  }
  li button {
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
  }
  li:hover button{
    display: inline-block;
  }
</style>