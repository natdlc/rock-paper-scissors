let playerSelection, computerSelection;
let playerScore = 0;
let computerScore = 0;
let drawCounter = 0;
let gameStatus = 'active';

//generate random computer selection
function computerPlay() {
    let randomNum = Math.floor(Math.random() * 3);
    return randomNum === 0 ? 'rock' :
    randomNum === 1 ? 'paper' :
    'scissors';
}

//return winner or loser of round, determine if game ends
function roundPlay(playerSelection, computerSelection) {
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
        gameStatus = 'end';
        return;
    }
}

//prompt user selection, 
function game() {
    checkPlayerPrompt();
    computerSelection = computerPlay();
    let result = roundPlay(playerSelection, computerSelection);
    console.log(result);
    return result.includes('Win') ? playerScore++ :
        result.includes('Lose') ? computerScore++ : 
        result.includes('Game') ? result : drawCounter++;
}

function checkPlayerPrompt() {
    playerSelection = prompt('Rock, paper, or scissors?');
    if (typeof(playerSelection) === typeof('.')) {
        playerSelection = playerSelection.toLowerCase();
        if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors') {
            return;
        }
        else {
            if (confirm('Invalid selection, try again?')) {
                gameStatus = 'active';
                checkPlayerPrompt();
            }
            else {
                alert('You\'ve exited the game');
                gameStatus = 'end';
                return;
            }
        }
    }
    else if (playerSelection === null || playerSelection === undefined || playerSelection === '') {
        if (confirm('Invalid selection, try again?')) {
            gameStatus = 'active';
            checkPlayerPrompt();
        }
        else {
            alert('You\'ve exited the game');
            gameStatus = 'end';
            return;
        }
    }
    else {
        playerSelection = playerSelection.toLowerCase();
        return;
    }
}

if (gameStatus === 'active') {
    for (let i = 0; i < 5; i++) {
        game();
        if (gameStatus === 'end') {
            i = 5;
        }
        else if (i === 4) {
            console.log(`Player's score: ${playerScore}`);
            console.log(`Computer's score: ${computerScore}`);
            console.log(`Draw rounds: ${drawCounter}`);
            if (playerScore > computerScore) { console.log('PLAYER WINS') }
            else if (playerScore === computerScore) { console.log('DRAW!') }
            else if (computerScore > playerScore) { console.log('COMPUTER WINS') }
            else { console.log('DRAW!') }
        };
    };
}