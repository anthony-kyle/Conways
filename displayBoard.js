function displayBoard (board) {
  // eslint-disable-next-line no-console
  const char = String.fromCharCode(9600);
  let output = '';
  board.forEach((row, r) => {
    board[r].forEach((col, c) => {

      if (col === true){
        output += ' ' + char;
      } else {
        output += '  ';
      }
    })
    output += '\n';
  })
  console.log(output);
}

module.exports = displayBoard
