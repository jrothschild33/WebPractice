<template>
  <div class="school">
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
// 第三方插件：pubsub-js（所有框架可用，包括angular、react）
import pubsub from 'pubsub-js'
export default {
  name: 'School',
  data() {
    return {
      name: '尚硅谷',
      address: '北京'
    }
  },
  mounted() {
    // console.log('School',this)
    /* this.$bus.$on('hello',(data)=>{
				console.log('我是School组件，收到了数据',data)
			}) */

    // 每次pubsub时会生成不同的id，根据id号才能取消订阅，所以要挂到this上
    this.pubId = pubsub.subscribe('hello', (msgName, data) => {
      // 注意：如果是箭头函数，this指向vc；如果是正常函数，this是undefined
      console.log(this)
      // 参数：msgName：消息名称；data：数据
      console.log('有人发布了hello消息，hello消息的回调执行了', msgName, data)
    })
  },
  beforeDestroy() {
    // this.$bus.$off('hello')
    pubsub.unsubscribe(this.pubId)
  }
}
</script>

<style scoped>
.school {
  background-color: skyblue;
  padding: 5px;
}
</style>