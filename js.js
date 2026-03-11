// Guess Number Game
/*
یہ گیم کیسی ہوگی ؟
اس میں کیا ہوگا ؟
اوکے 
اس میں کومپیوٹر ایک نمبر سلکٹ کرے گا  
پھر یوزر سے ایک نمبر مانگے گا 
یوزر ایک نمبر دے گا 
پھر ایک رزلٹ شو ہوگا کہ اپکا نمبر بڑا ہے یا چھوٹا ہے کومپیوٹر کے نمبر 
تا کے تم اس نمبر پہنچ سکو
*/
// elements

const start = document.querySelector(".start");
const gameDis = document.querySelector(".game-dis");
const game = document.querySelector(".game");
const gameResul = document.querySelector(".game-result");

const inp = document.querySelector(".game input");
const btn = document.querySelector(".game button");

const attmpt = document.querySelector("#attmpt");
const win = document.querySelector("#win");
const lose = document.querySelector("#lose");
const totale = document.querySelector("#totale");


// game state

let randomNumber;
let attempts = 10;


// storage values

let winn = Number(localStorage.getItem("winn")) || 0;
let losee = Number(localStorage.getItem("losee")) || 0;


// UI initialize

win.textContent = winn;
lose.textContent = losee;
updateTotal();


// start game

start.addEventListener("click", startGame);


function startGame(){

  randomNumber = Math.floor(Math.random()*101);

  attempts = 10;

  attmpt.textContent = attempts;

  start.style.display = "none";
  gameDis.style.display = "block";
  game.style.display = "flex";
  gameResul.style.display = "none";
}


// check button

btn.addEventListener("click", checkGuess);


function checkGuess(){

  const guess = Number(inp.value);

  if(!inp.value){
    showMessage("Enter a number");
    return;
  }

  attempts--;
  attmpt.textContent = attempts;


  if(guess > randomNumber){

    showMessage("Try smaller number");

  }

  else if(guess < randomNumber){

    showMessage("Try bigger number");

  }

  else{

    showMessage("🎉 Correct! You win");

    winn++;
    win.textContent = winn;

    localStorage.setItem("winn", winn);

    updateTotal();

    setTimeout(resetGame,1500);
    return;
  }


  if(attempts === 0){

    showMessage(`💀 Game Over! Number was ${randomNumber}`);

    losee++;
    lose.textContent = losee;

    localStorage.setItem("losee", losee);

    updateTotal();

    setTimeout(resetGame,2000);
  }

  inp.value = "";
}


// message function

function showMessage(msg){

  gameResul.style.display = "block";
  gameResul.innerHTML = `<p>${msg}</p>`;

}


// total update

function updateTotal(){

  totale.textContent = winn + losee;

}


// reset game

function resetGame(){

  start.style.display = "block";
  gameDis.style.display = "none";
  game.style.display = "none";

  inp.value = "";
}