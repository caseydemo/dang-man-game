<center><h1> Hangman </h1></center>

<center><h2>  List the requirements </h2></center>
<center><h2> In english, step through what you think you should do </h2></center>
<center><h2> Stubb out rough functions </h2></center>
<center><h2> Refactor & repeat </h2></center>



1. what are the requirements?
	* initial state 
		- gallows: empty
		- buttons displayed
		- number of blanks visually displayed 
			* this corresponds to the hidden word

	* In Play state
		- user has selected a button (a letter for a guess)
		- some kind of comparison occurs between the users input and the hidden word
		
	* Win/Lose state
		- either body part is added, blank is added, game is won or game is lost

2. list out what you think you should do

	* Initialize game
		- in either html or javascript create 
			- buttons with all the letters of the alphabet
			- an empty gallows image
			- empty blank spaces which correspond to the number of letters in the hidden word

	* Take user input
		- when user selects a button - the corresponding letter becomes their "selection"

	* Comparison function
		- if letter is within the word 
			* replace the blank space with the selected letter
			* increment some kind of win tally

		- if letter is not in the word - do something
			* update the drawing with a body part
			* increment some kind of lose tally

	* check for win/los function
		- check for win/lose conditions
			* if win - do something
				- somehow reset the board
			* if lose - do something
				- somehow reset the board

3. Stubb out functions

	* function initializeGame(); -- clears body from gallows, empties out blank spaces
	* function buttonLogic(); -- this gets the user input into javascript
	* function isCharInWord(); -- compares the user input to hidden word
	* function updateBody(); -- is called when letter is not in word - body part added & lose tally increased
	* function updateBoard(); -- is called when letter is in word - corresponding blank is replaced with letter & win tally increased
	* function checkForWin(); -- is called each time to check for win or loss





