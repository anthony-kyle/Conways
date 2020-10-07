# Conway's Game of Life

## Installation

1. Clone the repository, then:

  ```sh
  cd conways
  npm install
  ```

## See it in action
To run the game open a terminal window with room for 100 rows and columns (reducing font size works well)

  ```shell
  npm start
  ```

## Run the tests
To run all the tests:

  ```shell
  npm test
  ```

  Or, you can run any single test file by replacing `tests` with the name of the file/function. For example:

  ```sh
  npm test isOverPopulated
  ```

## Learn the rules

See the rules section of [the Wikipedia article](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life#Rules). The rules are amazingly simple but with those simple rules some pretty cool complexity emerges.

Note that a rule for our system is that array indices should not _wrap around_ the edges. That means when counting a cell's neighbours that a corner cell will have only three neighbours and an edge cell will have five neighbours. The rest will have eight.
