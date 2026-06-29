let pwin = 0;
let cwin = 0;
let tie = 0;
let win = "";

function calculateScore(s) {
  let player = "";
  let comp = "";

  if (s == "rock") {
    player = "ROCK";
  } else if (s == "paper") {
    player = "PAPER";
  } else if (s == "scissor") {
    player = "SCISSOR";
  }

  const possibility = [1, 2, 3];
  const randomIndex = Math.floor(Math.random() * possibility.length);
  const randomNumber = possibility[randomIndex];

  if (randomNumber == 1) {
    comp = "ROCK";
  } else if (randomNumber == 2) {
    comp = "PAPER";
  } else {
    comp = "SCISSOR";
  }

  if (player == comp) {
    tie++;
    win = "Match Tie";
  } else if (
    (player == "ROCK" && comp == "PAPER") ||
    (player == "PAPER" && comp == "ROCK") ||
    (player == "SCISSOR" && comp == "ROCK")
  ) {
    cwin++;
    win = "Computer Win";
  } else if (
    (player == "ROCK" && comp == "SCISSOR") ||
    (player == "PAPER" && comp == "SCISSOR") ||
    (player == "SCISSOR" && comp == "PAPER")
  ) {
    pwin++;
    win = "You Win";
  }

  document.getElementById("win").textContent = win;

  document.getElementById("player").textContent = player;
  document.getElementById("comp").textContent = comp;

  document.getElementById("pwin").textContent = pwin;
  document.getElementById("cwin").textContent = cwin;
  document.getElementById("tie").textContent = tie;
}

function restart() {
  pwin = 0;
  cwin = 0;
  tie = 0;
  player = "";
  comp = "";
  win = "";

  document.getElementById("win").textContent = "YOU/COMPUTER WIN";

  document.getElementById("player").textContent = player;
  document.getElementById("comp").textContent = comp;

  document.getElementById("pwin").textContent = pwin;
  document.getElementById("cwin").textContent = cwin;
  document.getElementById("tie").textContent = tie;
}

let mode = 0; //1 = Day AND 0 = Night
function changeMode() {
  if (mode == 0) {
    document.getElementById("ball").style.left = "24px";

    document.getElementById("nav").style.backgroundColor = "#02462e";
    document.getElementById("nav").style.borderBottomColor = "#fec700";
    document.getElementById("ball").style.backgroundColor = "#02462e";
    document.getElementById("night-mode").style.backgroundColor = "#fec700";
    document.getElementById("container").style.backgroundColor = "#02462e";
    document.getElementById("main").style.backgroundColor = "#02462e";
    document.getElementById("main").style.borderColor = "#fec700";

    //balls
    document.getElementById("b1").style.backgroundColor = "#fec700";
    document.getElementById("b2").style.backgroundColor = "#fec700";
    document.getElementById("b3").style.backgroundColor = "#fec700";
    document.getElementById("b1").style.color = "#02462e";
    document.getElementById("b2").style.color = "#02462e";
    document.getElementById("b3").style.color = "#02462e";

    //score
    document.getElementById("score").style.backgroundColor = "#fec700";
    document.getElementById("score1").style.color = "#02462e";
    document.getElementById("player").style.color = "#02462e";
    document.getElementById("score2").style.color = "#02462e";
    document.getElementById("comp").style.color = "#02462e";

    //win
    document.querySelector(".win").style.backgroundColor = "#fec700";
    document.querySelector("#win").style.color = "#02462e";

    //bord
    document.getElementById("bord").style.backgroundColor = "#fec700";
    document.getElementById("bord1").style.color = "#02462e";
    document.getElementById("pwin").style.color = "#02462e";
    document.getElementById("bord2").style.color = "#02462e";
    document.getElementById("cwin").style.color = "#02462e";
    document.getElementById("bord3").style.color = "#02462e";
    document.getElementById("tie").style.color = "#02462e";

    //restart
    document.getElementById("restart").style.backgroundColor = "#fec700";
    document.getElementById("restart").style.color = "#02462e";

    mode = 1;
  } else {
    document.getElementById("ball").style.left = "0px";

    document.getElementById("nav").style.backgroundColor = "#fec700";
    document.getElementById("nav").style.borderBottomColor = "#02462e";
    document.getElementById("ball").style.backgroundColor = "#fec700";
    document.getElementById("night-mode").style.backgroundColor = "#02462e";
    document.getElementById("container").style.backgroundColor = "#fec700";
    document.getElementById("main").style.backgroundColor = "#fec700";
    document.getElementById("main").style.borderColor = "#02462e";

    //balls
    document.getElementById("b1").style.backgroundColor = "#02462e";
    document.getElementById("b2").style.backgroundColor = "#02462e";
    document.getElementById("b3").style.backgroundColor = "#02462e";
    document.getElementById("b1").style.color = "#fec700";
    document.getElementById("b2").style.color = "#fec700";
    document.getElementById("b3").style.color = "#fec700";

    //score
    document.getElementById("score").style.backgroundColor = "#02462e";
    document.getElementById("score1").style.color = "#fec700";
    document.getElementById("player").style.color = "#fec700";
    document.getElementById("score2").style.color = "#fec700";
    document.getElementById("comp").style.color = "#fec700";

    //win
    document.querySelector(".win").style.backgroundColor = "#02462e";
    document.querySelector("#win").style.color = "#fec700";

    //bord
    document.getElementById("bord").style.backgroundColor = "#02462e";
    document.getElementById("bord1").style.color = "#fec700";
    document.getElementById("pwin").style.color = "#fec700";
    document.getElementById("bord2").style.color = "#fec700";
    document.getElementById("cwin").style.color = "#fec700";
    document.getElementById("bord3").style.color = "#fec700";
    document.getElementById("tie").style.color = "#fec700";

    //restart
    document.getElementById("restart").style.backgroundColor = "#02462e";
    document.getElementById("restart").style.color = "#fec700";

    mode = 0;
  }
}
