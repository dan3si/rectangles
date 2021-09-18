class Game {
  rectangles = [
    new Rectangle(300, 0, 'right', 'top', 'red'),
    new Rectangle(50, 400, 'left', 'bottom', 'green'),
    new Rectangle(500, 100, 'right', 'top', 'blue'),
    new Rectangle(250, 200, 'left', 'top', 'violet'),
    new Rectangle(350, 800, 'right', 'bottom', 'pink'),
    new Rectangle(0, 100, 'left', 'bottom', 'yellow'),
    new Rectangle(200, 600, 'left', 'top', 'grey'),
  ]

  makeStep() {
    this.rectangles.forEach(rectangle => rectangle.move())
    this.render()
  }

  render() {
    document.body.innerHTML = null

    for (const { top, left, height, width, color } of this.rectangles) {
      document.body.innerHTML += `
        <div
          style="
            position: absolute;
            top: ${top}px;
            left: ${left}px;
            height: ${height}px;
            width: ${width}px;
            background-color: ${color};
          "
        ></div>
      `
    }
  }

  start() {
    setInterval(this.makeStep.bind(this), 10)
  }
}
