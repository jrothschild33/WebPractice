<template>
  <h2>当前求和为：{{sum}}</h2>
  <button @click="sum++">点我+1</button>
  <hr />
  <h2>当前的信息为：{{msg}}</h2>
  <button @click="msg+='！'">修改信息</button>
  <hr />
  <h2>姓名：{{person.name}}</h2>
  <h2>年龄：{{person.age}}</h2>
  <h2>薪资：{{person.job.j1.salary}}K</h2>
  <button @click="person.name+='~'">修改姓名</button>
  <button @click="person.age++">增长年龄</button>
  <!-- 测试deep深度监视 -->
  <button @click="person.job.j1.salary++">涨薪</button>
</template>

<script>
import { ref, reactive, watch } from 'vue'
export default {
  name: 'Demo',
  setup() {
    //数据
    let sum = ref(0)
    let msg = ref('你好啊')
    let person = reactive({
      name: '张三',
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    })

    // 情况一：监视ref所定义的单个响应式数据
    watch(
      sum,
      (newValue, oldValue) => {
        console.log('sum变了', newValue, oldValue)
      },
      { immediate: true }
    )

    // 情况二：监视ref所定义的多个响应式数据
    // newValue、oldValue变为数组
    watch(
      [sum, msg],
      (newValue, oldValue) => {
        console.log('sum或msg变了', newValue, oldValue)
      },
      { immediate: true }
    )

    /* 情况三：监视reactive所定义的一个响应式数据的全部属性
				1.注意：此处无法正确的获取oldValue（此时oldValue与newValue相同）
				2.注意：强制开启了深度监视（强制{deep:true}，无法关闭） */

    watch(
      person,
      (newValue, oldValue) => {
        console.log('person变化了', newValue, oldValue)
      },
      { deep: false } // 此处的deep配置无效（强制{deep:true}，无法关闭）
    )

    // 情况四：监视reactive所定义的一个响应式数据中的单个属性
    watch(
      () => person.name, // 监视对象中的属性，要写成函数形式
      (newValue, oldValue) => {
        console.log('person的name变化了', newValue, oldValue)
      }
    )

    // 情况五：监视reactive所定义的一个响应式数据中的多个属性
    watch([() => person.name, () => person.age], (newValue, oldValue) => {
      console.log('person的name或age变化了', newValue, oldValue)
    })

    // 监视对象中的某属性：deep配置有效（默认是{deep:false}）
    watch(
      () => person.job,
      (newValue, oldValue) => {
        console.log('person的job变化了', newValue, oldValue)
      },
      { deep: true } // 可以开启深度监视
    )

    // 返回一个对象（常用）
    return {
      sum,
      msg,
      person,
    }
  },
}
</script>

