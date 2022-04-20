# [Promise](https://www.bilibili.com/video/BV1GA411x7z1)

## 第一章 Promise基本使用

### Promise的基本概念

#### Promise简介

1. 抽象表达：
   * Promise 是一门新的技术（ES6 规范）
   * Promise 是 JS 中进行异步编程的新解决方案（旧方案是单纯使用回调函数）
   * 异步编程包括：`fs`、定时器、数据库操作、`ajax`等

2. 具体表达：
   * 从语法上来说: Promise 是一个构造函数
   * 从功能上来说: Promise 对象用来封装一个异步操作并可以获取其成功或失败的结果值

3. Promise的状态 `PromiseState`：只有以下2种, 且一个 promise 对象只能改变一次。无论变为成功还是失败, 都会有一个结果数据
   * 成功：pending 变为 resolved/fulfilled
   * 失败：pending 变为 rejected

4. Promise对象的值 `PromiseResult`：
   * 成功的结果数据: `value`
   * 失败的结果数据: `reason`

5. Promise 的基本流程：

   ![](D:\MyProjects\Website\Tutoring\Web_Basic\Section4-JavaScript\Chapter07-Promise\资源\promise的基本流程.png)

------

#### Promise优势

1. 指定回调函数的方式更加灵活：

   * 旧方法：必须在启动异步任务前指定
   * promise：启动异步任务 => 返回promie对象 => 给promise对象绑定回调函数(甚至可以在异步任务结束后指定/多个)

2. 支持链式调用, 可以解决回调地狱问题：

   * 回调地狱：回调函数嵌套调用, 外部回调函数异步执行的结果是嵌套的回调执行的条件。不便于阅读、不便于异常处理。
   * 解决方案：promise 链式调用
   * 终极解决方案：async与await

   ```js
   // 回调地狱
   doSomething(function (result) {
     doSomethingElse(
       result,
       function (newResult) {
         doThirdThing(
           newResult,
           function (finalResult) {
             console.log('Got the final result: ' + finalResult)
           },
           failureCallback
         )
       },
       failureCallback
     )
   }, failureCallback)
   ```

   ```js
   // 使用 promise 的链式调用解决回调地狱
   doSomething()
     .then(function (result) {
       return doSomethingElse(result)
     })
     .then(function (newResult) {
       return doThirdThing(newResult)
     })
     .then(function (finalResult) {
       console.log('Got the final result: ' + finalResult)
     })
     .catch(failureCallback)
   ```

   ```js
   // async+await: 回调地狱的终极解决方案
   // 注意：doSomething()、doSomethingElse()、doThirdThing()函数需要返回的是Promise对象
   async function request() {
     try {
       const result = await doSomething()
       const newResult = await doSomethingElse(result)
       const finalResult = await doThirdThing(newResult)
       console.log('Got the final result: ' + finalResult)
     } catch (error) {
       failureCallback(error)
     }
   }
   ```

------

#### Promise基本案例

1. 定时器模拟中奖

> 需求：点击按钮, 1s 后显示是否中奖（30%概率中奖）
>
> * 若中奖弹出:恭喜恭喜, 奖品为 10万 RMB 劳斯莱斯优惠券
> * 若未中奖弹出:再接再厉 

```js
// 定时器实现
// 生成随机数
function rand(m, n) {
  return Math.ceil(Math.random() * (n - m + 1)) + m - 1
}
//获取元素对象
const btn = document.querySelector('#btn')

// 绑定单击事件
btn.addEventListener('click', function () {
  //定时器实现
  setTimeout(() => {
    // 30%中奖概率
    // 获取从1-100的一个随机数
    let n = rand(1, 100)
    //判断
    if (n <= 30) {
      alert('恭喜恭喜, 奖品为 10万 RMB 劳斯莱斯优惠券')
    } else {
      alert('再接再厉')
    }
  }, 1000)
})
```

