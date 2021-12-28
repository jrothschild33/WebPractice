// 在外界使用 require 导入一个自定义模块的时候，得到的成员，
// 就是 那个模块中，通过 module.exports 指向的那个对象
const m = require('./05.module.exports向外共享模块作用域中的成员')

console.log(m)
