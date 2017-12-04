// pulls from word generator
var Check = require('./wordGenerator.js'); 

// require inquirer npm package
var inquirer = require('inquirer');

// pulls from word bank
var words = require('./wordBank.js');

var selectedWord = null;

var game = null;


var setup = function() {
		selectedWord = new words();
		game = new Check();
		//set random word from word bank
		game.currentWord(selectedWord.pickWord());
		
		console.log(game.progress.join(""));
	}

var playGame = function() {
	inquirer.prompt(
		{
		  type: "input",
		  name: "guess",
		  message: 'Try your luck. Pick a letter!'
		}
		).then(function(guess) {
			game.checkFor(guess.guess);
			if (game.guesses === 0) {
				console.log("You Lose!!");
				playAgain();

			} else if (game.guesses > 0 && game.solved === true) {
				console.log("Impressive! You did it!");
				playAgain();
			} else {
				playGame();
			}
		});
}

var playAgain = function() {
	inquirer.prompt(
	{
		 type: "confirm",
		 name: "confirm",
		 message: "Try again?"
	}).then(function(answer) {
	if (answer.confirm === true) {
	setup();
	playGame();
	} else {
		console.log("You did your best!");
	}
 });
}


setup();
playGame();