var ship, ship_sailing, edges;
var seaImage;

function preload(){
  ship_sailing = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  seaImage = loadImage("sea.png");
}

function setup(){
  createCanvas(600,200);
  //creating ship
  ship = createSprite(50,160,20,50);
  ship.addAnimation("sailing",ship_sailing,);
  edges = createEdgeSprites;
  //adding scale and position to ship
  ship.scale = 0.5
  ship.x=50
}

function draw() {
  //set background color
  background("white");
  //logging the y position of the ship
  console.log(ship.y)
  //jump when space key is pressed
  if(keyDown("space")){
    ship.velocityY = -10;
    ship.velocityY = ship.velocityY + 0.5;
  //stop trex from falling down
    trex.collide(edges[3])
drawSprites();
  }
 
}