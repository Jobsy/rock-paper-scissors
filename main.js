// Code goes here


let  playerScore = 0;
let computerScore = 0;
let result;
let rounds=5;

function computerPlay() {
    let computerChoice = ["rock", "paper", "scissors"];
    let randomChoice = Math.floor(Math.random()*computerChoice.length);
    console.log(computerChoice[randomChoice] + 'jhvcxhxd')
    return computerChoice[randomChoice]
}

function userPlay() {
    // let userChoice = prompt("What's your choice").toLowerCase();
    // if (userChoice === "") {
    //   console.log("pls make a choice");
    //   return "pls make a choice"
    // }else
    // {console.log(userChoice)
    // return userChoice;}

    let displayBoard = document.getElementById('dBoard');
    
    displayBoard.textContent =  "Pick a weapon by click on any of the button below";
    let userChoice;
    // console.log(userChoice)
    
    let btns = document.querySelectorAll('button');
    // console.log(btns)
    btns.forEach((button) => {
        button.addEventListener('click', event => {
            if(event.target.textContent === 'Restart game'){
                console.log("Clicked, event.target.textContent");
                displayBoard.textContent = 'Game restated ';
                restartGame();
            }
           else  if (event.target.nodeName === 'BUTTON') {
                
            if(restartGame){
                    console.log("Clicked", event.target.textContent);
                displayBoard.textContent = 'You chose '+ event.target.textContent;
                userChoice = event.target.textContent
                // console.log(userChoice + '-----hhhhhhhh')
                // computerPlay();
                // userChoice ='yessss'
                // console.log(computerPlay() + '  12587jbjjkhrr');
                // return event.target.textContent
                // return userChoice;
                rounds--}
              } 
              
            //   console.log(userChoice + '-----hhhhhhhh')
            //   console.log(computerPlay() + '  12587jbjjkhrr');
            //  let playerSelection = console.log(userChoice + '  12587jbjjkhrr');
            //   let computerSelection = console.log(computerPlay() + '  12587jbjjkhrr');
            
    //         let playerSelection = userChoice;
    //         let computerSelection = computerPlay();   
    //   result = playRound(playerSelection, computerSelection)
    //     if (result == "You win") {
    //       playerScore++
    //     } else if (result == "You lose"){
    //       computerScore++
    //     }

        
               
              
                  let playerSelection = userChoice;
              let computerSelection = computerPlay();
              result = playRound(playerSelection, computerSelection)
              if(rounds < 0){
                console.log('New game')
             restartGame()}  
              else if (result == "You win") {
                  playerScore++
                } else if (result == "You lose"){
                  computerScore++
                }

            //     for(let i = 0; i < 5; i++) {
            //   }
              console.log(rounds)
            //   console.log(result)
    console.log(playerScore)
    console.log(computerScore)
    console.log(winner())
    // game()

            //   else if (event.target.nodeName === 'button') {
            //     console.log("Clicked", event.target.textContent);
            //   } else if (event.target.nodeName === ) {
            //     console.log("Clicked", event.target.textContent);
            //   }
            // console.log(userChoice)
            
        })
        // console.log(userChoice + 'hhhhhhhhh')
        // console.log(computerPlay() + '  12587jbjjkhrr');
    });
     
    // let userChoice = prompt("What's your choice").toLowerCase();
    // if (userChoice === "") {
    //   console.log("pls make a choice");
    //   return "pls make a choice"
    // }else
    // {console.log(userChoice)
    // return userChoice;}
    // game()
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
    if(rounds < 0){
        console.log('kyfycyxmteum')
     restartGame()}
    else if (rounds === 0) {
        if (playerScore > computerScore) {
            return "You won by " + playerScore + " to " + computerScore;
        } 
        else if (playerScore < computerScore) {
            return "You lost by " + computerScore + " to " + playerScore;
        } 
        else {
            return "it's a tie"
        }
    }else{
        let roundsLeft = rounds + " to go ";
        // console.log(roundsLeft)
    return roundsLeft;
    
}
// restartGame()
// if(rounds < 0){
//     console.log('kyfycyxmteum')
//  restartGame()}

}
 
function restartGame() {
    // if (rounds === 5) {
        rounds = 5;
        playerScore = 0;
        computerScore = 0;
        // game();
    // }
}


function game() {
//   for(let i = 0; i < 5; i++) {
//   let playerSelection = userPlay();
//   let computerSelection = computerPlay();   
//   result = playRound(playerSelection, computerSelection)
//     if (result == "You win") {
//       playerScore++
//     } else if (result == "You lose"){
//       computerScore++
//     }
//   }

userPlay()
    //   let playerSelection = userPlay();
    //   let computerSelection = computerPlay();   
    //   result = playRound(playerSelection, computerSelection)
    //     if (result == "You win") {
    //       playerScore++
    //     } else if (result == "You lose"){
    //       computerScore++
    //     }
   
    
    // console.log(result)
    // console.log(playerScore)
    // console.log(computerScore)
    // console.log(winner())
    
    // return result
    
}

game();
