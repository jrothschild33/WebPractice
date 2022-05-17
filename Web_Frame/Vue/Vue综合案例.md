# Vue综合案例

## 案例：ToDoList

> 第三方库依赖：`nanoid`，用于生成唯一id

![todolist项目说明](./src/todolist项目说明.png)

### 应用：props属性

#### 父组件：App.vue

1. 由3个子组件：`MyHeader`、`MyList`、`MyFooter`构成（其中`MyList`还嵌套了一层`MyItem`子组件）

2. 使用props属性为子组件传递函数，并接收由子组件发回的参数

3. 状态提升：列表数据todos之所以放在父组件App.vue中，是因为子组件`MyHeader`、`MyFooter`都在使用

   ```vue
   <template>
     <div id="root">
       <div class="todo-container">
         <div class="todo-wrap">
           <!-- 传参：addTodo(在MyHeader中配置props)，传入函数addTodo -->
           <!-- MyHeader功能：添加ToDo -->
           <MyHeader :addTodo="addTodo" />
           <!-- MyList功能：勾选、删除ToDo -->
           <MyList :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo" />
           <!-- MyFooter功能：全选、清除已完成ToDo -->
           <MyFooter :todos="todos" :checkAllTodo="checkAllTodo" :clearAllTodo="clearAllTodo" />
         </div>
       </div>
     </div>
   </template>
   
   <script>
   // 这里之所以没引入MyItem，是因为MyList中已经引入了
   import MyHeader from './components/MyHeader'
   import MyList from './components/MyList'
   import MyFooter from './components/MyFooter.vue'
   
   export default {
     name: 'App',
     components: { MyHeader, MyList, MyFooter },
     data() {
       return {
         //由于todos是MyHeader组件和MyFooter组件都在使用，所以放在App中（状态提升）
         todos: [
           { id: '001', title: '抽烟', done: true },
           { id: '002', title: '喝酒', done: false },
           { id: '003', title: '开车', done: true }
         ]
       }
     },
     methods: {
       // 添加
       addTodo(todoObj) {
         this.todos.unshift(todoObj)
       },
       // 勾选
       checkTodo(id) {
         this.todos.forEach(todo => {
           if (todo.id === id) todo.done = !todo.done
         })
       },
       // 删除
       deleteTodo(id) {
         // filter不会改变原数组，只是返回新数组，虽然都叫todos，但是已经不一样了，只要保证id不出问题，不会改变原todos
         this.todos = this.todos.filter(todo => todo.id !== id)
       },
       // 全选
       checkAllTodo(done) {
         this.todos.forEach(todo => {
           todo.done = done
         })
       },
       // 清除已完成
       clearAllTodo() {
         this.todos = this.todos.filter(todo => {
           return !todo.done
         })
       }
     }
   }
   </script>
   
   <style>
   body {
     background: #fff;
   }
   .btn {
     display: inline-block;
     padding: 4px 12px;
     margin-bottom: 0;
     font-size: 14px;
     line-height: 20px;
     text-align: center;
     vertical-align: middle;
     cursor: pointer;
     box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
     border-radius: 4px;
   }
   .btn-danger {
     color: #fff;
     background-color: #da4f49;
     border: 1px solid #bd362f;
   }
   .btn-danger:hover {
     color: #fff;
     background-color: #bd362f;
   }
   .btn:focus {
     outline: none;
   }
   .todo-container {
     width: 600px;
     margin: 0 auto;
   }
   .todo-container .todo-wrap {
     padding: 10px;
     border: 1px solid #ddd;
     border-radius: 5px;
   }
   </style>
   ```

#### 子组件：MyHeader.vue

1. 作用：提供input输入框，根据用户输入内容添加ToDo

2. 导入：第三方库nanoid，用于给ToDo对象提供唯一值的id

3. props接收父组件传递过来的addToDo函数：`props['addToDo']`

