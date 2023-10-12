import './style.css'

const canvas = document.getElementsByTagName("canvas").item(0)

function draw() {
  const ctx = canvas.getContext("2d")

  ctx.canvas.width = 300
  ctx.canvas.height = 600

  ctx.fillStyle = '#FAF'

  ctx.fillRect(0, 0, 300, 600)
}

draw()
