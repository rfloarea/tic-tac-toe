// step one: set up our Gameboard object

/*
** The Gameboard represents the state of the board
** Each square holds a Space (defined later)
** and we expose a selectCell method to be able to add Spaces to squares
*/

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
    console.log(board) // it works!!

    // now let's write a function that we'll need to run after each player makes their move
    const printBoard = () => {
        // first we need to .map over each array object, which are the rows
        const boardWithSpaceValues = board.map(function(row) {
            // so that we can then dive into each row with another .map to snag the values of each "space" in our board array
            row.map(function(space) {
                space.getValue(); // TypeError: is not a function
            });
        });
        // then we print that shit
        console.log(boardWithSpaceValues);
    };

    return {
        printBoard,
    }

})();


/* and then we'll need the game controller with all the fun juicy logic <3
fun stuff like: 
- how to play rounds
- which space have been selected and which are still open
- create win conditions and check them after each round, including if there's a tie game!!

*/

    // in order for a player to choose a Space, we need to check if that Space is available (has not been chosen this round already)