4. add函数：生成todoObj后，用`this.addTodo(todoObj)`将todoObj传递给父组件App.vue

   ```vue
   <template>
     <div class="todo-header">
       <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="title" @keyup.enter="add" />
     </div>
   </template>
   
   <script>
   // nanoid是用于生成唯一id的第三方库，使用npm i nanoid安装后导入使用
   import { nanoid } from 'nanoid'
       
   export default {
     name: 'MyHeader',
     // 接收从父组件App传递过来的addTodo函数
     props: ['addTodo'],
     data() {
       return {
         //收集用户输入的title
         title: ''
       }
     },
     methods: {
       // js原生事件方法获取输入框的值：e.target
       /* add(e){
         console.log(e.target.value)
       }, */
   
       add() {
         // 校验数据：需要输入非空数据
         if (!this.title.trim()) return alert('输入不能为空')
         // 将用户的输入包装成一个todo对象
         const todoObj = { id: nanoid(), title: this.title, done: false }
         // 子传父通信：通知父组件App添加一个todo对象
         this.addTodo(todoObj)
         // 清空输入
         this.title = ''
       }
     }
   }
   </script>
   
   <style scoped>
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
   ```

#### 子组件：MyList.vue

1. 作用：中转，里面嵌套孙组件MyItem，遍历App传递过来的`todos`，形成列表

2. props接受父组件App的数据：`props: ['todos', 'checkTodo', 'deleteTodo']`

   1）todos：数据对象，用于遍历形成列表

   2）checkTodo：勾选/取消勾选函数，要继续传递给孙组件`MyItem`

   3）deleteTodo：删除函数，要继续传递给孙组件`MyItem`

3. props给孙组件`MyItem`传递数据：

   1）todo：todoObj单条数据

   2）checkTodo：checkTodo函数

   3）deleteTodo：deleteTodo函数

   ```vue
   <template>
     <ul class="todo-main">
       <!-- 给MyItem传递数据：todoObj、checkTodo、deleteTodo -->
       <MyItem
         v-for="todoObj in todos"
         :key="todoObj.id"
         :todo="todoObj"
         :checkTodo="checkTodo"
         :deleteTodo="deleteTodo"
       />
     </ul>
   </template>
   
   <script>
   import MyItem from './MyItem'
   
   export default {
     name: 'MyList',
     components: { MyItem },
     //声明接收App传递过来的数据，其中todos是自己用的，checkTodo和deleteTodo是给子组件MyItem用的
     props: ['todos', 'checkTodo', 'deleteTodo']
   }
   </script>
   
   <style scoped>
   .todo-main {
     margin-left: 0px;
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
   ```

#### 孙组件：MyItem.vue

1. 作用：对单条数据todoObj进行勾选、删除操作

2. props接收MyList-->App传递来的数据（层层穿透）：`props: ['todo', 'checkTodo', 'deleteTodo']`

3. handleCheck函数：传递勾选的id，再用`this.checkTodo(id)`将id传递给父组件App

4. handleDelete函数：传递勾选的id，再用`this.deleteTodo(id)`将id传递给父组件App

   ```vue
   <template>
     <li>
       <label>
         <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)" />
         <!-- 如下代码也能实现功能，但是不太推荐，因为有点违反原则，因为修改了props -->
         <!-- <input type="checkbox" v-model="todo.done"/> -->
         <span>{{todo.title}}</span>
       </label>
       <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
     </li>
   </template>
   
   <script>
   export default {
     name: 'MyItem',
     // 声明接收todo、checkTodo、deleteTodo
     // 这里的todo接受的是单条数据todoObj
     props: ['todo', 'checkTodo', 'deleteTodo'],
     methods: {
       // 勾选/取消勾选
       handleCheck(id) {
         // 通知父组件App将对应的todo对象的done值取反
         this.checkTodo(id)
       },
       // 删除
       handleDelete(id) {
         if (confirm('确定删除吗？')) {
           // 通知父组件App将对应的todo对象删除
           this.deleteTodo(id)
         }
       }
     }
   }
   </script>
   
   <style scoped>
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
   ```

#### 子组件：MyFooter.vue

