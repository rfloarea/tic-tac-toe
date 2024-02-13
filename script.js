// step one: set up our Gameboard object

const Gameboard = (function() {
    const row = 3;
    const column = 3;
    let board = [];

    let value = 0;
    // build that board array!
    for(let i = 0; i < row; i++) {
        board[i] = [];
        for(let j = 0; j < column; j++) {
            board[i][j] = value++;
        }
    }
    console.table(board) // it works!!

})();