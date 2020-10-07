/******************************************************************************
 * App:       Conway's Game of Life
 * Filename:  app/functions/displayBoard.js
 * Purpose:   Function that processes the current board state and renders a
 *            graphical and colourised board
 * Author:    Anthony McGrath - akm@anthonykyle.co.nz
 *****************************************************************************/

// Require NPM Modules
const chalk = require('chalk')

// Require Internal Functions
const randColor = require('./randColor')

function displayBoard (board) {
  const char = String.fromCharCode(25500) // Use Graphical Box Character
  let output = '' // Initialise output string

  // Loop through rows and columns, and append an appropriate entry to the
  // output string for correct rendering
  board.forEach((row, r) => {
    board[r].forEach((col, c) => {
      if (col === true) {
        const color = randColor()
        output += ' ' + chalk.rgb(color.red, color.green, color.blue)(char)
      } else {
        output += '  '
      }
    })
    output += '\n'
  })

  // Write to terminal
  console.log(output)
}

// Export function
module.exports = displayBoard
