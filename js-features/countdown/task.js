const startTimer = function () {
  const timer = document.getElementById("timer");

  if (timer.textContent > 0) {
    timer.textContent--;
  } else if ((timer.textContent = "0")) {
    alert("Вы победили в конкурсе!");
  }
};

setInterval(startTimer, 1000);
