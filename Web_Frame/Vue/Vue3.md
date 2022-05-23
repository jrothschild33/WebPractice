# Vue3

## 第1章 Vue3基本用法

### 1.1 Vue3简介

1. 简介：

   1）2020年9月18日，Vue.js发布3.0版本，代号：One Piece（海贼王）

   2）耗时2年多、[2600+次提交](https://github.com/vuejs/vue-next/graphs/commit-activity)、[30+个RFC](https://github.com/vuejs/rfcs/tree/master/active-rfcs)、[600+次PR](https://github.com/vuejs/vue-next/pulls?q=is%3Apr+is%3Amerged+-author%3Aapp%2Fdependabot-preview+)、[99位贡献者](https://github.com/vuejs/vue-next/graphs/contributors) 

   3）github上的tags地址：https://github.com/vuejs/vue-next/releases/tag/v3.0.0

2. 优势：

   1）性能的提升：

   - 打包大小减少41%

   - 初次渲染快55%, 更新渲染快133%

   - 内存减少54%

   2）源码的升级：

   - 使用`Proxy`代替`defineProperty`实现响应式

   - 重写虚拟DOM的实现和Tree-Shaking

   3）拥抱TypeScript：Vue3可以更好的支持TypeScript

3. 特性：

   1）Composition API（组合API）

   - setup配置
   - ref与reactive
   - watch与watchEffect
   - provide与inject

   2）新的内置组件

   - Fragment 
   - Teleport
   - Suspense

   3）其他改变

   - 新的生命周期钩子
   - data 选项应始终被声明为一个函数
   - 移除keyCode支持作为 v-on 的修饰符

4. 开发者工具：chrome网上商店安装[带有beta版logo的](https://chrome.google.com/webstore/detail/vuejs-devtools/ljjemllljcmogpfapbkkighbhhppjdbg/related?utm_source=chrome-ntp-icon)

   ![vue3开发者工具](D:\MyProjects\Website\Tutoring\Web_Frame\Vue\src\vue3开发者工具.png)

------

### 1.2 创建Vue3工程

#### 1.2.1 用vue-cil创建

> 官方文档：[https://cli.vuejs.org/zh/guide/creating-a-project.html#vue-create](https://cli.vuejs.org/zh/guide/creating-a-project.html#vue-create)

1. 查看`@vue/cli`版本，确保版本在4.5.0以上

   ```cmd
   vue -V
   vue --version
   ```

2. 安装或者升级`@vue/cli`

   ```cmd
   npm install -g @vue/cli
   ```

3. 创建项目

   ```cmd
   vue create <project-name>
   ```

4. 启动项目

   ```cmd
   npm run serve
   ```

#### 1.2.2 用vite创建

> 官方文档：[https://v3.cn.vuejs.org/guide/installation.html#vite](https://v3.cn.vuejs.org/guide/installation.html#vite)
>
> vite官网：[https://vitejs.cn](https://vitejs.cn)

##### 1.2.2.1 vite简介

1. 定义：`vite`是新一代前端构建工具（以前是`webpack`、`grunt`、`gulp`）

2. 优点：

   1）开发环境中，无需打包操作，可快速的冷启动

   2）轻量快速的热重载（HMR，hot module replacement）

   3）真正的按需编译，不再等待整个应用编译完成

3. 传统构建与vite构建对比：

<img src="https://cn.vitejs.dev/assets/bundler.37740380.png" style="width:500px;height:280px;float:left;margin-right:10px" /><img src="https://cn.vitejs.dev/assets/esm.3070012d.png" style="width:480px;height:280px" />

##### 1.2.2.2 vite搭建流程

1. 创建工程

   ```cmd
   npm init vite-app <project-name>
   ```

2. 安装依赖

   ```cmd
   npm install
   ```

3. 启动项目

   ```cmd
   npm run dev
   ```

### 1.3 工程文件结构

1. 入口文件：main.js

   1）引入工厂函数：`createApp`

   2）创建应用实例对象app：`const app = createApp(App)`

   3）挂载：`app.mount('#app')`

   ```js
   // 引入的不再是Vue构造函数了，引入的是一个名为createApp的工厂函数
   // import Vue from 'vue'（旧写法）
   import { createApp } from 'vue'
   import App from './App.vue'
   
   // 创建应用实例对象app(类似于之前Vue2中的vm，但app比vm更“轻”)
   // new Vue({ el: '#app', render: (h) => h(App),}) （旧写法）
   const app = createApp(App)
   
   // 挂载
   app.mount('#app')
   ```

2. 组件：App.vue、Components.vue

   1）Vue3组件中的模板结构可以没有根标签

   ```vue
   <template>
     <!-- Vue3组件中的模板结构可以没有根标签 -->
     <img alt="Vue logo" src="./assets/logo.png" />
     <HelloWorld msg="Welcome to Your Vue.js App" />
   </template>
   
   <script>
   import HelloWorld from './components/HelloWorld.vue'
   
   export default {
     name: 'App',
     components: {
       HelloWorld,
     },
   }
   </script>
   ```

3. 其他文件结构与Vue2相同

------

## 第2章 Composition API

> 官方文档: [https://v3.cn.vuejs.org/guide/composition-api-introduction.html](https://v3.cn.vuejs.org/guide/composition-api-introduction.html)

### 2.1 setup

> 不要在`setup`中使用`this`，因为`setup`在`beforeCreate`之前执行一次，`this`是`undefined`

1. 定义：setup是Vue3.0中一个新的配置项，值为一个函数。

2. 作用：组件中所用到的数据、方法等，均要配置在setup中，是所有Composition API（组合API）“表演的舞台”。

3. 两种返回值：

   1）返回一个对象（常用）：对象中的属性、方法, 在模板中均可以直接使用

   2）返回一个渲染函数（不常用）：可以自定义渲染内容

   ```vue
   <template>
     <h1>一个人的信息</h1>
     <h2>姓名：{{name}}</h2>
     <h2>年龄：{{age}}</h2>
     <h2>a的值是：{{a}}</h2>
     <button @click="sayHello">说话(Vue3所配置的——sayHello)</button>
   </template>
   
   <script>
   export default {
     name: 'App',
     setup() {
       // 数据
       let name = '张三'
       let age = 18
       let a = 200
       // 方法
       function sayHello() {
         alert(`我叫${name}，我${age}岁了，你好啊！`)
       }
       // 返回一个对象（常用）
       return {
         name,
         age,
         sayHello,
       }
       // 返回一个函数（渲染函数）
       // return ()=> h('h1','尚硅谷')
     },
   }
   </script>
   ```

4. 不要与Vue2配置混用

   1）Vue2配置（data、methos、computed...）中可以访问到setup中的属性、方法

   2）但在setup中不能访问到Vue2配置（data、methos、computed...）

   3）如果有重名, setup优先

5. setup不能是一个async函数，因为返回值不再是return的对象，而是promise，模板看不到return对象中的属性。（后期也可以返回一个Promise实例，但需要Suspense和异步组件的配合）

6. setup执行的时机：在`beforeCreate`之前执行一次，`this`是`undefined`（不要在setup中使用`this`）

7. setup的参数：

   1）`props`：值为对象，包含：组件外部传递过来，且组件内部声明接收了的属性

   2）`context`：上下文对象

   - `attrs`: 值为对象，包含：组件外部传递过来，但没有在props配置中声明的属性, 相当于 `this.$attrs`
   - `slots`: 收到的插槽内容, 相当于 `this.$slots`
   - `emit`: 分发自定义事件的函数, 相当于 `this.$emit`

8. 案例：

   1）父组件：App.vue

   ```vue
   <template>
     <!-- 自定义事件 -->
     <Demo @hello="showHelloMsg" msg="你好啊" school="尚硅谷">
       <!-- 插槽：在子组件中使用context.slots查看 -->
       <template v-slot:qwe>
         <span>尚硅谷</span>
       </template>
       <template v-slot:asd>
         <span>尚硅谷</span>
       </template>
     </Demo>
   </template>
   
   <script>
   import Demo from './components/Demo'
   export default {
     name: 'App',
     components: { Demo },
     setup() {
       function showHelloMsg(value) {
         alert(`你好啊，你触发了hello事件，我收到的参数是:${value}！`)
       }
       return {
         showHelloMsg,
       }
     },
   }
   </script>
   ```

   2）子组件：Demo.vue

   ```vue
   <template>
     <h1>一个人的信息</h1>
     <h2>姓名：{{person.name}}</h2>
     <h2>年龄：{{person.age}}</h2>
     <button @click="test">测试触发一下Demo组件的Hello事件</button>
   </template>
   
   <script>
   import { reactive } from 'vue'
   export default {
     name: 'Demo',
     props: ['msg', 'school'],
     emits: ['hello'], // 需要接收一下父组件定义的自定义事件（vue3新写法）
     setup(props, context) {
       // console.log('---setup---',props)
       // console.log('---setup---',context)
       // console.log('---setup---',context.attrs) // 相当与Vue2中的$attrs
       // console.log('---setup---',context.emit) 	// 触发自定义事件
       console.log('---setup---', context.slots) 	// 插槽
       //数据
       let person = reactive({
         name: '张三',
         age: 18,
       })
   
       //方法
       function test() {
         context.emit('hello', 666)
       }
   
       //返回一个对象（常用）
       return {
         person,
         test,
       }
     },
   }
   </script>
   ```

------

### 2.2 ref函数

1. 作用: 定义响应式数据

2. 语法: `const xxx = ref(initValue)` 

   1）创建一个包含响应式数据的引用对象（reference对象，简称ref对象）。

   2）JS中操作数据： `xxx.value`

   3）模板中读取数据: 不需要.value，直接：`<div>{{xxx}}</div>`

3. 注意：

   1）接收的数据可以是：基本类型、也可以是对象类型

   2）基本类型的数据：响应式依然是靠``Object.defineProperty()``的```get```与```set```完成的

   3）对象类型的数据：内部调用了Vue3.0中的`reactive`函数

   ```vue
   <template>
     <h1>一个人的信息</h1>
     <!-- 在模板中，无需通过.value，vue会自动提取值 -->
     <h2>姓名：{{name}}</h2>
     <h2>年龄：{{age}}</h2>
     <h3>工作种类：{{job.type}}</h3>
     <h3>工作薪水：{{job.salary}}</h3>
     <button @click="changeInfo">修改人的信息</button>
   </template>
   
   <script>
   import { ref } from 'vue'
   export default {
     name: 'App',
     setup() {
       // 数据
       let name = ref('张三')
       let age = ref(18)
       let job = ref({
         type: '前端工程师',
         salary: '30K',
       })
       // 方法
       function changeInfo() {
         name.value = '李四'
         age.value = 48
         job.value.type = 'UI设计师'
         job.value.salary = '60K'
       }
   
       // 返回一个对象（常用）
       return {
         name,
         age,
         job,
         changeInfo,
       }
     },
   }
   </script>
   ```

------

### 2.3 reactive函数

#### 2.3.1 基本用法

1. 作用: 定义一个对象类型的响应式数据（基本类型不要用它，要用`ref`函数）

2. 语法：`const 代理对象 = reactive(源对象)`，接收一个对象（或数组），返回一个代理对象（Proxy的实例对象，简称proxy对象）

3. 特点：reactive定义的响应式数据是“深层次的”，不需要用过value修改数据，直接修改即可。

4. 原理：内部基于 ES6 的 `Proxy` 实现，通过代理对象操作源对象内部数据进行操作。

5. 与ref对比：

   | 对比 |                             ref                              |                        reactive                         |
   | :--: | :----------------------------------------------------------: | :-----------------------------------------------------: |
   | 定义 | 定义基本数据；也可定义对象或数组，内部自动通过`reactive`转为代理对象 |                     定义对象或数组                      |
   | 原理 |    通过`Object.defineProperty()`的`get`与`set`实现响应式     | 使用`Proxy`实现响应式, 并通过`Reflec`操作源对象内部数据 |
   | 使用 | 操作数据需要`.value`，读取数据时模板中直接读取不需要`.value` |           操作数据与读取数据均不需要`.value`            |

   ```vue
   <template>
     <h1>一个人的信息</h1>
     <h2>姓名：{{person.name}}</h2>
     <h2>年龄：{{person.age}}</h2>
     <h3>工作种类：{{person.job.type}}</h3>
     <h3>工作薪水：{{person.job.salary}}</h3>
     <h3>爱好：{{person.hobby}}</h3>
     <h3>测试的数据c：{{person.job.a.b.c}}</h3>
     <button @click="changeInfo">修改人的信息</button>
   </template>
   
   <script>
   import { reactive } from 'vue'
   export default {
     name: 'App',
     setup() {
       //数据
       let person = reactive({
         name: '张三',
         age: 18,
         job: {
           type: '前端工程师',
           salary: '30K',
           a: {
             b: {
               c: 666,
             },
           },
         },
         hobby: ['抽烟', '喝酒', '烫头'],
       })
   
       //方法
       function changeInfo() {
         person.name = '李四'
         person.age = 48
         person.job.type = 'UI设计师'
         person.job.salary = '60K'
         person.job.a.b.c = 999
         person.hobby[0] = '学习'	// 可以直接通过数组index修改（而vue2中需要用$set修改）
       }
   
       //返回一个对象（常用）
       return {
         person,
         changeInfo,
       }
     },
   }
   </script>
   ```

#### 2.3.2 响应式原理

##### 2.3.2.1 Vue2的响应式

1. 实现原理：

   1）对象类型：通过```Object.defineProperty()```对属性的读取、修改进行拦截（数据劫持）

   2）数组类型：通过重写更新数组的一系列方法来实现拦截。（对数组的变更方法进行了包裹）

   ```js
   Object.defineProperty(data, 'count', {
     get() {},
     set() {},
   })
   ```

2. 存在问题：

   1）对象：新增属性、删除属性, 界面不会更新

   2）数组：直接通过下标修改数组, 界面不会自动更新

   ```js
   //源数据
   let person = {
     name: '张三',
     age: 18,
   }
   
   let p = {}
   Object.defineProperty(p, 'name', {
     configurable: true,
     get() {
       //有人读取name时调用
       return person.name
     },
     set(value) {
       //有人修改name时调用
       console.log('有人修改了name属性，我发现了，我要去更新界面！')
       person.name = value
     },
   })
   Object.defineProperty(p, 'age', {
     get() {
       //有人读取age时调用
       return person.age
     },
     set(value) {
       //有人修改age时调用
       console.log('有人修改了age属性，我发现了，我要去更新界面！')
       person.age = value
     },
   })
   ```

##### 2.3.2.2 Vue3的响应式

1. 通过 `Proxy`（代理）：拦截对象中任意属性的变化, 包括：属性值的读写、属性的添加、属性的删除等

2. 通过 `Reflect`（反射）：对源对象的属性进行操作

   ```js
   new Proxy(data, {
     // 拦截读取属性值
     get(target, prop) {
       return Reflect.get(target, prop)
     },
     // 拦截设置属性值或添加新属性
     set(target, prop, value) {
       return Reflect.set(target, prop, value)
     },
     // 拦截删除属性
     deleteProperty(target, prop) {
       return Reflect.deleteProperty(target, prop)
     },
   })
   ```

3. MDN文档中描述的Proxy与Reflect：

   1）[Proxy](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy)：用于创建一个对象的代理，从而实现基本操作的拦截和自定义

   2）[Reflect](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect)：是一个内置的对象，它提供拦截JavaScript操作的方法

   ```js
   const p = new Proxy(person, {
     //有人读取p的某个属性时调用(target参数是指person)
     get(target, propName) {
       console.log(`有人读取了p身上的${propName}属性`)
       return Reflect.get(target, propName)
     },
     //有人修改p的某个属性、或给p追加某个属性时调用
     set(target, propName, value) {
       console.log(`有人修改了p身上的${propName}属性，我要去更新界面了！`)
       Reflect.set(target, propName, value)
     },
     //有人删除p的某个属性时调用
     deleteProperty(target, propName) {
       console.log(`有人删除了p身上的${propName}属性，我要去更新界面了！`)
       return Reflect.deleteProperty(target, propName)
     },
   })
   ```

------

### 2.4 计算属性 computed

> 与 Vue2 中computed配置功能一致

1. 简写：不考虑计算属性被修改的情况

   ```js
   person.fullName = computed(() => {
     return person.firstName + '-' + person.lastName
   })
   ```

2. 完整写法：考虑读和写

   ```js
   person.fullName = computed({
     get() {
       return person.firstName + '-' + person.lastName
     },
     set(value) {
       const nameArr = value.split('-')
       person.firstName = nameArr[0]
       person.lastName = nameArr[1]
     },
   })
   ```

3. 案例代码：Demo.vue

   ```vue
   <template>
     <h1>一个人的信息</h1>姓：
     <input type="text" v-model="person.firstName" />
     <br />名：
     <input type="text" v-model="person.lastName" />
     <br />
     <span>全名：{{person.fullName}}</span>
     <br />全名：
     <input type="text" v-model="person.fullName" />
   </template>
   
   <script>
   import { reactive, computed } from 'vue'
   export default {
     name: 'Demo',
     setup() {
       //数据
       let person = reactive({
         firstName: '张',
         lastName: '三',
       })
       //计算属性——简写（没有考虑计算属性被修改的情况）
       /* person.fullName = computed(() => {
         return person.firstName + '-' + person.lastName
       }) */
   
       //计算属性——完整写法（考虑读和写）
       person.fullName = computed({
         get() {
           return person.firstName + '-' + person.lastName
         },
         set(value) {
           const nameArr = value.split('-')
           person.firstName = nameArr[0]
           person.lastName = nameArr[1]
         },
       })
   
       //返回一个对象（常用）
       return {
         person,
       }
     },
   }
   </script>
   ```

------

### 2.5 监视属性

#### 2.5.1 watch函数

> 与 Vue2 中watch配置功能一致

##### 2.5.1.1 监视 `ref`

1. 监视单个基本类型响应式数据

   ```js
   let sum = ref(0)
   
   watch(
     sum,
     (newValue, oldValue) => {
       console.log('sum变了', newValue, oldValue)
     },
     { immediate: true }	// 启动时先进行一次监视
   )
   ```

2. 监视多个基本类型响应式数据：`newValue`、`oldValue`变为数组

   ```js
   let sum = ref(0)
   let msg = ref('你好啊')
   
   watch(
     [sum, msg],
     (newValue, oldValue) => {
       console.log('sum或msg变了', newValue, oldValue)
     },
     { immediate: true }	// 启动时先进行一次监视
   )
   ```

3. 监视对象类型的响应式数据：

   1）开启深度监视（推荐）：`{deep:true}`

   2）在对象后加`.value`

   ```js
   let person = ref({
     name: '张三',
     age: 18,
     job: {
       j1: {
         salary: 20,
       },
     },
   })
   
   // 方法1
   watch(
     person,
     (newValue, oldValue) => {
       console.log('person的值变化了', newValue, oldValue)
     },
     { deep: true }
   )
   
   // 方法2
   watch(
     person.value,
     (newValue, oldValue) => {
       console.log('person的值变化了', newValue, oldValue)
     },
   )
   ```

##### 2.5.1.2 监视 `reactive`

1. 监视响应式数据的全部属性：oldValue无法正确获取、强制开启了深度监视（强制`{deep:true}`，无法关闭）

   ```js
   let person = reactive({
     name: '张三',
     age: 18,
     job: {
       j1: {
         salary: 20,
       },
     },
   })
   
   watch(
     person,
     (newValue, oldValue) => {
       console.log('person变化了', newValue, oldValue)
     },
     { deep: false } // 此处的deep配置无效（强制{deep:true}，无法关闭）
   )
   ```

2. 监视响应式数据的单个属性：监视对象中的属性，要写成函数形式

   ```js
   watch(
     () => person.name, // 监视对象中的属性，要写成函数形式
     (newValue, oldValue) => {
       console.log('person的name变化了', newValue, oldValue)
     }
   )
   ```

3. 监视响应式数据的多个属性：

   ```js
   watch([() => person.name, () => person.age], (newValue, oldValue) => {
     console.log('person的name或age变化了', newValue, oldValue)
   })
   ```

4. 监视响应式数据的对象属性：此时`deep`配置有效

   ```js
   watch(
     () => person.job,
     (newValue, oldValue) => {
       console.log('person的job变化了', newValue, oldValue)
     },
     { deep: true } // 可以开启深度监视
   )
   ```

------

#### 2.5.2 watchEffect函数

1. 定义：无需指明监视哪个属性，监视的回调中用到哪个属性，那就监视哪个属性
2. 对比`watch`：既要指明监视的属性，也要指明监视的回调

3. 特点：类似computed

   1）`computed`注重的计算出来的值（回调函数的返回值），所以必须要写返回值

   2）`watchEffect`更注重的是过程（回调函数的函数体），所以不用写返回值

   ```js
   let sum = ref(0)
   let msg = ref('你好啊')
   let person = reactive({
     name: '张三',
     age: 18,
     job: {
       j1: {
         salary: 20,
       },
     },
   })
   
   watchEffect(() => {
     const x1 = sum.value
     const x2 = person.job.j1.salary
     console.log('watchEffect所指定的回调执行了')
   })
   ```

4. 案例完整代码：Demo.vue

   ```vue
   <template>
     <h2>当前求和为：{{sum}}</h2>
     <button @click="sum++">点我+1</button>
     <hr />
     <h2>当前的信息为：{{msg}}</h2>
     <button @click="msg+='！'">修改信息</button>
     <hr />
     <h2>姓名：{{person.name}}</h2>
     <h2>年龄：{{person.age}}</h2>
     <h2>薪资：{{person.job.j1.salary}}K</h2>
     <button @click="person.name+='~'">修改姓名</button>
     <button @click="person.age++">增长年龄</button>
     <button @click="person.job.j1.salary++">涨薪</button>
   </template>
   
   <script>
   import { ref, reactive, watch, watchEffect } from 'vue'
   export default {
     name: 'Demo',
     setup() {
       //数据
       let sum = ref(0)
       let msg = ref('你好啊')
       let person = reactive({
         name: '张三',
         age: 18,
         job: {
           j1: {
             salary: 20,
           },
         },
       })
   
       // watch监视
       watch(
         sum,
         (newValue, oldValue) => {
           console.log('sum的值变化了', newValue, oldValue)
         },
         { immediate: true }
       )
       // watchEffect监视
       watchEffect(() => {
         const x1 = sum.value
         const x2 = person.job.j1.salary
         console.log('watchEffect所指定的回调执行了')
       })
   
       //返回一个对象（常用）
       return {
         sum,
         msg,
         person,
       }
     },
   }
   </script>
   ```

------

### 2.6 生命周期函数

> Vue2生命周期：[https://cn.vuejs.org/images/lifecycle.png](https://cn.vuejs.org/images/lifecycle.png)
>
> Vue3生命周期：[https://v3.cn.vuejs.org/images/lifecycle.svg](https://v3.cn.vuejs.org/images/lifecycle.svg)

![vue生命周期对比](D:\MyProjects\Website\Tutoring\Web_Frame\Vue\src\vue生命周期对比.png)

1. Vue3中可以继续使用Vue2中的生命周期钩子，但有有两个被更名：

   1）`beforeDestroy` 改名为 `beforeUnmount`

   2）`destroyed` 改名为 `unmounted`

2. Vue3也提供了Composition API形式的生命周期钩子，与Vue2中钩子对应关系如下：

   |  配置项形式   |  组合式API形式  |
   | :-----------: | :-------------: |
   | beforeCreate  |     setup()     |
   |    created    |     setup()     |
   |  beforeMount  |  onBeforeMount  |
   |    mounted    |    onMounted    |
   | beforeUpdate  | onBeforeUpdate  |
   |    updated    |    onUpdated    |
   | beforeUnmount | onBeforeUnmount |
   |   unmounted   |   onUnmounted   |

3. 案例：通过配置项的形式使用生命周期钩子

   ```vue
   <template>
     <h2>当前求和为：{{sum}}</h2>
     <button @click="sum++">点我+1</button>
   </template>
   
   <script>
   import { ref } from 'vue'
   export default {
     name: 'Demo',
     setup() {
       console.log('---setup---')
       //数据
       let sum = ref(0)
       //返回一个对象（常用）
       return { sum }
     },
       
     // 通过配置项的形式使用生命周期钩子
     beforeCreate() {
       console.log('---beforeCreate---')
     },
     created() {
       console.log('---created---')
     },
     beforeMount() {
       console.log('---beforeMount---')
     },
     mounted() {
       console.log('---mounted---')
     },
     beforeUpdate() {
       console.log('---beforeUpdate---')
     },
     updated() {
       console.log('---updated---')
     },
     beforeUnmount() {
       console.log('---beforeUnmount---')
     },
     unmounted() {
       console.log('---unmounted---')
     },
   }
   </script>
   ```

4. 案例：通过组合式API的形式使用生命周期钩子

   ```vue
   <template>
     <h2>当前求和为：{{sum}}</h2>
     <button @click="sum++">点我+1</button>
   </template>
   
   <script>
   import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'
   export default {
     name: 'Demo',
     setup() {
       console.log('---setup---')
       // 数据
       let sum = ref(0)
       // 通过组合式API的形式去使用生命周期钩子
       onBeforeMount(() => {
         console.log('---onBeforeMount---')
       })
       onMounted(() => {
         console.log('---onMounted---')
       })
       onBeforeUpdate(() => {
         console.log('---onBeforeUpdate---')
       })
       onUpdated(() => {
         console.log('---onUpdated---')
       })
       onBeforeUnmount(() => {
         console.log('---onBeforeUnmount---')
       })
       onUnmounted(() => {
         console.log('---onUnmounted---')
       })
   
       //返回一个对象（常用）
       return { sum }
     },
   }
   </script>
   ```

------

### 2.7 hook函数

> 自定义`hook`函数把setup函数中使用的Composition API进行了封装，类似于Vue2中的混入`mixin`

1. 优势: 复用代码, 让setup中的逻辑更清楚易懂

2. 文件结构：`/hooks/useXXX.js`，给文件起名时按惯例以use开头

3. 案例：为Demo.vue、Test.vue组件添加鼠标打点功能

   1）定义hook函数：hooks/usePoint.js

   ```js
   import { reactive, onMounted, onBeforeUnmount } from 'vue'
   export default function () {
     //实现鼠标“打点”相关的数据
     let point = reactive({
       x: 0,
       y: 0,
     })
   
     //实现鼠标“打点”相关的方法
     function savePoint(event) {
       point.x = event.pageX
       point.y = event.pageY
       console.log(event.pageX, event.pageY)
     }
   
     //实现鼠标“打点”相关的生命周期钩子
     onMounted(() => {
       window.addEventListener('click', savePoint)
     })
   
     onBeforeUnmount(() => {
       window.removeEventListener('click', savePoint)
     })
   
     // 必须有返回值
     return point
   }
   ```

   2）子组件Demo.vue：引入hook函数并使用

   ```vue
   <template>
     <h2>当前求和为：{{sum}}</h2>
     <button @click="sum++">点我+1</button>
     <hr />
     <h2>当前点击时鼠标的坐标为：x：{{point.x}}，y：{{point.y}}</h2>
   </template>
   
   <script>
   import { ref } from 'vue'
   // 引入hook函数
   import usePoint from '../hooks/usePoint'
   export default {
     name: 'Demo',
     setup() {
       //数据
       let sum = ref(0)
       let point = usePoint()
   
       //返回一个对象（常用）
       return { sum, point }
     },
   }
   </script>
   ```

   3）子组件Test.vue：引入hook函数并使用

   ```vue
   <template>
     <h2>我是Test组件</h2>
     <h2>当前点击时鼠标的坐标为：x：{{point.x}}，y：{{point.y}}</h2>
   </template>
   
   <script>
   // 引入hook函数
   import usePoint from '../hooks/usePoint'
   export default {
     name: 'Test',
     setup() {
       const point = usePoint()
       return { point }
     },
   }
   </script>
   ```

   4）父组件App.vue：可以点击隐藏Demo子组件（演示hook函数可以继续在Test子组件中发挥作用）

   ```vue
   <template>
     <button @click="isShowDemo = !isShowDemo">切换隐藏/显示</button>
     <Demo v-if="isShowDemo" />
     <hr />
     <Test />
   </template>
   
   <script>
   import { ref } from 'vue'
   import Demo from './components/Demo'
   import Test from './components/Test'
   export default {
     name: 'App',
     components: { Demo, Test },
     setup() {
       let isShowDemo = ref(true)
       return { isShowDemo }
     },
   }
   </script>
   ```

------

### 2.8 toRef函数

> 创建一个`ref`对象，其`value`值指向另一个对象中的某个属性

1. 语法：`const xxx = toRef(obj,'attr')`

2. 应用: 要将响应式对象中的某个属性单独提供给外部使用时

3. 扩展：`toRefs(obj)`与`toRef`功能一致，但可以批量创建多个ref对象（仅能解析对象中的第一层，无法深入所有层级）

4. 注意：考虑后期可能向对象身上添加属性，所以在setup最后return时要同时交出`person`和`...toRefs(person)`

5. 案例：简化插值语法中的person对象

   ```vue
   <template>
     <h4>{{person}}</h4>
     <!-- 不用再写person.name，直接写name -->
     <h2>姓名：{{name}}</h2>
     <h2>年龄：{{age}}</h2>
     <!-- toRefs只能解析第一层属性，深层次属性依然需要逐一书写 -->
     <h2>薪资：{{job.j1.salary}}K</h2>
     <button @click="name+='~'">修改姓名</button>
     <button @click="age++">增长年龄</button>
     <button @click="job.j1.salary++">涨薪</button>
   </template>
   
   <script>
   import { ref, reactive, toRef, toRefs } from 'vue'
   export default {
     name: 'Demo',
     setup() {
       //数据
       let person = reactive({
         name: '张三', 
         age: 18,
         job: {
           j1: {
             salary: 20,
           },
         },
       })
       //返回一个对象（常用）
       return {
         person,
         
         // 对外提供单个属性
         // name:toRef(person,'name'),
         // age:toRef(person,'age'),
         // salary:toRef(person.job.j1,'salary'),
   
         // 对外提供全部属性（仅第一层）
         ...toRefs(person),
       }
     },
   }
   </script>
   ```

------

### 2.9 shallowRef/Reactive

1. `shallowReactive`：只处理对象最外层属性的响应式（浅响应式）；适用：对象数据，结构比较深, 但变化时只是外层属性变化

   ```vue
   <h2>薪资：{{job.j1.salary}}K</h2>
   <!-- shallowReactive：无法修改深层次的对象数据 -->
   <button @click="job.j1.salary++">涨薪</button>
   
   <script>
   ......
   let person = shallowReactive({
     name: '张三',
     age: 18,
     job: {
       j1: {
         salary: 20,
       },
     },
   })
   ......
   </script>
   ```

2. `shallowRef`：只处理基本数据类型的响应式, 不进行对象的响应式处理；适用：对象数据，后续功能不会修改该对象中的属性，而是用新的对象来替换

   ```vue
   <h4>当前的x.y值是：{{x.y}}</h4>
   <button @click="x={y:888}">点我替换x</button>
   <!-- shallowRef：不进行对象的响应式处理，因为里面不是Proxy，而是Object -->
   <button @click="x.y++">点我x.y++</button>
   
   <script>
   ......
   let x = shallowRef({
     y: 0,
   })
   ......
   </script>
   ```

------

### 2.10 readonly/shallowReadonly

> 应用：不希望数据被修改时

1. `readonly`: 让一个响应式数据变为只读的（深只读），考虑全部层级数据，所有数据无法修改

2. `shallowReadonly`：让一个响应式数据变为只读的（浅只读），仅考虑第一层数据，深层数据依然可以改

   ```vue
   <h2>姓名：{{name}}</h2>
   <h2>年龄：{{age}}</h2>
   <h2>薪资：{{job.j1.salary}}K</h2>
   <button @click="name+='~'">修改姓名</button>
   <button @click="age++">增长年龄</button>
   <button @click="job.j1.salary++">涨薪</button>
   
   <script>
   ......
   // 全部数据无法修改
   // let person = readonly({...})
   
   // 除第一层数据外，深层次数据可以修改
   let person = shallowReadonly({
     name: '张三',
     age: 18,
     job: {
       j1: {
         salary: 20,
       },
     },
   })
   ......
   </script>
   ```

------

### 2.11 toRaw/markRaw

1. `toRaw`：将一个由`reactive`生成的响应式对象转为普通对象（不能是`ref`定义的）

   1）应用场景：用于读取响应式对象对应的普通对象，对这个普通对象的所有操作，不会引起页面更新

   2）案例：

   ```vue
   <button @click="showRawPerson">输出最原始的person</button>
   
   <script>
   ......
   let person = reactive({
     name: '张三',
     age: 18,
     job: {
       j1: {
         salary: 20,
       },
     },
   })
       
   function showRawPerson() {
     const p = toRaw(person)
     p.age++
     // 控制台输出的age在增加，但界面上的person不会改变
     console.log(p)
   }
   
   return {
     // 考虑后期可能向对象身上添加属性，所以在setup最后return时要同时交出 person 和 ...toRefs(person)
     person,
     ...toRefs(person),
     showRawPerson,
   }
   ......
   </script>
   ```

2. `markRaw`：标记一个对象，使其永远不会再成为响应式对象

   1）应用场景：有些值不应被设置为响应式的，例如复杂的第三方类库等；当渲染具有不可变数据源的大列表时，跳过响应式转换可以提高性能

   2）案例：

   ```vue
   <h3 v-show="person.car">座驾信息：{{person.car}}</h3>
   <button @click="addCar">给人添加一台车</button>
   <button @click="person.car.name+='!'">换车名</button>
   <button @click="changePrice">换价格</button>
   
   <script>
   ......
   let person = reactive({
     name: '张三',
     age: 18,
     job: {
       j1: {
         salary: 20,
       },
     },
   })
       
   function addCar() {
     let car = { name: '奔驰', price: 40 }
     // car变为非响应式数据，改变后屏幕上的信息不会跟随变化
     person.car = markRaw(car)
   }
   
   function changePrice() {
     person.car.price++
     // 控制台输出数据会变化，但屏幕上的数据不会跟随变化
     console.log(person.car.price)
   }
   
   return {
     // 考虑后期可能向对象身上添加属性，所以在setup最后return时要同时交出 person 和 ...toRefs(person)
     person,
     ...toRefs(person),
     showRawPerson,
   }
   ......
   </script>
   ```

------

### 2.12 customRef

> 创建一个自定义的`ref`，并对其依赖项跟踪和更新触发进行显式控制





------

### 2.13 provide与inject

> 实现祖与后代组件间通信：父组件有`provide`选项来提供数据，后代组件有`inject`选项来开始使用这些数据

![provide与inject](D:\MyProjects\Website\Tutoring\Web_Frame\Vue\src\provide与inject.png)
