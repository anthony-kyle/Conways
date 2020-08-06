const getNeighbours = require('./getNeighbours')

function countAliveNeighbours (cellRow, cellColumn, board) {
  let neighbours = getNeighbours(cellRow, cellColumn, board);
  neighbours = neighbours.filter(neighbour => { return neighbour === true; });
  return neighbours.length
}

module.exports = countAliveNeighbours
