/* // class MsgError extends Error {
//   constructor(m: string) {
//     super(m)

//     // 明确的设置原型
//     Object.setPrototypeOf(this, MsgError.prototype)
//   }
//   sayHello() {
//     return 'hello ' + this.message
//   }
// }

// const msgError = new MsgError('hello')
// console.log(msgError.sayHello())


class MsgError extends Error {
  constructor(m: string) {
    super(m)

    // 明确的设置原型
    Object.setPrototypeOf(this, MsgError.prototype)
  }
  sayHello() {
    return 'hello ' + this.message
  }
}

const msgError = new MsgError('hello')

console.log(msgError instanceof MsgError) */