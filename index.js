var player1 = Math.random();
var player2 = Math.random();
player1 = player1*6;
player2 = player2*6;
player1 = Math.floor(player1);
player2 = Math.floor(player2);
player1++;
player2++;

if(player1 > player2) {
    document.querySelector("h1").innerHTML="🚩Player 1 wins!"
}
else if (player2 > player1) {
    document.querySelector("h1").innerHTML="Player 2 wins!🚩"
}
else {
    document.querySelector("h1").innerHTML="🚩Tie🚩"
}

if(player1==1) {
    document.querySelector(".img1").setAttribute("src", "./images/dice1.png")
}
else if (player1==2) {
    document.querySelector(".img1").setAttribute("src", "./images/dice2.png")
}
else if (player1==3) {
    document.querySelector(".img1").setAttribute("src", "./images/dice3.png")
}
else if (player1==4) {
    document.querySelector(".img1").setAttribute("src", "./images/dice4.png")
}
else if (player1==5) {
    document.querySelector(".img1").setAttribute("src", "./images/dice5.png")
}
else {
    document.querySelector(".img1").setAttribute("src", "./images/dice6.png")
}

if(player2==1) {
    document.querySelector(".img2").setAttribute("src", "./images/dice1.png")
}
else if (player2==2) {
    document.querySelector(".img2").setAttribute("src", "./images/dice2.png")
}
else if (player2==3) {
    document.querySelector(".img2").setAttribute("src", "./images/dice3.png")
}
else if (player2==4) {
    document.querySelector(".img2").setAttribute("src", "./images/dice4.png")
}
else if (player2==5) {
    document.querySelector(".img2").setAttribute("src", "./images/dice5.png")
}
else {
    document.querySelector(".img2").setAttribute("src", "./images/dice6.png")
}