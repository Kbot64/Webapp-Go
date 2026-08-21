const BOARD_9BY9 = 9
const BOARD_13BY13 = 13
const BOARD_19BY19 = 19

class Board {

    
    constructor(dimension) {
        this.dimension = dimension
        this.boardArray = Array.from({length: this.dimension}, ()
    => new Array(this.dimension).fill("E"));
    }

    
    





}