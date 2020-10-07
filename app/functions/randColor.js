/******************************************************************************
 * App:       Conway's Game of Life
 * Filename:  app/functions/randColor.js
 * Purpose:   Function to generate a random RGB color value
 * Author:    Anthony McGrath - akm@anthonykyle.co.nz
 *****************************************************************************/

// Generate random RGB values and create a color
function randColor () {
  const red = randNumber()
  const green = randNumber()
  const blue = randNumber()

  const color = { red: red, green: green, blue: blue }
  return color
}

// Generate a random number between 0 and 255
function randNumber () {
  return Math.ceil(Math.random() * 255)
}

// Export Function
module.exports = randColor
