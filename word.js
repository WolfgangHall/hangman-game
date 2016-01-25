var Letter = require('./letters.js');

var Word = function(wrd) {
    this.word = wrd;
    this.lets = [];
    this.found = false;
    this.getLets = function () {
        for (var i = 0; i < this.word.length; i++) {
            var letters = this.word.split('');
            var let = new Letter(letters);
        }
    };
    
    this.checkIfLetterFound = function (guessLetter) {
        var whatToReturn = 0;
        for (var i = 0; i < this.lets.length; i++){
            if (this.lets.charac === this.guessLetter) {
                this.lets.appear = true;
                whatToReturn ++;
                
            }
        }
        return whatToReturn;
    };

    this.didWeFindTheWord = function () {
        if(this.lets.every(function(curLet){
            if(curLet.appear === true) {
                this.found = true;
            }
        })
            return this.found;
    }

    this.wordRender = function () {
        var str = "";
        for (var i = 0; i < this.lets.length; i++) {
            str += this.lets[i].letterRender(this.lets[i]);
            output += str;
            
        }
    }
    return str;
};

module.exports = Word;