import { useStore } from '../store'
import { observer } from 'mobx-react'

function Counter() {
  const { counterStore } = useStore()
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
}

export default observer(Counter)
