// Game container
const gameContainer = document.querySelector("#gameContainer")
// Cell container
const cellContainer = document.querySelector("#cellContainer")
// Cell box
const cells = document.querySelectorAll("#cell")
// Status of the game
const gameStatus = document.getElementById("#gameStatus")
// Restart Button
const restartButton = document.getElementById("restart")
// First player
const player1 = document.getElementsByClassName("p1")
//Second Player 
const player2 = document.getElementsByClassName("p2")
// Name
const p1 = document.getElementById("name1")
const p2 = document.getElementById("name2")

const win = [
    [0,1,2], //first row
    [0,3,6], //first column
    [0,4,8], //diagonal left
    [1,4,7], //second column
    [3,4,5], //second row
    [2,5,8], //last column
    [2,4,6], //diagonal right
    [6,7,8]  //last row
]

const p1Value = "X";
const p2Value = "O";


// cells.forEach() => cells.addEventListner

// document.addEventListener('click', function( event ) {
//   if (cells = event.target && cells.contains(event.target)) {    
//     console.log('clicking outside the div');
//   }
// });


const addComputerMove = () => {
    do {
      selected = Math.floor(Math.random() * 9);
    } while (play_board[selected] != "");
    play_board[selected] = computer;
    render_board();
  };
