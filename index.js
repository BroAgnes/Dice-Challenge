let randomNumber1 = Math.floor((Math.random() * 6))+ 1;
let randomNumber2 = Math.floor((Math.random() * 6))+ 1;
// change first dice image
if (randomNumber1 === 1){
    document.querySelector(".img1").src = "images/dice1.png";
}
else if (randomNumber1 === 2){
    document.querySelector(".img1").src = "images/dice2.png";
}
else if (randomNumber1 === 3){
    document.querySelector(".img1").src = "images/dice3.png";
}
else if (randomNumber1 === 4){
    document.querySelector(".img1").src = "images/dice4.png";
}
else if (randomNumber1 === 5){
    document.querySelector(".img1").src = "images/dice5.png";
}
else {
    document.querySelector(".img1").src = "images/dice6.png";
}
//change second dice image
if (randomNumber2 === 1){
    document.querySelector(".img2").src = "images/dice1.png";
}
else if (randomNumber2 === 2){
    document.querySelector(".img2").src = "images/dice2.png";
}
else if (randomNumber2 === 3){
    document.querySelector(".img2").src = "images/dice3.png";
}
else if (randomNumber2 === 4){
    document.querySelector(".img2").src = "images/dice4.png";
}
else if (randomNumber2 === 5){
    document.querySelector(".img2").src = "images/dice5.png";
}
else {
    document.querySelector(".img2").src = "images/dice6.png";
}
//determine winner or draw
if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "<i class='far fa-flag'></i>Player 1 Wins!";
}
else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!<i class='far fa-flag'></i>";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}