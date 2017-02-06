describe('Player', function(){
  var player;
  beforeEach(function(){
    player = new Player();
  })

  it('has an empty playerGrid at start', function(){
    expect(player.playerGrid).toEqual([]);
  });
  it('has an empty enemyGrid at start', function(){
    expect(player.enemyGrid).toEqual([]);
  });

  it('can initialize both grids at the start of the game', function(){
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
    expect(initializeGrid(player, 10, 10)).toEqual(zeroMemberMatrix);
  });

  it('can place 4 submarines (1 space) randomly', function (){
    var shipsToSetup = {4:1};
    player.setupShips(shipsToSetup);
    expect(player.playerGrid.reduce(function(a, b){
      return a+b
    }, 0)).toEqual(4);
  });

});
