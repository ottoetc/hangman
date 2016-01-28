// Hangman object
// var array = ["cat", "dog"]
// word = this.randomWord();
// guessed letters
// score;

function HangMan(){
  this.array = ["tree"];
  this.word = this.randomWord();
  this.guessedLetters = [];
  this.score = 5;
  this.userGuess = this.checkLetter;
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
// else letter is in word, replace "_" with guessed letter
HangMan.prototype.checkLetter = function(guessLetter) {
  var checkLetter = this.userGuess;
  for (i = 0; i <= this.word.length; i ++) {
    if (this.word.charAt(i) !== guessLetter) {
      guessLetter.push(this.guessedLetters)
      this.score -= 1
    } else {
      addBlanks.charAt(i).replace(guessLetter);
      guessLetter.push(guessedLetters)
      this.score = score;
    };
    return addBlanks
  };
};
