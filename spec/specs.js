describe("HangMan", function() {
  it("will create a new HangMan", function() {
    var testHangMan = new HangMan(["cat"]);
    expect(testHangMan.array).to.eql(["cat"]);
  });

  it("will select a word from the array", function() {
    var testHangMan = new HangMan(["cat"]);
    expect(testHangMan.randomWord(["cat"])).to.equal("cat");
  });

  it("will replace letters in the word with '_'", function() {
    var testHangMan = new HangMan(["cat"]);
    expect(testHangMan.addBlanks(["cat"])).to.equal("_ _ _ ");
  });

  it("will split letters in chosenWord", function() {
    var testHangMan = new HangMan(["cat"]);
    expect(testHangMan.splitWord(["cat"])).to.eql([ 'c', 'a', 't' ]);
  });

  it("will check if guessed letter is in word", function() {
    var testHangMan = new HangMan("cat");
    expect(testHangMan.guessLetter("b")).to.equal(false);
  });

});
