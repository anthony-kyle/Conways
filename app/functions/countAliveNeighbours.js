/******************************************************************************
 * App:       Conway's Game of Life
 * Filename:  app/functions/countAliveNeighbours.js
 * Purpose:   Function to assess whether or not the cells surrounding the
 *            current cell are alive. Returns the count of alive neighbours.
 *****************************************************************************/

// Require getNeighbours function
const getNeighbours = require('./getNeighbours')

// Using the current cell coordinates and board state, filter the neighbouring
// cells based on if they are alive (true)
function countAliveNeighbours (cellRow, cellColumn, board) {
  let neighbours = getNeighbours(cellRow, cellColumn, board)
  neighbours = neighbours.filter(neighbour => { return neighbour === true })
  return neighbours.length
}

// Export function for use
module.exports = countAliveNeighbours
