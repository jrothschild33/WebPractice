<template>
  <div class="app">
    <h3>我是App组件</h3>
    <Suspense>
      <!-- 插槽1：展示真实内容 -->
      <template v-slot:default>
        <Child />
      </template>
      <!-- 插槽2：展示等待加载时的内容 -->
      <template v-slot:fallback>
        <h3>稍等，加载中...</h3>
      </template>
    </Suspense>
  </div>
</template>

<script>
// import Child from './components/Child'		//静态引入
import { defineAsyncComponent } from 'vue'
const Child = defineAsyncComponent(() => import('./components/Child')) //异步引入
export default {
  name: 'App',
  components: { Child },
}
</script>

<style>
.app {
  background-color: gray;
  padding: 10px;
}
</style>