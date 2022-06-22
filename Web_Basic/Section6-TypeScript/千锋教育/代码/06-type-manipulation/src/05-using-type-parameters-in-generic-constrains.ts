/* // 翻译：Key类型属于Type类型的某个key值
function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key]
}

let x = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
}

getProperty(x, 'a')
getProperty(x, 'm') // 报错：m不在x的键值中 */
