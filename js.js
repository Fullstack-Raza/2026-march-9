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

const start = document.querySelector(".start");
const gameDis = document.querySelector(".game-dis")
const game = document.querySelector(".game")
const gameResul = document.querySelector(".game-result")
const inp = document.querySelector(".game input")
const btn = document.querySelector(".game button")
const attmpt = document.querySelector("#attmpt")
const win = document.querySelector("#win")
const lose = document.querySelector("#lose")
const totale = document.querySelector("#totale")
let Random = Math.floor(Math.random()*101);
localStorage.setItem("win",win.textContent);


start.addEventListener("click",function(){
    gameDis.style.display="inherit";
    game.style.display="inherit"
    start.style.display="none"  
    attmpt.textContent = 10;
})

btn.addEventListener("click",function(){
    gameResul.style.display="inherit"
    if(!inp.value){
        gameResul.innerHTML=`<p>Give Number Please</p>`
    }else if(inp.value > Random){
       gameResul.innerHTML=`<p>Try Smaller Number</p>`
   }else if (inp.value < Random){
      gameResul.innerHTML=`<p>Try Bigger Number</p>`
   }else {
     gameResul.innerHTML=`<p>Wah Wah</p>`;
   }
})









