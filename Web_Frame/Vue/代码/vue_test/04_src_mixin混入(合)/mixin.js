// 分别暴露写法，引入时要用 import {hunhe,hunhe2,...} from './mixin.js'
export const hunhe = {
  methods: {
    showName() {
      alert(this.name)
    },
  },
  mounted() {
    console.log('你好啊！')
  },
}
export const hunhe2 = {
  data() {
    return {
      x: 100,
      y: 200,
    }
  },
}
