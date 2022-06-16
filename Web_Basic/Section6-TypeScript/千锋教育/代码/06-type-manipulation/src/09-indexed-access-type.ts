/* // type Person = {
//   age: number,
//   name: string,
//   alive: boolean
// }

// type Age = Person['age']
// let age: Age = '90'


interface Person {
  name: string
  age: number
  alive: boolean
}

// type I1 = string | number
type I1 = Person['age' | 'name']
const i11: I1 = 100
const i12: I1 = ''
// const i13: I1 = true

// type I2 = string | number | boolean
type I2 = Person[keyof Person]
const I21: I2 = ''
const I22: I2 = 100
const I23: I2 = true
// const I24: I2 = {}

type AliveOrName = 'alive' | 'name'
type I3 = Person[AliveOrName]
const I31: I3 = true
const I32: I3 = 'hello'
// const I33: I3 = 100

// type I4 = Person['alve']


const MyArray = [
  { name: 'Alice', age: 15 },
  { name: 'Bob', age: 23 },
  { name: 'Eve', age: 38 }
]

// type Person = { name: string, age: number }
type Person = typeof MyArray[number]
const p:Person = {
  name: 'xiaoqian',
  age: 11,
  // alive: true
}

type Age = typeof MyArray[number]['age']
const age: Age = 11

type Age2 = Person['age']
const age2: Age2 = 300


// const key = 'age'
type key = 'age'
type Age3 = Person[key] */