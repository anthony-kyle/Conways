const chalk = require('chalk');
const randColor = require('./randColor');

function displayBoard (board) {
  // eslint-disable-next-line no-console
  const char = String.fromCharCode(9600);
  let output = '';
  board.forEach((row, r) => {
    board[r].forEach((col, c) => {

      if (col === true){
        let color = randColor();
        output += ' ' + chalk.rgb(color.red, color.green, color.blue)(char);
      } else {
        output += '  ';
      }
    })
    output += '\n';
  })
  console.log(output);
}

module.exports = displayBoard
