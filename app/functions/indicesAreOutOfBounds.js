/******************************************************************************
 * App:       Conway's Game of Life
 * Filename:  app/functions/indicesAreOutOfBounds.js
 * Purpose:   Function to ascertain if the provided cell coordinates, exist
 *            within the current board.
 * Author:    Anthony McGrath - akm@anthonykyle.co.nz
 *****************************************************************************/

// Require Functions
const isOutOfBounds = require('./isOutOfBounds')

// Receive cell coordinates and the current board, check if is in bounds
function indicesAreOutOfBounds (rowIndex, columnIndex, array) {
  return (isOutOfBounds(rowIndex, array) ||
            isOutOfBounds(columnIndex, array))
}

// Export Function
module.exports = indicesAreOutOfBounds
