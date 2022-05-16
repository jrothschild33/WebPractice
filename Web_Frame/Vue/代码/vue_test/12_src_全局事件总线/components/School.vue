<template>
  <div class="school">
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
export default {
  name: 'School',
  data() {
    return {
      name: '尚硅谷',
      address: '北京'
    }
  },
  mounted() {
    // 全局事件总线：接收数据
    /* this.x.$on('hello',(data)=>{
				console.log('我是School组件，收到了数据',data)
			}) */
    this.$bus.$on('hello', data => {
      console.log('我是School组件，收到了数据', data)
    })
  },
  beforeDestroy() {
    // 注意：这里需要在销毁vc之前取消事件hello的挂载，释放hello名称，给其他人用
    this.$bus.$off('hello')
  }
}
</script>

<style scoped>
.school {
  background-color: skyblue;
  padding: 5px;
}
</style>