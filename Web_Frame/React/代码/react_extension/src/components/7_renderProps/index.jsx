import React, { Component } from 'react'
import './index.css'
import C from '../1_setState'

export default class Parent extends Component {
  render() {
    return (
      <div className="parent">
        <h3>我是Parent组件</h3>
        {/* 通过props向A组件传递一个函数，名称为render，并可通过name再向其他组件传递数据 */}
        <A render={(name) => <B name={name} />} />

        {/* <A>
          <B>Hello!</B>
        </A> */}
      </div>
    )
  }
}

class A extends Component {
  state = { name: 'tom' }
  render() {
    const { name } = this.state
    return (
      <div className="a">
        <h3>我是A组件</h3>
        {/* 相当于插槽，可以插入任意指定组件 */}
        {this.props.render(name)}

        {/* 里接收到Parent组件写在A组件之间的内容：B组件 */}
        {/* {this.props.children} */}
      </div>
    )
  }
}

class B extends Component {
  render() {
    return (
      <div className="b">
        {/* 可以共享A组件中的数据 */}
        <h3>我是B组件,{this.props.name}</h3>
        {/* <h3>我是B组件</h3> */}
        {/* 这里接收到Parent组件写在B组件之间的内容：Hello! */}
        {/* {this.props.children} */}
      </div>
    )
  }
}
