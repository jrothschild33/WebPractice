/* // interface Box {
//   contents: any
// }

// let box: Box = {
//   contents: 'hello'
// }


// interface Box {
//   contents: unknown
// }

// let x: Box = {
//   contents: 'hello world'
// }

// if (typeof x.contents === 'string') {
//   console.log(x.contents.toLowerCase())
// }

// console.log((x.contents as string).toLowerCase())


// interface NumberBox {
//   contents: number
// }
// interface StringBox {
//   contents: string
// }
// interface BooleanBox {
//   contents: boolean
// }

// function setContents(box: StringBox, newContents: string): void
// function setContents(box: NumberBox, newContents: number): void
// function setContents(box: BooleanBox, newContents: boolean): void 
// function setContents(box: { contents: any }, newContents: any) {
//   box.contents = newContents
// }


// interface Box<Type> {
//   contents: Type
// }

// interface StringBox {
//   contents: string
// }

// let boxA: Box<number> = {
//   contents: 100
// }

// let boxB: StringBox = {
//   contents: 100
// }


// interface Box<Type> {
//   contents: Type
// }

// interface Apple {
//   // ...
// }

// let a: Apple = {}

// type AppleBox = Box<Apple>
// let ab: AppleBox = {
//   contents: a
// }


type Box<Type> = {
  contents: Type
}


type OrNull<Type> = Type | null
type OneOrMany<Type> = Type | Type[]
type OneOrManyOrNull<Type> = OrNull<OneOrMany<Type>>
type OneOrManyOrNullString = OneOrManyOrNull<string> */