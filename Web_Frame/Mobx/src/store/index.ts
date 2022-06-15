// 作用：导入所有Store，组合成一个Store
import { useContext, createContext } from 'react'
import { Cart } from './Cart'
import { Counter } from './Counter'

interface CommonContext {
  counterStore: Counter
  cartStore: Cart
}

const context: CommonContext = {
  counterStore: new Counter(),
  cartStore: new Cart(),
}

// 创建上下文对象，用于跨级组件通讯，传入的参数是defaultValue（默认值）
// 如果提供了默认值，则不需要 Provider
const Store = createContext(context)

// 自定义hooks：名为useStore，使用useContext机制统一导出Store
export function useStore<T = {}>() {
  return useContext(Store) as CommonContext & T
}
