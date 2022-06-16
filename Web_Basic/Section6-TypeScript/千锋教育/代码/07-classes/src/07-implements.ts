/* // interface Pingable {
//   ping(): void
// }

// class Sonar implements Pingable {
//   ping() {
//     console.log('Ping!')
//   }
// }

// class Ball implements Pingable {
//   ping() {

//   }

//   pong() {

//   }
// }


// interface A {}
// interface B {}

// class C implements A, B {

// }


// interface Checkable {
//   check(name: string) : boolean
// }

// class NameChecker implements Checkable {
//   check(s: string) {
//     return s.toLowerCase() === 'ok'
//   }
// }


interface A {
  x: number
  y?: number
}

class C implements A {
  x = 0
  y = 1
}

const c = new C()
console.log(c.x)
console.log(c.y) */