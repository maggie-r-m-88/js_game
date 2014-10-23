(function() {



var Player = function (options){
  var options= options || {};
  this.name = options.name;
  this.health = options.health;
  this.attack = function(x){
    var result=Math.floor(Math.random()*30);
    x.health= (x.health - result);
    if (x.health<=0)
      {alert(this.name + ' wins!' + x.name + ' is dead')}
  };


}
var player_one = new Player({
  name: 'Martin Luther King',
  health: 100
});



var Enemy = function (options){
  var options= options || {};
  this.name = options.name;
  this.health = options.health
  this.attack = function(x){
      var result=Math.floor(Math.random()*30);
      x.health= (x.health - result);
      if (x.health<=0)
  {alert(this.name + ' wins!' + x.name + ' is dead')}
  };


}
var enemy_two = new Enemy({
  name: 'Satan',
  health: 90
});



}());
