import { autorun, reaction } from 'mobx'
import { observer } from 'mobx-react'
import { useStore } from '../store'

export default observer(function Counter() {
  // function Counter() {
  const { counterStore } = useStore()
  /* // 监听属性：autorun，初始化时会执行一次，可监视所有属性
  autorun(() => {
    console.log('counter上的count属性变化了：', counterStore.count)
    console.log('counter上的double属性变化了：', counterStore.double)
  })

  // 监听属性：reaction，初始化时不执行，可监视指定属性
  // 参数1：data函数，返回值会作为第二个函数输入
  // 参数2：回调函数
  reaction(
    () => counterStore.count,
    (value, oldValue) => {
      console.log('count新值 vs 旧值：', value, oldValue)
    }
  ) */
  return (
    <>
      <h3>Counter Store</h3>
      <div>点击次数：{counterStore.count}</div>
      <div>双倍计算：{counterStore.double}</div>
      <button
        onClick={() => {
          counterStore.increment()
        }}
      >
        加1
      </button>
      {/* 如果在Counter中指定了action.bound，可以不用箭头函数，直接书写 */}
      <button
        onClick={() => {
          counterStore.incrementAsync()
        }}
      >
        等2秒再加
      </button>
      <button
        onClick={() => {
          counterStore.decrement()
        }}
      >
        减1
      </button>
      <button
        onClick={() => {
          counterStore.decrementAsync()
        }}
      >
        等2秒再减
      </button>
      <button
        onClick={() => {
          counterStore.reset()
        }}
      >
        重置
      </button>
    </>
  )
})

// export default observer(Counter)
