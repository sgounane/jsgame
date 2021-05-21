let message = document.querySelector("#message");
let trybtn = document.querySelector("#trybtn");
let gesstxt = document.querySelector("#gessTxt");

let nbr = Math.floor(Math.random() * 100);
let scor = 20;
console.log(nbr);
trybtn.addEventListener("click", fnc);
function fnc(e) {
  let gess = parseInt(gesstxt.value);

  if (scor == 0) {
    message.innerHTML = `<h3>Game Over !!!<h3>`;
    trybtn.removeEventListener("click", fnc);
    return;
  }
  if (!isNaN(gess))
    if (nbr == gess) message.innerHTML = `You win!!! scor:${scor}`;
    else if (nbr > gess) {
      scor -= 4;
      message.innerHTML = `greater than this scor:${scor}`;
    } else {
      scor -= 4;
      message.innerHTML = `less than this scor:${scor}`;
    }
  else message.innerHTML = `<H3>$Give me a number plz</H3>`;
}
