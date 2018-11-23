// Initial array of letters.
var letters = ["j", "m", "c"];
console.log(letters[0]);
console.log(letters[1]);

// Holds user's guesses so far.
var lettersGuessed = [];
console.log(lettersGuessed);

// This variable will hold the randomly assigned a letter.
var letterToGuess = null;

var guessesLeft = 5;

// Holds all of the wins and losses.
var wins = 0;
var losses = 0;

// Create 3 functions to update the guesses left, computer-selected letter, and guesses so far.
var updateGuessesLeft = function () {
    document.querySelector("#guesses-left").innerHTML = guessesLeft;
};

var updateLetterToGuess = function() {
    letterToGuess = letters[Math.floor(Math.random() * letters.length)];
  };
console.log(updateLetterToGuess)

var updateGuessesSoFar = function() {
  // Take guesses the user has tried and display them as letters separated by commas.
  document.querySelector("#guesses-so-far").innerHTML = lettersGuessed.join(", ");
};

// Function will be called when we reset everything
var reset = function() {
  guessesLeft = 5;
  lettersGuessed = [];
  updateLetterToGuess();
  updateGuessesLeft();
  updateGuessesSoFar();
};


updateLetterToGuess();
updateGuessesLeft();

// Capture keyboard clicks
document.onkeydown = function(event) {
  guessesLeft--;
  var letter = String.fromCharCode(event.which).toLowerCase();
  lettersGuessed.push(letter);
  updateGuessesLeft();
  updateGuessesSoFar();

  if (letter === letterToGuess) {
    wins++;
    document.querySelector("#wins").innerHTML = wins;
    reset();
  }

  if (guessesLeft === 0) {
    losses++;
    document.querySelector("#losses").innerHTML = losses;
    reset();
  }


};


