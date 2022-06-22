/* // 案例1
// type MessageOf<T> = T['message'] // 报错：类型“"message"”无法用于索引类型“T”
// type MessageOf<T extends { message: unknown }> = T['message']  // 对上述代码进行改造后，可以使用了
type MessageOf<T> = T extends { message: unknown } ? T['message'] : never // 进一步改造：如果没有message属性，则为never类型

interface Email {
  message: string
}

interface Dog {
  bark(): void
}

// 相当于：type EmailMessageContents = string
type EmailMessageContents = MessageOf<Email>
const emc: EmailMessageContents = 'balabala...'

// 相当于：type DogMessageContents = never
type DogMessageContents = MessageOf<Dog>
const dmc: DogMessageContents = 'error' as never

// 案例2
type Flatten<T> = T extends any[] ? T[number] : T

// 相当于：type Str = string
type Str = Flatten<string[]>

// 相当于：type Num = number
type Num = Flatten<number> */