```js
// Promise形式实现
// 生成随机数
function rand(m, n) {
  return Math.ceil(Math.random() * (n - m + 1)) + m - 1
}
//获取元素对象
const btn = document.querySelector('#btn')
// 绑定单击事件
btn.addEventListener('click', function () {
  //Promise形式实现
  const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      // 30%中奖概率
      // 获取从1-100的一个随机数
      let n = rand(1, 100)
      //判断
      if (n <= 30) {
        resolve(n) // 将 promise 对象的状态设置为 『成功』
      } else {
        reject(n) // 将 promise 对象的状态设置为 『失败』
      }
    }, 1000)
  })
  console.log(p)
  //调用 then 方法
  p.then(
    (value) => {
      alert('恭喜恭喜, 奖品为 10万 RMB 劳斯莱斯优惠券, 您的中奖数字为：' + value)
    },
    (reason) => {
      alert('再接再厉, 您的号码为：' + reason)
    }
  )
})
```

2. 判断时间戳是否为奇数

```js
// 1.创建 promise 对象(pending 状态), 指定执行器函数
const p = new Promise((resolve, reject) => {
  // 2.在执行器函数中启动异步任务
  setTimeout(() => {
    const time = Date.now()
    // 3.根据结果做不同处理
    // 如果成功了, 调用 resolve(), 指定成功的 value, 变为 resolved 状态
    if (time % 2 === 1) {
      resolve('成功的值 ' + time)
    } else {
      // 如果失败了, 调用 reject(), 指定失败的 reason, 变为rejected 状态
      reject('失败的值' + time)
    }
  }, 2000)
})
// 4.指定成功或失败的回调函数来获取成功的 value 或失败的 reason
p.then(
  (value) => {
    // 成功的回调函数 onResolved, 得到成功的 value
    console.log('成功的 value: ', value)
  },
  (reason) => {
    // 失败的回调函数 onRejected, 得到失败的 reason
    console.log('失败的 reason: ', reason)
  }
)
```

3. 与fs模块结合读取文件

```js
const fs = require('fs')

// 方法1：回调函数:
fs.readFile('./resource/content.txt', (err, data) => {
  // 如果出错 则抛出错误
  if (err) throw err
  //输出文件内容
  console.log(data.toString())
})

// 方法2：Promise 形式
let p = new Promise((resolve, reject) => {
  fs.readFile('./resource/content.txt', (err, data) => {
    //如果出错
    if (err) reject(err)
    //如果成功
    resolve(data)
  })
})

//调用 then
p.then(
  (value) => {
    console.log(value.toString())
  },
  (reason) => {
    console.log(reason)
  }
)
```

------

#### Promise封装功能

1. 使用 promise 封装 fs 模块 (node.js)

   ```js
   // 封装一个函数 mineReadFile 读取文件内容
   // 参数:  path  文件路径
   // 返回:  promise 对象
   
   function mineReadFile(path) {
     return new Promise((resolve, reject) => {
       //读取文件
       require('fs').readFile(path, (err, data) => {
         //判断
         if (err) reject(err)
         //成功
         resolve(data)
       })
     })
   }
   
   mineReadFile('./resource/content.txt').then(
     (value) => {
       //输出文件内容
       console.log(value.toString())
     },
     (reason) => {
       console.log(reason)
     }
   )
   ```

2. 使用 promise 封装基于定时器的异步

   ```js
   function doDelay(time) {
     // 1.创建 promise 对象
     return new Promise((resolve, reject) => {
       // 2.启动异步任务
       console.log('启动异步任务')
       setTimeout(() => {
         console.log('延迟任务开始执行...')
         const time = Date.now() // 假设: 时间为奇数代表成功, 为偶数代表失败
         if (time % 2 === 1) {
           // 成功了，调用 resolve()并传入成功的 value
           resolve('成功的数据 ' + time)
         } else {
           // 失败了，调用 reject()并传入失败的 reason
           reject('失败的数据 ' + time)
         }
       }, time)
     })
   }
   
   const promise = doDelay(2000)
   promise.then(
     (value) => {
       console.log('成功的 value: ', value)
     },
     (reason) => {
       console.log('失败的 reason: ', reason)
     }
   )
   ```

3. 使用 promise 封装 Ajax 异步请求

   ```js
   function promiseAjax(url) {
     return new Promise((resolve, reject) => {
       //1.创建对象
       const xhr = new XMLHttpRequest()
       //2. 初始化
   	xhr.open('GET', url)
   	//3. 发送
   	xhr.send()
       //4. 处理响应结果
       xhr.onreadystatechange = () => {
         if (xhr.readyState !== 4) return
         const { status, response } = xhr
         // 请求成功, 调用 resolve(value)
         if (status >= 200 && status < 300) {
           resolve(JSON.parse(response))
         } else {
           // 请求失败, 调用 reject(reason)
           reject(new Error('请求失败: status: ' + status))
         }
       }
     })
   }
   
   promiseAjax('https://api.apiopen.top/getJoke').then(
     (data) => {
       console.log('显示成功数据', data)
     },
     (error) => {
       alert(error.message)
     }
   )
   ```

