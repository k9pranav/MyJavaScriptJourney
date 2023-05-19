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
            return 'Computer Won!'
        }

        else if (computerSelection == 'Scissors') {
            return "Player Won!"
        }

        else {
            return "It's a Tie!"
        }

    }

    //Case 2. Player Chooses Paper
    else if (playerSelection.toLowerCase() == 'paper'){
        
        if (computerSelection == 'Scissors') {
            return 'Computer Won!'
        }

        else if (computerSelection == 'Rock') {
            return "Player Won!"
        }

        else {
            return "It's a Tie!"
        }

    }

    //Case 3. Player Chooses Scissors
    else if (playerSelection.toLowerCase() == 'scissors'){
        
        if (computerSelection == 'Rock') {
            return 'Computer Won!'
        }

        else if (computerSelection == 'Paper') {
            return "Player Won!"
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

let playerSelection = prompt('Rock, paper or scissors?');
const computerSelection = getComputerChoice();
console.log(computerSelection)
console.log(playRound(playerSelection, computerSelection))









