/* function example(x: string | number, y: string | boolean) {
  if (x === y) {
    x.toUpperCase()
    y.toLowerCase()
  } else {
    console.log(x)
    console.log(y)
  }
}

function printAll(strs: string | string[] | null) {
  if (strs !== null) {
    if (typeof strs === 'object') {
      for (const s of strs) {
        console.log(s)
      }
    } else if (typeof strs === 'string') {
      console.log(strs)
    } else {
      // ...
    }
  }
}

interface Container {
  value: number | null | undefined
}

function multiplyValue(container: Container, factor: number) {
  if (container.value != null) {
    console.log(container.value)
    container.value *= factor
  }
}

multiplyValue({ value: 5 }, 6)
multiplyValue({ value: undefined }, 6)
multiplyValue({ value: null }, 6)
multiplyValue({ value: '5' }, 6) */