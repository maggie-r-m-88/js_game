
var Enemy = function (name){
  this.name = name;
  this.health = 100;
  switch (this.type) {
    case 1:
      attack_pt = 10;
      special_pt = 20;
    break;
    case 2:
      attack_pt = 15;
      special_pt = 25;
    break;
    case 3:
        attack_pt = 5;
        special_pt = 30;
    break;
  };
  this.attack= function (attackee){
      return attackee.health = attackee.health - _.random(2,10);
  };
  this.special= function (attackee){
    return attackee.health = attackee.health - _.random(10, 50);
  };
};

var Good = function (options){
  var special_pt, attack_pt, attackee;
  var options= options || {};
  this.name = options.name;
  this.type = options.type;
  this.health = 100;
  switch (this.type) {
    case 1:
      attack_pt = 10;
      special_pt = 20;
    break;
    case 2:
      attack_pt = 15;
      special_pt = 25;
    break;
    case 3:
        attack_pt = 8;
        special_pt = 30;
    break;
  };
  this.attack= function (attackee){
    return attackee.health = attackee.health - _.random(2,10);
  };
  this.special= function (attackee){
    return attackee.health = attackee.health - _.random(10, 50);
  };
};


var player,
 monster;
$('.welcome button').on('click', function (event){

  event.preventDefault();

//create instance of good guy
    player = new Good({
    name: $(this).text(),
    type: parseInt($(this).attr('name'))

    });
//create instance of bad guy
   monster = new Enemy('Satan');

    $('.welcome').fadeOut(500,function (){

    $('.ggName').prepend(player.name).find('.ggHealth').text(player.health);
    $('.bbName').prepend(monster.name).find('.bbHealth').text(player.health);
    $('.fight').fadeIn();

  });

});


$('#fight').on('click', function(event){
  event.preventDefault();


player.attack(monster)
if (monster.health >0){
 $('.bbHealth').text(monster.health);
 }
else{
    $('.bbHealth').text('0');
    $('.bbName').css('text-decoration', 'line-through').css('color', 'black');
    $('#fight').hide();
    $('#game-over').css('display', 'block');
   $('.game-over-message').prepend("GAME OVER, " + monster.name + " , good has triumphed over evil.");


  }

 monster.attack(player)
 if (player.health >0){
  $('.ggHealth').text(player.health);
  }
 else{
     $('.ggHealth').text('0');
     $('.ggName').css('text-decoration', 'line-through').css('color', 'black');
     $('#fight').hide();
     $('#game-over').css('display', 'block');
     $('.game-over-message').prepend("GAME OVER, " + player.name + " , better luck next time.");


   }


//else {
//$('.bgHealth')text('0');
//$('.bgName').css('text-decoration', 'line-through').css('color', 'red');
//}

//if (player.health <=0) {
//  players dead
//$('.ggHealth')text('0');
//$('.bgName').css('text-decoration', 'line-through').css('color', 'red');
//}
// good guy will attack bad guy
//bad guys health will decrease
//player.attack(monster);
//$('.bbHealth').text(monster.health);
//bad guy will retaliate
//good guys health will decrease
//monster.attack(player);
//$('.ggHealth').text(player.health);



});
