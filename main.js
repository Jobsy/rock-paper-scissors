// Code goes here


let  playerScore = 0;
let computerScore = 0;
let result;

function computerPlay() {
    let computerChoice = ["rock", "paper", "scissors"];
    let randomChoice = Math.floor(Math.random()*computerChoice.length);
    console.log(computerChoice[randomChoice])
    return computerChoice[randomChoice]
}

function userPlay() {
    let userChoice = prompt("What's your choice").toLowerCase();
    if (userChoice === "") {
      console.log("pls make a choice");
      return "pls make a choice"
    }else
    {console.log(userChoice)
    return userChoice;}
}

function playRound(playerSelection, computerSelection) {

  if (playerSelection == 'paper' && computerSelection == 'scissors') {
    console.log('You lose')
    return ('You lose');
  }
  else if (playerSelection == 'rock' && computerSelection == 'paper') {
    console.log('You lose')
    return ('You lose');
  }
  else if (playerSelection == 'scissors' && computerSelection == 'rock') {
    console.log('You lose')
    return ('You lose');
  }
  else if (playerSelection == 'rock' && computerSelection == 'scissors') {
    console.log('You win')
    return ('You win');
  }
  else if (playerSelection == 'scissors' && computerSelection == 'paper') {
    console.log('You win')
    return ('You win');
  }
  else if (playerSelection == 'paper' && computerSelection == 'rock') {
    console.log('You win')
    return ('You win');
  }
  else
    {console.log('Tie')}
    

// retun ("You Lose! Paper beats Rock");
}

// console.log(playRound(playerSelection, computerSelection))

function winner() {
  if (playerScore > computerScore) {
    return "You won by " + playerScore + " to " + computerScore;
  } 
  else if (playerScore < computerScore) {
    return "You lost by " + computerScore + " to " + playerScore;
  } 
  else {
    return "it's a tie"
  }
}

function game() {
  for(let i = 0; i < 5; i++) {
  let playerSelection = userPlay();
  let computerSelection = computerPlay();   
  result = playRound(playerSelection, computerSelection)
    if (result == "You win") {
      playerScore++
    } else if (result == "You lose"){
      computerScore++
    }
  }
    console.log(result)
    console.log(playerScore)
    console.log(computerScore)
    console.log(winner())
    return result
    
}

game();
