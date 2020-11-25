function diceChallenge() {

  //Image1
  var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

  var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1-6

  var randomImageSource = "images/" + randomDiceImage;

  var image1 = document.querySelectorAll("img")[0];

  image1.setAttribute("src", randomImageSource);

  //Image2
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

  var image2 = document.querySelectorAll("img")[1];

  image2.setAttribute("src", randomImageSource2);

  //If Challenge

  if (randomNumber1 > randomNumber2)
  {
    document.querySelector("h1").innerHTML = "🏆 Player 1 Wins!"
    document.querySelector("button").innerHTML = "Try Again!"
  } else if (randomNumber1 < randomNumber2)
  {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🏆"
    document.querySelector("button").innerHTML = "Try Again!"
  } else
  {
    document.querySelector("h1").innerHTML = "Draw!";
    document.querySelector("button").innerHTML = "Try Again!"
  }

}
