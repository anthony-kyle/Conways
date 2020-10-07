/******************************************************************************
 * App:       Conway's Game of Life
 * Filename:  app/functions/createBoard.js
 * Purpose:   Function to generate an empty board based on the specified size.
 * Author:    Anthony McGrath - akm@anthonykyle.co.nz
 *****************************************************************************/

function createBoard (size) {
  // Create empty array of rows
  const board = Array(size).fill('')

  // In each row, create an array of columns with a false value.
  board.forEach((row, r) => {
    board[r] = Array(size).fill(false)
  })

  // Return generated 2D array of Rows and Columns.
  return board
}

// Export Function
module.exports = createBoard
