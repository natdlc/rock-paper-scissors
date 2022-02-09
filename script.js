let playerSelection, computerSelection;
let playerScore = 0;
let computerScore = 0;
let drawCounter = 0;
let gameStatus = '';

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
        gameStatus = '';
        return;
    }
}

const buttons = document.querySelectorAll('button.btn');
buttons.forEach(button => button.addEventListener('click',game));

//prompt user selection, 
function game() {
    reset.classList.remove('reset-btn-off');
    if (this.textContent.toLowerCase() === 'rock') playerSelection = 'rock';
    else if (this.textContent.toLowerCase() === 'paper') playerSelection = 'paper';
    else if (this.textContent.toLowerCase() === 'scissors') playerSelection = 'scissors';
    
    gameStatus = 'active';
    
    computerSelection = computerPlay();
    
    const playerSelectionText = document.querySelector('.player-selection');
    const computerSelectionText = document.querySelector('.computer-selection');
    playerSelectionText.textContent = `You are ${playerSelection.toUpperCase()}`;
    computerSelectionText.textContent = `Computer is ${computerSelection.toUpperCase()}`;
    
    let result = roundPlay(playerSelection, computerSelection);

    const roundResultText = document.querySelector('.round-result-text'); 
    roundResultText.textContent = result;

    result.includes('Win') ? playerScore++ :
        result.includes('Lose') ? computerScore++ : 
        result.includes('Game') ? result : drawCounter++;
    
    const playerScoreText = document.querySelector('.player-score');
    const computerScoreText = document.querySelector('.computer-score');
    const gameWinnerText = document.querySelector('.game-winner');

    playerScoreText.textContent = `Player's score: ${playerScore}`;
    computerScoreText.textContent = `Computer's score: ${computerScore}`;

    if(gameStatus) mainSection.appendChild(reset);

    reset.addEventListener('click',() => {
        playerScoreText.textContent = '';
        computerScoreText.textContent = ''
        roundResultText.textContent = '';
        playerSelectionText.textContent = '';
        computerSelectionText.textContent = '';
        playerScore = computerScore = drawCounter = 0;
        playerSelection = '';
        computerSelection = '';
        reset.classList.add('reset-btn-off');
    })

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

const mainSection = document.querySelector('main');

let reset = document.createElement('button');
reset.classList.add('reset-btn');
reset.textContent = 'RESET'

function resetGame() {

}