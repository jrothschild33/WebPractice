<template>
  <div class="demo">
    <h2 class="title">学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
export default {
  name: 'School',
  data() {
    return {
      name: '尚硅谷atguigu',
      address: '北京'
    }
  }
}
</script>

// scope作用：防止不同组件之间的css样式名称冲突
<style scoped>
.demo {
  background-color: skyblue;
}
</style>