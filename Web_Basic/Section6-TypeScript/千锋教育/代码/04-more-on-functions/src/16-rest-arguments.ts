/* const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
arr1.push(...arr2)

console.log(arr1)


// const args = [8, 5]
// const angle = Math.atan2(...args)


const args = [8, 5] as const
const angle = Math.atan2(...args) */