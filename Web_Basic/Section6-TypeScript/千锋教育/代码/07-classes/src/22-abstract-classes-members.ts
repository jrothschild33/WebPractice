/* abstract class Base {
  abstract getName(): string

  printName() {
    console.log(this.getName())
  }
}

class Derived extends Base {
  getName () {
    return 'world'
  }
}

const b = new Derived()
b.getName()
b.printName()

function greet(ctor: new() => Base) {
  const instance = new ctor()
  instance.printName()
}

greet(Derived) */