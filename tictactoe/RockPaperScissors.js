
//Keeps track of player and computer score

var playerScore = 0;
var computerScore = 0;

//Randomly Selects An Option for the Computer

function getComputerChoice() {
    
    const options = ["Rock", 'Paper', "Scissors"];

    let RandomPick = Math.floor(Math.random()*3)

    return options[RandomPick]


}

//Function to Decide who won

function playRound(playerSelection, computerSelection) {
    // Case 1. Player Chooses Rock
    if (playerSelection.toLowerCase() == 'rock'){
        
        if (computerSelection == 'Paper') {
            computerScore += 1;
            return ('Computer Won! Your score is ' +  playerScore + ' and computer score is ' + computerScore)
        }

        else if (computerSelection == 'Scissors') {
            playerScore += 1;
            return ("Player Won! Your score is " +  playerScore + ' and computer score is ' + computerScore)
        }

        else {
            return "It's a Tie!"
        }

    }

    //Case 2. Player Chooses Paper
    else if (playerSelection.toLowerCase() == 'paper'){
        
        if (computerSelection == 'Scissors') {
            computerScore += 1;
            return ('Computer Won! Your score is ' +  playerScore + ' and computer score is ' + computerScore)
        }

        else if (computerSelection == 'Rock') {
            playerScore += 1;
            return("Player Won! Your score is " +  playerScore + ' and computer score is ' + computerScore)
        }

        else {
            return "It's a Tie!"
        }

    }

    //Case 3. Player Chooses Scissors
    else if (playerSelection.toLowerCase() == 'scissors'){
        
        if (computerSelection == 'Rock') {
            computerScore += 1;
            return('Computer Won! Your score is ' +  playerScore + ' and computer score is ' + computerScore)
        }

        else if (computerSelection == 'Paper') {
            computerScore += 1;
            return("Player Won! Your score is " +  playerScore + ' and computer score is ' + computerScore)
        }

        else {
            return "It's a Tie!"
        }

    }

    //Case 4. Player puts something Random

    else {
        return "Invalid Input"
    }


}

playerScore = 0;
computerScore = 0;

function game() {


}

function game(){
    while (playerScore <= 5 || computerScore <= 5){
        if (playerScore == 5) {
            return "Player Won"
        }

        else if (computerScore == 5) {
            return "Computer Won"
        }

        else {
            let playerSelection = prompt('Rock, paper or scissors?');
            let computerSelection = getComputerChoice();
            console.log("The computer picked: " + computerSelection)
            console.log(playRound(playerSelection, computerSelection))
        }

    }    
}

console.log(game())










