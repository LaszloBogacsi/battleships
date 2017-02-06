describe('Player', function(){
  it('has an empty playerGrid at start', function(){
    player = new Player();
    expect(player.playerGrid).toEqual([]);
  });
  it('has an empty enemyGrid at start', function(){
    player = new Player();
    expect(player.enemyGrid).toEqual([]);
  });

  it('can initialize a grid at the start of the game', function(){
    player = new Player();
    console.log(initializeGrid(player));
    var zeroMemberMatrix = [
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0]
    ]
    expect(player.initializeGrid).toEqual(zeroMemberMatrix);
  });

});
