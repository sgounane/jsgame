let rollbtn = document.querySelector("#rollbtn");
let newbtn = document.querySelector("#newbtn");
let img = document.querySelector("#dice");
let scorLabel = document.querySelector("#score");
rollbtn.addEventListener("click", roll);
newbtn.addEventListener("click", newgame);
let score = 0;

function newgame(e) {
  rollbtn.addEventListener("click", roll);
  score = 0;
  scorLabel.innerHTML = score;
  img.src = `static/images/dice-0.png`;
}
function roll(e) {
  let n = Math.floor(Math.random() * 5 + 1);
  if (n != 1) {
    score += n;
    scorLabel.innerHTML = score;
  } else {
    score = 0;
    rollbtn.removeEventListener("click", roll);
    scorLabel.innerHTML = "GAME OVER!!";
  }

  img.src = `static/images/dice-${n}.png`;
}
