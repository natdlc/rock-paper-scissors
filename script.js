computerPlay();

function computerPlay() {
    let randomNum = Math.floor(Math.random() * 1) + 3;
    console.log(randomNum);
    return 'Rock';
}

function roundPlay(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            return 'You Lose! Paper beats Rock';
        }
        else if (computerSelection === 'scissors') {
            return 'You Win! Rock beats Scissors';
        }
        else if (computerSelection === 'rock') {
            return 'Draw! You\'re both Rock.';
        }
    }

    else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            return 'You Win! Paper beats Rock';
        }
        else if (computerSelection === 'scissors') {
            return 'You Lose! Scissors beats Paper';
        }
        else if (computerSelection === 'paper') {
            return 'Draw! You\'re both Paper.';
        }
    }

    else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            return 'You Lose! Rock beats Scissors';
        }
        else if (computerSelection === 'paper') {
            return 'You Win! Scissors beats Paper';
        }
        else if (computerSelection === 'scissors') {
            return 'Draw! You\'re both Scissors.';
        }
    }

    else {
        console.log('Invalid entry, please try again.');
    }
}

console.log(roundPlay('pAper', 'scissors'));