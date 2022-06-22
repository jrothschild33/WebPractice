/* console.log(typeof 'Hello World')

let s = 'hello'
let n: typeof s
n = 'hello'
n = 100

RetrunType<T> // 内置公共类型，必须传入一个函数类型，返回传入的函数类型的返回值的类型

type Predicate = (x: unknown) => boolean
type K = ReturnType<Predicate>

function f() {
  return {
    x: 10,
    y: 3
  }
}
type P = ReturnType<typeof f> // 返回类型：{x:number; y:number}
const p: P = 100  // 报错，与{x:number; y:number}不兼容

function msgbox() {}
// let shouldContinue: typeof msgbox('100')  // 注意：不要将typeof用于函数返回值
let shouldContinue: typeof msgbox         // 这样用可以，代表shouldContinue是函数类型：()=>viod

shouldContinue = 100  // 报错：不能将类型“number”分配给类型“() => void” */
