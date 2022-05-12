const express = require('express')
const moment = require('moment')
const app = express()

// 这是定义全局中间件的简化形式
app.use((req, res, next) => {
  // 获取到请求到达服务器的时间
  const time = Date.now()
  // 为 req 对象，挂载自定义属性，从而把时间共享给后面的所有路由
  req.pureTime = time
  req.startTime = moment().format('YYYY-MM-DD HH:mm:ss')
  next()
})

app.get('/', (req, res) => {
  res.send('Home page. ' + req.startTime + ` => pure time : ${req.pureTime}`)
})
app.get('/user', (req, res) => {
  res.send('User page. ' + req.startTime + ` => pure time : ${req.pureTime}`)
})

app.listen(80, () => {
  console.log('http://127.0.0.1')
})
