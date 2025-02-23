const result = document.querySelector(".result");
const humanScore = document.querySelector("#human-score");
const machineScore = document.querySelector("#machine-score");

let humanScoreNumber = 0;
let machineScoreNumber = 0;

const GAME_OPTIONS = {
  ROCK: "rock",
  PAPER: "paper",
  SCISSORS: "scissors",
};

const playHuman = (humanChoice) => {
  playTheGame(humanChoice, playMachine());
};

const playMachine = () => {
  const choices = [
    GAME_OPTIONS.rock,
    GAME_OPTIONS.paper,
    GAME_OPTIONS.scissors,
  ];
  const randomNumber = Math.floor(Math.random() * 3);

  return choices[randomNumber];
};

const playTheGame = (human, machine) => {
  console.log("Humano: " + human + " Maquina: " + machine);

  if (human === machine) {
    result.innerHTML = "Empate!";
  } else if (
    (human === GAME_OPTIONS.paper && machine === GAME_OPTIONS.rock) ||
    (human === GAME_OPTIONS.rock && machine === GAME_OPTIONS.scissors) ||
    (human === GAME_OPTIONS.scissors && machine === GAME_OPTIONS.paper)
  ) {
    humanScoreNumber++;
    humanScore.innerHTML = humanScoreNumber;
    result.innerHTML = "Você ganhou!";
  } else {
    machineScoreNumber++;
    machineScore.innerHTML = machineScoreNumber;
    result.innerHTML = "Você perdeu e a Alexa ganhou!";
  }
};
