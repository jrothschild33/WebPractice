// function identity<Type>(arg: Type): Type {
//   return arg
// }

// 泛型的名称可以自定义
// // 以下三种写法完全相同
// let myIdentity: <Type>(arg: Type) => Type = identity
// let myIdentity: <Input>(arg: Input) => Input = identity
// let myIdentity: { <Type>(arg: Type): Type } = identity

// 可以将上面的代码改造成接口
// interface GenericIdentityFn {
//   <Type>(arg: Type): Type
// }
// let myIdentity: GenericIdentityFn = identity

// 更严谨的写法，需要在外面定义类型
// interface GenericIdentityFn<Type> {
//   (arg: Type): Type
// }
// let myIdentity: GenericIdentityFn<string> = identity
