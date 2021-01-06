var fixedRect,movingRect;

function setup() {
  createCanvas(1200,800);
 fixedRect= createSprite(600,400,50,80);
 fixedRect.shapeColor="blue";
 fixedRect.debug=true

 movingRect= createSprite(400,200,80,30);
 movingRect.shapeColor="blue";
 movingRect.debug=true
}

function draw() {
  background("red"); 
  movingRect.x=mouseX;
  movingRect.y=mouseY; 

  if(movingRect.x-fixedRect.x < movingRect.width/2+fixedRect.width/2 &&
    fixedRect.x-movingRect.x < movingRect.width/2+fixedRect.width/2 &&
    movingRect.y-fixedRect.y < movingRect.height/2+fixedRect.height/2 &&
    fixedRect.y-movingRect.y < movingRect.height/2+fixedRect.height/2 
    ){
      fixedRect.shapeColor="yellow";
      movingRect.shapeColor="yellow";
    }
    else{
      fixedRect.shapeColor="blue";
      movingRect.shapeColor="blue";
    }
    

  drawSprites();
}