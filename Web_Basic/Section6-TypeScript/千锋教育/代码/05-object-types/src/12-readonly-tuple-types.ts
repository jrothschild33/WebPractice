/* function doSomething(pair: readonly [number, string]) {
  pair[0] = 100
}

// let point = [3, 4] as const
let point: [number, number] = [3, 4]

function distanceFromOrigin([x, y]: [number, number]) {
  return Math.sqrt(x ** 2 + y ** 2)
}
// 报错：类型 "readonly [3, 4]" 为 "readonly"，不能分配给可变类型 "[number, number]"
distanceFromOrigin(point)
 */
