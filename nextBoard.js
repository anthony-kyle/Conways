const nextCellState = require('./nextCellState')
const countAliveNeighbours = require('./countAliveNeighbours')

function nextBoard (currentBoard) {
  let newBoard = [...currentBoard];
  currentBoard.forEach((row, r) => {
    currentBoard[r].forEach((col, c) => {
      
      let aliveNeighbours = countAliveNeighbours(r, c, currentBoard);
      newBoard[r][c] = nextCellState(col, aliveNeighbours);
    })
  })
  return newBoard;
}

module.exports = nextBoard