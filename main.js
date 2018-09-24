
let playerScore = 0;
let computerScore = 0;
let result;
let rounds = 5;
let displayBoard1 = document.getElementById('dBoard');
let displayBoard2 = document.getElementById('dBoard2');

function computerPlay() {

    let computerChoice = ['rock', 'paper', 'scissors'];
    let randomChoice = Math.floor(Math.random() * computerChoice.length);
    console.log(computerChoice[randomChoice] + 'jhvcxhxd')
    return computerChoice[randomChoice]

}


function userPlay() {

    displayBoard1.textContent = `Pick a weapon by click on any of the button below`;

    let playerSelection;
    let computerSelection;
    let userChoice;

    let btns = document.querySelectorAll('button');

    btns.forEach((button) => {
        button.addEventListener('click', event => {

            if (event.target.textContent === `Restart game`) {
                // console.log("Clicked, event.target.textContent");
                displayBoard1.textContent = `Game restated`;
                displayBoard2.textContent = `Starting...`;
                return restartGame();
            }
            else if (event.target.nodeName === `BUTTON`) {
                computerSelection = computerPlay();
                // console.log("Clicked", event.target.textContent);
                displayBoard1.textContent = `Your  ${event.target.textContent}  VS computer's  ${computerSelection}`;

                playerSelection = event.target.textContent;

                rounds--
            }

            result = playRound(playerSelection, computerSelection)

            if (rounds > 0) {
                if (result == "You win") {
                    playerScore++
                } else if (result == "You lose") {
                    computerScore++
                }
            }
            else if (rounds === 0) {
                if (result == "You win") {
                    playerScore++
                    document.getElementById('restartGame').disabled = true;
                } else if (result == "You lose") {
                    computerScore++
                    document.getElementById('restartGame').disabled = true;
                }
                else { document.getElementById('restartGame').disabled = true; }
            }

            else {

                btns.forEach((button) => {
                    if (button.textContent === 'Restart game') {
                        // displayBoard1.textContent = 'click the button below';
                        button.textContent = 'Start New Game';
                        
                        return;
                    }
                    else {
                        button.disabled = true;
                        document.getElementById('restartGame').disabled = false;
                        rounds = 0;
                        displayBoard1.textContent = 'New game';
                        displayBoard2.textContent = 'Starting...'
                        return;

                    }
                })
            }
            if (button.textContent === 'Start New Game') {
                restartGame()
                button.textContent = 'Restart game'
                btns.forEach((button) => {
                    button.disabled = false;
                })
            }

            score();

        })
    });

}

function playRound(playerSelection, computerSelection) {

    if (playerSelection == 'paper' && computerSelection == 'scissors') {
        console.log('You lose')
        displayBoard2.textContent = `Opps! computer's scissors cuts your paper`;
        return ('You lose');
    }
    else if (playerSelection == 'rock' && computerSelection == 'paper') {
        console.log('You lose')
        displayBoard2.textContent = `Opps! computer's paper covers your rock`;
        return ('You lose');
    }
    else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        console.log('You lose')
        displayBoard2.textContent = `Opps! computer's rock crushes your scissors`;
        return ('You lose');
    }
    else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        console.log('You win')
        displayBoard2.textContent = `Heyyyyyy! your rock crushes computers' scissors`;
        return ('You win');
    }
    else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        console.log('You win')
        displayBoard2.textContent = `Heyyyyyy! your scissors cuts computers' paper`;
        return ('You win');
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock') {
        console.log('You win')
        displayBoard2.textContent = `Heyyyyyy! your paper covers computers' rock`;
        return ('You win');
    }
    else {
        console.log('Tie');
        displayBoard2.textContent = `That was a tie`;
    }

    // retun ("You Lose! Paper beats Rock");
}



function winner() {

    if (rounds === 0) {
        if (playerScore > computerScore) {
            displayBoard1.textContent = "game over ";
            displayBoard2.textContent = "You won by " + playerScore + " to " + computerScore;
            return [displayBoard1, displayBoard2]
        }
        else if (playerScore < computerScore) {
            displayBoard1.textContent = "game over ";
            displayBoard2.textContent = "You lost by " + playerScore + " to " + computerScore;
            return [displayBoard1, displayBoard2]

        }
        else {
            return "it's a tie"
        }
    } else {
        let roundsLeft = rounds + " to gookhh ";
        return roundsLeft;
    }
}
function score() {
    let scoreBoard1 = document.getElementById('sBoard1');
    let scoreBoard2 = document.getElementById('sBoard2');
    let scoreBoard3 = document.getElementById('sBoard3');
    scoreBoard1.textContent = playerScore;
    scoreBoard2.textContent = computerScore;
    scoreBoard3.textContent = rounds;
    console.log(rounds)
    console.log(playerScore)
    console.log(computerScore)
    console.log(winner())
}
function restartGame() {
    console.log('New game stated')
    rounds = 5;
    playerScore = 0;
    computerScore = 0;
    score();
}

function game() {
    restartGame()
    userPlay()
}

game();
