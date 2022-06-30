// 将拿到的数据放入本地储存
export const rm = (key: string) => {
  sessionStorage.removeItem(key)
}

export const get = (key: string): string | null => {
  return sessionStorage.getItem(key)
}

export const set = (key: string, val: string) => {
  return sessionStorage.setItem(key, val)
}

export const clear = () => {
  return sessionStorage.clear()
}
