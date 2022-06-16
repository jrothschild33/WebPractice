/* type ToArray<Type> = Type extends any ? Type[] : never

// type StrArrOrNumArr = string[] | number[]
// type StrArrOrNumArr = (string | number)[]
// type StrArrOrNumArr = ToArray<string | number>

// let saon: StrArrOrNumArr = []


type ToArrayNonDist<Type> = [Type] extends [any] ? Type[] : never

type StrArrOrNumArr = ToArrayNonDist<string | number>

let saon: StrArrOrNumArr = [true] */