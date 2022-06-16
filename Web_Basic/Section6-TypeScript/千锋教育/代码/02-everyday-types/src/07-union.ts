/* function printId(id: number | string) {
  // console.log('Your ID is: ' + id)
  // console.log(id.toUpperCase())
  if (typeof id === 'string') {
    console.log(id.toUpperCase())
  } else {
    console.log(id)
  }
}

printId(101)
printId('202')
// printId({
//   MyId: 123456
// })


function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    console.log('Hello, ' + x.join(' and '))
  } else {
    console.log('Welcome lone traveler' + x)
  }
}

welcomePeople('A')
welcomePeople(['a', 'b'])

function getFirstThree(x: number[] | string): number[] | string {
  return x.slice(0, 3)
}

console.log(getFirstThree('abcdefg'))
console.log(getFirstThree([2, 3, 4, 5, 6])) */