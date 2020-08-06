const isOverPopulated = require('./isOverPopulated')
const isUnderPopulated = require('./isUnderPopulated')
const isRessurectable = require('./isRessurectable')

function nextCellState (cellState, neighbourCount) {
   if (isUnderPopulated(neighbourCount)){
     return false;
   } else if (isRessurectable(neighbourCount)){
     return true;
   } else if (isOverPopulated(neighbourCount)){
     return false;
   } else {
     return cellState;
   }
}

module.exports = nextCellState
