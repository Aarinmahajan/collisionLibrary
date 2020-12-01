var fixedRect,movingRect;
var gameObject1,gameObject2,gameObject3;

function setup() {
  createCanvas(800,800);
  fixedRect=createSprite(600, 400, 50, 80);
  movingRect=createSprite(400, 200, 80, 30);
  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";
  gameObject1=createSprite(100, 100, 50, 50);
  gameObject2=createSprite(200, 100, 50, 50);
  gameObject3=createSprite(300, 100, 50, 50);
  gameObject1.shapeColor="green";
  gameObject2.shapeColor="green";
  gameObject3.shapeColor="green";
  //fixedRect.debug="true";
  //movingRect.debug="true";


}

function draw() {
  background(0,0,0);
  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
 //console.log(movingRect.x,fixedRect.width/2);
  

 //isTouching();
 
 if(isTouching(gameObject3,movingRect)){
  movingRect.shapeColor="red";
  gameObject3.shapeColor="red";
 }else {
  gameObject3.shapeColor="green";
  movingRect.shapeColor="green";
 }

  drawSprites();
}

