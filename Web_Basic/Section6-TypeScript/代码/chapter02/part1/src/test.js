function fn(per) {
  per.sayHello()
}
fn({
  name: '孙悟空',
  sayHello: function () {
    console.log('Hello, \u6211\u662F '.concat(this.name))
  },
})
