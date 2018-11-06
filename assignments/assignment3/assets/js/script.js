// Global Variables
var astronomyTerms = ["accretion_disk", "andromeda_galaxy", "binary_star", "celestial_object", "doppler_shift", "dark_matter"
                    , "eclipse", "earth", "ganymede", "halleys_comet", "hubble_space_telescope", "jupiter", "mercury", "nebula"
                    , "neptune", "planet", "red_shift", "supernova", "solar_eclipse", "uranus", "venus", "white_dwarf"];
var guessingTermArray = [];
var answerArray = [];
var numOfWins = 0;
var wrongLettersText = document.getElementById("wrongLetters");
var numOfGuessesText = document.getElementById("guessesLeft");
var numOfWinsText = document.getElementById("wins");
var instructionText = document.getElementById("instructions");


// First run of preGame()
preGame();

// Gets word, resets numOfGuesses, resets guessed letters
function preGame () {
    // Variables for Pre Game use
    var randNum = Math.floor(Math.random() * astronomyTerms.length);
    var guessingTerm = astronomyTerms[randNum];
    var numOfGuessesLeft = 10;

    wrongLettersText.innerHTML = "Wrong Letters: ";
    numOfGuessesText.innerHTML = "Guesses Left: " + numOfGuessesLeft;
    instructionText.innerHTML = "Press a letter key to start!";
    answerArray.length = 0;
    guessingTermArray.length = 0;

    runGame(guessingTerm.toUpperCase(), numOfGuessesLeft);
}

function runGame (guessingTerm, numOfGuessesLeft) {
    // Variables for Game use
    var guessedLetters = [];
    var numOfLettersLeft = guessingTerm.length;

    for (var x = 0; x < guessingTerm.length; x++) {
        // console.log(guessingTerm.charAt(x));
        guessingTermArray.push(guessingTerm.charAt(x));
    
        // Display spaces for word
        var underscores = document.getElementById("text");
        if (guessingTerm.charCodeAt(x) === 95) {
            answerArray.push("&nbsp");
            numOfLettersLeft--;
        }
        else {
            answerArray.push("_");
        }

        underscores.innerHTML = answerArray.join(" ");
    }

    // Game Loop
    document.onkeydown = function(event) {
        var guessedLetter;
        var letterIncluded = false;
        guessedLetter = event.key;
        // console.log(guessedLetter);

        // Check if letter has already been guessed
        if (guessedLetters.includes(guessedLetter.toUpperCase()) === true) {
            alert("Already guessed this letter!!");
        }

        else if (event.keyCode >= 65 && event.keyCode <= 90 && numOfLettersLeft != 0) {
            guessedLetters.push(guessedLetter.toUpperCase());

            // Check if letter exists in word
            for (var x = 0; x < guessingTermArray.length; x++) {
                if (guessedLetter.toUpperCase() == guessingTerm.charAt(x)) {
                    answerArray[x] = guessedLetter.toUpperCase();
                    numOfLettersLeft--;
                    letterIncluded = true;
                }
                
                underscores.innerHTML = answerArray.join(" ");
            }
        

            if (letterIncluded === false) {
                numOfGuessesLeft--;
                numOfGuessesText.innerHTML = "Guesses Left: " + numOfGuessesLeft;
                wrongLettersText.innerHTML += guessedLetter.toUpperCase() + ", ";

            }

            if (numOfGuessesLeft === 0) {
                alert("You Lose! Try again!");
                preGame();
            }

            if (numOfLettersLeft === 0) {
                alert("You Win! Press Enter to Play Again!");
                instructionText.innerHTML = "Press Enter to Play Again!";
                numOfWins++;
                numOfWinsText.innerHTML = "Wins: " + numOfWins;
            }
        }

        if (numOfLettersLeft === 0 && event.keyCode === 13) {
            preGame();
        }

        // Testing, remove after push to production
        console.log(guessedLetter);
        console.log(guessingTermArray);
        console.log("Number of Guesses: " + numOfGuessesLeft);
        console.log("Number of Letters Left: " + numOfLettersLeft);

    };
}