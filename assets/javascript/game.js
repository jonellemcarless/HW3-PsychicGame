// Here we are provided an initial array of letters.
 var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];

// User choice will be held here.
 var userChoice = "";
     console.log(userChoice);  

// Computer selected solution will be held here.
 var chosenLetter = "";
    console.log(chosenLetter);

// Holds all of the correct guesses.
var winCounter = 0;
    console.log(winCounter);

// Holds all of the wrong guesses.
var lossCounter = 0;
    console.log(userChoice);
 
// Holds user's guesses so far.
var lettersGuessed = ""
    console.log(lettersGuessed);
          
// Holds number of guesses remaining.
var numGuesses = 10;

// startGame()
// It's how we we will start and restart the game.
// (Note: It's not being run here. Function declarations like this are made for future use.)
function startGame() {
    numGuesses = 10
    chosenLetter = letters[Math.floor(Math.random() * letters.length)]

 console.log(chosenLetter)
    
     


 // 1. Create a for-loop to iterate through the letters array.

     // Inside the loop...

     // 2. Create a variable named "letterBtn" equal to $("<button>");

     // 3. Then give each "letterBtn" the following classes: "letter-button" "letter" "letter-button-color".

     // 4. Then give each "letterBtn" an attribute called "data-letter", with a value eqaual to "letters[i]"

     // 5. Then give each "letterBtn" a text equal to "letters[i]".

     // 6. Finally, append each "letterBtn" to the "#buttons" div 
     for (var i = 0; i < letters.length; i++) {
        var letterBtn = $("<button>");
        letterBtn.addClass("letter-button letter letter-button-color");
        letterBtn.attr("data-letter", letters[i]);
        letterBtn.text(letters[i]);
        $("#buttons").append(letterBtn);
    }

       // 7. Create an "on-click" event attached to the ".letter-button" class.

     // Inside the on-click event...

     // 8. Create a variable called "fridgeMagnet" and set the variable equal to a new div.

     // 9. Give each "fridgeMagnet" the following classes: "letter fridge-color".

     // 10. Then chain the following code onto the "fridgeMagnet" variable: .text($(this).attr("data-letter"))

     // 11. Lastly append the fridgeMagnet variable to the "#display" div (provided);

     // Be sure to test that your code works for this major task, before proceeding to the next one!


    //$(".letter-button").on("click", function() {
        //var fridgeMagnet = $("<div>");
        //fridgeMagnet.addClass("letter fridge-color");
        //fridgeMagnet.text($(this).attr("data-letter"));
        //$("#display").append(fridgeMagnet);
        //}

    // 12. Create an "on-click" event attached to the "#clear" button id.

     // Inside the on-click event...

     // 13. Use the jQuery "empty()" method to clear the contents of the "#display" div.

    $("#clear").on("click", function() {
        $("#display").empty();
    });