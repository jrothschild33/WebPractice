/* // function doSomething(pair: [string, number]) {
//   const a = pair[0]
//   const b = pair[1]
//   const c = pair[2]
// }

// doSomething(['hello', 42, true])


// function doSomething(stringHash: [string, number]) {
//   const [ inputString, hash ] = stringHash
// }


// type Either2dOr3d = [number, number, number?]

// function setCoordinate(coord: Either2dOr3d) {
//   const [x, y, z] = coord
//   console.log(coord.length)
// }

// setCoordinate([3, 4])
// setCoordinate([3, 4, 5])
// setCoordinate([3, 4, 'hello'])


type StringNumberBooleans = [string, number, ...boolean[]]
type StringBooleansNumber = [string, ...boolean[], number]
type BooleansStringNumber = [...boolean[], string, number]

function readButtonInput(...args: [string, number, ...boolean[]]) {
  const [name, version, ...input] = args
  console.log(name)
  console.log(version)
  console.log(input)
}

readButtonInput('hello', 10.5, true, false, false) */