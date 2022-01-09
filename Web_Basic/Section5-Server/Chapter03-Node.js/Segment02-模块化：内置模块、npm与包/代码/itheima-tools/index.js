// 这是包的入口文件

const date = require('./src/dateFormat')
const escape = require('./src/htmlEscape')

// 向外暴露需要的成员
module.exports = {
    // es6语法：展开运算符...，代表把对象中每个属性进行展开
    ...date,
    ...escape,
}
