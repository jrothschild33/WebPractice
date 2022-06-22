/* function doSomething(pair: [string, number]) {
  const a = pair[0]
  const b = pair[1]
  const c = pair[2]
}

doSomething(['hello', 42, true]) */

function doSomething(stringHash: [string, number]) {
  const [inputString, hash] = stringHash
}

/* // 利用接口定义元祖：必须要用length属性固定长度，并定义可以操作元祖的方法
interface StringNumberPair {
  // 专有属性：定义固定长度
  length: 3
  // 为索引声明属性
  0: string
  1: number
  2: number
  // 定义slice方法，返回数组
  slice(start?: number, end?: number): Array<string | number>
}

function test(a: StringNumberPair) {
    console.log(a[1])	// 8
    console.log(a.slice(1,3))	//[8,100]
}

test(['a', 8, 100]) */

/* type Either2dOr3d = [number, number, number?]

function setCoordinate(coord: Either2dOr3d) {
  const [x, y, z] = coord
  console.log(coord.length)
}

setCoordinate([3, 4])
setCoordinate([3, 4, 5])
setCoordinate([3, 4, 'hello']) */

/* type StringNumberBooleans = [string, number, ...boolean[]]
type StringBooleansNumber = [string, ...boolean[], number]
type BooleansStringNumber = [...boolean[], string, number] */

/* function readButtonInput(...args: [string, number, ...boolean[]]) {
  const [name, version, ...input] = args
  console.log(name)
  console.log(version)
  console.log(input)
}

readButtonInput('hello', 10.5, true, false, false) */
