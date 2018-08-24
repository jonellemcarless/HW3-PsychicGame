// Psychic Game

$(document).ready(function() {


// Here we are provided an initial array of letters.
 var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];

// User guess will be held here.
 var userGuess = "";
     console.log(userGuess);  

// Computer selected solution will be held here.
 var chosenLetter = "";
    console.log(chosenLetter);

// Holds all of the correct guesses.
var winCounter = 0;
    console.log(winCounter);

// Holds all of the wrong guesses.
var lossCounter = 0;
    console.log(userGuess);
 
// Holds user's guesses so far.
var lettersGuessed = ""
    console.log(lettersGuessed);
          
// Holds number of guesses remaining.
var numGuesses = 10;




// Instructions:

// 1. User is told to click a button to guess the correct letter

for (var i = 0; i < letters.length; i++) {
    var letterBtn = $("<button>");
    letterBtn.addClass("letter-button letter letter-button-color");
    letterBtn.attr("data-letter", letters[i]);
    letterBtn.text(letters[i]);
    $("#buttons").append(letterBtn);
}
 //  $(".letter-button").on("click", function() {
  //    var lettersGuessed = $("<div>");
  //   lettersGuessed.addClass("letter user-guess")
  //    lettersGuessed.text($(this).attr("data-letter"));
  //    $("#display").append(lettersGuessed);

// 2. Computer selects random letter

//function (startGame() {
 //   numGuesses = 10;
 //   chosenLetter = letters[Math.floor(Math.random() * letters.length)];
 //   console.log(chosenLetter)



 

// 3. Create an "on-click" event attached to the ".letter-button" class.
 //   $(".letter-button").on("click", function() {
//        var userGuess = $("<div>");


// 4. If user guesses correctly, wins increases by one

 //   if (userGuess[i] === chosenLetter) {
 //       $("#wins").append(winCounter++)
  //  };

// 5. If user guesses incorrectly, guesses reduces by one and letter that user guessed is added to Guesses So Far

// 6. If user guesses incorrectly 10 times, losses increases by one

// 7. Click clear button to reset game
// $("#clear").on("click", function() {
  //  $("#display").empty();
});
    