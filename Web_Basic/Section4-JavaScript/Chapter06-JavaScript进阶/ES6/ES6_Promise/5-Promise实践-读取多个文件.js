//引入 fs 模块
const fs = require('fs')

// 传统方法
/* fs.readFile('./resources/为学.md', (err, data1) => {
  fs.readFile('./resources/插秧诗.md', (err, data2) => {
    fs.readFile('./resources/观书有感.md', (err, data3) => {
      let result = data1 + '\r\n' + data2 + '\r\n' + data3
      console.log(result)
    })
  })
}) */

//使用 promise 实现
const p = new Promise((resolve, reject) => {
  fs.readFile('./resources/为学.md', (err, data) => {
    resolve(data)
  })
})

p.then((value) => {
  return new Promise((resolve, reject) => {
    fs.readFile('./resources/插秧诗.md', (err, data) => {
      // 把这两次的结果变成数组
      resolve([value, data])
    })
  })
})
  .then((value) => {
    return new Promise((resolve, reject) => {
      fs.readFile('./resources/观书有感.md', (err, data) => {
        // 向数组中推送结果
        value.push(data)
        resolve(value)
      })
    })
  })
  .then((value) => {
    console.log(value.join('\r\n'))
  })
