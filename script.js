//dice object
let dice = [
  { value: null, save: false },
  { value: null, save: false },
  { value: null, save: false },
  { value: null, save: false },
  { value: null, save: false },
];


//Dom 
const diceb = document.getElementById("b");
const roll = document.getElementById("roll");
const resett = document.getElementById("reset");
const popup = document.getElementById("popup");
const popupyes = document.getElementById("yes");
const popupno = document.getElementById("no");

const dice1 = document.querySelector('.dice1');
const dice2 = document.querySelector('.dice2');
const dice3 = document.querySelector('.dice3');
const dice4 = document.querySelector('.dice4');
const dice5 = document.querySelector('.dice5');
const rollknop = document.querySelector('.knop');
const save = document.querySelector('.b1');
const save1 = document.querySelector('.b2');
const save2 = document.querySelector('.b3');
const save3 = document.querySelector('.b4');
const save4 = document.querySelector('.b5');
const ace = document.getElementById("item11");
const two = document.getElementById("item12");
const three = document.getElementById("item13");
const four = document.getElementById("item14");
const five = document.getElementById("item15");
const six = document.getElementById("item16");
const totals = document.getElementById("item17");
const bonusup = document.getElementById("item18");
const allupper = document.getElementById("item19");

const yahztee = document.getElementById("itemm16");
const threee = document.getElementById("itemm11");
const fourr = document.getElementById("itemm12");
const fullhouse = document.getElementById("itemm13");
const smstraight = document.getElementById("itemm14");
const lgstraight = document.getElementById("itemm15");
const chance = document.getElementById("itemm17");
const totallow = document.getElementById("itemm18");
const grand = document.getElementById("itemm19"); 

//Eventlisteners
totallow.addEventListener('click',totallower);
grand.addEventListener('click',grandtotal);
smstraight.addEventListener('click',calcsm);
lgstraight.addEventListener('click',calclg);
chance.addEventListener('click',calcChance);
fullhouse.addEventListener('click',calcFull);
fourr.addEventListener('click',fourofakind);
threee.addEventListener('click',threeofakind);
yahztee.addEventListener('click',checkYahtzee);
ace.addEventListener('click',calcAce);
two.addEventListener('click',calcTwo);
three.addEventListener('click',calcThree);
four.addEventListener('click',calcFour);
five.addEventListener('click',calcFive);
six.addEventListener('click',calcSix);
roll.addEventListener('click', rollDice);
resett.addEventListener('click',showPopup );
save.addEventListener('click', saveKnop);
save1.addEventListener('click', saveKnop1);
save2.addEventListener('click', saveKnop2);
save3.addEventListener('click', saveKnop3);
save4.addEventListener('click', saveKnop4);
popupyes.addEventListener('click',reset);
popupno.addEventListener('click',() => {
  popup.style.display = "none";
});

//Global Variables
let rollCounter = 0;
let diceValue = [];
//let gameDone;
//let upperValue = [];
let aantalBeurten = 0;

//Roll function
function rollDice() {

  gameDone = false;
  showSave();
  rollCounter++;
  checkRolls();
  
  if (rollCounter <= 3) {
    diceValue = [];
  }

  for (let i = 0; i < dice.length; i++) {
    if (dice[i].save == false) {
      dice[i].value = getRandomInt(1, 7);
    };

    diceValue.push(dice[i].value);
    diceValue.sort((a, b) => a - b);

  }

  console.log(diceValue);

  dice1.textContent = dice[0].value;
  dice2.textContent = dice[1].value;
  dice3.textContent = dice[2].value;
  dice4.textContent = dice[3].value;
  dice5.textContent = dice[4].value;
  rollDisabled();
  borderDice();
  
};

//Refreshes the page
function reset(){
  location.reload();
}
//Shows popup for new-game
function showPopup(){
  popup.style.display = "block";
}
//Shows the savebuttons
function showSave() {
  save.style.display = "block";
  save1.style.display = "block";
  save2.style.display = "block";
  save3.style.display = "block";
  save4.style.display = "block";
}

//Hides the savebuttons
function hideSave(){
  save.style.display = "none";
  save1.style.display = "none";
  save2.style.display = "none";
  save3.style.display = "none";
  save4.style.display = "none";
}

//Eventlistener savebuttons
function saveKnop() {
  saveDice();
  checkSkip();
}

function saveKnop1() {
  saveDice1();
  checkSkip();
}

function saveKnop2() {
  saveDice2();
  checkSkip();
}

function saveKnop3() {
  saveDice3();
  checkSkip();
}

function saveKnop4() {
  saveDice4();
  checkSkip();
}

function rollCounterClear(){
  
}

function rollDisabled(){
  if(rollknop.disabled){
    hideSave();
  }
}

