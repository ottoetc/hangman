// Hangman object
// var array = ["cat", "dog"]
// word = this.randomWord();
// guessed letters
// score;

function HangMan(wordArray){
  this.wordArray = ["tree"];
  this.lettersGuessed = [];
};

HangMan.prototype.randomWord = function() {
  var word = this.wordArray[Math.floor(Math.random() * this.wordArray.length)];
  return word;
};

HangMan.prototype.splitWord = function() {
  var word = this.randomWord();
  return word.split([]);
};

HangMan.prototype.addBlanks = function() {
  var word = this.splitWord();
  for (var i=0; i < word.length; i++) {
    word[i] = "_ ";
  } return word;
};

HangMan.prototype.checkLetter = function(guessLetter) {
  var blankWord = this.addBlanks();
  var word = this.splitWord();
  for (var i = 0; i < word.length; i ++) {
    if (word[i] === guessLetter) {
      blankWord[i] = word[i];
    };
  };
  return blankWord;
};

HangMan.prototype.lettersUsed = function(guessLetter) {
  var letter = [];
  var letterList = letter.push(guessLetter);
  return letter; 
}

// $(document).ready(function() {
//   HangMan();
//   $("form").submit(function(event) {
//     var userInput = $("input#guessInput").val();
//     var userInput = userInput.toLowerCase();
//     var newGame = new HangMan(userInput);
//   })
// })
