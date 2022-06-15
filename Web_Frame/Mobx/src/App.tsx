// observer是一个高阶组件函数，需要包裹一个组件，实现响应式更新
// import { observer } from 'mobx-react'
import Counter from './conponents/Counter'
import { Cart } from './conponents/Cart'

function App() {
  return (
    <>
      <Counter />
      <hr />
      <Cart />
    </>
  )
}
export default App
