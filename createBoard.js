function createBoard (size) {
    let board = Array(size).fill('');
    board.forEach((row, r) => {
        board[r] = Array(size).fill(false);
    })
    return board;
}

module.exports = createBoard
