class Snake {
  // 表示蛇头的元素
  head: HTMLElement
  // 蛇的身体（包括蛇头）
  bodies: HTMLCollection
  // 获取蛇的容器
  element: HTMLElement

  constructor() {
    this.element = document.getElementById('snake')!
    // querySelector返回的是Element类型，需要断言改成HTMLElement
    this.head = document.querySelector('#snake > div') as HTMLElement
    this.bodies = this.element.getElementsByTagName('div')
  }

  // 获取蛇的坐标（蛇头坐标）
  get X() {
    return this.head.offsetLeft
  }

  // 获取蛇的Y轴坐标
  get Y() {
    return this.head.offsetTop
  }

  // 设置蛇头的坐标
  set X(value) {
    // 如果新值和旧值相同，则直接返回不再修改
    if (this.X === value) {
      return
    }

    // X的值的合法范围0-290之间
    if (value < 0 || value > 290) {
      // 进入判断说明蛇撞墙了
      throw new Error('蛇撞墙了！')
    }

    // 如果修改了X，判断是否有第二节身体（没有的话可以掉头）
    // 例：向左移动时，蛇头X坐标100，第二节身体X坐标110，此时向右掉头，X+=10，即value为110
    // 此时第二节身体X坐标与value值相同，说明用户发生了掉头动作
    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
      // 如果新值value大于旧值X，则说明用户想向右走
      if (value > this.X) {
        // 应将value改为100-10=90，使蛇继续向左移动
        value = this.X - 10
        // 如果新值value小于旧值X，则说明用户想向左走
      } else {
        // 应将value改为100+10=110，使蛇继续向右移动
        value = this.X + 10
      }
    }

    // 移动身体
    this.moveBody()

    this.head.style.left = value + 'px'
    // 检查有没有撞到自己
    this.checkHeadBody()
  }

  set Y(value) {
    // 如果新值和旧值相同，则直接返回不再修改
    if (this.Y === value) {
      return
    }

    // Y的值的合法范围0-290之间
    if (value < 0 || value > 290) {
      // 进入判断说明蛇撞墙了，抛出一个异常
      throw new Error('蛇撞墙了！')
    }

    // 如果修改了Y，判断是否有第二节身体（没有的话可以掉头）
    // 例：向下移动时，蛇头Y坐标100，第二节身体Y坐标110，此时向上掉头，Y+=10，即value为110
    // 此时第二节身体Y坐标与value值相同，说明用户发生了掉头动作
    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
      // 如果新值value大于旧值Y，则说明用户想向上走
      if (value > this.Y) {
        // 应将value改为100-10=90，使蛇继续向下移动
        value = this.Y - 10
        // 如果新值value小于旧值Y，则说明用户想向下走
      } else {
        // 应将value改为100+10=110，使蛇继续向上移动
        value = this.Y + 10
      }
    }

    // 移动身体
    this.moveBody()
    this.head.style.top = value + 'px'
    // 检查有没有撞到自己
    this.checkHeadBody()
  }

  // 蛇增加身体的方法
  addBody() {
    // 向element中添加一个div
    this.element.insertAdjacentHTML('beforeend', '<div></div>')
  }

  // 添加一个蛇身体移动的方法
  moveBody() {
    // 将后边的身体设置为前边身体的位置（从后往前设置）
    // 第4节 = 第3节的位置、第3节 = 第2节的位置、第2节 = 蛇头的位置
    // 遍历获取所有的身体
    for (let i = this.bodies.length - 1; i > 0; i--) {
      // 获取前边身体的位置
      let X = (this.bodies[i - 1] as HTMLElement).offsetLeft
      let Y = (this.bodies[i - 1] as HTMLElement).offsetTop

      // 将值设置到当前身体上
      ;(this.bodies[i] as HTMLElement).style.left = X + 'px'
      ;(this.bodies[i] as HTMLElement).style.top = Y + 'px'
    }
  }

  // 检查蛇头是否撞到身体的方法
  checkHeadBody() {
    // 获取所有的身体，检查其是否和蛇头的坐标发生重叠
    for (let i = 1; i < this.bodies.length; i++) {
      let bd = this.bodies[i] as HTMLElement
      if (this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
        // 进入判断说明蛇头撞到了身体，游戏结束
        throw new Error('撞到自己了！')
      }
    }
  }
}

export default Snake
