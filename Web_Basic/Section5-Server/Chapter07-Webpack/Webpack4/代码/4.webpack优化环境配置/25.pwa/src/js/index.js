import { mul } from './test'
import '../css/index.css'

function sum(...args) {
  return args.reduce((p, c) => p + c, 0)
}

// eslint-disable-next-line
console.log(mul(2, 3))
// eslint-disable-next-line
console.log(sum(1, 2, 3, 4))

/*
sw代码必须运行在服务器上
 --> nodejs
 -->
   npm i serve -g
   serve -s build 启动服务器，将build目录下所有资源作为静态资源暴露出去
*/

// 注册serviceWorker
// 处理兼容性问题
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(() => {
        console.log('serviceWorker注册成功!')
      })
      .catch(() => {
        console.log('serviceWorker注册失败!')
      })
  })
}
