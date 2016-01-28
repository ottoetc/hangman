// Hangman object
// var array = ["cat", "dog"]
// word = this.randomWord();
// guessed letters
// score;

function HangMan(){
  this.array = ["cat"];
  this.word = this.randomWord();
  this.guessedLetters = []
  this.score = 5;
};

HangMan.prototype.randomWord = function() {
  var word = this.array[Math.floor(Math.random() * this.array.length)];
  return word;
};

HangMan.prototype.addBlanks = function(word) {
  var chosenWord = this.word.replace(/\w/g, "_ ");
  return chosenWord;
}

HangMan.prototype.splitWord = function(word) {
  var splitWord = this.word.split("");
  return splitWord;
}

// check guessed letters against letters in word
// if letter not in word, add letter to guessed letter, subtract 1 from score (when score === 0 you lose)
// if letter is in word, replace "_" with guessed letter
HangMan.prototype.guessLetter = function(word) {
  var guessLetter = function {
    for (i = 0; i <= word.length; i ++) {
      if (word[i]) !== guessLetter)
        this.score -= 1
        continue
    }

    if (guessLetter !== word)


    for (guessLetter !== )
  }
}
