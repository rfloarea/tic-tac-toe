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

const gameController = (function() {
    let turnCounter = 1;
    const updateTextContent = (e) => {
        if (turnCounter % 2 !== 0) {
            turnCounter++;
            return e.target.textContent = "X";
        } else {
            turnCounter++;
            return e.target.textContent = "O";
        }
    };
    return{updateTextContent}
})();

cell1.addEventListener("click", (e) => gameController.updateTextContent(e));
cell2.addEventListener("click", (e) => gameController.updateTextContent(e));
cell3.addEventListener("click", (e) => gameController.updateTextContent(e));
cell4.addEventListener("click", (e) => gameController.updateTextContent(e));
cell5.addEventListener("click", (e) => gameController.updateTextContent(e));
cell6.addEventListener("click", (e) => gameController.updateTextContent(e));
cell7.addEventListener("click", (e) => gameController.updateTextContent(e));
cell8.addEventListener("click", (e) => gameController.updateTextContent(e));
cell9.addEventListener("click", (e) => gameController.updateTextContent(e));










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



