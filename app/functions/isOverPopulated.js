/******************************************************************************
 * App:       Conway's Game of Life
 * Filename:  app/functions/isOverPopulated.js
 * Purpose:   Function to validate if the current cell is in an overpopulated
 *            cluster
 * Author:    Anthony McGrath - akm@anthonykyle.co.nz
 *****************************************************************************/

function isOverPopulated (neighbourCount) {
  return neighbourCount > 3
}

// Export Function
module.exports = isOverPopulated
