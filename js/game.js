const choices = ["rock", "paper", "scissors"];
const winners = [];


function resetGame()
{


}


function computerPlay() {
  //play the game
  //paly five rounds

}

function playRound(roundNum) {
  const computer = computerSelected();
  const winner = checkWinner(player, computer);
  winners.push(winner);

}



function computerSelected() {

  //do dom here


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

}

computerPlay();

