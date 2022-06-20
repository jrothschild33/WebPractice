/* interface Point {
  x: number
  y: number
}
function printCoord(pt: Point) {
  console.log("坐标x的值是： " + pt.x)
  console.log("坐标y的值是： " + pt.y)
}
printCoord({
  x: 100,
  y: 200
})

// 扩展接口
interface Animal {
  name: string
}
interface Bear extends Animal {
  honey: boolean
}
const bear: Bear = {
  name: 'winie',
  honey: true
}
console.log(bear.name)
console.log(bear.honey)

// 通过交叉点扩展类型
type Animal = {
  name: string
}
type Bear = Animal & {
  honey: boolean
}
const bear: Bear = {
  name: 'winnie',
  honey: true
}

// 向现有的类型添加字段
interface MyWindow {
  count: number
}
interface MyWindow {
  title: string
}
const w: MyWindow = {
  title: 'hello ts',
  count: 100
}

// 类型创建后是不能更改
type MyWindow = {
  title: string
}
type MyWindow = {
  count: number
} */