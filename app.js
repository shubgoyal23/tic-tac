const game = document.querySelectorAll(".game");

let chance = 1;
let gameLength = 0;
const play = ["a", "a", "a", "a", "a", "a", "a", "a", "a"];

for (let index = 0; index < game.length; index++) {
  game[index].addEventListener("click", gameHandler);
}

function gameHandler(event) {
  if (chance === 0 && play[event.target.id - 1] === "a") {
    document.getElementById(event.target.id).innerText = "O";
    document.getElementById(event.target.id).classList.add("red");
    document.getElementById("turn").innerHTML = `X to play`
    document.getElementById("turn").classList.toggle("green")
    play[event.target.id - 1] = "O";
    chance = 1;
    gameLength++;
    winChecker("O");
  } else if (chance === 1 && play[event.target.id - 1] === "a") {
    document.getElementById(event.target.id).innerText = "X";
    document.getElementById(event.target.id).classList.add("green");
    document.getElementById("turn").innerHTML = `O to play`
    document.getElementById("turn").classList.toggle("green")
    play[event.target.id - 1] = "X";
    chance = 0;
    gameLength++;
    winChecker("X");
  }
}

function winChecker(player) {
  if (play[0] === player && play[1] === player && play[2] === player) {
    gameEnd(player);
  } else if (play[3] === player && play[4] === player && play[5] === player) {
    gameEnd(player);
  } else if (play[6] === player && play[7] === player && play[8] === player) {
    gameEnd(player);
  } else if (play[0] === player && play[3] === player && play[6] === player) {
    gameEnd(player);
  } else if (play[1] === player && play[4] === player && play[7] === player) {
    gameEnd(player);
  } else if (play[2] === player && play[5] === player && play[8] === player) {
    gameEnd(player);
  } else if (play[0] === player && play[4] === player && play[8] === player) {
    gameEnd(player);
  } else if (play[2] === player && play[4] === player && play[6] === player) {
    gameEnd(player);
  } else {
    if (gameLength === 9) {
      gameEnd("Game Draw No one");
    }
  }
}

function refresGame() {
  window.location.reload();
}

function gameEnd(player) {
  for (let index = 0; index < game.length; index++) {
    game[index].removeEventListener("click", gameHandler);
  }
  const winner = document.createElement("h1");
  winner.innerHTML = `${player} Won`;
  document.querySelector("div").appendChild(winner);
  const restart = document.createElement("button");
  restart.innerHTML = "Restart Game";
  restart.onclick = refresGame;
  document.querySelector("div").appendChild(restart);
}
