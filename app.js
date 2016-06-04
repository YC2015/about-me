

//Question 1
function questionOne(){
  var question = prompt('Hi, my name is Yamile isn\'t it?').toLowerCase();
  if (question === 'y' || question === 'yes') {
    console.log ('That\'s right!');
  } else {
    console.log ('No, we should talk more.');
  }
}

questionOne();

//Question 2
function questionTwo(){
  var question = prompt('I would like to go to Northern Washington. Is this true?').toLowerCase();

  if (question === 'y' || question === 'yes'){
    console.log ('That\'s right! The sooner the better too!');
  } else {
    console.log ('It\'s important information.');
  }
}

questionTwo();

//Question 3
function questionThree(){
  var question = prompt('Do I have 5 sisters?').toLowerCase();

  if (question === 'n' || question === 'no') {
    console.log ('That\'s right! Wish I had more sisters and brothers.');
  } else {
    console.log ('Nope. I have one sister and one brother.');
  }
}

questionThree();

//Question 4
function questionFour(){
  var question = prompt ('Am I interested in labor patterns?').toLowerCase();

  if (question === 'y' || question === 'yes') {
    console.log ('That\'s right!');
  } else {
    console.log ('Nope. I definitely am interested in labor.');
  }
}

questionFour();

//Question 5
function questionFive(){
  var question = prompt('Do you like donuts?').toLowerCase();

  if (question === 'y' || question === 'yes' ) {
    console.log ('Nope.');
  } else {
    console.log ('That\'s right!');
  }
}

questionFive();


//Question 6
function questionSix(){
  var answer = 6;
  var question = parseInt(prompt('How many states have I visited?'));
  var b = 0;

  while (question !== answer && b < 3){
    if (question < answer){
      console.log('Too low');
      alert('Too low. Guess again.');
    } else {
      console.log('Too high. Guess again.');
      alert('Too high');
    }
    b++;
    question = parseInt(prompt('How many states have I visited?'));
  }

  if (question === answer){
    console.log ('That\s right!');
  } else {
    console.log ('Your ran out of guess. I have lived in 6 different states');
  }
}

questionSix();

//Question 7
function questionSeven() {
  var question = prompt('Which states have I lived in?');
  var correct = ['California', 'Washington'];
  var a = 5;

  while (a > 0){

    for (var i = 0; i < correct.length; i++){
      if (question === correct[i]){
        console.log ('That\'s right!');
        break;
      }
    }

    if (question !== correct[i]){
      console.log ('Wrong. Try again.');
      alert ('Wrong. Try again.');
      question = prompt('Which states have I lived in?');
    }
    a--;
  }

  alert ('I have lived in California and Washington');
}

questionSeven();
