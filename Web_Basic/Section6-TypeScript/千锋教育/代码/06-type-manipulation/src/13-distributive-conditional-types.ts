/* // 分布式
type ToArray<Type> = Type extends any ? Type[] : never
// 相当于：type StrArrOrNumArr = string[] | number[]
type StrArrOrNumArr = ToArray<string | number>
let test1: StrArrOrNumArr = ['a']
let test2: StrArrOrNumArr = [123]

// 取消分布式
type ToArrayNonDist<Type> = [Type] extends [any] ? Type[] : never
// 相当于：type StrArrOrNumArr = (string | number)[]
type StrArrOrNumArr2 = ToArrayNonDist<string | number>
let saon: StrArrOrNumArr2 = ['a', 123]
 */
