/* function firstElement1<Type>(arr: Type[]) {
  return arr[0]
}

function firstElement2<Type extends any[]>(arr: Type) {
  return arr[0]
}

const a = firstElement1([1, 2, 3])
const b = firstElement2([1, 2, 3])

function filter1<Type>(arr: Type[], func: (arg: Type) => boolean) {
  return arr.filter(func)
}

function filter2<Type, Func extends (arg: Type) => boolean>(
  arr: Type[],
  func: Func
) {
  return arr.filter(func)
}


function greet<Str extends string>(s: Str) {
  console.log('Hello, ' + s)
}

greet('World')

function greet2(s: string) {
  console.log('Hello, ' + s)
} */