var thickness
var speed, weight ;
var bullet ;
var wall ;


function setup() {
  createCanvas(1600,400);

  speed=random(223,321);
  weight=random(30,52);

  thickness=random(22,83);
  
  bullet=createSprite(50, 200, 50, 5);
  bullet.shapeColor="white";
  bullet.debug=true;

  wall=createSprite(1200, 200, thickness, height/2);
  wall.shapeColor="pink";

  

}

function draw() {
  background("black"); 

  hasCollided();

  bullet.velocityX=speed;
  
  if(hasCollided(bullet, wall))
  {
   bullet.velocityX=0;

   var damage = 0.5*weight*speed*speed/thickness*thickness*thickness;
    
    if(damage>10)
   {
      wall.shapeColor=color(255,0,0) ;
   }

   

    if(damage<10)
    {
      car.shapeColor=color(0,255,0) ;
    }

  }

  drawSprites();
}


function hasCollided(lbullet,lwall)
{
  bulletRightEdge=lbullet.x +lbullet.width;
  wallLeftEdge=lwall.x;
  if (bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false
}