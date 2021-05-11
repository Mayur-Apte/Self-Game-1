var player, bow, arrow, arrowGroup,opponent;
var flag = [];
var score = 0;


function preload(){
  arrowImage = loadImage("arrow0.png");
  playerImage = loadImage("Archer.png");
   Zombie1 = loadAnimation("mayur/f1.png","mayur/f2.png","mayur/f3.png","mayur/f4.png");
   Zombie2 = loadAnimation("mayur/o1.png","mayur/o2.png","mayur/o3.png","mayur/o4.png");
   Zombie3 = loadAnimation("mayur/s1.png","mayur/s2.png","mayur/s3.png","mayur/s4.png");
   Zombie4 = loadAnimation("mayur/z1.png","mayur/z2.png","mayur/z3.png","mayur/z4.png");
  // Zombie1 = loadImage("mayur/f1.png");
  // Zombie2 = loadImage("mayur/o1.png");
  // Zombie3 = loadImage("mayur/s1.png");
  // Zombie4 = loadImage("mayur/z1.png");
  
  
  backgroundImage = loadImage("bg.png");
}


function setup() {
  createCanvas(displayWidth,displayHeight);
  
  player = createSprite(180,displayHeight-150,40,40);
  player.addImage(playerImage);
  player.scale = 0.75;

  arrowGroup = new Group();
  ZombieGroup = new Group();

 


}

function draw() {
  background(backgroundImage);  
  drawSprites();
  createZombies();


   if(keyCode == 39){
     player.velocityY = 5;
  }
   if(keyCode == 37){
     player.velocityY = -5;
   }
   if(keyWentDown("SPACE")){
     createArrow();
   }

   if(arrowGroup.isTouching(ZombieGroup)){
     //ZombieGroup.destroyEach();
     flag.shift();
     
     arrowGroup.destroyEach();
     score+=1;
   }
   
   fill("white");
   textSize(30)
   text("Score "+ score, displayWidth-200,50);
   
   

  } 
function createArrow() {
    var arrow= createSprite(30,displayHeight-200,10,10);
    arrow.addImage(arrowImage);
    arrow.x =player.x;
    //arrow.y=player.y;
    arrow.velocityX = 4;
    arrow.lifetime = displayWidth;
    arrow.scale = 0.4;
    arrowGroup.add(arrow);
}

function createZombies(){
  if(frameCount%100==0){
    opponent = createSprite(displayWidth,displayHeight-150,40,40);
  //opponent.addAnimation("f1",Zombie1);
  var Zombie = Math.round(random(1,4));
  opponent.velocityX = -3;
  ZombieGroup.add(opponent);
  
  switch(Zombie){
    case 1: opponent.addAnimation("f3", Zombie2);
    flag.push(opponent);
    break;
    case 2: opponent.addAnimation("f2",Zombie3);
    flag.push(opponent);
    opponent.y = displayHeight-100;
    opponent.scale = 1.2;
    break;
    case 3: opponent.addAnimation("f4",Zombie4);
    flag.push(opponent);
    break;
    case 4: opponent.addAnimation("f1",Zombie1);
    flag.push(opponent);
    break;
  }
}
}