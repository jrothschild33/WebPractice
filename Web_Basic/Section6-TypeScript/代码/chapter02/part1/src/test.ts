interface Person {
  name: string
  sayHello(): void
}

function fn(per: Person) {
  per.sayHello()
}

fn({
  name: '孙悟空',
  sayHello() {
    console.log(`Hello, 我是${this.name}`)
  },
})
