// function loggingIdentity<Type>(arg: Array<Type>): Type[] {
//   console.log(arg.length) // 注意：由于调用了length，需要定义成有length属性的类型
//   return arg
// }

// 手动指定类型
// let output = loggingIdentity<number>([100, 200])

// 自动推断类型
// let output = loggingIdentity([100, 200])
