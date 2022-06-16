/* class MyClass {
  name = 'MyClass'
  // getName = () => {
  //   return this.name
  // }
  getName(this: MyClass) {
    return this.name
  }
}
const c = new MyClass()
// const obj = {
//   name: 'obj',
//   getName: c.getName
// }
const g = c.getName
// console.log(obj.getName())
// console.log(c.getName())
console.log(g()) */
