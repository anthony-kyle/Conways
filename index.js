const createBoard = require('./createBoard')
const nextBoard = require('./nextBoard');
const displayBoard = require('./displayBoard');
const clear = require('clear');
const generateLife = require('./generateLife');

const size = 50
const refreshInterval = 200;



let board = createBoard(size);
board = generateLife(board);

setInterval(() => {
  clear();
  displayBoard(board)
  board = nextBoard(board)
}, refreshInterval)