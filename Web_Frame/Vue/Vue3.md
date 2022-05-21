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

