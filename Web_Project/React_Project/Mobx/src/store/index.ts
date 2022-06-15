// 作用：导入所有Store，组合成一个Store
import { useContext, createContext } from 'react'
import { autorun, reaction } from 'mobx'
import { Counter } from './Counter'
import { Comment } from './Comment'

interface CommonContext {
  counterStore: Counter
  commentStore: Comment
}

const context: CommonContext = {
  counterStore: new Counter(),
  commentStore: new Comment(),
}

/* // 监听属性：autorun，初始化时会执行一次，可监视所有属性
autorun(() => {
  console.log('counter上的count属性变化了：', context.counterStore.count)
  console.log('counter上的double属性变化了：', context.counterStore.double)
})

// 监听属性：reaction，初始化时不执行，可监视指定属性
// 参数1：data函数，返回值会作为第二个函数输入
// 参数2：回调函数
reaction(
  () => context.counterStore.count,
  (value, oldValue) => {
    console.log('count新值 vs 旧值：', value, oldValue)
  }
) */

// 创建上下文对象，用于跨级组件通讯，传入的参数是defaultValue（默认值）
// 如果提供了默认值，则不需要 Provider
const Store = createContext(context)

// 自定义hooks：名为useStore，使用useContext机制统一导出Store
export function useStore<T = {}>() {
  return useContext(Store) as CommonContext & T
}