//If all savebuttons are pressed you cannot roll
function checkSkip() {
  if (save.disabled && save1.disabled && save2.disabled && save3.disabled && save4.disabled) {
    rollCounter = 3;
    checkRolls();
  }
}

//Limits the amout of rolls
function checkRolls() {
  if (rollCounter == 3) {
    //rollknop.style.backgroundColor = "grey";
    rollknop.disabled = true;
  }
}

//Gives a function and sets the arrayobjects to true for the save buttons
function saveDice() {
  dice[0].save = true;
 // save.style.backgroundColor = "grey";
  save.disabled = true;
  dice1.style.border = "3px solid red";
}

function saveDice1() {
  dice[1].save = true;
 // save1.style.backgroundColor = "grey";
  save1.disabled = true;
  dice2.style.border = "3px solid red";
}

function saveDice2() {
  dice[2].save = true;
 // save2.style.backgroundColor = "grey";
  save2.disabled = true;
  dice3.style.border = "3px solid red";
}

function saveDice3() {
  dice[3].save = true;
//  save3.style.backgroundColor = "grey";
  save3.disabled = true;
  dice4.style.border = "3px solid red";
}

function saveDice4() {
  dice[4].save = true;
 // save4.style.backgroundColor = "grey";
  save4.disabled = true;
  dice5.style.border = "3px solid red";
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); 
}


//Filters the array
function aceFilter(value) {
  return value == 1;

};

function twoFilter(value) {
  return value == 2;
};

function threeFilter(value) {
  return value == 3;
};

function fourFilter(value) {
  return value == 4;
};

function fiveFilter(value) {
  return value == 5;
};

function sixFilter(value) {
  return value == 6;
};

let resetroll = false;
let totalUpper = 0;
let counterace = 0;
let countertwo = 0;
let counterthree = 0;
let counterfour = 0;
let counterfive = 0;
let countersix = 0;
let upbonus = 0;
let allup = 0;

let chancescore = 0;
let lgscore = 0;
let smscore = 0;
let full = 0;
let fourok = 0;
let threeok = 0;
let yahzteep = 0;
let totallowerscore = 0;


//Does the math for each button
function calcAce(){
  let resetroll = false;
  let acefiltered = diceValue.filter(aceFilter);
  counterace = acefiltered.length * 1;
  //console.log(counterace)
  ace.textContent = counterace;
  resetRoll()
  totalScore()
  upperBonus()
  alltotal()
  calcYahtzee()
}
function calcTwo(){
  let resetroll = false;
  let twofiltered = diceValue.filter(twoFilter);
  countertwo = twofiltered.length * 2;
 // console.log(countertwo)
  two.textContent = countertwo;
  resetRoll()
  totalScore()
  upperBonus()
  alltotal()
}
function calcThree(){
  let resetroll = false;
  let threefiltered = diceValue.filter(threeFilter);
  counterthree = threefiltered.length * 3;
//  console.log(counterthree)
  three.textContent = counterthree;
  resetRoll()
  totalScore()
  upperBonus()
  alltotal()
}
function calcFour(){
  let resetroll = false;
  let fourfiltered = diceValue.filter(fourFilter);
  counterfour = fourfiltered.length * 4;
//  console.log(counterfour)
  four.textContent = counterfour;
  resetRoll()
  totalScore()
  upperBonus()
  alltotal()
}


function calcFive(){
  let resetroll = false;
  let fivefiltered = diceValue.filter(fiveFilter);
  counterfive = fivefiltered.length * 5;
 // console.log(counterfive)
  five.textContent = counterfive;
  resetRoll()
  totalScore()
  upperBonus()
  alltotal()
}


function calcSix(){
  let resetroll = false;
  let sixfiltered = diceValue.filter(sixFilter);
  countersix = sixfiltered.length * 6;
 // console.log(countersix)
  six.textContent = countersix;
  resetRoll()
  totalScore()
  upperBonus()
  alltotal()
}

function borderDice(){
  if(rollknop.disabled){
    dice1.style.border = "3px solid red";
    dice2.style.border = "3px solid red";
    dice3.style.border = "3px solid red";
    dice4.style.border = "3px solid red";
    dice5.style.border = "3px solid red";
  };
};

//resets the roll and all arrays if clicked on score
function resetRoll(){
  if(!resetroll){
    aantalBeurten++;
    diceValue = [];
    dice = [
      { value: null, save: false },
      { value: null, save: false },
      { value: null, save: false },
      { value: null, save: false },
      { value: null, save: false },
    ];
    showSave();
    rollCounter = 0;
    roll.disabled = false;
    save.disabled = false;
    save1.disabled = false;
    save2.disabled = false;
    save3.disabled = false;
    save4.disabled = false;
    dice1.style.border = "";
    dice2.style.border = "";
    dice3.style.border = "";
    dice4.style.border = "";
    dice5.style.border = "";
 //   console.log(diceValue);
  //  console.log(dice);
    dice1.textContent = "Gooi";
    dice2.textContent = "Gooi";
    dice3.textContent = "Gooi";
    dice4.textContent = "Gooi";
    dice5.textContent = "Gooi";
 //   console.log(aantalBeurten);
  };
};

