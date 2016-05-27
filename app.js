var qOne = prompt('Hi, my name is Yamile isn\'t it?').toLowerCase();

if (qOne === "y" || qOne === "yes") {
  console.log ("Yup, that\'s right!");
} else {
  console.log ("Nope, we should talk more.");
}

 var qTwo = confirm("I would like to go to Northern Washington.");

if (qTwo === true){
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
