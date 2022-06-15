import { observer } from 'mobx-react'
import { useStore } from '../store'

export default observer(function Cart() {
  const { cartStore } = useStore()
  return (
    <>
      <h3>Cart Store</h3>
      <div>{`list值：${cartStore.list}`}</div>
    </>
  )
})
