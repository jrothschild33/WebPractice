/* type Point = {
  x: number
  y: number
}
function printCoord(pt: Point) {

}
printCoord({
  x: 100,
  y: 200
})

type ID = number | string
function printId(id: ID) {

}
printId(100)
printId('hello')

type UserInputSanitizedString = string
function sanitizedInput(str: string): UserInputSanitizedString {
  return str.slice(0, 2)
}
let userInput = sanitizedInput('hello')
userInput = 'new Input' */