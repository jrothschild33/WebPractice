<template>
  <div>
    <button @click="getStudents">获取学生信息</button>
    <button @click="getCars">获取汽车信息</button>
  </div>
  <!-- 
		开启代理服务器：devServer.proxy（需要在vue.config.js中配置）
		官方文档：https://cli.vuejs.org/zh/config/#devserver-proxy
  -->
</template>

<script>
import axios from 'axios'
export default {
  name: 'App',
  methods: {
    getStudents() {
      axios.get('http://localhost:8080/atguigu/students').then(
        response => {
          console.log('请求成功了', response.data)
        },
        error => {
          console.log('请求失败了', error.message)
        }
      )
    },
    getCars() {
      axios.get('http://localhost:8080/demo/cars').then(
        response => {
          console.log('请求成功了', response.data)
        },
        error => {
          console.log('请求失败了', error.message)
        }
      )
    }
  }
}
</script>
