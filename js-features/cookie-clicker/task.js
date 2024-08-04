let count = 0;
let cookieStatus = true;

const cookie = document.getElementById("cookie");
const counter = document.getElementById("clicker__counter");

cookie.onclick = function () {
  count++;
  counter.textContent = count;

  if (cookieStatus) {
    cookie.style.width = "210px";
    cookie.style.height = "210px";
  }
  if (!cookieStatus) {
    cookie.style.width = "200px";
    cookie.style.height = "200px";
  }

  cookieStatus = !cookieStatus;
};
