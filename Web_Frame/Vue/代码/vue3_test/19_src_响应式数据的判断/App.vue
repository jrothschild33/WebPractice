<template>
  <h3>我是App组件</h3>
</template>

<script>
import { ref, reactive, toRefs, readonly, isRef, isReactive, isReadonly, isProxy } from 'vue'
export default {
  name: 'App',
  setup() {
    let car = reactive({ name: '奔驰', price: '40W' })
    let sum = ref(0)
    let car2 = readonly(car)

    console.log(isRef(sum)) // True
    console.log(isReactive(car)) // True
    console.log(isReadonly(car2)) // True
    console.log(isProxy(car)) // True
    console.log(isProxy(car2)) // True
    console.log(isProxy(sum)) // False

    return { ...toRefs(car) }
  },
}
</script>

<style>
.app {
  background-color: gray;
  padding: 10px;
}
</style>