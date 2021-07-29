// Dice game solution-----------------
var randomNumber1 =  Math.floor( Math.random() * 6) +1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);
//--------------

var randomNumber2 = Math.floor(Math.random() *6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


//---------------------------------
var randomNumber3 = Math.floor(Math.random() *6) + 1;

var randomImageSource3 = "images/dice" + randomNumber3 + ".png";

document.querySelectorAll("img")[2].setAttribute("src", randomImageSource3);
//------------------------------------------
var randomNumber4 = Math.floor(Math.random() *6) + 1;

var randomImageSource4 = "images/dice" + randomNumber4 + ".png";

document.querySelectorAll("img")[3].setAttribute("src", randomImageSource4);

//-------------------------------------------


if (randomNumber1 > randomNumber2 && randomNumber1 > randomNumber3 && randomNumber1 > randomNumber4) {
  document.querySelector("h1").innerHTML ="Mom Wins!🏁";
}
else if (randomNumber2 > randomNumber1 && randomNumber2 > randomNumber3 && randomNumber2 > randomNumber4) {
  document.querySelector("h1").innerHTML ="Dad Wins!🏁";
}
else if (randomNumber3 > randomNumber1 && randomNumber3 > randomNumber2 && randomNumber3 > randomNumber4) {
  document.querySelector("h1").innerHTML ="Anthony Wins!🏁";
}
else if (randomNumber4 > randomNumber1 && randomNumber4 > randomNumber2 && randomNumber4 > randomNumber3) {
  document.querySelector("h1").innerHTML ="Ben Wins!🏁";
}
else {
  document.querySelector("h1").innerHTML ="Draw! Try again!";
  
}

/*---my code, which works-----------------
//----change left dice-----------------------------------
var randomNumber1 = Math.random();
randomNumber1 = (Math.floor(randomNumber1 * 6)) + 1;

if (randomNumber1 === 1) {
  document.querySelector("img.img1").setAttribute("src", "images/dice1.png");
  console.log(randomNumber1);
} else if (randomNumber1 === 2) {
  document.querySelector("img.img1").setAttribute("src", "images/dice2.png");
} else if (randomNumber1 === 3) {
  document.querySelector("img.img1").setAttribute("src", "images/dice3.png");
} else if (randomNumber1 === 4) {
  document.querySelector("img.img1").setAttribute("src", "images/dice4.png");
} else if (randomNumber1 === 5) {
  document.querySelector("img.img1").setAttribute("src", "images/dice5.png");
} else if (randomNumber1 === 6) {
  document.querySelector("img.img1").setAttribute("src", "images/dice6.png");
}

//--------change right dice------------------------------

var randomNumber2 = Math.random();
randomNumber2 = (Math.floor(randomNumber2 * 6)) + 1;

if (randomNumber2 === 1) {
  document.querySelector("img.img2").setAttribute("src", "images/dice1.png");
} else if (randomNumber2 === 2) {
  document.querySelector("img.img2").setAttribute("src", "images/dice2.png");
} else if (randomNumber2 === 3) {
  document.querySelector("img.img2").setAttribute("src", "images/dice3.png");
} else if (randomNumber2 === 4) {
  document.querySelector("img.img2").setAttribute("src", "images/dice4.png");
} else if (randomNumber2 === 5) {
  document.querySelector("img.img2").setAttribute("src", "images/dice5.png");
} else if (randomNumber2 === 6) {
  document.querySelector("img.img2").setAttribute("src", "images/dice6.png");
}

//---------------------change heading---------------------------
if (randomNumber1 === randomNumber2){
  document.querySelector("h1").innerHTML ="Draw!";
}
else if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML ="Player 1 Wins!";
}
else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML ="Player 2 Wins!";
}
end----------------------------*/
