const indicesAreOutOfBounds = require('./indicesAreOutOfBounds')

function getNeighbours (cellRow, cellColumn, board) {
    let neighbours = [];
    for(let y = cellRow-1; y <= cellRow+1; y++){
        for(let x = cellColumn-1; x <= cellColumn+1; x++){
            if(!indicesAreOutOfBounds(x, y, board) && !(x === cellColumn && y === cellRow)){
                
                neighbours.push(board[y][x]);
            }
        }
    }
    return neighbours;
}

module.exports = getNeighbours
