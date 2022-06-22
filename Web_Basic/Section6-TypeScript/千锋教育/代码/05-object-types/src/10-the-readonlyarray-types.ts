/* function doStuff(values: ReadonlyArray<string>) {
  const copy = values.slice()
  console.log(values[0])
  // 报错：类型“readonly string[]”上不存在属性“push”
  values.push('hello')
} */

/* // 报错：“ReadonlyArray”仅表示类型，但在此处却作为值使用
new ReadonlyArray('red', 'green', 'blue')

const roArray: ReadonlyArray<string> = ['red', 'green', 'blue'] */

/* function doStuff(values: readonly string[]) {
  const copy = values.slice()
  console.log(values[0])

  values.push('hello')
}

let x: readonly string[] = []
let y: string[] = []

x = y
// 报错：类型 "readonly string[]" 为 "readonly"，不能分配给可变类型 "string[]
y = x */
