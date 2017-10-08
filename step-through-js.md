```
var words = ['purple', 'orange', 'family', 'twelve', 'silver', 'thirty', 'donate', 'people', 'future', 'Heaven', 'banana','office', 'nature', 'eleven', 'animal', 'twenty', 'snitch', 'father', 'yellow', 'poetry', 'broken', 'potato','circle', 'school', 'breath', 'moment', 'circus', 'person', 'scarce', 'energy', 'sister', 'spring', 'change', 'monkey', 'system', 'secret', 'pirate', 'turtle', 'ninety', 'mother', 'winter', 'bucket', 'doctor', 'strong', 'forest', 'joyful', 'memory', 'season','friend', 'ending', 'loving', 'cookie', 'silent', 'talent', 'turkey', 'better', 'bottle', 'happen', 'wonder', 'number', 'little', 'spirit', 'melody', 'lovely', 'ginger', 'cousin', 'couple', 'bridge', 'tomato', 'enough', 'dragon', 'lonely', 'beaver', 'market', 'health', 'beauty', 'simple'];


var newWord = '';
var initializeGameButton = document.getElementById('initializeGameButton');
var submitButton = document.getElementById('submitButton');
// var wordHolder = document.getElementById('wordHolder');
var dangManImage = document.getElementById('updateImage');

var guessBox = document.getElementById('guessBox');
var space1 = document.getElementById('space1');
var space2 = document.getElementById('space2');
var space3 = document.getElementById('space3');
var space4 = document.getElementById('space4');
var space5 = document.getElementById('space5');
var space6 = document.getElementById('space6');
var missCounter = 0;
var hitCounter = 0;
var displayResult = document.getElementById('displayResult');
var wordScreen = document.getElementById('wordScreen');
var previousGuesses = document.getElementById('previousGuesses');
var spaces = document.getElementsByClassName('space');
var wordSpaces = document.getElementById('wordSpaces');




document.onreadystatechange = function() { 
  if (document.readyState === "interactive") { 

    // clear images, user's previous guesses
    reset();

    // add an event listener to the "new game" button
    initializeGameButton.addEventListener("click", initializeGame); //
  }
}

function reset() {
  // image update
  dangManImage.src = "../images/thumbs-up.jpg";
  guessBox.style.display = 'none';
  displayResult.innerHTML = '';
  previousGuesses.innerHTML = '';

}

// this is what is called by clicking the "new game" button
function initializeGame() {
  
  // generate a random number within the range of words.length 
  var numWord = Math.floor(Math.random()*(words.length-1));
  newWord = words[numWord]; // the secret word is pulled from the words array
  console.log(newWord);

  // add an event listener to the guess submission button and away a user input
  submitButton.addEventListener("click", makeGuess);
  guessBox.style.display = 'block'; // sets the guess panel to a block display
  wordScreen.style.display = 'block'; // sets the "word screen" to a block display
  previousGuesses.style.display = 'block'; // sets the previous guess display to block
  displayResult.innerHTML = ''; // erases the display result
  missCounter = 0; // initializes a miss counter
  

  // image update
  dangManImage.src = "../images/thumbs-up.jpg";

  // this creates a blank space
  wordSpaces.innerHTML = "<div class = 'col-xs-2 space outline1'></div>"

  // creates blank spaces identical to the outline1 space for the rest of the characters
  for (var i=1;i<newWord.length;i++) {
    wordSpaces.innerHTML += "<div class = 'col-xs-2 space outline'></div>";
  }
  
  // put the user's previous wrong guesses into this display
  previousGuesses.innerHTML = "<h3>Previous Guesses:</h3>";

}

// this is the comparisson function
function makeGuess() {

  // whatever the user inputs into "guess" - force it to lower case 
  var guess = document.getElementById("guess").value.toLowerCase();

  // if the secret word (newWord) includes the user's guess
  if (newWord.includes(guess)) {

    // display to the user that they got one right
    displayResult.innerHTML = "Dangit! Stupid Hunks don't listen!";
    displayResult.style.color = '#1AADAB';

    // identify the index in the secret word that the guess matches and replace the corresponding 
    //  blank square with the user's guess
    for(var i=0; i<newWord.length;i++) {
      if(guess === newWord[i]) {
        spaces[i].innerHTML = guess;
        }
      }

    // check to see if all letters have been found
    checkForWin();
  } else {

    // let the user know they did not get it and increment a loss counter
    missCounter += 1; 
    displayResult.innerHTML = "No, ya Dangus! That wasn't there";
    displayResult.style.color = '#AE1134';
    switch (missCounter) {  // this case statement is what changes the images depending on the missCounter 
                            // the higher the miss counter, the closer to doom
      case 1:

        // image update
        dangManImage.src = "../images/thumbs-up.jpg"
        alert('gotcha!');
        previousGuesses.innerHTML += guess;
        break;
      case 2:
        // image update 
        dangManImage.src = "../images/thumbs-up.jpg"
        alert('gotcha!');
        previousGuesses.innerHTML += (" , " + guess);
        break;
      case 3:
        // image update
        dangManImage.src = "../images/thumbs-up.jpg"
        alert('gotcha!');
        previousGuesses.innerHTML += (" , " + guess);
        break;
      case 4:
        // image update
        dangManImage.src = "../images/thumbs-up.jpg"
        alert('gotcha!');
        previousGuesses.innerHTML += (" , " + guess);
        break;
      case 5:
        // image update
        dangManImage.src = "../images/thumbs-up.jpg"
        alert('gotcha!');
        previousGuesses.innerHTML += (" , " + guess);
        break;
      case 6:
        // image update
        dangManImage.src = "../images/thumbs-up.jpg"
        alert('gotcha!');
        previousGuesses.innerHTML += (" , " + guess);
        break;
      case 7:
        // image update
        dangManImage.src = "../images/thumbs-up.jpg"
        alert('gotcha!');
        previousGuesses.innerHTML += (" , " + guess);
        youLose();
        break;
    }
  }
}


function checkForWin() {
  var checkForWinVar = 0;

  // check to see if the spaces are occupied
  for(var i=0; i<spaces.length; i++) {
    if(spaces[i].innerHTML !== '') {
      checkForWinVar += 1;
    }
  } 
  // if all the spaces are empty - user won
  if (checkForWinVar === spaces.length) {
    displayResult.innerHTML = "You win!! denny! get me some tor-tilla chips!"
    displayResult.style.color = '#1AADAB';
    // image update
    dangManImage.src = "../images/thumbs-up.jpg";
  }

}

function youLose() {
  displayResult.innerHTML = "Gotcha, Dingus!"
  displayResult.style.color = '#AE1134';
  for(var i=0; i<spaces.length; i++) {
    spaces[i].innerHTML = newWord[i];
  }

}


