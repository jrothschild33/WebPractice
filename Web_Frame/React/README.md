# 第1章 React基础知识

## 1.1 React简介

1. 官网：

   1）英文官网：[https://reactjs.org/](https://reactjs.org/)

   2）中文官网：[https://react.docschina.org/](https://react.docschina.org/)

2. 介绍：

   1）由Facebook开源

   2）用于动态构建用户界面的 JavaScript 库(只关注于视图)

   - 原生JS操作DOM繁琐、效率低
   - 原生JS直接操作DOM，浏览器会进行大量的重绘重排
   - 原生JS没有组件化编码方案，代码复用率低

3. 特点：

   1）采用组件化模式、声明式编码（原生JS是命令式编码），提高开发效率及组件复用率

   2）在React Native中可以使用 React 语法进行移动端开发

   3）高效（优秀的Diffing算法）

   - 使用虚拟(virtual)DOM，不总是直接操作页面真实DOM
   - DOM Diffing算法，最小化页面重绘

## 1.2 基本用法