#### util.promisify方法

> 传入一个遵循常见错误优先的回调风格函数（即以`(err,value)=>...`回调作为最后一个参数），并返回一个promise版本。可以使用它来达到用promise封装功能的效果。

```js
// 封装fs读取模块（node.js）
// 引入 util 模块
const util = require('util')
// 引入 fs 模块
const fs = require('fs')
// 返回一个新的函数
let mineReadFile = util.promisify(fs.readFile)

mineReadFile('./resource/content.txt').then((value) => {
  console.log(value.toString()),
    (reason) => {
      console.log(reason)
    }
})
```

------

### Promise API

#### Promise构造函数

> Promise (excutor) {}：executor 会在 Promise 内部立即同步调用,异步操作在执行器中执行。

1. `executor` 函数: 执行器 (resolve, reject) => {} 
2. `resolve` 函数: 内部定义成功时调用的函数 value => {}
3. `reject`函数: 内部定义失败时调用的函数 reason => {}

------

#### Promise.prototype.then

> Promise.prototype.then(onResolved, onRejected) => {}
>
> 指定用于得到成功 value 的成功回调和用于得到失败 reason 的失败回调返回一个新的 promise 对象

1. `onResolved` 函数: 成功的回调函数 (value) => {}
2. `onRejected` 函数: 失败的回调函数 (reason) => {}

------

#### Promise.prototype.catch

> Promise.prototype.catch(onRejected) => {}，then()的语法糖, 但只能指定失败的回调函数，相当于: then(undefined, onRejected)

1. onRejected 函数: 失败的回调函数 (reason) => {}

```js
new Promise((resolve, reject) => {
  if (Date.now() % 2 === 0) {
    resolve(1)
  } else {
    reject(2)
  }
})
  .then((value) => {
    console.log('onResolved1()', value)
  })
  .catch((reason) => {
    console.log('onRejected1()', reason)
  })
```

------

#### Promise.resolve

> Promise.resolve(value) => {}，返回一个成功/失败的 promise 对象

1. value: 成功的数据或 promise 对象

```js
//如果传入的参数为：非Promise类型的对象, 则返回的结果为成功promise对象
let p1 = Promise.resolve(521)
//如果传入的参数为：Promise 对象, 则参数的结果决定了 resolve 的结果
let p2 = Promise.resolve(
  new Promise((resolve, reject) => {
    //   resolve('OK')
    reject('Error')
  })
)
console.log(p2)
p2.catch((reason) => {
  console.log(reason)
})
```

------

#### Promise.reject

> Promise.reject(reason) => {}，返回一个失败的 promise 对象

1. reason: 失败的原因

```js
let p = Promise.reject(521)           // Promise {<rejected>: 521}
let p2 = Promise.reject('iloveyou')   // Promise {<rejected>: 'iloveyou'}
let p3 = Promise.reject(              // Promise {<rejected>: Promise}
  new Promise((resolve, reject) => {
    resolve('OK')
  })
)
console.log(p3)
```

------

#### Promise.all

> Promise.all(promises) => {}
>
> 返回一个新的 promise, 只有所有的 promise 都成功才成功, 只要有一个失败了就直接失败

1. promises: 包含 n 个 promise 的数组

```js
let p1 = new Promise((resolve, reject) => {
  resolve('OK')
})
let p2 = Promise.resolve('Success')
let p3 = Promise.reject('Error')
let p4 = Promise.resolve('Oh Yeah')

const pAll = Promise.all([p1, p2, p4])  // PromiseState: "fulfilled", PromiseResult: ["OK", "Success", "Oh Yeah"]
const pAll2 = Promise.all([p1, p3, p4]) // PromiseState: "rejected", PromiseResult: "Error"

pAll.then(
  (values) => {
    console.log('all 成功了', values)
  },
  (reason) => {
    console.log('all 失败了', reason)
  }
)
pAll2.then(
  (values) => {
    console.log('all 成功了', values)
  },
  (reason) => {
    console.log('all 失败了', reason)
  }
)
```

