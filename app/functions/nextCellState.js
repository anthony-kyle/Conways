/******************************************************************************
 * App:       Conway's Game of Life
 * Filename:  app/functions/nextCellState.js
 * Purpose:   Function to determine the state of life of the current cell
 *            in the next generation
 * Author:    Anthony McGrath - akm@anthonykyle.co.nz
 *****************************************************************************/

// Require Functions
const isOverPopulated = require('./isOverPopulated')
const isUnderPopulated = require('./isUnderPopulated')
const isRessurectable = require('./isRessurectable')

// Determine whether the cell is over or under populated, and if so kill them
// If ressurectable bring to life
// Else return existing state of life.
function nextCellState (cellState, neighbourCount) {
  if (isUnderPopulated(neighbourCount)) {
    return false
  } else if (isRessurectable(neighbourCount)) {
    return true
  } else if (isOverPopulated(neighbourCount)) {
    return false
  } else {
    return cellState
  }
}

// Export Function
module.exports = nextCellState