1. 作用：底部计数栏、全选/全不选、清除已完成任务

2. props接收父组件App传递来的数据：`props: ['todo', 'checkTodo', 'deleteTodo']`

3. 计算属性isAll：

   1）get()：控制是否全选

   2）set(value)：控制当其被改变时，用`this.checkAllTodo(value)`通知父组件App将todos中所有done属性标记为用户传递过来的value

4. clearAll函数：点击按钮时，调用`this.clearAllTodo()`通知父组件App清除已完成todos

   ```vue
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
   ```

#### 入口文件：main.js

1. 正常写法：

   ```js
   //引入Vue
   import Vue from 'vue'
   //引入App
   import App from './App.vue'
   //关闭Vue的生产提示
   Vue.config.productionTip = false
   
   //创建vm
   new Vue({
     el: '#app',
     render: (h) => h(App),
   })
   ```

------

### 应用：本地储存

> 需求：将父组件中定义的todos数组改造成从本地储存`localStorage`中读取、储存

#### 父组件：App.vue

1. 将data()中的todos数组改为从本地储存localStorage取数据，如果前期无数据，则初始化为空数组`[]`

   ```js
   data() {
     return {
       // 初始化时，如果没有数据，需要将todos设置为一个空数组，否则会变成null
       todos: JSON.parse(localStorage.getItem('todos')) || []
     }
   },
   ```

2. 监视属性watch：监视todos，一旦变化，就会触发localStorage的变化

   ```js
   // 使用watch实现，只要todos变化了，就会触发localStorage的变化
   watch: {
     todos: {
       // 必须用深度监视，否则勾选后checked属性不发生变化
       deep: true,
       handler(value) {
         localStorage.setItem('todos', JSON.stringify(value))
       }
     }
   }
   ```

------

### 应用：自定义事件

> 需求：将`addTodo`、`checkAllTodo`、`clearAllTodo`函数由props传递改成自定义事件，影响：App、MyHeader、MyFooter

#### 父组件：App.vue

1. 绑定事件：使用`@`或`v-on`

   ```vue
   <template>
     <div id="root">
       <div class="todo-container">
         <div class="todo-wrap">
           <!-- 注意：所有父给子传递函数的地方，都可以改造成自定义事件的模式 -->
           <!-- <MyHeader :addTodo="addTodo" /> -->
           <MyHeader @addTodo="addTodo" />
           <MyList :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo" />
           <!-- <MyFooter :todos="todos" :checkAllTodo="checkAllTodo" :clearAllTodo="clearAllTodo" /> -->
           <MyFooter :todos="todos" @checkAllTodo="checkAllTodo" @clearAllTodo="clearAllTodo" />
         </div>
       </div>
     </div>
   </template>
   ```

#### 子组件：MyHeader.vue

1. 无需再使用props接受父组件传递的addTodo函数

2. 在add()方法中用 `$emit` 触发父组件App中的addTodo函数

   ```js
   export default {
     name: 'MyHeader',
     // 无需再接收addTodo
     // props: ['addTodo'],
     data() {
       return {
         title: ''
       }
     },
     methods: {
       add() {
         if (!this.title.trim()) return alert('输入不能为空')
         const todoObj = { id: nanoid(), title: this.title, done: false }
         // 子传父通信（旧方法）
         // this.addTodo(todoObj)
         
         // 触发事件：$emit，通知App组件去添加一个todo对象
         this.$emit('addTodo', todoObj, 1, 2, 3)
         this.title = ''
       }
     }
   }
   ```

#### 子组件：MyFooter.vue

1. 无需再使用props接受父组件传递的checkTodo、deleteTodo函数

