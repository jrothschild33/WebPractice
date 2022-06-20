/* function padLeft(padding: number | string, input: string) {
  if (typeof padding === 'number') {
    return new Array(padding + 1).join(' ') + input
  }
  return padding + input
}

function example() {
  let x: string | number | boolean

  x = Math.random() < 0.5
  // let x: boolean
  console.log(x)

  if (Math.random() < 0.5) {
    x = 'hello'
    // x: string
    console.log(x)
  } else {
    x = 100
    // x: number
    console.log(x)
  }

  return x
}

let x = example()
x = 'hello'
x = 100
x = true
 */
