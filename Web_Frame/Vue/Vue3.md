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

4. 不要与Vue2.x配置混用

   1）Vue2.x配置（data、methos、computed...）中可以访问到setup中的属性、方法

   2）但在setup中不能访问到Vue2.x配置（data、methos、computed...）

   3）如果有重名, setup优先

5. setup不能是一个async函数，因为返回值不再是return的对象，而是promise，模板看不到return对象中的属性。（后期也可以返回一个Promise实例，但需要Suspense和异步组件的配合）

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

