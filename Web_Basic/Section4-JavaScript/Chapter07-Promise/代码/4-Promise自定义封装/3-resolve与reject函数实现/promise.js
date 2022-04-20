//声明构造函数
function Promise(executor) {
  //添加属性
  this.PromiseState = 'pending'
  this.PromiseResult = null
  //保存实例对象的 this 的值
  const self = this // 常用：self、_this、that来代替this
  //resolve 函数（因为用了普通函数，而不是箭头函数，所以this指向windows）
  function resolve(data) {
    //1. 修改对象的状态 (promiseState)
    self.PromiseState = 'fulfilled' // resolved
    //2. 设置对象结果值 (promiseResult)
    self.PromiseResult = data
  }
  //reject 函数
  function reject(data) {
    //1. 修改对象的状态 (promiseState)
    self.PromiseState = 'rejected' //
    //2. 设置对象结果值 (promiseResult)
    self.PromiseResult = data
  }

  //同步调用『执行器函数』
  executor(resolve, reject)
}

//添加 then 方法
Promise.prototype.then = function (onResolved, onRejected) {}
