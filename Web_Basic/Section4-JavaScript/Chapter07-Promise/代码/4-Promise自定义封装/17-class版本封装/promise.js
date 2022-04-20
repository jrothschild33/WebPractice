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
