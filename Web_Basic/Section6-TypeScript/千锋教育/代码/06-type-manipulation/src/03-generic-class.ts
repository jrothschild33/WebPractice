// 注意：在tsconfig中设置："strictPropertyInitialization": false,
// 由于NumType被声明但没有设置，所以会报错，关闭strictPropertyInitialization后不会报错
/* class GenericNumber<NumType> {
  zeroValue: NumType
  add: (x: NumType, y: NumType) => NumType
}

let myGeneric = new GenericNumber<number>()
myGeneric.zeroValue = 0
myGeneric.add = function (x, y) {
  return x + y
}

let myGeneric = new GenericNumber<string>()
myGeneric.zeroValue = ''
myGeneric.add = function (x, y) {
  return x + y
} */
