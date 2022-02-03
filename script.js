let playerSelection, computerSelection;
let playerScore = 0;
let computerScore = 0;
let drawCounter = 0;

function computerPlay() {
    let randomNum = Math.floor(Math.random() * 3);
    return randomNum === 0 ? 'rock' :
    randomNum === 1 ? 'paper' :
    'scissors';
}

function roundPlay(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === 'rock') {
        return computerSelection === 'paper' ? 
                'You Lose! Paper beats Rock' :
                computerSelection === 'scissors' ? 
                'You Win! Rock beats Scissors' : 'Draw! You\'re both Rock.' 
    }

    else if (playerSelection === 'paper') {
        return computerSelection === 'rock' ? 
                'You Win! Paper beats Rock' :
                computerSelection === 'scissors' ?
                'You Lose! Scissors beats Paper' : 'Draw! You\'re both Paper.'
    }

    else if (playerSelection === 'scissors') {
        return computerSelection === 'rock' ?
                'You Lose! Rock beats Scissors' :
                computerSelection === 'paper' ?
                'You Win! Scissors beats Paper' : 'Draw! You\'re both Scissors.'
    }

    else {
        console.log('Invalid entry, please try again.');
    }
}

function game() {
    computerSelection = computerPlay();
    let result = roundPlay(playerSelection, computerSelection);
    console.log(result);

    return result.includes('Win') ? playerScore++ :
        result.includes('Lose') ? computerScore++ : drawCounter++;
}


for (let i = 0; i < 5; i++) {
    playerSelection = prompt('Rock, paper, or scissors?');
    if (playerSelection === null || playerSelection === undefined) {
        console.log(playerSelection);
        i = 0;
    }
    game();
    if (i === 4) {

        console.log(`Player's score: ${playerScore}`);
        console.log(`Computer's score: ${computerScore}`);
        console.log(`Draw rounds: ${drawCounter}`);

        if (playerScore > computerScore) { console.log('PLAYER WINS') }
        else if (playerScore === computerScore) { console.log('DRAW!') }
        else if (computerScore > playerScore) { console.log('COMPUTER WINS') }
        else { console.log('DRAW!') }
    };
};