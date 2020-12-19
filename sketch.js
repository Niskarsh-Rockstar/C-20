var movingRect,fixedRect
var fix1,move1

function setup() {
  createCanvas(800,400);
  movingRect=createSprite(400, 200, 50, 50);
  movingRect.shapeColor="green"
  movingRect.debug=true
  fixedRect=createSprite(500,200,50,70);

  fix1=createSprite(400,300,40,60);
  fix1.shapeColor="green"
  fix1.debug=true
  fix1.velocityX=3

  move1=createSprite(600,300,40,60);
  move1.shapeColor="green"
  move1.debug=true
  move1.velocityX=-3

  fixedRect.shapeColor="green"
  fixedRect.debug=true
}

function draw() {
  background("Black");

  
  movingRect.x=mouseX;
  movingRect.y=mouseY;
if(movingRect.x-fixedRect.x <= movingRect.width/2 + fixedRect.width/2 && fixedRect.x-movingRect.x <= movingRect.width/2 + fixedRect.width/2 
    && movingRect.y-fixedRect.y <= movingRect.height/2 + fixedRect.height/2 && fixedRect.y-movingRect.y <= movingRect.height/2 + fixedRect.height/2 ){
  fixedRect.shapeColor="red"
  movingRect.shapeColor="red"
}




else{
  fixedRect.shapeColor="green"
  movingRect.shapeColor="green"
}
if(move1.x - fix1.x <= move1.width/2 + fix1.width/2 && fix1.x - move1.x <= move1.width/2 + fix1.width/2){
 fix1.velocityX=fix1.velocityX * (-1);
 move1.velocityX=move1.velocityX * (-1);

}

if(move1.y - fix1.y <= move1.height/2 + fix1.height/2 && fix1.y - move1.y <= move1.height/2 + fix1.height/2){
  fix1.velocityY=fix1.velocityY * (-1);
  move1.velocityY=move1.velocityY * (-1);
 
 }





  drawSprites();
}