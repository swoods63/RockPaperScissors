
var playerChoice;
var computerChoice;
var rock;
var paper;
var sissors;

function play(choice) {
  playerChoice = choice
  compChoice()
  compareChoice()
}


function compChoice() {
  let randNum = Math.random();
  if (randNum < .3) {
    computerChoice = "rock"
  }
  else if (randNum < .6) {
    computerChoice = " paper"
  }
  else {
    computerChoice = "sissors"
  }
}

function compareChoice() {
  if (playerChoice === "rock") {
    if (computerChoice != "paper") {
      console.log("player wins!")
    }
    else {
      console.log("computer wins!")
    }
  }
  if (playerChoice === "paper") {
    if (computerChoice != "sissors") {
      console.log("player wins!")
    }
    else {
      console.log("computer wins!")
    }
  }
  if (playerChoice === "sissors") {
    if (computerChoice != "rock") {
      console.log("player wins!")
    }
    else {
      console.log("computer wins!")
    }
  }
}



   // function Reset() {
     // userChoise = ''
     // compChoice = ''
 //   }