2. 将checkAllTodo、clearAllTodo改造为`this.$emit()`模式

   ```vue
   <script>
   export default {
     name: 'MyFooter',
     props: ['todos'], // 无需再接收checkAllTodo、clearAllTodo
     computed: {
       //总数
       total() {
         return this.todos.length
       },
       doneTotal() {
         return this.todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0)
       },
       isAll: {
         get() {
           return this.doneTotal === this.total && this.total > 0
         },
         set(value) {
           // 子传父通信（旧方法）
           // this.checkAllTodo(value)
           
           // 触发事件：$emit
           this.$emit('checkAllTodo', value)
         }
       }
     },
     methods: {
       clearAll() {
         // 子传父通信（旧方法）
         // this.clearAllTodo()
         
         // 触发事件：$emit
         this.$emit('clearAllTodo')
       }
     }
   }
   </script>
   ```

------

### 应用：全局事件总线

> 需求：将`checkTodo`、`deleteTodo`函数由props属性传递改造成全局事件总线，影响：main.js、App、MyList、MyItem

#### 入口文件：main.js

1. 设置全局事件总线

   ```js
   //引入Vue
   import Vue from 'vue'
   //引入App
   import App from './App.vue'
   //关闭Vue的生产提示
   Vue.config.productionTip = false
   
   //创建vm
   new Vue({
   	el:'#app',
   	render: h => h(App),
       // 设置全局事件总线
   	beforeCreate() {
   		Vue.prototype.$bus = this
   	},
   })
   ```

#### 父组件：App.vue

1. 接收数据：在`mounted()`中使用`$bus.$on`挂载事件

2. 解绑事件：在beforeDestory()中使用`$bus.$off`释放事件名称

   ```html
   <!-- 使用全局事件总线，绑定checkTodo 和 deleteTodo函数，无需再使用props属性及自定义事件-->
   <!--<MyList :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo" />-->
   <MyList :todos="todos" />
   ```

   ```js
   mounted() {
     this.$bus.$on('checkTodo', this.checkTodo)
     this.$bus.$on('deleteTodo', this.deleteTodo)
   },
   beforeDestroy() {
     this.$bus.$off('checkTodo')
     this.$bus.$off('deleteTodo')
   }
   ```

#### 子组件：MyList.vue

1. 无需再用 props 给 MyItem 孙组件传递todo、checkTodo、deleteTodo

2. 无需再用 props 接受父组件传递过来的 checkTodo、deleteTodo 函数

   ```vue
   <template>
     <ul class="todo-main">
       <!-- 无需再用 props 给 MyItem 孙组件传递todo、checkTodo、deleteTodo -->
       <!-- <MyItem v-for="todoObj in todos" :key="todoObj.id" :todo="todoObj" :checkTodo="checkTodo" :deleteTodo="deleteTodo" /> -->
       <MyItem v-for="todoObj in todos" :key="todoObj.id" :todo="todoObj" />
     </ul>
   </template>
   
   <script>
   import MyItem from './MyItem'
   
   export default {
     name: 'MyList',
     components: { MyItem },
     props: ['todos']	// 无需再接收checkTodo、deleteTodo
   }
   </script>
   
   <style scoped>
   /*main*/
   .todo-main {
     margin-left: 0px;
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
   ```

#### 孙组件：MyItem.vue

1. 无需再用 props 接受父组件传递过来的 checkTodo、deleteTodo 函数

2. 使用全局事件总线`this.$bus.$emit`挂载 checkTodo、deleteTodo 函数

   ```vue
   <script>
   export default {
     name: 'MyItem',
     //声明接收todo
     props: ['todo'],
     methods: {
       handleCheck(id) {
         // 子传父通信（旧方法）
         // this.checkTodo(id)
         
         // 全局事件总线：this.$bus.$emit 挂载函数
         this.$bus.$emit('checkTodo', id)
       },
       handleDelete(id) {
         if (confirm('确定删除吗？')) {
           // 子传父通信（旧方法）
           // this.deleteTodo(id)
           
           // 全局事件总线：this.$bus.$emit 挂载函数
           this.$bus.$emit('deleteTodo', id)
         }
       }
     }
   }
   </script>
   ```

------

### 应用：消息订阅与发布

> 需求：将`deleteTodo`函数改造成pubsub形式，影响：App、MyItem

#### 父组件：App.vue

