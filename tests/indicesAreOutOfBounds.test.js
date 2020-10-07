/******************************************************************************
 * App:       Conway's Game of Life
 * Filename:  tests/indicesAreOutOfBounds.test.js
 * Purpose:   Test to verify the indicesAreOutOfBounds function
 * Author:    Anthony McGrath - akm@anthonykyle.co.nz
 *****************************************************************************/

// Require Functions
const indicesAreOutOfBounds = require('../indicesAreOutOfBounds')

// Run Test
test('indicesAreOutOfBounds', () => {
  const testArray = [1, 2, 3]
  const expecteds = {
    '-2': true,
    '-1': true,
    0: false,
    1: false,
    2: false,
    3: true,
    4: true
  }

  Object.keys(expecteds).forEach(input1 => {
    Object.keys(expecteds).forEach(input2 => {
      const expected = expecteds[input1] || expecteds[input2]
      const actual = indicesAreOutOfBounds(input1, input2, testArray)

      expect(actual).toBe(expected)
    })
  })
})