------

#### Promise.race

> Promise.race(promises) => {}
>
> 返回一个新的 promise, 第一个完成的 promise 的结果状态就是最终的结果状态

1. promises: 包含 n 个 promise 的数组

```js
let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('OK')
  }, 1000)
})
let p2 = Promise.resolve('Success')
let p3 = Promise.resolve('Oh Yeah')
const pRace = Promise.race([p1, p2, p3]) // PromiseState: "fulfilled", PromiseResult: "Success"
pRace.then(
  (value) => {
    console.log('race 成功了', value)
  },
  (reason) => {
    console.log('race 失败了', reason)
  }
)
```

------

### Promise的关键问题

1. 如何改变 Promise 的状态?

   > (1) resolve(value): 如果当前是 pending 就会变为 resolved
   >
   > (2) reject(reason): 如果当前是 pending 就会变为 rejected
   >
   > (3) 抛出异常 throw('error'): 如果当前是 pending 就会变为 rejected

   ```js
   let p = new Promise((resolve, reject) => {
     // 1. resolve 函数
     // resolve('ok');   // pending => fulfilled (resolved)
     // 2. reject 函数
     // reject("error"); // pending =>  rejected
     // 3. 抛出错误
     throw '出问题了'
   })
   console.log(p)
   ```

2. 一个 Promise 指定多个成功/失败回调函数, 都会调用吗？

   > 当 promise 改变为对应状态时都会调用

   ```js
   let p = new Promise((resolve, reject) => {
     // resolve('OK') // 如果里面不写resolve或reject，promise状态一直为pending，下面的回调不会执行
     reject('error')
   })
   
   //指定回调-1
   p.then(
     (value) => {
       console.log(value)
     },
     (reason) => {
       console.warn(reason)
     }
   )
   //指定回调-2
   p.then(
     (value) => {
       alert(value)
     },
     (reason) => {
       alert(reason)
     }
   )
   ```

3. 改变 Promise 状态和指定回调函数谁先谁后？

   > (1) 都有可能, 同步任务是先改变状态、再指定回调，异步任务是先指定回调、再改变状态
   >
   > (2) 如何先改状态再指定回调？
   >
   > * 在执行器中直接调用 resolve()/reject()
   >
   > * 延迟更长时间才调用 then()
   >
   > (3) 什么时候才能得到数据？
   >
   > * 如果先指定的回调, 那当状态发生改变时, 回调函数就会调用, 得到数据
   > * 如果先改变的状态, 那当指定回调时, 回调函数就会调用, 得到数据

   ```js
   // 同步任务：先改变状态，再指定回调
   let p = new Promise((resolve, reject) => {
     resolve('OK')
   })
   
   p.then(
     (value) => {
       console.log(value)
     },
     (reason) => {}
   )
   ```

   ```js
   // 异步任务：先指定回调，再改变状态
   let p = new Promise((resolve, reject) => {
     setTimeout(() => {
       resolve('OK')
     }, 1000)
   })
   p.then(
     (value) => {
       console.log(value)
     },
     (reason) => {}
   )
   ```

4. Promise.then()返回的新 promise 的结果状态由什么决定？

   > (1) 简单表达: 由 then()指定的回调函数执行的结果决定
   >
   > (2) 详细表达:
   >
   > * 如果抛出异常, 新 promise 变为 rejected, reason 为抛出的异常
   > * 如果返回的是非 promise 的任意值, 新 promise 变为 resolved, value 为返回的值
   > * 如果返回的是另一个新 promise, 此 promise 的结果就会成为新 promise 的结果

   ```js
   let p = new Promise((resolve, reject) => {
     resolve('ok')
     // reject('Error')
   })
   //执行 then 方法
   let result = p.then(
     (value) => {
       //1. 抛出错误：新 promise 变为 rejected, reason 为抛出的异常
       //   throw '出了问题'
         
       //2. 返回结果是非 Promise 类型的对象：新 promise 变为 resolved, value 为返回的值
       // return 521
         
       //3. 返回结果是 Promise 对象：新 promise 的结果就会成为新 promise 的结果
       return new Promise((resolve, reject) => {
         // resolve('success')
         reject('error2')
       })
     },
     (reason) => {
       console.warn(reason)
     }
   )
   console.log(result)
   ```

