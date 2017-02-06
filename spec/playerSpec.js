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

  it('can place 1 submarine (1 space) to a certain coordinate', function (){
    var shipsToSetup = {
      number: 1,
      size: 1};
      initializeGrid(player, 10, 10);

      player.setupShips(shipsToSetup, player.playerGrid, 2, 3);
      const flatten = arr => arr.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []);
      var oneDimArray = (flatten(player.playerGrid));

      var calculateShipNumber = oneDimArray.reduce(function(a, b){
        return a + b
      }, 0)
      expect(calculateShipNumber).toEqual(1);

      
    });

  });
