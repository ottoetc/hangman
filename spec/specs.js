describe("Player", function() {
  it("will output player name and mark choice", function() {
    var testPlayer = new Player("X", "Jim");
    expect(testPlayer.mark).to.equal("X");
    expect(testPlayer.playerName).to.equal("Jim");
  });
});

describe("Space", function() {
  it("will put an 'x' or 'o' into the selected index position", function() {
    var testSpace = new Space("X", "4");
    expect(testSpace.mark).to.equal("X");
    expect(testSpace.position).to.eql([4]);
  });
});

describe("Board", function() {
  it("will expect Board to contain three arrays", function() {
    expect(positionIndex[0]).to.eql([0,1,2]);
  });
});