5. Promise 如何串连多个操作任务？

   > (1) promise 的 then()返回一个新的 promise, 可以开成 then()的链式调用
   >
   > (2) 通过 then 的链式调用串连多个同步/异步任务

   ```js
   let p = new Promise((resolve, reject) => {
     setTimeout(() => {
       resolve('OK')
     }, 1000)
   })
   p.then((value) => {
     return new Promise((resolve, reject) => {
       resolve('success')
     })
   })
     .then((value) => {
       console.log(value) // 'success'
     })
     .then((value) => {
       console.log(value) // undefined（因为由then()指定的回调函数执行的结果决定）
     })
   ```

6. Promise 异常穿透？

   > (1) 当使用 promise 的 then 链式调用时, 可以在最后指定失败的回调
   > (2) 前面任何操作出了异常, 都会传到最后失败的回调中处理

   ```js
   let p = new Promise((resolve, reject) => {
     setTimeout(() => {
       resolve('OK')
       // reject('Err') // 如果开启此行代码，提示的错误就是'Err'
     }, 1000)
   })
   p.then((value) => {
     console.log(111)
     throw '失败啦!'    // 如果前面没有错误，则最终提示的错误是：'失败啦!'
   })
     .then((value) => {
       console.log(222)
     })
     .then((value) => {
       console.log(333)
     })
     .catch((reason) => {
       console.warn(reason)
     })
   ```

7. 中断 Promise 链？

   > (1) 当使用 promise 的 then 链式调用时, 在中间中断, 不再调用后面的回调函数
   > (2) 办法: 在回调函数中返回一个 pendding 状态的 promise 对象

   ```js
   let p = new Promise((resolve, reject) => {
     setTimeout(() => {
       resolve('OK')
     }, 1000)
   })
   p.then((value) => {
     console.log(111)
     // 有且只有一个方式中断 Promise 链
     return new Promise(() => {})
   })
     .then((value) => {
       console.log(222)
     })
     .then((value) => {
       console.log(333)
     })
     .catch((reason) => {
       console.warn(reason)
     })
   ```

------

## 第二章 自定义Promise

### 定义整体结构

```js
// 自定义 Promise
(function (window) {
  // Promise 构造函数excutor: 内部同步执行的函数 (resolve, reject) => {}
  function Promise(excutor) {}
  // 为 promise 指定成功/失败的回调函数函数的返回值是一个新的 promise 对象
  Promise.prototype.then = function (onResolved, onRejected) {}
  // 为 promise 指定失败的回调函数是 then(null, onRejected)的语法糖
  Promise.prototype.catch = function (onRejected) {}
  // 返回一个指定了成功 value 的 promise 对象
  Promise.resolve = function (value) {}
  // 返回一个指定了失败 reason 的 promise 对象
  Promise.reject = function (reason) {}
  // 返回一个 promise, 只有 promises 中所有 promise 都成功时, 才最终成功, 只要有一个失败就直接失败
  Promise.all = function (promises) {}
  // 返回一个 promise， 一旦某个 promise 解决或拒绝， 返回的 promise 就会解决或拒绝
  Promise.race = function (promises) {}
  
  // 暴露构造函数
  window.Promise = Promise
})(window)
```

### Promise构造函数的实现

