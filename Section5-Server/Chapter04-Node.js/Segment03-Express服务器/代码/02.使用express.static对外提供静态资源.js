const express = require('express')
const app = express()

// 在这里，调用 express.static() 方法，快速的对外提供静态资源
app.use(express.static('clock'))

// 可以选择挂载文件夹前缀
app.use('/api', express.static('files'))

app.listen(80, () => {
    console.log('express server running at http://127.0.0.1')
})
