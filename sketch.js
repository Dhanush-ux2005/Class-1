var box;

function setup() {
  createCanvas(1600,400);
  box = createSprite(400,400,60,60);
  box.shapeColor=color("#3242a8")

}

function draw() 
{
   background("red");
   

  if (keyIsDown(RIGHT_ARROW)) 
  {
    box.position.x = box.position.x +5;
    box.shapeColor=color("#a832a2")
  }

    if (keyIsDown(LEFT_ARROW)) 
  {
    box.position.x= box.position.x -5;
    box.shapeColor=color("#a88132")
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    box.position.y = box.position.y - 5;
    box.shapeColor=color("#32a844")
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    box.position.y = box.position.y + 5;
    box.shapeColor=color("#329ea8")
  }

  drawSprites();
}




