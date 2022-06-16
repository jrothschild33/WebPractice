/* let testString = 'Hello World'
testString = '千锋大前端'

const constantString = 'Hello World'
// constantString = ''

let x: 'hello' = 'hello'
// x = 'world'

function printText(s: string, alignment: 'left' | 'right' | 'center') {

}
printText('hello', 'left')
// printText('world', 'center2')

function compare(a: string, b: string): -1 | 0 | 1 {
  return a === b ? 0 : a > b ? 1 : -1
}

interface Options {
  width: number
}
function configure(x: Options | 'auto') {

}
configure({
  width: 100
})
configure('auto')
// configure('automatic')

let b1: true = true
let b2: false = false


const obj = {
  count: 0
}
if (true) {
  obj.count = 1
}


function handleRequest(url: string, method: 'GET' | 'POST' | 'GUESS') {

}
const req = {
  url: 'https://example.com',
  method: 'GET'
} as const
handleRequest(req.url, req.method) */