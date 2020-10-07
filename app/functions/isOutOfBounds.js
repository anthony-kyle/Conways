/******************************************************************************
 * App:       Conway's Game of Life
 * Filename:  app/functions/isOutOfBounds.js
 * Purpose:   Function that validates that the provided index is a valid index.
 * Author:    Anthony McGrath - akm@anthonykyle.co.nz
 *****************************************************************************/

function isOutOfBounds (index, array) {
  // Index is less than zero, or outside the bounds of the array
  return index < 0 || index >= array.length
}

// Export Function
module.exports = isOutOfBounds
