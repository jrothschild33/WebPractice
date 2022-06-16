function loggingIdentity<T>(arg: T[]): T[] {
  console.log(arg.length) // Array has a .length, so no more error
  return arg
}

const arr = loggingIdentity([1, 2, 3])
console.log(arr)