```js
// Promise 构造函数 excutor: 内部同步执行的函数 (resolve, reject) => {}
function Promise(excutor) {
  // 保存实例对象的 this 的值（常用：self、_this、that来代替this）
  // 原因：下面的resolve、reject用的是普通函数，直接用this会指向windows（箭头函数就不用替换this了）
  const self = this
  // 状态值, 初始状态为 pending, 成功了变为resolved, 失败了变为 rejected
  self.PromiseState = 'pending'
  // 用来保存成功 value 或失败 reason 的属性
  self.PromiseResult = undefined
  // 用来保存所有待调用的（pending）包含 onResolved 和 onRejected 回调函数的对象的数组，执行异步任务会用到
  self.callbacks = []
   
  // 异步处理成功后应该调用的函数value: 将交给 onResolve()的成功数据
  function resolve(value) {
    // 状态只能更改一次：如果当前不是 pending, 直接结束
    if (self.PromiseState !== 'pending') return
    // 立即更新状态, 保存数据
    self.PromiseState = 'fulfilled'  // 或'resolved'
    self.PromiseResult = value
    
    // 异步调用所有待处理的 onResolved 成功回调函数
    if (self.callbacks.length > 0) {
      // 异步调用的实现：加定时器
      setTimeout(() => {
        self.callbacks.forEach((obj) => {
          obj.onResolved(value)
        })
      })
    }
  }
   
  // 异步处理失败后应该调用的函数reason: 将交给 onRejected()的失败数据
  function reject(reason) {
    // 状态只能更改一次：如果当前不是 pending, 直接结束
    if (self.PromiseState !== 'pending') return
    // 立即更新状态, 保存数据
    self.PromiseState = 'rejected'
    self.PromiseResult = reason
    
    // 异步调用所有待处理的 onRejected 回调函数
    setTimeout(() => {
      self.callbacks.forEach((obj) => {
        obj.onRejected(reason)
      })
    })
  }
  
  // 抛出异常，改变Promise状态
  try {
    // 立即同步调用 excutor()处理
    executor(resolve, reject)
  } catch (error) {
    // 如果出了异常, 直接失败
    reject(error)
  }
}
```

### promise.then()/catch()的实现

```js
// 为 promise 指定成功/失败的回调函数函数的返回值是一个新的 promise 对象
Promise.prototype.then = function (onResolved, onRejected) {
  const self = this
  // onResolved/onRejected一般是在p.then((value)=>{},(reason)=>{})中定义的函数
  // 如果 onResolved/onRejected 不是函数, 可指定一个默认的函数
  // 指定返回的 promise 为一个成功状态, 结果值为 value
  onResolved = typeof onResolved === 'function' ? onResolved : (value) => value
  // 指定返回的 promise 为一个失败状态, 结果值为 reason
  onRejected = typeof onRejected === 'function' ? onRejected : (reason) => { throw reason }
  // 返回一个新的 promise 对象
  return new Promise((resolve, reject) => {
    // 专门抽取的用来处理 promise 成功/失败结果的函数callback: 成功/失败的回调函数
    function handle(callback) {
      // 1. 抛出异常 ===> 返回的 promise 变为 rejected
      try {
        // 获取回调函数的执行结果
        const result = callback(self.PromiseResult)
        // 2. 返回一个新的 promise ===> 得到新的 promise 的结果值作为返回的 promise 的结果值
        if (result instanceof Promise) {
          // 一旦 result 成功了, resolve(value), 一旦 result 失败了: reject(reason)
          result.then(resolve, reject) 
        } else {
          // 3. 返回一个一般值(undefined) ===> 将这个值作为返回的 promise 的成功值
          resolve(result)
        }
      } catch (error) {
        reject(error)
      }
    }
    
    if (self.PromiseState === 'fulfilled') {
      // 当前 promise 已经成功了
      setTimeout(() => {
        handle(onResolved)
      })
    } else if (self.PromiseState === 'rejected') {
      // 当前 promise 已经失败了
      setTimeout(() => {
        handle(onRejected)
      })
    } else {
      // 当前 promise 还未确定 pending
      // 将 onResolved 和 onRejected 保存起来
      self.callbacks.push({
        onResolved(value) {
          handle(onResolved)
        },
        onRejected(reason) {
          handle(onRejected)
        },
      })
    }
  })
}

// 为 promise 指定失败的回调函数是 then(undefined, onRejected) 的语法糖
Promise.prototype.catch = function (onRejected) {
  return this.then(undefined, onRejected)
}
```

### Promise.resolve()的实现

```js
// Promise.resolve()
// 返回一个指定了成功 value 的 promise 对象value: 一般数据或 promise
Promise.resolve = function (value) {
  return new Promise((resolve, reject) => {
    if (value instanceof Promise) {
      value.then(resolve, reject)
    } else {
      resolve(value)
    }
  })
}
```
### Promise.reject()的实现

```js
// Promise.reject()
// 返回一个指定了失败 reason 的 promise 对象reason: 一般数据或 error
Promise.reject = function (reason) {
  return new Promise((resolve, reject) => {
    reject(reason)
  })
}
```

### Promise.all()的实现

