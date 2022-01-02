// 基于服务端渲染的传统模式
app.get('/index.html', (req, res) => {
    const user = { name: 'zs', age: 20 }
    const html = `<h1>姓名: ${user.name}, 年龄: ${user.age}</h1>`
    res.send(html)
})
// 1. 导入session中间件
var session = require('express-session')

// 2. 配置Session中间件
app.use(
    session({
        secret: 'keyboard car', // secret 属性值可以为任意字符串
        resave: false, // 固定写法
        saveUninitialized: true, // 固定写法
    })
)
