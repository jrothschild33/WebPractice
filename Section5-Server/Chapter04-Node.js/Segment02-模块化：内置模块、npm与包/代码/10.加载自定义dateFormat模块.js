// 导入自定义的格式化时间的模块
const TIME = require('./09.自定义格式化时间模块dateFormat')

// 调用方法，进行时间的格式化
const dt = new Date()
// console.log(dt)
const newDT = TIME.dateFormat(dt)
console.log(newDT)
