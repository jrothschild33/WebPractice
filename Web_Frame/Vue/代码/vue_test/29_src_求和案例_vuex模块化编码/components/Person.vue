<template>
  <div>
    <h1>人员列表</h1>
    <h3 style="color:red">Count组件求和为：{{sum}}</h3>
    <h3>列表中第一个人的名字是：{{firstPersonName}}</h3>
    <input type="text" placeholder="请输入名字" v-model="name" />
    <button @click="add">添加</button>
    <button @click="addWang">添加一个姓王的人</button>
    <button @click="addPersonServer">添加一个人，名字随机</button>
    <ul>
      <li v-for="p in personList" :key="p.id">{{p.name}}</li>
    </ul>
  </div>
</template>

<script>
import { nanoid } from 'nanoid'
export default {
  name: 'Person',
  data() {
    return {
      name: ''
    }
  },
  computed: {
    personList() {
      // 不使用mapState时，要用.personAbout指定模块
      return this.$store.state.personAbout.personList
    },
    sum() {
      return this.$store.state.countAbout.sum
    },
    firstPersonName() {
      // 不使用mapGetters时，要用['personAbout/xxx']指定模块
      return this.$store.getters['personAbout/firstPersonName']
    }
  },
  methods: {
    add() {
      const personObj = { id: nanoid(), name: this.name }
      // 不使用mapMutations时，要用personAbout/指定模块
      this.$store.commit('personAbout/ADD_PERSON', personObj)
      this.name = ''
    },
    addWang() {
      const personObj = { id: nanoid(), name: this.name }
      this.$store.dispatch('personAbout/addPersonWang', personObj)
      this.name = ''
    },
    addPersonServer() {
      this.$store.dispatch('personAbout/addPersonServer')
    }
  }
}
</script>
