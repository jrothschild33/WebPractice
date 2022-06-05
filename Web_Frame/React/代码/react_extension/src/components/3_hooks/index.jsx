import React from 'react'
import ReactDOM from 'react-dom'

// 类式组件
/* export default class Demo extends React.Component {
  state = { count: 0 }
  myRef = React.createRef()
  add = () => {
    this.setState((state) => ({ count: state.count + 1 }))
  }
  unmount = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  }
  show = () => {
    alert(this.myRef.current.value)
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState((state) => ({ count: state.count + 1 }))
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.timer)
  }
  render() {
    return (
      <div>
        <input type="text" ref={this.myRef} />
        <h2>当前求和为{this.state.count}</h2>
        <button onClick={this.add}>点我+1</button>
        <button onClick={this.unmount}>卸载组件</button>
        <button onClick={this.show}>点击提示数据</button>
      </div>
    )
  }
} */

function Demo() {
  // console.log('Demo');

  const [count, setCount] = React.useState(0)
  const myRef = React.useRef()

  // Effect Hook：开启定时器，让数字每隔1秒自动加1
  React.useEffect(() => {
    // 在此可以执行任何带副作用操作
    let timer = setInterval(() => {
      setCount((count) => count + 1)
    }, 1000)
    return () => {
      // 在组件卸载前执行，在此做一些收尾工作, 比如清除定时器/取消订阅等
      clearInterval(timer)
    }
  }, []) // 如果指定的是[], 回调函数只会在第一次render()后执行

  // 加的回调
  function add() {
    // setCount(count+1) // 第1种写法：参数为非函数值
    setCount((count) => count + 1) // 第2种写法：参数为函数
  }

  // 提示输入的回调
  function show() {
    alert(myRef.current.value)
  }

  // Effect Hook：卸载组件的回调
  function unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  }

  return (
    <div>
      <input type="text" ref={myRef} />
      <h2>当前求和为：{count}</h2>
      <button onClick={add}>点我+1</button>
      <button onClick={unmount}>卸载组件</button>
      <button onClick={show}>点我提示数据</button>
    </div>
  )
}
// 暴露组件
export default Demo
