/* interface Animal {
  live(): void
}

interface Dog extends Animal {
  woof(): void
}

// type Example1 = number
type Example1 = Dog extends Animal ? number : string

// type Example2 = string
type Example2 = RegExp extends Animal ? number : string

// 应用：
// 方法1：函数重载
interface IdLabel {
  id: number
}
interface NameLabel {
  name: string
}

function createLabel(id: number): IdLabel
function createLabel(name: string): NameLabel
function createLabel(nameOrId: string | number): IdLabel | NameLabel
function createLabel(nameOrId: string | number): IdLabel | NameLabel {
  throw ''
}

// 方法2：条件类型
type NameOrId<T extends number | string> = T extends number ? IdLabel : NameLabel

function createLabel<T extends number | string>(idOrName: T): NameOrId<T> {
  throw ''
}

// type a = NameLabel
let a = createLabel('typescript')

// type b = IdLabel
let b = createLabel(2.8)

// type c = NameLabel | IdLabel
let c = createLabel(Math.random() > 0.5 ? 'hello' : 42) */
