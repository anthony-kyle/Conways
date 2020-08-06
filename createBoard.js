function createBoard (size) {
    let board = Array(size).fill('');
    board.forEach((row, r) => {
        board[r] = Array(size).fill('');
    })
    return board;
}

module.exports = createBoard
