/* interface Shape {
  kind: 'circle' | 'square'
  radius?: number
  sideLength?: number
}
 */

/* interface Circle {
  kind: 'circle'
  radius: number
}

interface Square {
  kind: 'square'
  sideLength: number
}

type Shape = Circle | Square */

/* function handleShape(shape: Shape) {
  if (shape.kind === 'rect') {

  }
} */

/* function getArea(shape: Shape) {
  if (shape.kind === 'circle') {
    return Math.PI * shape.radius ** 2
  }
} */

/* function getArea(shape: Shape) {
  switch(shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2

    case 'square':
      return shape.sideLength ** 2
  }
} */