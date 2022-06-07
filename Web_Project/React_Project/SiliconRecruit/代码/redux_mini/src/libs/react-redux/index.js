import React, {Component} from 'react'
import PropTypes from 'prop-types'

/*
react-redux模块: 对象, 包含以下属性
1. Provider组件类
2. connect方法
*/

/*
1. Provider组件类
 */
export class Provider extends Component {
  // 声明当前组件接收store
  static propTypes = {
    store: PropTypes.object.isRequired
  }

  // 必须声明向子节点指定全局数据store
  static childContextTypes = {
    store: PropTypes.object.isRequired
  }

  // 指定向子组件指定全局数据store
  getChildContext() {
    return {store: this.props.store};
  }

  render() {
    // 返回所有子节点(如果没有子节点返回undefined, 如果只有一个子节点它是对象, 如果有多个它是数组)
    return this.props.children
  }
}

/*
2. connect方法
 */
export function connect(mapStateToProps = () => null, mapDispatchToProps = {}) {
  // 返回函数(接收被包装组件类作为参数)
  return (WrapComponent) => {
    // 返回一个新的组件类
    return class ConnectComponent extends Component {
      // 声明接收全局store
      static contextTypes = {
        store: PropTypes.object.isRequired
      }

      // 构造函数的第2个参数为context对象
      constructor(props, context) {
        super(props)
        console.log('constructor', this.context) // 此时组件对象中还没有context
        // 从context中取出store
        const {store} = context
        // 一般属性: 调用mapStateToProps函数得到包含所有需要传递一般属性的集合对象
        const stateProps = mapStateToProps(store.getState())
        // 分发action的函数属性: 调用自定义的整合函数生成包含多个分发action的函数的对象
        const dispatchProps = this.bindActionCreators(mapDispatchToProps)

        // 初始化状态, 包含所有需要传递给WrapComponent组件的一般属性
        this.state = {
          ...stateProps
        }
        // 将包含dispatch函数的对象保存在组件对象上(不用放到state中)
        this.dispatchProps = dispatchProps
      }

      /*
      根据包含多个action creator的对象, 返回一个包含多个分发action的函数的对象
       */
      bindActionCreators = (mapDispatchToProps) => {
        // 准备一个保存分发action函数的对象容器
        const dispatchProps = {}
        // 遍历每个action creator
        Object.keys(mapDispatchToProps).forEach((key) => {
          // 得到某个action creator
          const actionCreator = mapDispatchToProps[key]
          //定义包含分发action代码的函数, 并只在到准备好的容器中
          dispatchProps[key] = (...args) => {
            this.context.store.dispatch(actionCreator(...args))
          }
        })
        // 返回dispatch代码函数容器对象
        return dispatchProps
      }

      componentDidMount() {
        console.log('componentDidMount', this.constructor)
        // 得到store
        const {store} = this.context
        // 订阅监听
        store.subscribe(() => {
          // 一旦store中的state有变化, 更新组件状态, 从而导致被包装组件重新渲染
          this.setState(mapStateToProps(store.getState()))
        })
      }

      render() {
        // 返回被包装组件标签, 传入整合的所有属性
        return <WrapComponent {...this.state} {...this.dispatchProps}/>
      }
    }
  }
}
