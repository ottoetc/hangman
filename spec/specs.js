describe("HangMan", function() {
  it("will select a word from the array", function() {
    var testHangMan = new HangMan(["tree"]);
    expect(testHangMan.randomWord(["tree"])).to.equal("tree");
  });

  it("will replace letters in the word with '_'", function() {
    var testHangMan = new HangMan(["tree"]);
    expect(testHangMan.addBlanks(["tree"])).to.equal("_ _ _ _ ");
  });

  it("will split letters in chosenWord", function() {
    var testHangMan = new HangMan(["tree"]);
    expect(testHangMan.splitWord(["tree"])).to.eql([ 't', 'r', 'e', 'e' ]);
  });

  it("will check if guessed letter is in word", function() {
    var testHangMan = new HangMan("tree");
    expect(testHangMan.checkLetter(score)).to.equal(4);
  });

});
