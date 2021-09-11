var playerCount, allPlayers, gameState = 0;
var database, counttemp, playertemp;
var form, player, game; 
var back_img, back_img_King, back_img_Rob, back_img_Mur, back_img_Pol;
var newId, parray, contestantCountRef;
var checkboxking;
var p1,  p2, p3, p4;
function preload()
{
  back_img = loadImage("kind court.jpg");
  back_img_Pol = loadImage("policefinal.jpg");
  back_img_Mur = loadImage("murdererfinal.jpg");
  back_img_Rob = loadImage("robberfinal.jpg");
  back_img_King = loadImage("kingfinal.jpg");
}
function setup() {
  createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() 


{
if(playerCount === 4)
{
  game.updateState(1);
}
if(gameState === 1)
{
  clear();
  game.play();
}
if(gameState === 2)
{
  game.end();
}

}