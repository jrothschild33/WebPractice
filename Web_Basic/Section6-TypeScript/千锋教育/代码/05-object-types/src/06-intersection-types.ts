/* interface Colorful {
  color: string
}

interface Circle {
  radius: number
}

type ColorfulCircle = Colorful & Circle

const cc: ColorfulCircle = {
  color: 'red',
  radius: 100
}


function draw(circle: Colorful & Circle) {
  console.log(circle.color)
  console.log(circle.radius)
}
draw({
  color: 'red',
  radius: 100
})
draw({
  color: 'green',
  rdaius: 100
}) */