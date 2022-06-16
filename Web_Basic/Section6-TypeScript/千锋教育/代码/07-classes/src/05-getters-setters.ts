/* // class C {
//   _length = 0

//   get length() {
//     return this._length
//   }

//   set length(value) {
//     this._length = value
//   }
// }

// let c: C = new C()
// console.log(c.length)
// c.length = 100
// c.length = 'hello'
// console.log(c.length)


class Thing {
  _size = 0

  get size(): number {
    return this._size
  }

  set size(value: string | number | boolean) {
    let num = Number(value)

    if (!Number.isFinite(num)) {
      this._size = 0
      return
    }

    this._size = num
  }
}

let t: Thing = new Thing()
console.log(t.size)
t.size = 900
console.log(t.size)
t.size = 'hello'
console.log(t.size) */