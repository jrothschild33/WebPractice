/* // any会带来很大风险，不推荐
interface Box {
  contents: any
}

let box: Box = {
  contents: 'hello',
} */

/* // unknown如果处理需要提前做判断，很麻烦
interface Box {
  contents: unknown
}

let x: Box = {
  contents: 'hello world',
}

if (typeof x.contents === 'string') {
  console.log(x.contents.toLowerCase())
}

console.log((x.contents as string).toLowerCase()) */

/* // 实现签名的应用
// 普通函数重载：定义一个通用函数，可以传入number或string或boolean类型的值，这样写非常麻烦
interface NumberBox {
  contents: number
}
interface StringBox {
  contents: string
}
interface BooleanBox {
  contents: boolean
}

function setContents(box: StringBox, newContents: string): void
function setContents(box: NumberBox, newContents: number): void
function setContents(box: BooleanBox, newContents: boolean): void
// 实现签名
function setContents(box: { contents: any }, newContents: any) {
  box.contents = newContents
}

// 使用泛型：直接定义泛型接口，一步到位实现通用函数
interface Box<Type> {
  contents: Type
}
function setContents(box: Box<Type>, newContents: Type) {
  box.contents = newContents
} */

/* interface Box<Type> {
  contents: Type
}

interface StringBox {
  contents: string
}
// 可以随意定义contents的类型
let boxA: Box<number> = {
  contents: 100
}
// contents只能是number类型
let boxB: StringBox = {
  contents: 100
} */

/* // 接口中的泛型
interface Box<Type> {
  contents: Type
}

interface Apple {
  // ...
}

let a: Apple = {}

type AppleBox = Box<Apple> // 其实绕了一圈还是Apple类型
let ab: AppleBox = {
  contents: a,
} */

/* // 类型别名中的泛型
// 基本用法：与定义泛型接口一样
type Box<Type> = {
  contents: Type
}
// 与接口的区别：不仅可以描述对象类型，还可以用它来编写其他类型的通用辅助类型
type OrNull<Type> = Type | null
type OneOrMany<Type> = Type | Type[]
type OneOrManyOrNull<Type> = OrNull<OneOrMany<Type>>
type OneOrManyOrNullString = OneOrManyOrNull<string> */
