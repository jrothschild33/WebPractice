<template>
  <div>
    <!-- 将原先data()中的sum改为读取state中的sum -->
    <h1>当前求和为：{{$store.state.sum}}</h1>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
export default {
  name: 'Count',
  data() {
    return {
      n: 1 //用户选择的数字
    }
  },
  methods: {
    increment() {
      // 使用commit方法，绕过actions，直接调用mutations中的函数
      this.$store.commit('JIA', this.n)
    },
    decrement() {
      this.$store.commit('JIAN', this.n)
    },
    incrementOdd() {
      // 使用dispatch方法，通过actions，调用mutations中的函数
      this.$store.dispatch('jiaOdd', this.n)
    },
    incrementWait() {
      this.$store.dispatch('jiaWait', this.n)
    }
  },
  mounted() {
    console.log('Count', this)
  }
}
</script>

<style lang="css">
button {
  margin-left: 5px;
}
</style>