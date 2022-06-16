/* interface SomeType {
  readonly prop: string
}

function doSomething(obj: SomeType) {
  console.log(obj.prop)
  // obj.prop = 'hello'
}



interface Home {
  readonly resident: {
    name: string
    age: number
  }
}

function visitForBirthday(home: Home) {
  console.log(home.resident.name)
  home.resident.age++
}

function evict(home: Home) {
  // home.resident = {
  //   name: 'Felix',
  //   age: 18
  // }
}



interface Person {
  name: string
  age: number
}

interface ReadonlyPerson {
  readonly name: string
  readonly age: number
}

let writablePerson: Person = {
  name: 'Felix',
  age: 18
}

let readonlyPerson: ReadonlyPerson = writablePerson

console.log(readonlyPerson.age)
writablePerson.age++
console.log(readonlyPerson.age) */