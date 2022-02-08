<template>
  <li>
    <label>
      <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)" />
      <!-- 如下代码也能实现功能，但是不太推荐，因为有点违反原则，因为修改了props -->
      <!-- <input type="checkbox" v-model="todo.done"/> -->
      <span v-show="!todo.isEdit">{{todo.title}}</span>
      <!-- 注意：这里可以使用$event来传递事件参数 -->
      <input
        type="text"
        v-show="todo.isEdit"
        :value="todo.title"
        @blur="handleBlur(todo,$event)"
        ref="inputTitle"
      />
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
    <button v-show="!todo.isEdit" class="btn btn-edit" @click="handleEdit(todo)">编辑</button>
  </li>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
  name: 'MyItem',
  //声明接收todo
  props: ['todo'],
  methods: {
    //勾选or取消勾选
    handleCheck(id) {
      //通知App组件将对应的todo对象的done值取反
      // this.checkTodo(id)
      this.$bus.$emit('checkTodo', id)
    },
    //删除
    handleDelete(id) {
      if (confirm('确定删除吗？')) {
        //通知App组件将对应的todo对象删除
        // this.deleteTodo(id)
        // this.$bus.$emit('deleteTodo',id)
        pubsub.publish('deleteTodo', id)
      }
    },
    //编辑
    handleEdit(todo) {
      // 先判断todo身上是否已经有isEdit属性
      // Object.prototype.hasOwnProperty()返回一个布尔值，指示对象自身属性中是否具有指定的属性
      // if (todo.hasOwnProperty('isEdit')) {   // 这样写ESlint会报错
      if (Object.prototype.hasOwnProperty.call(todo, 'isEdit')) {
        todo.isEdit = true
      } else {
        // console.log('@')
        // 注意：这里需要用$set给todos追加属性，才能是响应式的
        this.$set(todo, 'isEdit', true)
      }
      // 让input框获取焦点，$nextTick中的回调函数会在DOM节点更新后执行（用定时器setTimeout也能实现）
      this.$nextTick(function() {
        // 如果不加$nextTick,Vue会等handleEdit中的所有代码执行完毕后再渲染模板，而此时input框还没出来，所以无法获取焦点
        this.$refs.inputTitle.focus()
      })
    },
    //失去焦点回调（真正执行修改逻辑）
    handleBlur(todo, e) {
      // 注意：这里之所以不用$set，是因为肯定是先点击handleEdit才能是handleBlur，必然已经有isEdit属性
      todo.isEdit = false
      if (!e.target.value.trim()) return alert('输入不能为空！')
      this.$bus.$emit('updateTodo', todo.id, e.target.value)
    }
  }
}
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  /* float: left; */
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #ddd;
}

li:hover button {
  display: block;
}
</style>