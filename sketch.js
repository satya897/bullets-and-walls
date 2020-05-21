
var bullet,bullet1,bullet2,wall,wall1,wall2;
var speed,weight,thickness;


function setup() {

  createSprite(900,400,1900, 1200);
  createCanvas(1900,1200);
  rectMode(CENTER);

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  bullet=createSprite(50,90,20,20);
  bullet.shapeColor=color(250,250,250);

  wall=createSprite(1200,100,thickness,100);
  wall.shapeColor=color(80,80,80);

  bullet.velocityX = speed;

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  bullet2=createSprite(50,300,20,20);
  bullet2.shapeColor=color(250,250,250);

  wall2=createSprite(1200,310,thickness,100);
  wall2.shapeColor=color(80,80,80);

  bullet2.velocityX = speed;

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  bullet1=createSprite(50,490,20,20);
  bullet1.shapeColor=color(250,250,250);

  wall1=createSprite(1200,500,thickness,100);
  wall1.shapeColor=color(80,80,80);

  bullet1.velocityX = speed;
}

function draw() {
  background(255,255,255); 
  
 if(hascollided(bullet,wall,bullet.velocityX)){
   bullet.velocityX=0;
  var damage=0.5 *weight *speed*speed/(thickness*thickness*thickness);
  bullet.velocityX = 0;
  
  if(damage>10){
    bullet.velocityX = 0;
    wall.shapeColor=color(255,0,0);
  }

if(damage<10){
  bullet.velocityX = 0;
  wall.shapeColor=color(0,0250,0);
}
 }

 if(hascollided(bullet2,wall2,bullet2.velocityX)){
  bullet2.velocityX=0;
  var damage=0.5 *weight *speed*speed/(thickness*thickness*thickness);
  bullet2.velocityX = 0;

  if(damage>10){
    bullet2.velocityX = 0;
    wall2.shapeColor=color(255,0,0);
  }

if(damage<10){
  bullet2.velocityX = 0;
  wall2.shapeColor=color(0,0250,0);
}

 }

 if(hascollided(bullet1,wall1,bullet1.velocityX)){
  bullet1.velocityX = 0;
  var damage=0.5 *weight *speed*speed/(thickness*thickness*thickness);
  bullet1.velocityX = 0;

  if(damage>10){
    bullet1.velocityX = 0;
    wall1.shapeColor=color(255,0,0);
  }
if(damage<10){
  bullet1.velocityX = 0;
  wall1.shapeColor=color(0,0250,0);
}
 }
  drawSprites();

}

function hascollided(lbullet,lwall,velocity)
{
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge + velocity/1.7>=wallLeftEdge)
  {
    return true
  }
  return false
}

function Hascollided(lbullet1,lwall1)
{
  bullet1RightEdge=lbullet1.x+lbullet1.width;
  wall1LeftEdge=lwall1.x;
  if(bullet1RightEdge>=wall1LeftEdge)
  {
    return true
  }
  return false


}

function hasCollided(lbullet2,lwall2)
{
  bullet2RightEdge=lbullet2.x+lbullet2.width;
  wall2LeftEdge=lwall2.x;
  if(bullet2RightEdge>=wall2LeftEdge)
  {
    return true
  }
  
  return false

}