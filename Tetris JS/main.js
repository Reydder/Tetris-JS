import './style.css'

const BLOCK_SIZE = 20
const BOARD_WIDTH = BLOCK_SIZE * 10
const BOARD_HEIGHT = BLOCK_SIZE * 20

const canvas = document.getElementsByTagName("canvas").item(0)
const ctx = canvas.getContext("2d")

ctx.canvas.width = BOARD_WIDTH
ctx.canvas.height = BOARD_HEIGHT

const BOARD = [
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
]

function draw() {
  ctx.fillStyle = '#FFF'
  ctx.fillRect(0, 0, BOARD_WIDTH, BOARD_HEIGHT)

  ctx.fillStyle = '#000'

  BOARD.forEach((row, y) => {
    row.forEach((value, x) => {
      if (value == 1) {
        ctx.fillRect(x * BLOCK_SIZE, y * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE)
      }
    })
  })
}

draw()
