/* interface Colorful {
  color: string
}

interface Circle {
  radius: number
}
// 命名定义
type ColorfulCircle = Colorful & Circle

const cc: ColorfulCircle = {
  color: 'red',
  radius: 100,
}

// 匿名定义
function draw(circle: Colorful & Circle) {
  console.log(circle.color)
  console.log(circle.radius)
}

draw({
  color: 'red',
  radius: 100,
})

draw({
  color: 'green',
  rdaius: 100, // 拼写错误会检查出来
})
 */
