let chances = 10;
let randomNum = parseInt(Math.random(1, 101) * 100);

function check() {
  console.log(randomNum);
  if (chances > 0) {
    chances -= 1;
    const gNum = Number(document.querySelector("input").value);
    const chanceP = document.querySelector(".chance");
    const msgP = document.querySelector(".msg");
    if (gNum == randomNum) {
      msgP.innerText = "You Won!";
    } else {
      chanceP.innerHTML = String(chances) + "❤️";
      if (chances == 0) {
        msgP.innerText = "You Lost!";
      } else {
        if (gNum < randomNum) {
          msgP.innerText = "Guessed number is small";
        } else {
          msgP.innerText = "Guessed number is large";
        }
      }
    }
  }
}
function reset() {
  randomNum = parseInt(Math.random(1, 101) * 100);
  chances = 10;
  document.querySelector("input").value = "";
  const chanceP = document.querySelector(".chance");
  const msgP = document.querySelector(".msg");
  chanceP.innerText = String(chances) + "❤️";
  msgP.innerText = "";
}
