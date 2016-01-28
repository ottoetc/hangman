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
});
