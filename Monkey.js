var monkey = createSprite(200,340,10,10);
monkey.setAnimation("monkey");
var ground = createSprite(200,400,210000000000000000,20);
ground.velocityX=2;
ground.x=ground.width/2;
var bananaGroup = createGroup();




var ObstacleGroup = createGroup();


var count=0;
monkey.scale=0.2;

var SurvivalTime=0;
   
   
   
function draw() {
  background(255);

    monkey.velocityY =   monkey.velocityY + 0.8;
 spawnObstacles();
 spawnBanana();
 
      if(keyDown("space")){
     monkey.velocityY =-20;       
    } 
    
 monkey.velocityY = monkey.velocityY + 0.8;  
monkey.collide(ground);
monkey.collide(ObstacleGroup);


stroke("black");
textSize(20);
fill("black");
SurvivalTime=Math.ceil(frameCount/frameRate());
text("Survival Time: "+ SurvivalTime,100,50 );


 if (monkey.isTouching(bananaGroup)) {
   bananaGroup.destroyEach();
   //monkey.destroyEach();
   SurvivalTime=SurvivalTime+1;
 }





drawSprites();  


}


function spawnObstacles() {
  if(World.frameCount % 300 === 0) {
    var obstacle = createSprite(400,365,10,40);
    obstacle.setAnimation("Stone");
    obstacle.scale=0.2;
    obstacle.velocityX = -(6+count/100);
    ObstacleGroup.add(obstacle);
    
}
}



function spawnBanana() {
  if(World.frameCount % 80 === 0) {
    var Banana = createSprite(390,randomNumber(120,200),10,40);
    Banana.setAnimation("Banana");
    Banana.scale=0.1;
    Banana.velocityX = -(6+count/100);
    
    bananaGroup.add(Banana);
}
}



