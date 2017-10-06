1. what are the requirements?
2. step through in english what you think you should do
3. stubb out rough functions
4. refactor & repeat


# first pass
1. what are the requirements?
* initial state 
	- gallows: empty
	- buttons displayed
	- number of blanks visually displayed 
		* this corresponds to the hidden word
* In Play state
	- user has selected a button (a letter for a guess)
	- some kind of comparison occurs between the users input and the hidden word
	- if letter is within the word 
		* replace the blank space with the selected letter
		* increment some kind of win tally

	- if letter is not in the word - do something
		* update the drawing with a body part
		* increment some kind of lose tally
	- check for win/lose conditions
		* if win - do something
			- somehow reset the board
		* if lose - do something
			- somehow reset the board
