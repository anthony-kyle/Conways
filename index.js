const createBoard = require('./createBoard')
const nextBoard = require('./nextBoard');
const displayBoard = require('./displayBoard');
const clear = require('clear');

const size = 150
const refreshInterval = 500;



let board = createBoard(size, 2);
board.forEach((row,r) => {
  board[r].forEach((col, c) => {
    board[r][c] = Math.random() > 0.9;  
  })
  
})

setInterval(() => {
  clear();
  displayBoard(board)
  board = nextBoard(board)
}, refreshInterval)

// let count = 0;
// let output = ''
// for (let i = 0; i < 100; i++){
//   if (count === 9) count = 0;
//   output += count++;
// }
// console.log(output);