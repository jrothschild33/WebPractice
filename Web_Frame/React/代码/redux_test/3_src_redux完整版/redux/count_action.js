/* 
	该文件专门为Count组件生成action对象
*/
import { INCREMENT, DECREMENT } from './constant'
// 这里({...})的意思是返回对象obj（空对象也可以）
export const createIncrementAction = (data) => ({ type: INCREMENT, data })
export const createDecrementAction = (data) => ({ type: DECREMENT, data })
