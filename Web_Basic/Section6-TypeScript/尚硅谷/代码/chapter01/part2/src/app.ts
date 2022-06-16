import { hi } from './m.js'
let a = 10
// 这是一个注释
console.log(hi)
console.log(a)

// a = 'hello';

function fn(a: number, b: number) {
  return a + b
}

function fn2(this: Window) {
  alert(this)
}

// 开启严格的空值检查后，如果box1不存在，则报错
let box1 = document.getElementById('box1')

// 解决方案1
if (box1 !== null) {
  box1.addEventListener('click', function () {
    alert('hello')
  })
}

// 解决方案2
box1?.addEventListener('click', function () {
  alert('hello')
})
