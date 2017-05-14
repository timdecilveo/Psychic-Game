// This is the JavaScript portion of the code related to The Psychic Game
// I have written questions in the comments that I don't know the answers to.

var wins = 0;
var losses = 0;
var guessesSoFarVar = 0;
var guessesLeftVar = 5;
var guessedNumbersVar = [];
var numbersLeftToGuessVar = null;
var randomNumberOptionsVar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var maximumNumVar = randomNumberOptionsVar.length;
var letterGuesses = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// This is the random number generator
var randomValue = randomNumberOptionsVar[Math.floor(Math.random() * maximumNumVar)];
console.log(randomValue); //logs the random number to the console as a test

var updateGuessesLeftVar = function() {
	document.querySelector('#guessesYouHaveLeft').innerHTML = "You have " + guessesLeftVar + " guesses left.";
};
// console.log(updateGuessesLeftVar);

var updateNumbersLeftToGuessVar = function() {
	this.numbersLeftToGuessVar = this.randomNumberOptionsVar[Math.floor(Math.random() * this.randomNumberOptionsVar.length)];
};
// console.log(updateNumbersLeftToGuessVar);


var updateGuessesSoFar = function() {
	document.querySelector('#yourGuesses').innerHTML = "Look at what you've guessed!: " + guessedNumbersVar.join();
};
// console.log(updateGuessesSoFar)

// This clears everything on the stat sheet once the game is complete
var reset = function() {
	totalGuesses = 5;
	guessesLeftVar = totalGuesses;
	guessedNumbersVar = [];

	updateNumbersLeftToGuessVar();
	updateGuessesLeftVar();
	updateGuessesSoFar();
}
updateNumbersLeftToGuessVar();
updateGuessesLeftVar();

document.onkeyup = function(event) {
		guessesLeftVar--;
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	guessedNumbersVar.push(userGuess);
	updateGuessesLeftVar();
	updateGuessesSoFar();

	if (guessesLeftVar > 0){
		if (userGuess == numbersLeftToGuessVar){
			wins++;
			//How do you maintain the bootstrap glyphicons as this overwrites the HTML?
			document.querySelector('#wins').innerHTML = "Wins: " + wins;
			alert("How are you faster than me?! You win :(");
			reset();
		}
		}else if(guessesLeftVar == 0){
			losses++;
			//How do you maintain the bootstrap glyphicons as this overwrites the HTML?
			document.querySelector('#losses').innerHTML = "Losses: " + losses;
			alert("You're too slow! You didn't beat me this time, so try again.");
			reset();
		}
		// I'm trying to force the user to guess a number instead of a letter
		else if (userGuess == letterGuess){
			// document.querySelector(alert("That's a letter, not a number"));
			alert("That's a letter, not a number");
			reset();
		}
};