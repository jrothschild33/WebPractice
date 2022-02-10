<template>
  <div class="container">
    <Category title="美食">
      <!-- 在父组件中写的子组件标签，里面如果再写内容，需要在子组件vue文件中配置<slot>指定插入位置 -->
      <img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt />
    </Category>

    <Category title="游戏">
      <ul>
        <li v-for="(g,index) in games" :key="index">{{g}}</li>
      </ul>
    </Category>

    <Category title="电影">
      <!-- controls属性用于显示播放按钮 -->
      <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
    </Category>
  </div>
</template>

<script>
import Category from './components/Category'
export default {
  name: 'App',
  components: { Category },
  data() {
    return {
      foods: ['火锅', '烧烤', '小龙虾', '牛排'],
      games: ['红色警戒', '穿越火线', '劲舞团', '超级玛丽'],
      films: ['《教父》', '《拆弹专家》', '《你好，李焕英》', '《尚硅谷》']
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-around;
}
</style>