1. 安装并导入`pubsub-js`

2. 在`mounted()`中使用`pubsub.subscribe`订阅deleteTodo函数

3. 在`beforeDestroy()`中使用`pubsub.unsubscribe`取消订阅deleteTodo函数

   ```vue
   <template>
     <div id="root">
       <div class="todo-container">
         <div class="todo-wrap">
           <MyHeader @addTodo="addTodo" />
           <MyList :todos="todos" />
           <MyFooter :todos="todos" @checkAllTodo="checkAllTodo" @clearAllTodo="clearAllTodo" />
         </div>
       </div>
     </div>
   </template>
   
   <script>
   // 引入pubsub-js
   import pubsub from 'pubsub-js'
   import MyHeader from './components/MyHeader'
   import MyList from './components/MyList'
   import MyFooter from './components/MyFooter'
   
   export default {
     name: 'App',
     components: { MyHeader, MyList, MyFooter },
     data() {
       return {
         todos: JSON.parse(localStorage.getItem('todos')) || []
       }
     },
     methods: {
       // 添加一个todo
       addTodo(todoObj) {
         this.todos.unshift(todoObj)
       },
       // 勾选or取消勾选一个todo
       checkTodo(id) {
         this.todos.forEach(todo => {
           if (todo.id === id) todo.done = !todo.done
         })
       },
       // 删除一个todo（注意：由于使用了pubsub库，第一个参数默认是msgName，但如果不用的话会报错，所以用"_"占位）
       deleteTodo(_, id) {
         this.todos = this.todos.filter(todo => todo.id !== id)
       },
       // 全选or取消全选
       checkAllTodo(done) {
         this.todos.forEach(todo => {
           todo.done = done
         })
       },
       // 清除所有已经完成的todo
       clearAllTodo() {
         this.todos = this.todos.filter(todo => {
           return !todo.done
         })
       }
     },
     watch: {
       todos: {
         deep: true,
         handler(value) {
           localStorage.setItem('todos', JSON.stringify(value))
         }
       }
     },
     mounted() {
       this.$bus.$on('checkTodo', this.checkTodo)
       // 订阅deleteTodo函数
       this.pubId = pubsub.subscribe('deleteTodo', this.deleteTodo)
     },
     beforeDestroy() {
       this.$bus.$off('checkTodo')
       // 取消订阅deleteTodo函数
       pubsub.unsubscribe(this.pubId)
     }
   }
   </script>
   ```

#### 孙组件：MyItem.vue

1. 安装并导入`pubsub-js`

2. 在`method()`对应的函数中使用`pubsub.publish`发布deleteTodo函数

   ```vue
   <script>
   import pubsub from 'pubsub-js'
   export default {
     name: 'MyItem',
     //声明接收todo
     props: ['todo'],
     methods: {
       //勾选or取消勾选
       handleCheck(id) {
         // 子传父通信（旧方法）：通知App组件将对应的todo对象的done值取反
         // this.checkTodo(id)
         // 全局事件总线：this.$bus.$emit 挂载函数
         this.$bus.$emit('checkTodo', id)
       },
       //删除
       handleDelete(id) {
         if (confirm('确定删除吗？')) {
           // 子传父通信（旧方法）：通知App组件将对应的todo对象删除
           // this.deleteTodo(id)
           
           // 全局事件总线：this.$bus.$emit 挂载函数
           // this.$bus.$emit('deleteTodo', id)
           
           // 消息订阅与发布：pubsub.publish
           pubsub.publish('deleteTodo', id)
         }
       }
     }
   }
   </script>
   ```

------

### 应用：nextTick

> 需求：为每项todo数据添加“编辑按钮”，输入完毕失去焦点后即编辑完成，影响：App、MyItem

#### 父组件：App.vue

1. 定义更新数据的函数`updateTodo`

   ```js
   updateTodo(id, title) {
     this.todos.forEach(todo => {
       if (todo.id === id) todo.title = title
     })
   },
   ```

