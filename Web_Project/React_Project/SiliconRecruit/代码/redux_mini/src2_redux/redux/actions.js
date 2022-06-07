import {INCREMENT, DECREMENT, ADD_MSG} from '../redux/action-types'
/*
包含所有 action creator
 */
//增加
export const increment = (number) => ({type: INCREMENT, data: number})
// 减少
export const decrement = (number) => ({type: DECREMENT, data: number})
// 添加msg
export const addMsg = (msg) => ({type: ADD_MSG, data: msg})