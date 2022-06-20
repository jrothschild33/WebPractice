/* type Point = {
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

type ID = number | string
function printId(id: ID) {
  if (typeof id === 'string') {
    console.log(id.toUpperCase())
  } else {
    console.log(id)
  }
}
printId(100)
printId('hello')

type UserInputSanitizedString = string
function sanitizedInput(str: string): UserInputSanitizedString {
  return str.slice(0, 2)
}
let userInput = sanitizedInput('hello')
userInput = 'new Input' */