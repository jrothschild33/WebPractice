#   什么是redux

Redux 是 JavaScript 状态容器，提供可预测化的状态管理。

## 为什么要使用redux

当我们了解一项技术的时候，大多说人只是想着，有了一项新技术，我要了解一下，要不我就跟不上时代的步伐了。
可是，你有没有想过，为什么会有这项技术，为什么要这么做？

redux作为一个状态管理容器。当你开发一个小项目的时候，你肯能真的不要他，因为props和state已经可以解决跨页面属性传递了。但是，
当你需要开发一个大型项目，很多时候，你需要跨多个页面传递属性和公用数据，这个时候一个全局的状态管理容器的优势就凸显出来。如下图所示：

![redux](https://gitee.com/hanyun_admin/picgo/raw/master/img/redux.png)  

## 安装

```

npm install --save redux

//  使用ts开发还需要这个
npm install --save @types/react-redux

npm install --save react-redux


```
