/******************************************************************************
 * App:       Conway's Game of Life
 * Filename:  tests/createBoard.test.js
 * Purpose:   Test to verify the createBoard function
 * Author:    Anthony McGrath - akm@anthonykyle.co.nz
 *****************************************************************************/

// Require Functions
const createBoard = require('../createBoard')

// Run Tests
test('createBoard returns boards with the correct dimensions', () => {
  for (let i = 1; i < 5; i++) {
    const board = createBoard(i)

    expect(board).toHaveLength(i)
    expect(board[0]).toHaveLength(i)
  }
})

test('each row of the returned board is a different array', () => {
  const board = createBoard(2)

  expect(board[0]).not.toBe(board[1])
})
