/*
redux模块
1). redux模块整体是一个对象模块
2). 内部包含几个函数
    createStore()
    combineReducers()
    applyMiddleware()  // 太难暂不实现
3). store对象的功能
    getState()
    dispatch(action)
    subscibe(listener)
 */

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
