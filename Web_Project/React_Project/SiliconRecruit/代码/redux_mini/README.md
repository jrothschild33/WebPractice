# 主要内容
    1). 实现mini版redux
    2). 实现mini版react-redux


# 实现mini版redux

## 1. 理解redux模块
    1). redux模块整体是一个对象模块
    2). 内部包含几个函数
        createStore(reducers)  // reducers: function(state, action){ return newState}
        combineReducers(reducers)  // reducers: {reducer1, reducer2}  返回: function(state, action){ return newState}
        applyMiddleware()  // 暂不实现
    3). store对象的功能
        getState()  // 返回当前state
        dispatch(action)  // 分发action: 调用reducers()得到新的总state, 执行所有已注册的监听函数
        subscibe(listener) // 订阅监听: 将监听函数保存起来
        
## 2. 实现代码: src/libs/redux/index.js
    /*
    创建store对象的函数
     */
    export function createStore(reducer) {
      // 内部管理的state
      let state
      // 用来缓存监听的数组容器
      const listeners = []
      // 初始调用reducer得到初始state值
      state = reducer(state, {type: '@@mini-redux/INIT'})
    
      /*
      获取当前状态
       */
      function getState() {
        return state
      }
    
      /*
      分发消息
       */
      function dispatch(action) {
        // 调用reducer, 得到新的state
        state = reducer(state, action)
        // 调用监听缓存中的所有Listener, 通知状态变化
        listeners.forEach(listener => listener())
      }
    
      /*
      订阅监听
       */
      function subscribe(listener) {
        // 将新的监听添加到监听缓存容器中
        listeners.push(listener)
      }
    
      // 向外暴露store对象
      return {getState, dispatch, subscribe}
    }
    
    /*
    合并多个reducer的函数
     */
    export const combineReducers = (reducers) => {
      // 返回一个reduer声明函数
      return (state = {}, action) => {
        // 返回包含所有reducer状态的总state对象
        return Object.keys(reducers).reduce((preState, key) => {
          // 调用对应的reducer函数得到对应的新state, 并保存到总state中
          preState[key] = reducers[key](state[key], action)
          return preState
        }, {})
      }
    }
  
   
## 实现mini版react-redux
## 1. 理解react-redux模块
     1). react-redux模块整体是一个对象模块
     2). 包含2个重要属性: Provider和connect
     3). Provider
        值: 组件类
        作用: 向所有容器子组件提供全局store对象
        使用: <Provider store={store}><Xxx/></Provider>
     4). connect
        值: 高阶函数
        作用: 包装组件生成容器组件, 让被包装组件能与redux进行通信
        使用: connect(mapStateToProps, mapDispatchToProps)(Xxx)
     
## 2. context的理解和使用
    1). 理解
      当你觉得多层传递props麻烦, 可以选择使用context
      context是组件对象的一个属性, 它的值是一个对象
      一个组件指定的context内数据, 所有层次子组件都可以读取到
      如果可以尽量不用context, 你可以选择使用react-redux, react-redux内部就利用了context
    2). 使用
      父组件:
          static childContextTypes = {
            color: PropTypes.string
          }
          getChildContext() {
            return {color: 'red'};
          }
      后代组件:
          static contextTypes = {
            color: PropTypes.string
          }
          
          render () {
            this.context.color
          }

## 3. 实现代码: src/libs/react-redux/index.js

    import React, {Component} from 'react'
    import PropTypes from 'prop-types'
    
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
            return <WrapComponent {...this.state} {...this.dispatchProps} />
          }
        }
      }
    }
    