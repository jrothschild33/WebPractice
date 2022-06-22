/* type Person = {
  age: number
  name: string
  alive: boolean
}

type Age = Person['age'] // number类型
let age: Age = '90' // 报错：不属于number类型

interface Person {
  name: string
  age: number
  alive: boolean
}

// 相当于：type I1 = string | number
type I1 = Person['age' | 'name']
const i11: I1 = 100
const i12: I1 = ''
// const i13: I1 = true // 报错

// 相当于：type I2 = string | number | boolean
type I2 = Person[keyof Person]
const I21: I2 = ''
const I22: I2 = 100
const I23: I2 = true
// const I24: I2 = {} // 报错

// 相当于：type I3 = boolean | string
type AliveOrName = 'alive' | 'name'
type I3 = Person[AliveOrName]
const I31: I3 = true
const I32: I3 = 'hello'
// const I33: I3 = 100

// type I4 = Person['alve'] // 报错：索引不存在的属性

// 如果不定义MyArray的类型，TS会自动推断 MyArray:{name:string,age:number}
const MyArray = [
  { name: 'Alice', age: 15 },
  { name: 'Bob', age: 23 },
  { name: 'Eve', age: 38 },
]

// 相当于：type Person = { name: string, age: number }
type Person = typeof MyArray[number] // 数值型索引签名，等价于：typeof MyArray[0]、MyArray[1]、MyArray[2]
const p: Person = {
  name: 'xiaoqian',
  age: 11,
  // alive: true
}

// 等价于：type Age = number
type Age = typeof MyArray[number]['age']
const age: Age = 11

// 等价于：type Age2 = number
type Age2 = Person['age']
const age2: Age2 = 300

// 如果想用索引访问类型，不能用const将key定义为值，而只能用type将key定义为类型
// const key = 'age'
type key = 'age'
type Age3 = Person[key]
 */
