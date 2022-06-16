/* interface StringArray {
  [index: number]: string
}

const myArray: StringArray = ['a', 'b']
const secondItem = myArray[0]


interface TestString {
  [props: string]: number
}

let testString: TestString = {
  x: 100,
  y: 200,
  // aaa: 'aaa'
}


interface Animal {
  name: string
}

interface Dog extends Animal {
  breed: string
}

interface NotOkay {
  [index: string]: number | string
  length: number
  name: string
}

let notOkay: NotOkay = {
  x: 100,
  length: 100,
  name: 'felix'
}


interface ReadonlyStringArray {
  readonly [index: number]: string
}

let myArray2: ReadonlyStringArray = ['a', 'b']
myArray2[0] = 'felix' */