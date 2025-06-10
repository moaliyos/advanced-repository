

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomimage1 = "images/dice" + randomNumber1 + ".PNG"

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomimage1)

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomimage2 = "images/dice" + randomNumber2 + ".PNG";

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomimage2)

if (randomNumber1 === randomNumber2){
    document.getElementById("head").innerHTML = "DRAW!!";
} else if (randomNumber1 > randomNumber2){
    document.getElementById("head").innerHTML = "Player 1 Wins!⛳";
} else {
    document.getElementById("head").innerHTML = "Player 2 Wins!⛳";
}
  