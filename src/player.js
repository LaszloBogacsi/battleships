function Player () {
this.playerGrid = [];
this.enemyGrid = [];

}

var zeroGrid = [];
var zeroRows = [];
var initializeGrid = function(player, rowNum, colNum){
  for(var i = 0; i < rowNum; i++){
    for(var j = 0; j < colNum; j++){
      zeroRows.push(0);
    };
    zeroGrid.push(zeroRows);
    zeroRows = [];
  };
  this.playerGrid = zeroGrid;
  this.enemyGrid = zeroGrid;
  return zeroGrid;
};

// var shipTypes = {
//   1: 4,
//   2: 3,
//   3: 2,
//   4: 1
// };

Player.prototype.setupShips = function (shipsToSetup) {
  
};


Player.prototype.attack = function (row, col) {

};

Player.prototype.receiveDemage = function (row, col) {

};