function totalScore(){
  if(aantalBeurten == 13){
totalUpper = counterace + countertwo + counterthree + counterfour + counterfive + countersix;
//console.log(totalUpper)
totals.textContent = totalUpper
  };
};

function upperBonus(){
  if(totalUpper>=63 && aantalBeurten == 13){

    upbonus = 35;
    bonusup.textContent = upbonus;
  };
};

function alltotal(){
  if(aantalBeurten == 13){

    allup = totalUpper + upbonus;

    allupper.textContent = allup;
  }
}


function checkYahtzee(){
  let array =  [];
  for(let i = 1; i<7;i++){
    
    array.push(i,i,i,i,i);
    
    if(array.join()==diceValue.join()){
      console.log(diceValue)
      yahzteep = +50;
      yahztee.textContent = yahzteep;
    } else{;
      
     array = [];
  };
  
  };
  resetRoll()
}

function threeofakind(){
  if (diceValue[0] === diceValue[1] && diceValue[1] === diceValue[2]) {
    for (let i = 0; i < dice.length; i++) {
       console.log(threeok);
        threeok += dice[i].value; 
    }
  } else if (diceValue[1] === diceValue[2] && diceValue[2] === diceValue[3]) {
    for (let i = 0; i < dice.length; i++) {
       console.log(threeok);
        threeok += dice[i].value; 
    }
  } else if (diceValue[2] === diceValue[3] && diceValue[3] === diceValue[4]) {
    for (let i = 0; i < dice.length; i++) {
       threeok += dice[i].value; 
        console.log(threeok);
    } }else {
      
    }
    console.log(threeok);
    threee.textContent = threeok;
    resetRoll()
    } 


  function fourofakind() {
    
      if (diceValue[1] === diceValue[2] && diceValue[2] === diceValue[3]) {
        if (diceValue[2] === diceValue[0] || diceValue[2] === diceValue[4]) {
          for (let i = 0; i < dice.length; i++) {
            
            fourok += dice[i].value;
          }
        } else {
          
          fourok = 0;
        }
      } else {
        fourok = 0;
        
      }
      console.log(fourok);
      fourr.textContent = fourok;
      resetRoll()
      
  }

  function calcFull(){
    let combinatie = false;
    let combinatie2 = false;

    if(diceValue[0] == diceValue[1] && diceValue[1] == diceValue[2]){
    if(diceValue[3] == diceValue[4]){
      combinatie = true;
    }
  }
  if(diceValue[4] == diceValue[3] && diceValue[3] == diceValue[2]){
    if(diceValue[1] == diceValue[0]){
      combinatie2 = true;
    }
  }
  if(combinatie || combinatie2){
    full = 25
    fullhouse.textContent = full;
  }
  resetRoll()
  }

  function calcChance(){
    
    for(let i = 0; i < dice.length;i++){
      chancescore+=dice[i].value;
    }
    console.log(chancescore);
    chance.textContent = chancescore;
    resetRoll();
  }

  function calcsm(){
  let checksm = false;
  let smcombos = [
  [1,1,2,3,4],[1,2,2,3,4],[1,2,3,3,4],[1,2,3,4,4],[1,2,3,4,5],
  [1,2,3,4,6],[2,2,3,4,5],[2,3,3,4,5],[2,3,4,4,5],[2,3,4,5,5],
  [1,3,4,5,6],[2,3,4,5,6],[3,3,4,5,6],[3,4,4,5,6],[3,4,5,5,6],[3,4,5,6,6]
  ];

  for(let i = 0; i < smcombos.length;i++){
  if(JSON.stringify(smcombos[i]) == JSON.stringify(diceValue)){
    checksm = true;
   }
  }

  if(checksm){
    smscore = 30;
    smstraight.textContent = smscore;
  }
}

function calclg(){
  let checklg = false;
  let lgcombos = [
  [1,2,3,4,5],[2,3,4,5,6]];

  for(let i = 0; i < lgcombos.length;i++){
  if(JSON.stringify(lgcombos[i]) == JSON.stringify(diceValue)){
    checklg = true;
   }
  }

  if(checklg){
    lgscore = 45;
    lgstraight.textContent = lgscore;
  }
  rollreset();
}

function totallower(){
  
  if(aantalBeurten == 13){
totallowerscore = lgscore + smscore + yahzteep + chancescore + threeok + fourok + full;
totallow.textContent = totallowerscore;
  }
}

function grandtotal(){
  let grand = 0;
  if(aantalBeurten == 13){

    grand = totallowerscore + allup;
  }
}

