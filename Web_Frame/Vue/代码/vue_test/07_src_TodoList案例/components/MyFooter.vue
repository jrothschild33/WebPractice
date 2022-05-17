<template>
  <!-- v-show控制的是diplay，如果total为0，则不展示footer计数栏 -->
  <div class="todo-footer" v-show="total">
    <label>
      <!-- 全选框：方法1：用checkAll函数改变checked状态，比较麻烦 -->
      <!-- <input type="checkbox" :checked="isAll" @change="checkAll"/> -->

      <!-- 全选框：方法2：巧用计算属性isAll，无需再另外声明函数 -->
      <input type="checkbox" v-model="isAll" />
    </label>
    <span>
      <span>已完成{{doneTotal}}</span>
      / 全部{{total}}
    </span>
    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: 'MyFooter',
  props: ['todos', 'checkAllTodo', 'clearAllTodo'],
  computed: {
    // 总数
    total() {
      return this.todos.length
    },
    // 已完成数
    doneTotal() {
      // 用reduce方法做条件统计（有几条数据调用几次），pre是累计器（初始值为0），todo是当前值
      return this.todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0)
    },
    // 注意：isAll计算属性是由total、doneTotal这两个计算属性动态计算得来的（允许套娃）
    // 控制全选框（bool类型）
    isAll: {
      //全选框是否勾选（如果没有待完成事件时，取消勾选）
      get() {
        return this.doneTotal === this.total && this.total > 0
      },
      // isAll被修改时set被调用（即checkbox选项框被点击时）
      set(value) {
        // 通知父组件App将todos中所有done属性标记为用户传递过来的value（true或false）
        this.checkAllTodo(value)
      }
    }
  },
  methods: {
    // 全选框：方法1：用checkAll函数改变checked状态，比较麻烦
    /* checkAll(e){
		  this.checkAllTodo(e.target.checked)
		} */

    // 清空所有已完成
    clearAll() {
      // 通知父组件App清除所有todos.done为true的数据
      this.clearAllTodo()
    }
  }
}
</script>

<style scoped>
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}
.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}
.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}
.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>