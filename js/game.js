const choices = ["rock", "paper", "scissors"];
const winners = [];

function computerPlay() {
  //play the game
  //paly five rounds
  //game is cnsole based

  for (let x = 0; x < 5; x++) {
    playRound(x);
  }

  logWinners();
}

function playRound(roundNum) {
  const player = playerChoice();
  const computer = computerSelected();
  const winner = checkWinner(player, computer);
  winners.push(winner);
  document.querySelector("button").textContent = "Start a new game"
  logRounds(player, computer , winner, roundNum);

}

function playerChoice() {
  // get playerinput

  let input = prompt("Enter Rock , Paper , or Scissors");

  while (input == null) {
    input = prompt("Enter Rock , Paper , or Scissors");
  }
  input = input.toLowerCase();

  let check = validateEntered(input);
  while (check == false) {
    input = prompt(
      "Please enter correct capitalization wehnentreting rock , paper or scissors"
    );
    while (input == null) {
      input = prompt("Enter Rock , Paper , or Scissors");
    }
    input = input.toLowerCase();
    check = validateEntered(input);
  }
  return input;
}

function validateEntered(choice) {
  return choices.includes(choice);
}
function computerSelected() {
  return choices[Math.floor(Math.random() * choices.length)];
}

//function to chek winner

function checkWinner(choiseP, choiseC) {
  if (choiseP === choiseC) {
    return "Tie";
  } else if (
    (choiseP === "rock" && choiseC === "scissors") ||
    (choiseP === "paper" && choiseC === "rock") ||
    (choiseP === "scissors" && choiseC === "paper")
  ) {
    return "player";
  } else {
    return "computer";
  }
}

//function to chek winners
function logWinners() {
  let playerWins = winners.filter((item) => item == "player").length;
  let compWins = winners.filter((item) => item == "computer").length;
  let ties = winners.filter((item) => item == "Tie").length;

  console.log("Results:");
  console.log("Player wins:", playerWins);

  console.log("Computer wins:", compWins);

  console.log("Its a Tie:", ties);
}

function logRounds(PlayersChoice, ComputersChoice, winnerIs, roundNum) {
  console.log("Round:", roundNum);
  console.log("player choice:", PlayersChoice);
  console.log("Computer choice:", ComputersChoice);
  console.log(winnerIs, "won this round");
  console.log("-------------------------------------------")
}
