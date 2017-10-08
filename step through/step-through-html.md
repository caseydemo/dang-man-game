<!DOCTYPE html>
<html>

<head>
    <title>Dang-man</title>
    <!-- Bootstrap CSS CDN-->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <!-- My CSS file -->
    <link rel="stylesheet" href="css/style.css">
    <!--JQuery-->
    <script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
    <!--Bootstrap JS CDN-->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
</head>

<body class="container">
     

	<!-- this is the area for user input -->
    <div class="row" id="guessBox">

        <h3>Take your best guess, Pal:</h3>

        <!-- this input box will submit when the enter key is pressed and released -->
        <input type="text" class="guessInput" maxlength="1" id="guess" onfocus="value=''" onkeydown="if (

        	// this is the snippet that submits on enter key press
        	event.keyCode == 13) { makeGuess(); }; value=''">


        <button class="btn" id="submitButton" type="submit">Submit</button>
        

        <!-- <div id="wordScreen">
            <div id="wordToGuess">
                <h3>The dang word:</h3>

                // this is where the blank spaces will be displayed
                <!-- <div id="wordSpaces">
                </div>
            </div>
        </div> -->

        <div id="displayResult">ah Dangit! you win... I guess...</div>
    </div>
    <img src="../images/thumbs-up.jpg" id="updateImage">
    <div class="row">
        <div class="col-xs-12" id="previousGuesses">
        </div>
    </div>
    </div>
    </div>


    <!-- // this is where the blank spaces will be displayed -->
                <div id="wordSpaces">
                </div>

      <!-- this is the "new grame" button -->
    <div id="initializeGame">
        <div class="row">
            <div class="col-xs-12">
                <button class="btn" id="initializeGameButton">New Grame!</button>
            </div>
        </div>
    </div>
    
    <script src="js/main.js"></script>
</body>

</html>