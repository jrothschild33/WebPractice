/* function minimumLength<Type extends { length: number }>(
  obj: Type,
  minimum: number
): Type {
  if (obj.length >= minimum) {
    return obj
  } else {
    return { length: minimum }
  }
}

const arr = minimumLength([1, 2, 3], 6)
console.log(arr.slice(0)) */