<template>
  <div class="app">
    <h1>{{msg}}，学生姓名是:{{studentName}}</h1>

    <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
    <School :getSchoolName="getSchoolName" />

    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第一种写法，使用@或v-on） -->
    <!-- <Student @atguigu="getStudentName" @demo="m1"/> -->

    <!-- 可以只触发一次 -->
    <!-- <Student @atguigu.once="getStudentName" @demo="m1"/> -->

    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第二种写法，使用ref） -->
    <!-- 注意：此方法会将@后的事件全部看做自定义事件，如果想绑定原生JS事件，需要加.native -->
    <Student ref="student" @click.native="show" />
  </div>
</template>

<script>
import Student from './components/Student'
import School from './components/School'

export default {
  name: 'App',
  components: { School, Student },
  data() {
    return {
      msg: '你好啊！',
      studentName: ''
    }
  },
  methods: {
    getSchoolName(name) {
      console.log('App收到了学校名：', name)
    },
    getStudentName(name, ...params) {
      console.log('App收到了学生名：', name, params)
      this.studentName = name
    },
    m1() {
      console.log('demo事件被触发了！')
    },
    show() {
      alert(123)
    }
  },
  // 第二种写法，使用ref，需要挂载
  mounted() {
    this.$refs.student.$on('atguigu', this.getStudentName) //绑定自定义事件
    // this.$refs.student.$once('atguigu',this.getStudentName) //绑定自定义事件（一次性）
  }

  // 方法二的优点：灵活性强，可以实现计时器效果、多重事件效果，而方法一无法实现
  /* mounted() {
    setTimeout(() => {
      this.$refs.student.$on('atguigu', this.getStudentName) //绑定自定义事件
    }, 3000)
  } */
}
</script>

<style scoped>
.app {
  background-color: gray;
  padding: 5px;
}
</style>
