
// event handlers
const gameboardUI = document.querySelector('.gameboard');
const cell1 = gameboardUI.querySelector('#cell1');
const cell2 = gameboardUI.querySelector('#cell2');
const cell3 = gameboardUI.querySelector('#cell3');
const cell4 = gameboardUI.querySelector('#cell4');
const cell5 = gameboardUI.querySelector('#cell5');
const cell6 = gameboardUI.querySelector('#cell6');
const cell7 = gameboardUI.querySelector('#cell7');
const cell8 = gameboardUI.querySelector('#cell8');
const cell9 = gameboardUI.querySelector('#cell9');

cell1.addEventListener("click", )
cell2.addEventListener("click", )
cell3.addEventListener("click", )
cell4.addEventListener("click", )
cell5.addEventListener("click", )
cell6.addEventListener("click", )
cell7.addEventListener("click", )
cell8.addEventListener("click", )
cell9.addEventListener("click", )


const Cell = (function() {
    let value = 0;

    // so we can update the cell's value with the player's ... token? not sure yet
    const addToken = (player) => {
        value = player;
    };

    // need to return the value using a closure
    const getValue = () => value;

    return {
        addToken,
        getValue,
    }
})(); // Cell needs to be initialized before the call in making the game board below.

const Gameboard = (function() {
    const row = 3;
    const column = 3;
    let board = [];

    let value = 0;
    // build that board array!
    for(let i = 0; i < row; i++) {
        board[i] = [];
        for(let j = 0; j < column; j++) {
            board[i].push(Cell.getValue());
        }
    }
    console.log(board)

    // now let's write a function that we'll need to run after each player makes their move
    // it creates a new array with the updated values based on the player's move
    const printBoard = () => {
        // first we need to .map over each array object, which are the rows
        const boardWithCellValues = board.map(function(row) {
            // so that we can then dive into each row with another .map to snag the values of each "cell" in our board array
            row.map(function(cell) {
                cell.getValue(); // !! TypeError: not a function
            });
        });
        // then we print that shit
        console.log(boardWithCellValues);
    };

    return {
        printBoard,
        printBoard,
    }

})();


/* we need to write a function for `cell'
    so what is cell?
    we are using `cell` to mean "the 9 cells on the gameboard"
    each `cell` has an initial value of ".", representing it's "open" status
    a player can choose a "cell" to make their move
    this changes the value of the "cell" to the value of the player's token:
        player one's token is "X"
        player two's token is "O"
    
    summary:
    - cells are initialized to "_" (or something representing "open/available")
    - cell values change as players select them for their round move
    - 
*/























/* and then we'll need the game controller with all the fun juicy logic <3
fun stuff like: 
- how to play rounds
- which cell have been selected and which are still open
- create win conditions and check them after each round, including if there's a tie game!!

*/

    // in order for a player to choose a cell, we need to check if that cell is available (has not been chosen this round already)


