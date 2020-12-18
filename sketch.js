
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400, 400);
  
  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(200, 350, 800, 20);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);
  
  FoodGroup = new Group();
  obstaclesGroup = new Group();
}


function draw() {
  background(255);
  
  var survivalTime = 0;
  stroke("white");
  textSize(20);
  fill("black");
  
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time: " + survivalTime, 100, 50);
  
  
  if(ground.x < 0){
    ground.x = ground.width/2;
  }
  
  if(keyDown("space")){
    monkey.velocityY = -12;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
  spawnFood();
  
  spawnObstacles();
  
  drawSprites();
  
}

function spawnFood(){
  if(frameCount % 80 === 0){
    banana = createSprite(400, 120, 40, 10);
    banana.y = Math.round(random(120, 200));
    banana.addImage(bananaImage);
    banana.scale = 0.1 ;
    banana.velocityX = -3;
    banana.lifetime = 100;
    
    FoodGroup.add(banana);
  }
}

function spawnObstacles(){
  if (frameCount % 300 === 0){
    obstacle = createSprite(400, 325, 10, 40);
    obstacle.velocityX = -(6 + 2 /5);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.lifetime = 100;
    obstaclesGroup.add(obstacle);
  }
}





