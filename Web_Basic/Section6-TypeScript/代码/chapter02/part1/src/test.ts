class Person {
  // 定义实例属性
  name: string = '孙悟空'
  // 定义只读实例属性
  readonly sex: string = '男'
  // 定义静态属性
  static age: number = 18
  // 定义静态只读属性（static要放在前面）
  static readonly height: number = 180
}

const p = new Person()

// 实例属性可以通过对象实例修改
p.name = '猪八戒'
console.log(p.name)

// 只读实例属性不可修改，编译器报错
// p.sex = '女'

// 静态属性只能通过类访问或修改，对象实例无法访问
Person.age = 88
console.log(Person.age) // 88
// console.log(p.age) // 报错

// 只读静态属性不能更改
// Person.height = 88 // 报错
