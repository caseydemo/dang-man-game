var words = ['purple', 'orange', 'family', 'twelve', 'silver', 'thirty', 'donate', 'people', 'future', 'Heaven', 'banana','office', 'nature', 'eleven', 'animal', 'twenty', 'snitch', 'father', 'yellow', 'poetry', 'broken', 'potato','circle', 'school', 'breath', 'moment', 'circus', 'person', 'scarce', 'energy', 'sister', 'spring', 'change', 'monkey', 'system', 'secret', 'pirate', 'turtle', 'ninety', 'mother', 'winter', 'bucket', 'doctor', 'strong', 'forest', 'joyful', 'memory', 'season','friend', 'ending', 'loving', 'cookie', 'silent', 'talent', 'turkey', 'better', 'bottle', 'happen', 'wonder', 'number', 'little', 'spirit', 'melody', 'lovely', 'ginger', 'cousin', 'couple', 'bridge', 'tomato', 'enough', 'dragon', 'lonely', 'beaver', 'market', 'health', 'beauty', 'simple'];
var submitButton = document.getElementById('submitButton');
var dangManImage = document.getElementById('updateImage');
var initializeGameButton = document.getElementById('initializeGameButton');
var missCounter = 0;
var hitCounter = 0;









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

  dangManImage.src="../images/thumbs-up.jpg";

  wordSpaces.innerHTML = "<div class = 'col-xs-2 space outline1'></div>";

  for(var i=1; i<newWord.length; i++){
    wordSpaces.innerHTML += "<div class='col-xs-2 space outline'></div>";
  }

  previousGuesses.innerHTML = "<h3>Previous Guesses:</h3>";



}



// comparison function
function makeGuess(){
  alert('you called?');
}