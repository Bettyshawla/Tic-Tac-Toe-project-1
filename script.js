// Game container
const gameContainer = document.querySelector("#gameContainer");
// Cell container
const cellContainer = document.querySelector("#cellContainer");
// Cell box
let cells = document.querySelectorAll("#cell");
// Status of the game
let gameStatus = document.getElementById("gameStatus");
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
//  Welcome Page
let welcome = document.getElementById('welcome-image')
// Setting the game 
let gameOver = false

//status
const winMessage = document.getElementById("win-draw")
// win-image
const winImage = document.getElementById('win-pic')
// tie-pic
const tieImage = document.getElementById('tie')

//score
let firstPlayerScore = document.getElementById("score1")
let secondPlayerScore = document.getElementById("score2")
const totalScore = document.getElementById("total")

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
    constructor(name, value, active, score) {
        this.name = name;
        this.value = value;
        this.active = active;
        this.score = score;
    }
}

const firstPlayer = new Player(player1.value, "X", true, 0)
const secondPlayer = new Player(player2.value, "O", false, 0)


// first page

player.style.display = 'none'


function welcomePage() {
    player.style.display = 'flex'
    player.style.justifyContent = 'center'
    welcome.classList.add('hide') // when we start
}

// console.log(player1, player2)
// // gameContainer.classList.add('hide')



function inputValue() {

    if (player1.value !== '' && player2.value !== '') {
        firstPlayer.name = player1.value
        secondPlayer.name = player2.value

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
}


// tryButton.addEventListener("click", startGame)


// The following code limits the amount of time we can click inside one cell
startGame()
function startGame() {
    cells.forEach(cell => {
        cell.addEventListener('click', takeTurn, { once: true })

    })
    // takeTurn()
    // winImage.classList.add('hide')

}



//This foreach function lets us know that we are clicking inside the cells
//It adds the X and O when clicked in the cells
function takeTurn(evt) {

    if (cells = evt.target) {

        if (firstPlayer.active === true) {
            cells.innerText = firstPlayer.value;
            cells.style.backgroundColor = "black"
            cells.style.color = 'white'
            
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
            gameStatus.classList.remove('hide');
            winMessage.textContent = `Congratulation ${firstPlayer.name} wins!`
            cellContainer.style.display = "none"
            winImage.classList.remove('hide')
            tieImage.classList.add("hide")
            totalScore.classList.remove('hide')
            firstPlayer.score +=10
            firstPlayerScore.innerHTML = `${firstPlayer.name} : ${firstPlayer.score}`
            gameOver = true


        } else if (options[a] === secondPlayer.value && options[b] === secondPlayer.value && options[c] === secondPlayer.value) {
            console.log(`${secondPlayer.name} win!!!!`)
            gameStatus.classList.remove('hide')
            winMessage.textContent = `Congratulation ${secondPlayer.name} wins!`
            cellContainer.style.display = 'none'
            winImage.classList.remove("hide")
            tieImage.classList.add("hide")
            totalScore.classList.remove('hide')
            secondPlayer.score +=10
            secondPlayerScore.innerHTML = `${secondPlayer.name}: ${secondPlayer.score}`
            // break;
            gameOver = true
        } else {
            gameOver = false
        }

    }
   
}

// tryAgain()


function tryAgain() {
    // console.log(cellContainer.childNodes)
    for (let i = 0; i < cellContainer.childNodes.length; i++) {
        if (i % 2 !== 0) {
            cellContainer.childNodes[i].innerText = ""
            console.log(cellContainer.childNodes[i].style.backgroundColor)
            cellContainer.childNodes[i].style.backgroundColor = ""
            // cellContainer.childNodes[i].style.border = "black"
            console.log(cellContainer.childNodes[i].style.border)
            console.log(cellContainer.style.border)
        }
    
        winMessage.textContent = ''
        cellContainer.childNodes.forEach(cell => {
            cell.addEventListener('click', takeTurn, { once: true })
        })

        console.log(cellContainer)
    }

    if (!winImage.classList.contains("hide")) {
        winImage.classList.add("hide")
    } 
     if (!tieImage.classList.contains('hide')) {
        tieImage.classList.add("hide")
    }

    cellContainer.style.display = "block"

    cellContainer.style.display = "grid"
    for (let i = 0; i < options.length; i++) {

        options[i] = ""
        console.log(options)
    }
}


// Draw function
function draw() {
   
    if(gameOver === false){
        const checkValue = (currentValue) => currentValue == 'X' || currentValue == 'O';

        if (options.every(checkValue)) {
            gameOver = true
    
            cellContainer.style.display = 'none'
            tieImage.classList.remove('hide')
        }
        if(options.every(checkValue)){
        gameOver = false
        winner()
        }
    }
}



//This function will restart the game whenever its clicked
restartButton.addEventListener('click', (evt) => {
    window.location.reload()
})

