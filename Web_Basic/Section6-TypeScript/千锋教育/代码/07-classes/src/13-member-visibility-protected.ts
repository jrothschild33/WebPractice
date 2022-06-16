/* // class Greeter {
//   public greet() {
//     console.log(this.getName())
//   }

//   protected getName() {
//     return 'hello'
//   }
// }

// class SpecialGreeter extends Greeter {
//   public howdy() {
//     console.log(this.getName())
//   }
// }

// const g = new SpecialGreeter()
// g.greet()
// g.howdy()
// g.getName()

class Base {
  protected m = 10
}

class Derived extends Base {
  public m = 15
}

const d = new Derived()
console.log(d.m) */