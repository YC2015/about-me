var qOne = prompt('Hi, my name is Yamile isn\'t it?').toLowerCase();

if (qOne === "y" || qOne === "yes") {
  console.log ("Yup, that\'s right!");
} else {
  console.log ("Nope, we should talk more.");
}

 var qTwo = prompt("I would like to go to Northern Washington.").toLowerCase();

if (qTwo === "y" || qThree === "yes"){
    console.log ("The sooner the better too!");
} else {
    console.log ("It's important information.");
}

var qThree = prompt("Do I have 5 sisters?").toLowerCase();

if (qThree === "n" || qThree === "no") {
  console.log ("That's correct. Wish I had more sisters and brothers.");
} else {
  console.log ("That's wrong. I have one sister and one brother.");
  }

var qFour = prompt ("Am I interested in labor patterns?").toLowerCase();

if (qFour === "y" || qFour === "yes") {
  console.log ("Yup, that's right!");
} else {
  console.log ("Nope. I definitely am interested in labor.");
}

var aFive = 6;
var qFive = parseInt(prompt("How many states have I visited?"));
var i = 0;

while (qFive !== aFive && i < 3){
      if (qFive < aFive){
        console.log("Too low");
        alert("Too low. Guess again.");
      } else {
        console.log("Too high. Guess again.");
        alert("Too high");
      }
      i++;
    qFive = parseInt(prompt("How many states have I visited?"));
}

var qSix = prompt(" Which states have I lived in?");
var correctSix = ["California", "Washington"];
var a = 5;

while (a >0) {

  for (var i=0; i <correctSix.length; i++) {
      if (qSix === correctSix[i]){
        console.log ("right");
        break;
      }
  }

  if (qSix !== correctSix[i]){
    console.log ("Wrong. Try again");
    alert ("Wrong. Try again.")
    qSix = prompt(" Which states have I lived in?");
  }
a--;
}

alert ("I have lived in California and Washington");