```js
// Promise.all()
// 返回一个新的 promise 对象, 只有 promises 中所有 promise 都产生成功 value 时, 才最终成功, 只要有一个失败就直接失败
Promise.all = function (promises) {
  // 返回一个新的 promise
  return new Promise((resolve, reject) => {
    // 已成功的数量
    let resolvedCount = 0
    // 待处理的 promises 数组的长度
    const promisesLength = promises.length
    // 准备一个保存成功值的数组
    const arr = new Array(promisesLength)
    // 遍历每个待处理的 promise
    for (let i = 0; i < promisesLength; i++) {
      // promises 中元素可能不是一个数组, 需要用 resolve 包装一下
      Promise.resolve(promises[i]).then(
        (value) => {
          // 成功当前 promise 成功的值到对应的下标
          arr[i] = value
          // 成功的数量加 1
          resolvedCount++
          // 一旦全部成功
          if (resolvedCount === promisesLength) {
            // 将所有成功值的数组作为返回 promise 对象的成功结果值
            resolve(arr)
          }
        },
        (reason) => {
          // 一旦有一个promise产生了失败结果值, 将其作为返回promise对象的失败结果值
          reject(reason)
        }
      )
    }
  })
}
```
### Promise.race()的实现

```js
// Promise.race()
// 返回一个新的 promise, 第一个完成的 promise 的结果状态就是最终的结果状态
Promise.race = function (promises) {
  // 返回新的 promise 对象
  return new Promise((resolve, reject) => {
    // 遍历所有 promise
    for (var i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i]).then(
        (value) => {
          // 只要有一个成功了, 返回的 promise 就成功了
          resolve(value)
        },
        (reason) => {
          // 只要有一个失败了, 返回的结果就失败了
          reject(reason)
        }
      )
    }
  })
}
```

### Promise.resolveDelay()的实现

```js
// 返回一个延迟指定时间才确定结果的 promise 对象
Promise.resolveDelay = function (value, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // 如果 value 是一个 promise, 取这个promise 的结果值作为返回的 promise 的结果值
      if (value instanceof Promise) {
        // 如果 value 成功, 调用resolve(val), 如果 value 失败了, 调用 reject(reason)
        value.then(resolve, reject)
      } else {
        resolve(value)
      }
    }, time)
  })
}
```

### Promise.rejectDelay()的实现

```js
// 返回一个延迟指定时间才失败的 Promise 对象
Promise.rejectDelay = function (reason, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(reason)
    }, time)
  })
}
```

### 整合：class封装Promise

```js
class Promise {
  // 构造方法
  constructor(executor) {
    const self = this
    self.PromiseState = 'pending'
    self.PromiseResult = undefined
    self.callbacks = []

    function resolve(value) {
      if (self.PromiseState !== 'pending') return
      self.PromiseState = 'fulfilled'
      self.PromiseResult = value
      if (self.callbacks.length > 0) {
        setTimeout(() => {
          self.callbacks.forEach((obj) => {
            obj.onResolved(value)
          })
        })
      }
    }
    function reject(reason) {
      if (self.PromiseState !== 'pending') return
      self.PromiseState = 'rejected'
      self.PromiseResult = reason
      setTimeout(() => {
        self.callbacks.forEach((obj) => {
          obj.onRejected(reason)
        })
      })
    }
    try {
      executor(resolve, reject)
    } catch (error) {
      reject(error)
    }
  }

  // then 方法
  then(onResolved, onRejected) {
    const self = this
    onResolved = typeof onResolved === 'function' ? onResolved : (value) => value
    onRejected =
      typeof onRejected === 'function'
        ? onRejected
        : (reason) => {
            throw reason
          }
    return new Promise((resolve, reject) => {
      function handle(callback) {
        try {
          const result = callback(self.PromiseResult)

          if (result instanceof Promise) {
            result.then(resolve, reject)
          } else {
            resolve(result)
          }
        } catch (error) {
          reject(error)
        }
      }

      if (self.PromiseState === 'fulfilled') {
        setTimeout(() => {
          handle(onResolved)
        })
      } else if (self.PromiseState === 'rejected') {
        setTimeout(() => {
          handle(onRejected)
        })
      } else {
        self.callbacks.push({
          onResolved(value) {
            handle(onResolved)
          },
          onRejected(reason) {
            handle(onRejected)
          },
        })
      }
    })
  }

  // catch 方法
  catch(onRejected) {
    return this.then(undefined, onRejected)
  }

  // 添加 resolve 方法
  static resolve(value) {
    return new Promise((resolve, reject) => {
      if (value instanceof Promise) {
        value.then(resolve, reject)
      } else {
        resolve(value)
      }
    })
  }

  // 添加 reject 方法
  static reject(reason) {
    return new Promise((resolve, reject) => {
      reject(reason)
    })
  }

  // 添加 all 方法
  static all(promises) {
    return new Promise((resolve, reject) => {
      let resolvedCount = 0
      const promisesLength = promises.length
      const arr = new Array(promisesLength)
      for (let i = 0; i < promisesLength; i++) {
        Promise.resolve(promises[i]).then(
          (value) => {
            arr[i] = value
            resolvedCount++
            if (resolvedCount === promisesLength) {
              resolve(arr)
            }
          },
          (reason) => {
            reject(reason)
          }
        )
      }
    })
  }

  //添加 race 方法
  static race(promises) {
    return new Promise((resolve, reject) => {
      for (var i = 0; i < promises.length; i++) {
        Promise.resolve(promises[i]).then(
          (value) => {
            resolve(value)
          },
          (reason) => {
            reject(reason)
          }
        )
      }
    })
  }
}
```

