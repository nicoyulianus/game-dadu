var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomNumber1 + ".png"
var randomImageSource = "images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


// var p1win = document.querySelector(".container h1").innerHTML = "Player 1 WIN!";
// var p2win = document.querySelector(".container h1").innerHTML = "Player 2 WIN!";
if (randomNumber1 > randomNumber2) {
    document.querySelector(".container h1").innerHTML = "Player 1 WIN!";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector(".container h1").innerHTML = "Player 2 WIN!";
} else if (randomNumber2 === randomNumber1) { 
    document.querySelector(".container h1").innerHTML = "SERI!";
} else {
    document.querySelector(".container h1");
}