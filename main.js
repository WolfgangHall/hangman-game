var prompt = require('prompt');
var Word = require('word.js');
var game =  {
   this.wordBank: ["the", "man", "who", "sold", "the", "world"],
   this.guessesRemaining: 10,
   this.currentWrd: null,
   this.startGame = function (wrd) {
      this.currentWrd = this.wordBank;
      Letter.getLets(currentWrd);
      keepPromptingUser();
  }
  this.keepPromptingUser = function () {
      var self = this;
      prompt.get(guessLetter, err, result) {
         console.log("The Letter or space you guessed is " + result.guessLetter);
         var findHowManyOfUserGuess = currentWrd.checkIfLetterFound(result.guess);
         if (findHowManyOfUserGuess === 0) {
            console.log("you guess wrong!");
            guessesRemaining -=;
        } else {
            console.log("you guess right!");
            return 1;
        }
        console.log('Guesses Remaining ' + this.guessesRemaining);
        console.log(word.wordRender(currentWrd));
        if (this.guessesRemaining > 0 && this.currentWrd.found === false) {
            this.keepPromptingUser();
        } else if (this.guessesRemaining === 0){
            console.log("Game over mate!");
            console.log(this.wordBank);
        } else {
            console.log(word.wordRender(currentWrd));
        }
    }
}
}

game.startGame();

prompt.message = "Prompt!";

prompt.start();




