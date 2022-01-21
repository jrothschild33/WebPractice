<template>
  <div>
    <h2 @click="showName">学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
//引入一个hunhe
// import {hunhe,hunhe2} from '../mixin'

export default {
  name: 'School',
  data() {
    return {
      name: '尚硅谷',
      address: '北京',
      x: 666
      // 如果data中的属性名与mixins中的冲突，以data中的为准
    }
  },
  // mixins:[hunhe,hunhe2],
  // 注意：即使mixin.js有mounted，但生命周期钩子不会冲突，全都加载一遍
  mounted() {
    console.log('这里是内部挂载！')
  }
}
</script>