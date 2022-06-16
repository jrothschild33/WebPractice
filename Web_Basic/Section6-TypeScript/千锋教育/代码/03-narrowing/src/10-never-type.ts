interface Circle {
  kind: 'circle'
  radius: number
}

interface Square {
  kind: 'square'
  sideLength: number
}

interface Triangle {
  kind: 'triangle'
  sideLength: number
}

type Shape = Circle | Square | Triangle

function getArea(shape: Shape) {
  switch(shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2

    case 'square':
      return shape.sideLength ** 2

    default:
      const _exhaustiveCheck: never = shape
      return _exhaustiveCheck
  }
}