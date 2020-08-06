const indicesAreOutOfBounds = require('./indicesAreOutOfBounds')

function getNeighbours (cellRow, cellColumn, board) {
    let count = 0;
    let value = 0;
    for(let y = cellRow-1; y <= cellRow+1; y++){
        for(let x = cellColumn-1; x <= cellColumn+1; x++){
            // console.log(x,y)
            if(!indicesAreOutOfBounds(x, y, board) && !(x === cellColumn && y === cellRow)){
                count++
                value += board[y][x];
            }
        }
    }
    console.log(count)
    console.log(value)
    return [count, value];
}

module.exports = getNeighbours