2. 使用全局事件总线，在mounted()与beforeDestroy()中挂载、解绑事件

   ```js
   mounted() {
     this.$bus.$on('checkTodo', this.checkTodo)
     // 挂载updateTodo
     this.$bus.$on('updateTodo', this.updateTodo)
     this.pubId = pubsub.subscribe('deleteTodo', this.deleteTodo)
   },
   beforeDestroy() {
     this.$bus.$off('checkTodo')
     // 解绑updateTodo
     this.$bus.$off('updateTodo')
     pubsub.unsubscribe(this.pubId)
   }
   ```

3. 添加对应的css样式

   ```css
   .btn-edit {
     color: #fff;
     background-color: skyblue;
     border: 1px solid rgb(103, 159, 180);
     margin-right: 5px;
   }
   ```

#### 孙组件：MyItem.vue

1. 为todo数据添加`isEdit`属性（布尔值），根据`v-show="!todo.isEdit"`判断是否要显示当前元素

   1）使用`bject.prototype.hasOwnProperty`判断todo是否有`isEdit`属性，如果有，则隐藏原有的`<span>`，并显示输入框`<input>`

   2）如果没有，则用`$set`为todo添加`isEdit`为true的属性

2. 点击编辑按钮`<button>`后，隐藏编辑按钮，显示输入框`<input>`并自动获取焦点，但由于`<input>`获取焦点的动作需要在DOM更新后完成，此处需要借助`this.$nextTick(回调函数)`

3. 在输入框`<input>`编辑完毕后，鼠标移开失去焦点，认为编辑完毕，页面恢复原样，重新显示`<span>`和编辑按钮`<button>`

   ```vue
   <template>
     <li>
       <label>
         <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)" />
         <!-- 添加显示条件v-show，只有处于非编辑状态时，才会显示span -->
         <span v-show="!todo.isEdit">{{todo.title}}</span>
         <!-- 新增编辑输入框input，设置显示条件，定义失去焦点即完成编辑的函数，添加ref -->
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
       <!-- 新增编辑按钮，设置显示条件，定义点击后编辑函数 -->
       <button v-show="!todo.isEdit" class="btn btn-edit" @click="handleEdit(todo)">编辑</button>
     </li>
   </template>
   
   <script>
   import pubsub from 'pubsub-js'
   export default {
     name: 'MyItem',
     props: ['todo'],
     methods: {
       handleCheck(id) {
         this.$bus.$emit('checkTodo', id)
       },
       handleDelete(id) {
         if (confirm('确定删除吗？')) {
           pubsub.publish('deleteTodo', id)
         }
       },
       
       // 编辑
       handleEdit(todo) {
         // 先判断todo身上是否已经有isEdit属性
         // Object.prototype.hasOwnProperty()返回一个布尔值，指示对象自身属性中是否具有指定的属性
         // if (todo.hasOwnProperty('isEdit')) {   // 这样写ESlint会报错
         if (Object.prototype.hasOwnProperty.call(todo, 'isEdit')) {
           todo.isEdit = true
         } else {
           // 注意：需要用$set给todos追加属性，才能是响应式的
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
   ```

### 应用：动画效果

> 需求：为todo数据项添加进入效果，影响：MyList

#### 子组件：MyList.vue

1. 多个元素需要过度，用`<transition-group>`包裹要过度的元素，配置name属性，且每个元素都要指定key值

   ```vue
   <template>
     <ul class="todo-main">
       <!-- 包裹MyItem -->
       <transition-group name="todo" appear>
         <MyItem v-for="todoObj in todos" :key="todoObj.id" :todo="todoObj" />
       </transition-group>
     </ul>
   </template>
   ```

2. 编写css动画样式

   ```css
   .todo-enter-active {
     animation: atguigu 0.5s linear;
   }
   
   .todo-leave-active {
     animation: atguigu 0.5s linear reverse;
   }
   
   @keyframes atguigu {
     from {
       transform: translateX(100%);
     }
     to {
       transform: translateX(0px);
     }
   }
   ```

   