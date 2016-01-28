describe("HangMan", function() {
  it("will select a word from the array", function() {
    var testWord = new HangMan();
    expect(testWord.randomWord()).to.equal("tree");
  });

  it("will split word into letters", function() {
    var testWord = new HangMan();
    expect(testWord.splitWord()).to.eql([ 't', 'r', 'e', 'e' ]);
  });

  it("will add blanks to an array the same length as the split word", function() {
    var testWord = new HangMan();
    expect(testWord.addBlanks()).to.eql(["_ ", "_ ", "_ ", "_ "]);
  });

  it("will check if guessed letter is in word and replace blank if correct", function() {
    var testWord = new HangMan();
    expect(testWord.checkLetter("e")).to.eql(["_ ", "_ ", "e", "e"]);
  });

  it("will take the guessed letter and add it to the letterGuessed array", function() {
    var testGuessedLetter = new HangMan();
    expect(testGuessedLetter.lettersUsed("d")).to.eql(["d"]);
  });

  it("will update score when an incorrect letter is guessed", function() {
    var testScore = new HangMan();
    testScore.checkLetter("d");
    expect(testScore.score).to.equal(4);
  })
});
