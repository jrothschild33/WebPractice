/* class Base {
  greet() {
    console.log('Hello World')
  }
}

class Derived extends Base {
  greet(name?: string) {
    if (name === undefined) {
      super.greet()
    } else {
      console.log(name.toUpperCase())
    }
  }
}

// class Derived extends Base {
//   greet(name: string) {
//     console.log(name.toUpperCase())
//   }
// }

const d = new Derived()
d.greet()
d.greet('reader')

const b: Base = d
b.greet() */