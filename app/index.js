/******************************************************************************
 * App:       Conway's Game of Life
 * Filename:  app/index.js
 * Purpose:   Assimilate and handle the creation of a new board, and then
 *            running the application.
 * Author:    Anthony McGrath - akm@anthonykyle.co.nz
 *****************************************************************************/

// Require NPM Modules
const clear = require('clear')

// Require Game Functions
const createBoard = require('./functions/createBoard')
const nextBoard = require('./functions/nextBoard')
const displayBoard = require('./functions/displayBoard')
const generateLife = require('./functions/generateLife')

// Set Game Logic
const size = 100
const refreshInterval = 100
const chanceOfLife = 5 // Probability of life in % Default is 5%

// Initialise Game Board
let board = createBoard(size)
board = generateLife(board, chanceOfLife)

// Run Game of Life
setInterval(() => {
  clear()
  displayBoard(board)
  board = nextBoard(board)
}, refreshInterval)
