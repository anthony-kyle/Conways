/******************************************************************************
 * App:       Conway's Game of Life
 * Filename:  app/functions/getNeighbours.js
 * Purpose:   Function to assess whether or not the cells surrounding the
 *            current cell are alive. Returns the count of alive neighbours.
 * Author:    Anthony McGrath - akm@anthonykyle.co.nz
 *****************************************************************************/

// Require Functions
const indicesAreOutOfBounds = require('./indicesAreOutOfBounds')

// From the current coordinate in the current board, get the alive state of the
// 8 surrounding cells if they are not out of the limits of the boards
function getNeighbours (cellRow, cellColumn, board) {
  const neighbours = []
  for (let y = cellRow - 1; y <= cellRow + 1; y++) {
    for (let x = cellColumn - 1; x <= cellColumn + 1; x++) {
      if (
        !indicesAreOutOfBounds(x, y, board) &&
        !(x === cellColumn && y === cellRow)
      ) {
        neighbours.push(board[y][x])
      }
    }
  }
  return neighbours
}

// Export Function
module.exports = getNeighbours
