var num1=Math.floor(Math.random()*6)+1;
var num2=Math.floor(Math.random()*6)+1;

var player1="img/"+"dice"+num1+".png";
var player2="img/"+"dice"+num2+".png";

document.querySelectorAll("img")[0].src=player1;
document.querySelectorAll("img")[1].setAttribute("src",player2);

if(num1>num2)
document.querySelector("h1").textContent="Player 1 wins!";
else if(num1<num2)
document.querySelector("h1").textContent="Player 2 wins!";
else
document.querySelector("h1").textContent="It's a draw";