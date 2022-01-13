<template>
  <div>
    <!-- ref相当于id，类似于document.getElementById('id') -->
    <!-- <h1 v-text="msg" id="title"></h1> -->
    <h1 v-text="msg" ref="title"></h1>
    <button ref="btn" @click="showDOM">点我输出上方的DOM元素</button>
    <School ref="sch" />
  </div>
</template>

<script>
//引入School组件
import School from './components/School'

export default {
  name: 'App',
  components: { School },
  data() {
    return {
      msg: '欢迎学习Vue！'
    }
  },
  methods: {
    showDOM() {
      // console.log(document.getElementById('title')) // 等价于id写法
      console.log(this.$refs.title) //真实DOM元素
      console.log(this.$refs.btn) //真实DOM元素
      console.log(this.$refs.sch) //School组件的实例对象（vc），这里如果用id无法获取vc
    }
  }
}
</script>
