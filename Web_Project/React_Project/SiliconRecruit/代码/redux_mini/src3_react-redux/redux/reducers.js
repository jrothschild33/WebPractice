/*
包含n个reducer函数的模块
 */
// import {combineReducers} from 'redux'
import {combineReducers} from '../libs/redux'

import {INCREMENT, DECREMENT, ADD_MSG} from './action-types'

function count(state = 0, action) {

  console.log('counter()', state, action)
  switch (action.type) {
    case INCREMENT:
      return state + action.data
    case DECREMENT:
      return state - action.data
    default:
      return state
  }
}

const initMsgs = []

function msgs(state = initMsgs, action) {
  console.log('msgs()', state, action)
  switch (action.type) {
    case ADD_MSG:
      return [action.data, ...state]
    default:
      return state
  }
}

// 向外暴露合并多个reducer的结果
export default combineReducers({
  count,
  msgs
})