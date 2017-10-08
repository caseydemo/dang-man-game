var words = ['purple', 'orange', 'family', 'twelve', 'silver', 'thirty', 'donate', 'people', 'future', 'Heaven', 'banana','office', 'nature', 'eleven', 'animal', 'twenty', 'snitch', 'father', 'yellow', 'poetry', 'broken', 'potato','circle', 'school', 'breath', 'moment', 'circus', 'person', 'scarce', 'energy', 'sister', 'spring', 'change', 'monkey', 'system', 'secret', 'pirate', 'turtle', 'ninety', 'mother', 'winter', 'bucket', 'doctor', 'strong', 'forest', 'joyful', 'memory', 'season','friend', 'ending', 'loving', 'cookie', 'silent', 'talent', 'turkey', 'better', 'bottle', 'happen', 'wonder', 'number', 'little', 'spirit', 'melody', 'lovely', 'ginger', 'cousin', 'couple', 'bridge', 'tomato', 'enough', 'dragon', 'lonely', 'beaver', 'market', 'health', 'beauty', 'simple'];
var submitButton = document.getElementById('submitButton');
var dangManImage = document.getElementById('updateImage');
var initializeGameButton = document.getElementById('initializeGameButton');
var missCounter = 0;
var hitCounter = 0;

var space1 = document.getElementById('space1');
var space2 = document.getElementById('space2');
var space3 = document.getElementById('space3');
var space4 = document.getElementById('space4');
var space5 = document.getElementById('space5');
var space6 = document.getElementById('space6');
var spaces = document.getElementsByClassName('space');
var wordSpaces = document.getElementById('wordSpaces');









document.onreadystatechange = function() { 
  if (document.readyState === "interactive") { 
    reset();

    initializeGameButton.addEventListener("click", initializeGame);
  }
}


function reset() {
  
  
  // this is where I reset everyhing
  

}





// called when page is loaded
function initializeGame(){
  var numWord = Math.floor(Math.random()*(words.length-1));
  newWord = words[numWord]; // the secret word is chosen randomly from array
  console.log("the secret word is " + newWord);

  submitButton.addEventListener("click", makeGuess);
  guessBox.style.display = 'block'; 
  wordScreen.style.display = 'block';
  previousGuesses.style.display = 'block';
  displayResult.innerHTML = '';
  missCounter=0;


    // update image
  dangManImage.src="../images/thumbs-up.jpg";

    // create first blank space
  wordSpaces.innerHTML = "<div class = 'col-xs-2 space outline1'></div>";

    // create remaining blank spaces
  for(var i=1; i<newWord.length; i++){
    wordSpaces.innerHTML += "<div class='col-xs-2 space outline'></div>";
  }

    // output the previous guesses to the screen
  previousGuesses.innerHTML = "<h3>Previous Guesses:</h3>";

}



// comparison function
function makeGuess(){
 

  // make sure all input is in lower case
var guess = document.getElementById("guess").value.toLowerCase();



  // check if the guess is in the secret word
if(newWord.includes(guess)){

  displayResult.innerHTML = "Dangit! You got me, friend...";
  displayResult.style.color = '#fff';

  for(var i=0; i<newWord.length; i++){
    if(guess === newWord[i]){
      spaces[i].innerHTML = guess;
    }
  }

  checkForWin();
}else{
  missCounter +=1;
  displayResult.innerHTML = "No, ya Dingus!";
  displayResult.style.color = '#fff';
  switch(missCounter){
    case 1:

      dangManImage.src = "../images/thumbs-up.jpg"
      alert('first wrong choice');
      previousGuesses.innerHTML += guess;
      break;
    case 2:
      dangManImage.src = "../images/thumbs-up.jpg"
      alert('second wrong choice');
      previousGuesses.innerHTML += (" , " + guess);
      break;
    case 3:
      dangManImage.src = "../images/thumbs-up.jpg"
      alert('third wrong choice');
      previousGuesses.innerHTML += (" , " + guess);
      break;
    case 4:
      dangManImage.src = "../images/thumbs-up.jpg"
      alert('fourth wrong choice');
      previousGuesses.innerHTML += (" , " + guess);
      break;
    case 5:
      dangManImage.src = "../images/thumbs-up.jpg"
      alert('fifth wrong choice');
      previousGuesses.innerHTML += (" , " + guess);
      break;
    case 6:
      dangManImage.src = "../images/thumbs-up.jpg"
      alert('sixth wrong choice');
      previousGuesses.innerHTML += (" , " + guess);
      break;
    case 7:
      dangManImage.src = "../images/thumbs-up.jpg"
      alert('seventh wrong choice');
      previousGuesses.innerHTML += (" , " + guess);
      youLose();
      break;
      }
  }

}


function checkForWin(){
  var checkForWinVar = 0;

  for(var i=0; i<spaces.length; i++){
    if(spaces[i].innerHTML !== ''){
      checkForWinVar += 1;
      }
    }

  if(checkForWinVar === spaces.length){
    displayResult.innerHTML = "You win! Denny get me some tor-tilla chips";
    displayResult.style.color = '#fff';
    dangManImage.src = "../images/thumbs-up.jpg";
  }

}

function youLose() {
  displayResult.innerHTML = "You lose! Gotcha, Dingus!";
  displayResult.style.color = '#fff';
  for(var i=0; i<spaces.length; i++){
    spaces[i].innerHTML = newWord[i];
  }
}