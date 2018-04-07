/*
RULES
- At start of game an integer is generated that player must try to match, Goal Sum
- Each crystal has a value associated with it that is assigned at the start of the game
- clicking on a crystal adds that value to Player's current sum
- Player wins if able to match the Goal Sum
- Player loses if Player's current sum > Goal Sum
*/


// VARIABLE DECLARATION GLOBALS
// const winningNumber;
let crystalValues = [];
const minGoal = 19,
      maxGoal = 120,
      minVals = 1,
      maxVals = 12,
      winningNumber = 0
      wins = 0,
      losses = 0;
      let currentSum = 0;
      
  

// UI Values
const game = document.querySelector('#game'),
      targetSumUI = document.querySelector('#target-sum'),
      currentSumUI = document.querySelector('#current-sum'),
      specialMsgUI = document.querySelector('#special-messages'),
      winsUI = document.querySelector('#wins-count'),
      lossesUI = document.querySelector('#losses-count'),
      btn1 = document.querySelector('#btn-g1'),
      btn2 = document.querySelector('#btn-g2'),
      btn3 = document.querySelector('#btn-g3'),
      btn4 = document.querySelector('#btn-g4'),
      btnStart = document.querySelector('#btn-start')
      btnGems = document.querySelectorAll('.gem');

          
initializeGame();
// Initialize Game
function initializeGame(){
  
  generateCrystalValues();
  console.log("crystalValues are " + crystalValues);
  const winningNumber = getRandomNum(minGoal, maxGoal);
  console.log("winning Number is " + winningNumber);

  // Populate UI with winning Number
  targetSumUI.value = winningNumber;

  // Get and update CrystalValues
  btn1.value = crystalValues[0];
  btn2.value = crystalValues[1];
  btn3.value = crystalValues[2];
  btn4.value = crystalValues[3];
  console.log("btn1 value is " + btn1.value);
  console.log("btn2 value is " + btn2.value);
  console.log("btn3 value is " + btn3.value);
  console.log("btn4 value is " + btn4.value);
  btnGems.disabled = true;
  // currentSum to 0
  currentSum = 0; 
  


currentSumUI.value = currentSum;
console.log("winningnumber is " + winningNumber)


$(document).ready(function() {
specialMsgUI.value = ""

$('.gem').on('click', function() {
  if (currentSum == winningNumber){
    specialMsgUI.value = "You Win";
    wins += 1
    winsUI.value = wins;
  } else if(currentSum < winningNumber){
    currentSum += parseInt(this.value);
    currentSumUI.value = parseInt(currentSum);
  } else if (currentSum > winningNumber){
    specialMsgUI.value = "You lost this one";
    losses +=1
    lossesUI.value = losses;
    

  }

});
});



// GENERATE COMPUTER"s GUESS
function getRandomNum(min, max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}


// Generate Crystal Values Array
function generateCrystalValues() {
  do { 
    var temp = Math.floor((Math.random() * 12) + 1)
    if(crystalValues.includes(temp) !== true){
      crystalValues.push(temp);
      crystalValues.sort(function(a, b){return a-b});
    }
  }
  
  while (crystalValues.length < 4);
} 
}