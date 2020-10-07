/******************************************************************************
 * App:       Conway's Game of Life
 * Filename:  tests/nextCellState.test.js
 * Purpose:   Test to verify the nextCellState function
 * Author:    Anthony McGrath - akm@anthonykyle.co.nz
 *****************************************************************************/

// Require Functions
const nextCellState = require('../nextCellState')

// Run Test
test('nextCellState', () => {
  expect(nextCellState(true, 2)).toBeTruthy()
  expect(nextCellState(true, 3)).toBeTruthy()
  expect(nextCellState(true, 4)).toBeFalsy()
  expect(nextCellState(true, 1)).toBeFalsy()
  expect(nextCellState(false, 3)).toBeTruthy()
})
