class Rectangle {
  static items = []

  height = 100
  width = 100

  constructor (top = 0, left = 0, directionX = 'right', directionY = 'bottom', color = 'red') {
    this.top = top
    this.left = left
    this.directionX = directionX
    this.directionY = directionY
    this.color = color
    Rectangle.items.push(this)
  }

  get right() {
    return this.left + this.width
  }

  get bottom() {
    return this.top + this.height
  }

  move() {
    if (this.directionY === 'bottom') {
      this.top += 1

      if (this.isCollisionBottom()) {
        this.directionY = 'top'
      }
    } else if (this.directionY === 'top') {
      this.top -= 1

      if (this.isCollisionTop()) {
        this.directionY = 'bottom'
      }
    }

    if (this.directionX === 'right') {
      this.left += 1

      if (this.isCollisionRight()) {
        this.directionX = 'left'
      }
    } else if (this.directionX === 'left') {
      this.left -= 1

      if (this.isCollisionLeft()) {
        this.directionX = 'right'
      }
    }
  }

  isCollisionRight() {
    return Rectangle.items
      .filter(item => this !== item)
      .some(item => this.right > item.left && this.right < item.left + 20 && this.top < item.bottom && this.bottom > item.top)
      || this.right >= window.innerWidth
  }

  isCollisionLeft() {
    return Rectangle.items
      .filter(item => this !== item)
      .some(item => this.left < item.right && this.left > item.right - 20 && this.top < item.bottom && this.bottom > item.top)
      || this.left <= 0
  }

  isCollisionTop() {
    return Rectangle.items
      .filter(item => this !== item)
      .some(item => this.top < item.bottom && this.top > item.bottom - 20 && this.right > item.left && this.left < item.right)
      || this.top <= 0
  }

  isCollisionBottom() {
    return Rectangle.items
      .filter(item => this !== item)
      .some(item => this.bottom > item.top && this.bottom < item.top + 20 && this.right > item.left && this.left < item.right)
      || this.bottom >= window.innerHeight
  }
}
