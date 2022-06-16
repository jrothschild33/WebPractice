/* // class Box {
//   content: string = ''

//   set(value: string) {
//     this.content = value
//     return this
//   }
// }

// class ClearableBox extends Box {
//   clear() {
//     this.content = ''
//   }
// }

// const a = new ClearableBox()
// const b = a.set('hello')
// console.log(b)


class Box {
  content: string = ''

  sameAs(other: this) {
    return other.content === this.content
  }
}

class DerivedBox extends Box {
  otherContent: string = '?'
}

const base = new Box()
const derived = new DerivedBox()
derived.sameAs(base) */