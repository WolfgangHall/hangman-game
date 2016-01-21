var Letter = require('letters.js');

function Word(word, lets, found) {
    this.word = wrd;
    this.lets = [];
    this.found = false;
    this.getLets = function () {
        for (var i = 0; i < this.word.split().length; i++) {
            return new Letter object;
        }
    };
    this.checkIfLetterFound = function (guessLetter) {
        var whatToReturn = 0;
        for (var i = 0; i < this.lets.length; i++){
            if (Letter.charac === this.guessLetter) {
                Letter.appear = true;
                checkIfLetterFound +=;
                return checkIfLetterFound;
            }
        }
    };
    this.didWeFindTheWord = function () {
        .every(this.lets);
    }
    this.wordRender = function () {
        var str = "";
        for (var i = 0; i < let.length; i++) {
            letterRender(let[i]);
            output += str;
            return str;
        };
    }
}

module.exports = Word;