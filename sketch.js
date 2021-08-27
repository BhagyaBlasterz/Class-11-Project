var ship, ship_runnin;
var ground, invisibleGround, groundImage;

function preload() {
  ship_running = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");

  groundImage = loadImage("sea.png")
}

function setup() {
createCanvas(1350, 600);
  
//create a ground sprite
ground = createSprite(775,300,1200,600);
ground.scale = 0.4;
ground.addImage("ground",groundImage);
ground.x = ground.width /2;
ground.velocityX = -2;
  

//create a ship sprite
ship = createSprite(100,300,20,50);
ship.addAnimation("running", ship_running);
ship.scale = 0.2;

console.log(ship.y||ship.x)
}

function draw() {
background(220);

if (ground.x < 505) {
  ground.x = ground.width /2;
}


drawSprites();
}
