/******************************************************************************
 * App:       Conway's Game of Life
 * Filename:  app/functions/generateLife.js
 * Purpose:   Function to create the initial population of the board by
 *            randomly generating life based on the provided odds of life %
 * Author:    Anthony McGrath - akm@anthonykyle.co.nz
 *****************************************************************************/
function generateLife (board, odds) {
  const decimalOdds = odds / 100
  board.forEach((row, r) => {
    board[r].forEach((col, c) => {
      board[r][c] = Math.random() < decimalOdds
    })
  })
  return board
}

// Export Function
module.exports = generateLife
