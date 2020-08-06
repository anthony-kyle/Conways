function createBoard (size, width) {
    let board = Array(size).fill('');
    board.forEach((row, r) => {
        if (width){
            board[r] = Array(size*width).fill(false);
        } else {
            board[r] = Array(size).fill(false);
        }
        
    })
    return board;
}

module.exports = createBoard
