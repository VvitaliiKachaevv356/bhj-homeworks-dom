let getHole = (index) => document.getElementById(`hole${index}`);
let dead = document.getElementById("dead");
let miss = document.getElementById("lost");
let win = parseInt(dead.textContent);
let lost = parseInt(miss.textContent);

function checkGame(dead, miss) {
  if (dead === 10) {
    alert("Вы победили!");
    clearScore();
  } else if (miss === 5) {
    alert("Вы проиграли!");
    clearScore();
  }
}

for (let i = 1; i <= 9; i++) {
  getHole(i).onclick = function () {
    if (this.className.includes("hole_has-mole")) {
      win += 1;
      dead.textContent = win;
    } else {
      lost += 1;
      miss.textContent = lost;
    }
    checkGame(win, lost);
  };
}

function clearScore() {
  dead.textContent = 0;
  win = 0;
  miss.textContent = 0;
  lost = 0;
}
