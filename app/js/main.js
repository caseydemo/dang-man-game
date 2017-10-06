
// variable definitions


var wordList = ["cheese", "pizza", "gotcha", "donkey", "chicken"];
console.log("the whole list: " + wordList);

var bodyPart = 0;
var blanks=0;



new Vue({
    el: '#vue-app',
    data: {
        word: '',
        bgcolor: 'gray',
        hiddenWord: 'cheese',
        blankSpaces: 0,
        wordArray: []

    },
    methods: {
        checkLetter: function(letter) {


        },
        reset: function() {
            alert('gotcha');
            this.word = '';
        },
    },
    mounted: function() {

        // calls the vanilla js function to build new game
        initialize();

        // this creates the blank spaces to symbolize how many letters they gotta find
        blankSpaces = this.hiddenWord.length;
        for (var i = 0; i < blankSpaces; i++) {
            this.word += " __ ";
        }

        console.log(this.wordArray);
    }
});

// stub it out, fool


// Phase 1
function initialize(){
    // empty gallows (no body)
    // empty blanks (no letters showing)
    // initialize buttons
    // chooses new word to find
    
    // selects a random word from the "wordList" for user to guess
    var chosenWord = wordList[Math.floor(Math.random() * wordList.length)];
    console.log("the chosen word: " + chosenWord);

    
    bodyPart = 0; // update the body image so it's new
    
    blanks=chosenWord.length;   // update the blanks so it's new
    displayBlanks(blanks);

    
}

function displayBlanks(blanks){
    // something that displays the number of blanks
    console.log(" the word has " + blanks + " blank spaces");
}

// Phase 2
function selectLetter(){
    var selcetion;
    // checks if letter is in the word
    checkLetter(selection);


}


function checkLetter(letter){

    if(word.contains(letter)){
        // word contains the letter 
        // increment win tally
        // check for win

        checkForWin();
    }
    else{
        // word does not contain letter
        // increment guess tally
        // check for loss (full body drawn)

        updateBody();
        checkForLoss();

    }
    
}



function checkForWin(){

}
function checkForLoss(){

}

function updateBody(){
    // updates the body image 
    return bodyPart;

}
function updateBlanks(){
    // updates the blank spaces with letters upon succesful guess
    return blanks;

}


function reset(){
    // allows user to call initialization function

}
