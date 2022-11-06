// Game container
const gameContainer = document.querySelector("#gameContainer");
// Cell container
const cellContainer = document.querySelector("#cellContainer");
// Cell box
let cells = document.querySelectorAll("#cell");
// Status of the game
let gameStatus = document.getElementById("#gameStatus");
// Restart Button
const restartButton = document.getElementById("restart");
// Try again Button
const tryButton = document.getElementById("try-again")
// Enter button
let enterButton = document.getElementById("Enter")


let player = document.getElementById('player'); //input div
// First player
const player1 = document.querySelector(".p1"); //input for player 1
//Second Player 
const player2 = document.querySelector(".p2"); //input for player 2
// name display
const nameDisplay = document.getElementById("name-display")

let welcome = document.getElementById('welcome-image')
//class for each
// const cell0 = document.getElementsByClassName("cell0")
// const cell1 = document.getElementsByClassName("cell1")
// const cell2 = document.getElementsByClassName("cell2")
// const cell3 = document.getElementsByClassName("cell3")
// const cell4 = document.getElementsByClassName("cell4")
// const cell5 = document.getElementsByClassName("cell5")
// const cell6 = document.getElementsByClassName("cell6")
// const cell7 = document.getElementsByClassName("cell7")
// const cell8 = document.getElementsByClassName("cell8")


//Winning condition is only when this are met
const win = [
    [0, 1, 2], //first row
    [0, 3, 6], //first column
    [0, 4, 8], //diagonal left
    [1, 4, 7], //second column
    [3, 4, 5], //second row
    [2, 5, 8], //last column
    [2, 4, 6], //diagonal right
    [6, 7, 8]  //last row
]

//Empty cells
let options = ["", "", "", "", "", "", "", "", ""];


// Players
class Player {
    constructor(name, value, active) {
        this.name = name;
        this.value = value;
        this.active = active;
    }
}


const firstPlayer = new Player(player1.value, "X", true)
const secondPlayer = new Player(player2.value, "O", false)

// first page

player.style.display = 'none'


function welcomePage() {
    player.style.display = 'flex'
    player.style.justifyContent = 'center'
    welcome.classList.add('hide') // when we start
}

console.log(player1, player2)
// gameContainer.classList.add('hide')
function inputValue() {

    if (player1.value !== '' && player2.value !== '') {
    
        player.style.display = 'none'
        gameContainer.classList.remove('hide') // to add it back when we start the game
        nameDisplay.innerText = `Welcome to my Tic-Tac-Toe Player ${player1.value.toUpperCase()} and Player ${player2.value.toUpperCase()}`

    } else if (player1.value === '' && player2.value === '') {
        alert("Please enter name")
    } else if (player2.value === '') {
        alert("Please Player 2 add your name")
    } else {
        alert("Please player 1 add your name")
    }

    // console.log(player1 , player2, 'input')
    //  nameDisplay.value = player1.textContent

}




// The following code limits the amount of time we can click inside one cell
startGame()
function startGame() {
    cells.forEach(cell => {
        cell.addEventListener('click', takeTurn, { once: true })
    })

}



//This foreach function lets us know that we are clicking inside the cells
//It adds the X and O when clicked in the cells
function takeTurn(evt) {

    if (cells = evt.target) {

        if (firstPlayer.active === true) {
            cells.innerText = firstPlayer.value;
            cells.style.backgroundColor = "black"
            cells.style.color = 'white'
            console.log()
            changePlayer()
        } else if (secondPlayer.active === true) {
            cells.innerText = secondPlayer.value
            cells.style.backgroundColor = "white"
            cells.style.color = "black"
            changePlayer()

        }
        console.log(cells.getAttribute("cell"))


        // this logic will start replacing the option empty strings with the clicked innerText
        for (let i = 0; i < options.length; i++) {
            if (i == cells.getAttribute("cell")) {
                console.log(cells.textContent)
                options[i] = cells.innerText
            }
        }
        console.log(options)
        winner()
        draw()
    }
}

// draw()
// This will allow us to take turn between first player and second player
function changePlayer() {

    if (firstPlayer.active === true) {
        firstPlayer.active = false;
        secondPlayer.active = true;

    } else {
        secondPlayer.active = false;
        firstPlayer.active = true;
    }

}


// console.log(cells[0].innerText)

function winner() {

    for (const combo of win) {
        let [a, b, c] = combo

        // console.log(options)
        if (options[a] === firstPlayer.value && options[b] === firstPlayer.value && options[c] === firstPlayer.value) {
            console.log(`${firstPlayer.name} Win`)
            // break;


        } else if (options[a] === secondPlayer.value && options[b] === secondPlayer.value && options[c] === secondPlayer.value) {
            console.log(`${secondPlayer.name} win!!!!`)
            // break;
        }
        else {
            // continue
            // draw()
        }
    }
}

tryAgain()
tryButton.addEventListener("click", tryAgain())

function tryAgain() {

    cells.forEach(cell => {
        cell.innerText = ""
    })
}


// Draw function
function draw() {
    const checkValue = (currentValue) => currentValue == 'X' || currentValue == 'O';

    if (options.every(checkValue)) {
    
            console.log("we got a draw")
    }
}



//This function will restart the game whenever its clicked
restartButton.addEventListener('click', (evt) => {
    window.location.reload()
})

//  ========= Player =========


// // first page
// welcome.classList.remove('hide') // when we start
// player.style.display = 'none'
// gameContainer.classList.add('hide')


// // The input page
// welcome.classList.add('hide')// to hide it (when the player is filling out their name)
// player.style.display = 'flex'


// //The Game page
// player.style.display = "none"
// gameContainer.classList.remove('hide') // to add it back when we start the game