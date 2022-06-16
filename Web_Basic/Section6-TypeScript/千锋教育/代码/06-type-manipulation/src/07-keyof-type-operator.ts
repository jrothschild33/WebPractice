/* // type Point = {
//   x: number,
//   y: number
// }

// type P = keyof Point

// const p1:P = 'x'
// const p2:P = 'y'
// const p3:P = 'z'

type Arrayish = {
  [n: number]: unknown
}
type A = keyof Arrayish
const a:A = 0

type Mapish = {
  [k: string]: boolean
}

type M = keyof Mapish

const m1:M = 's'
const m2:M = 100
const m3:M = true */