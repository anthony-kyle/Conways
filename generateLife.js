function generateLife(board){
    board.forEach((row,r) => {
        board[r].forEach((col, c) => {
            board[r][c] = Math.random() > 0.90;  
        })
    })
    return board;
}

module.exports = generateLife;