/******************************************************************************
 * App:       Conway's Game of Life
 * Filename:  app/functions/isUnderPopulated.js
 * Purpose:   Function to assess whether the cell is in an underpopulated
 *            cluster
 * Author:    Anthony McGrath - akm@anthonykyle.co.nz
 *****************************************************************************/

function isUnderPopulated (neighbourCount) {
  return neighbourCount < 2
}

// Export Function
module.exports = isUnderPopulated
