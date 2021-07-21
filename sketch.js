var bg,enemy1Group;
var player1
var score=0
var form
var gameState = 0
var bgg

function preload (){
  bg= loadImage("War.png");
  enemy= loadAnimation("attack1.png","attack2.png","attack3.png","attack4.png","attack5.png","attack6.png")
  player=loadAnimation("warrior1.png","warrior2.png","warrior3.png")
  bg1= loadImage("bg.2.jpg")
  bg2= loadImage("bg.3.jpg")
  bg3= loadImage("bg.4.jpg")
  gunsound= loadSound("gun.wav")
}


function setup() {
  createCanvas(displayWidth,displayHeight);
  
  form = new Form()
  player1=createSprite(200,200,50,50)
  player1.addAnimation("play",player)
  player1.scale=0.25


  enemy1Group=createGroup()
  //player1.debug=true
  player1.setCollider("rectangle",0,0,300,300)
}
function draw() {
  

  background(0); 
  if(gameState === 0){
    form.display()
  }
  if(gameState === 1){
    bgg=bg
    if(score>5){
      bgg=bg1
    }
    if(score>10){
      bgg=bg2
    }
    background(bgg); 
    spawnenemy() 
    //code for moving player
    //code for istouching
    if(player1.isTouching(enemy1Group)){
      enemy1Group.destroyEach();
      score=score+1;
      gunsound.play()
    }
    player1.y = World.mouseY
    drawSprites();
    textSize(30)
    fill("yellow")
    text("enemykill "+score,100,100)

  }
  if(gameState === 2){
    textSize(30)
    fill("yellow")
    text("story",20,50)
    text("There is fitting between warrior and monster ",50,100)
    text(" so story is that befor 100,200BC befor there",50,150)
    text("is king her city name mumbai in that city all",50,200)
    text(" people are very happy but in that one ",50,250)
    text("day monsters  attacked the city and stared harassing",50,300)
    text(" the innocent people the notice get to king so king ",50,350)
    text("start fit with monster to save the citizen",50,400)
    
    textSize(30)
    fill("red")
    text("how to play ",20,550)
    text("used your mouse to move player up and down",50,600)
    

  }
  
  
}
function spawnenemy() {
  //write code here to spawn the clouds
  if (frameCount % 80 === 0) {
     enemy1 = createSprite(displayWidth,120,40,10);
    enemy1.y = Math.round(random(100,displayHeight-200));
    enemy1.addAnimation("enmy",enemy)
  enemy1.scale=0.2
   
    enemy1.velocityX = -20-score/2;
    
     //assign lifetime to the variable
    enemy1.lifetime = 600;
    
 // enemy1.debug = true
    enemy1.setCollider("rectangle",0,0,300,300)
    //add each cloud to the group
  enemy1Group.add(enemy1);
  }
}