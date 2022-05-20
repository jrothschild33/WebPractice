<template>
  <ul>
    <!-- 使用$route.query.xxx接收数据 -->
    <li>消息编号：{{$route.query.id}}</li>
    <li>消息标题：{{$route.query.title}}</li>
  </ul>
</template>

<script>
export default {
  name: 'Detail',
  mounted() {
    console.log(this.$route)
  }
}
</script>