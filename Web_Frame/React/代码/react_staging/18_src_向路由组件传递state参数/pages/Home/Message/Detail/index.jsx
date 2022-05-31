import React, { Component } from 'react'
// import qs from 'querystring'

const DetailData = [
  { id: '01', content: '你好，中国' },
  { id: '02', content: '你好，尚硅谷' },
  { id: '03', content: '你好，未来的自己' },
]
export default class Detail extends Component {
  render() {
    console.log(this.props)

    // 接收params参数
    // const {id,title} = this.props.match.params

    // 接收search参数
    // const {search} = this.props.location
    // const {id,title} = qs.parse(search.slice(1))

    // 接收state参数
    const { id, title } = this.props.location.state || {}

    // 如果清除缓存和历史记录，会导致state参数丢失，所以需要在接收state的同时写上备用的空对象
    const findResult =
      DetailData.find((detailObj) => {
        return detailObj.id === id
      }) || {}
    return (
      <ul>
        <li>ID:{id}</li>
        <li>TITLE:{title}</li>
        <li>CONTENT:{findResult.content}</li>
      </ul>
    )
  }
}
