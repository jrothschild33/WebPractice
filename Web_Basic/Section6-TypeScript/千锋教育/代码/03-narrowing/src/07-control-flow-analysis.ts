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