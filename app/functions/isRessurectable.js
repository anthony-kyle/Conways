/******************************************************************************
 * App:       Conway's Game of Life
 * Filename:  app/functions/isResurrectable.js
 * Purpose:   Function to identify if the alive neighbour count is exactly 3
 * Author:    Anthony McGrath - akm@anthonykyle.co.nz
 *****************************************************************************/

function isRessurectable (neighbourCount) {
  return neighbourCount === 3
}

// Export Function
module.exports = isRessurectable
