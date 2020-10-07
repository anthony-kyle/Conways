/******************************************************************************
 * App:       Conway's Game of Life
 * Filename:  app/functions/nextBoard.js
 * Purpose:   Function to assess whether or not the cells surrounding the
 *            current cell are alive. Returns the count of alive neighbours.
 * Author:    Anthony McGrath - akm@anthonykyle.co.nz
 *****************************************************************************/

// Require Functions
const nextCellState = require('./nextCellState')
const countAliveNeighbours = require('./countAliveNeighbours')

// Take the current state of the board, and generate next generation of life.
function nextBoard (currentBoard) {
  const newBoard = [...currentBoard]
  currentBoard.forEach((row, r) => {
    currentBoard[r].forEach((col, c) => {
      const aliveNeighbours = countAliveNeighbours(r, c, currentBoard)
      newBoard[r][c] = nextCellState(col, aliveNeighbours)
    })
  })
  return newBoard
}

// Export Function
module.exports = nextBoard
