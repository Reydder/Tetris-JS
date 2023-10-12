import './style.css'

const BLOCK_SIZE = 20
const BOARD_WIDTH = BLOCK_SIZE * 10
const BOARD_HEIGHT = BLOCK_SIZE * 20

const canvas = document.getElementsByTagName("canvas").item(0)
const ctx = canvas.getContext("2d")

ctx.canvas.width = BOARD_WIDTH
ctx.canvas.height = BOARD_HEIGHT

var piece = {
  x: 4,
  y: 0,
  shape: [
    [0, 1],
    [0, 1],
    [1, 1]
  ]
}

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

var timeFromLastUpdate = Date.now()

function loop() {
  window.requestAnimationFrame(draw)

  document.addEventListener('keydown', (event) => {
    switch (event.key) {
      case 'ArrowLeft':
        piece.x--
        if (isGoingToCollide()) {
          piece.x++
        }
        break
      case 'ArrowRight':
        piece.x++
        if (isGoingToCollide()) {
          piece.x--
        }
        break
      case 'ArrowDown':
        pieceFallDown()
        break
    }
  })
}

function draw() {
  ctx.fillStyle = '#FFF'
  ctx.fillRect(0, 0, BOARD_WIDTH, BOARD_HEIGHT)

  BOARD.forEach((row, y) => {
    row.forEach((value, x) => {
      if (value == 1) {
        paintBlock(x, y, '#000')
      }
    })
  })

  autoFallDown()
  paintCurrentPiece()

  window.requestAnimationFrame(draw)
}

function paintCurrentPiece() {
  piece.shape.forEach((row, y) => {
    row.forEach((value, x) => {
      if (value == 1) {
        paintBlock(x + piece.x, y + piece.y, 'red')
      }
    })
  })
}

function paintBlock(x, y, color) {
  ctx.fillStyle = color
  ctx.fillRect(x * BLOCK_SIZE, y * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE)
}

function isGoingToCollide() {
  var goingToCollide = false

  piece.shape.forEach((row, y) => {
    row.forEach((value, x) => {
      const xBoardCoordinate = x + piece.x
      const yBoardCoordinate = y + piece.y
      
      if (value = 1) {
        if (BOARD[yBoardCoordinate] == undefined ||
            BOARD[yBoardCoordinate][xBoardCoordinate] == undefined ||
            BOARD[yBoardCoordinate][xBoardCoordinate] == 1) {
          goingToCollide = true
        }
      }
    })
  })

  return goingToCollide
}

function spawnPiece() {
  piece = {
    x: 4,
    y: 0,
    shape: [
      [0, 1],
      [0, 1],
      [1, 1]
    ]
  }
}

function solidifyCurrentPiece() {
  piece.shape.forEach((row, y) => {
    row.forEach((value, x) => {
      const xBoardCoordinate = x + piece.x
      const yBoardCoordinate = y + piece.y
      
      if (value == 1) {
        BOARD[yBoardCoordinate][xBoardCoordinate] = 1
        console.log("Block painted")
      }
    })
  })
}

function rempoveCompletedLines() {
  var linesToRemove = []
  BOARD.forEach((row, y) => {
    if (!row.includes(0)) {
      linesToRemove.push(y)
    }
  })

  linesToRemove.forEach((value, _) => {
    BOARD.splice(value, 1)
    BOARD.splice(0,0,[0,0,0,0,0,0,0,0,0,0])
  })
}

function autoFallDown() {
  var updatedTime = Date.now()

  const timeElapsed = updatedTime - timeFromLastUpdate

  if (timeElapsed >= 1000) {
    pieceFallDown()
    timeFromLastUpdate = updatedTime
  }
}

function pieceFallDown() {
  piece.y++
  if (isGoingToCollide()) {
    piece.y--
    solidifyCurrentPiece()
    rempoveCompletedLines()
    spawnPiece()
  }
}

loop()
