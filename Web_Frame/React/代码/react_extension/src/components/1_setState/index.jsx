import React, { Component } from 'react'

export default class Demo extends Component {
  state = { count: 0 }

  add = () => {
    /* // 写法1：对象式的setState
		// 1.获取原来的count值
		const { count } = this.state
		// 2.更新状态（异步）
		this.setState({ count: count + 1 }, () => {
			console.log(this.state.count)
		})
		// 注意：如果用同步的方式查看，无法检测到state的变化
		console.log('12行的输出', this.state.count) // 0 */

    // 写法2：函数式的setState
    this.setState((state, props) => {
      console.log(state, props)
      return { count: state.count + 1 }
    })
  }

  render() {
    return (
      <div>
        <h1>当前求和为：{this.state.count}</h1>
        <button onClick={this.add}>点我+1</button>
      </div>
    )
  }
}
