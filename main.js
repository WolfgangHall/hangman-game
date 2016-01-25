var prompt = require('prompt');
var Word = require('./word.js');


prompt.start();


var game =  {
   this.wordBank: ["the man who sold the world"],
   this.guessesRemaining: 10,
   this.currentWrd: null,
   this.startGame = function (wrd) {
      this.currentWrd = this.wordBank;
      this.currentWrd.getLets();
      this.keepPromptingUser();
  }
  this.keepPromptingUser = function () {
      var self = this;
      prompt.get(['guessLetter'], function(err, result){
        if (result.guessLetter !== " ") {
          console.log("The Letter you have guessed is " + result.guessLetter);
        } else {
          console.log("You have guessed space");
        };
         
         var findHowManyOfUserGuess = self.currentWrd.checkIfLetterFound(result.guessLetter);
         if (findHowManyOfUserGuess === 0) {
            console.log("you guessed wrong!");
            guessesRemaining --;
        } else {
            console.log("you guessed correctly!");
            return 1;
        }

        console.log('Guesses Remaining ' + this.guessesRemaining);
        console.log(word.wordRender(currentWrd));
        
        if (self.guessesRemaining > 0 && self.currentWrd.found === false) {
            self.keepPromptingUser();
        } else if (self.guessesRemaining === 0){
            console.log("Game over mate!");
            console.log(game.wordBank);
        } else {
            console.log(word.wordRender(currentWrd));
        }
    }
}
}

game.startGame();