------

## 第三章 async与await

### [async函数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function)

1. 函数的返回值为 promise 对象
2. promise 对象的结果由 async 函数执行的返回值决定

```js
async function main() {
  // 1. 如果返回值是一个非Promise类型的数据：return一个成功状态的promise
  // PromiseState: "fulfilled", PromiseResult: 521
  return 521
  
  // 2. 如果返回的是一个Promise对象：return一个与该promise对象状态相同的promise对象
  return new Promise((resolve, reject) => {
    resolve('OK') // PromiseState: "fulfilled", PromiseResult: "OK"
    reject('Error') //  PromiseState: "rejected", PromiseResult: "Error"
  })
  
  // 3. 抛出异常：返回一个失败状态的promise
  //  PromiseState: "rejected", PromiseResult: "Oh NO"
  throw 'Oh NO'
}
let result = main()
console.log(result)
```

### [await表达式](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/await)

1. await 右侧的表达式一般为 promise 对象, 但也可以是其它的值
2. 如果表达式是 promise 对象, await 返回的是 promise 成功的值
3. 如果表达式是其它值, 直接将此值作为 await 的返回值
4. await 必须写在 async 函数中, 但 async 函数中可以没有 await
5. 如果 await 的 promise 失败了, 就会抛出异常, 需要通过 try...catch 捕获处理

```js
async function main() {
  let p = new Promise((resolve, reject) => {
    // resolve('OK')
    reject('Error')
  })
  //1. 右侧为promise的情况：返回promise成功的值：'OK'
  let res = await p
  console.log(res)
  
  //2. 右侧为其他类型的数据：20
  let res2 = await 20
  console.log(res2)
  
  //3. 如果promise是失败的状态：res、res2、res3都不会执行，直接执行catch部分
  try {
    let res3 = await p
    console.log(res3)
  } catch (e) {
    console.log(e)
  }
}
main()
```

### async与await结合

1. 使用fs读取文件内容

```js
const fs = require('fs')
const util = require('util')
// util.promisify可以返回一个promise对象，免去封装过程
const mineReadFile = util.promisify(fs.readFile)

//async 与 await
async function main() {
  try {
    //读取第一个文件的内容
    let data1 = await mineReadFile('./resource/1x.html')
    let data2 = await mineReadFile('./resource/2.html')
    let data3 = await mineReadFile('./resource/3.html')
    console.log(data1 + data2 + data3)
  } catch (e) {
    console.log(e.code)
  }
}

main()
```

2. 封装Ajax请求

```js
function sendAJAX(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.responseType = 'json'
    xhr.open('GET', url)
    xhr.send()
    //处理结果
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        //判断成功
        if (xhr.status >= 200 && xhr.status < 300) {
          //成功的结果
          resolve(xhr.response)
        } else {
          reject(xhr.status)
        }
      }
    }
  })
}
let btn = document.querySelector('#btn')
btn.addEventListener('click', async function () {
  try {
    let duanzi = await sendAJAX('https://api.apiopen.top/getJoke')
    console.log(duanzi)
  } catch (e) {
    alert(e)
  }
})
```

