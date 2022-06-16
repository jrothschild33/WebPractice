/* // function doSomething(value: Array<string>) {
//   // ...
// }

// let myArray: string[] = ['hello', 'world']

// doSomething(myArray)
// doSomething(new Array('hello', 'world'))


interface Array2<Type> {
  lenght: number,
  pop(): Type | undefined
  push(...item: Type[]): number 
} */