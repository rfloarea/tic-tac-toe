// our event handlers
const gameboardUI = document.body.querySelector('.gameboard');
const cell1 = gameboardUI.querySelector('#cell1');
const cell2 = gameboardUI.querySelector('#cell2');
const cell3 = gameboardUI.querySelector('#cell3');
const cell4 = gameboardUI.querySelector('#cell4');
const cell5 = gameboardUI.querySelector('#cell5');
const cell6 = gameboardUI.querySelector('#cell6');
const cell7 = gameboardUI.querySelector('#cell7');
const cell8 = gameboardUI.querySelector('#cell8');
const cell9 = gameboardUI.querySelector('#cell9');


let turnCounter = 1;
cell1.addEventListener("click", (e) => {
    if(turnCounter % 2 !== 0 ){
        turnCounter++;
        return e.target.textContent = "X"
    } else {
        turnCounter++
        return e.target.textContent = "O"
    };
});
cell2.addEventListener("click", (e) => {
    if(turnCounter % 2 !== 0 ){
        turnCounter++;
        return e.target.textContent = "X"
    } else {
        turnCounter++
        return e.target.textContent = "O"
    };
});
cell3.addEventListener("click", )
cell4.addEventListener("click", )
cell5.addEventListener("click", )
cell6.addEventListener("click", )
cell7.addEventListener("click", )
cell8.addEventListener("click", )
cell9.addEventListener("click", )











// create our gameboard object

const gameboard = [ // keeping it simple af. here we have an array with three elements that are also arrays with 3 elements
    [cell1, 1, 2], // our matrix, aka gameboard
    [3, 4, 5],
    [6, 7, 8]
];

console.log(gameboard); // okay, now what? Now we need a way to manage the state of the board as players make changes



// we could write a function that listens to which cell is changed and by which player
// then "tracks" those changes in the game logic by changing the gameboard
// it will have to run checks after each change to see if there is a winner
// if there is no winner yet, then the "turn" is passed
// if there is a winner, then we have some announcement (playing a new game is handled by the "restart" button)

// this is a lot for one function to do...
// this is why people create modules!!! when we need to group a bunch of related logic together, we create "modules"



