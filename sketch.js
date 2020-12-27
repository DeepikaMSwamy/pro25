const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ground,paper1,dustbin1,dustbin2,dustbin3
function preload() {
	
	dustbinImg = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
  world = engine.world;
 
  dustbin1 = new Box(1150, 570, 20, 150);
	dustbin2 = new Box(950, 570, 20, 150);
	dustbin3 = new Box(1049, 650, 225, 20);
 

  ground=new Ground(1200, 680, 3000, 20);

  paper1=new Paper(60,670,40,40)
 
	

  Engine.run(engine)
	
}


function draw() {
 
  
  rectMode(CENTER);
  background("grey");

  Engine.update(engine);
  
  ground.display();
  paper1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  image(dustbinImg,955,460,190,180);
  
  drawSprites();
 
}

function keyPressed(){
    if(keyCode===UP_ARROW){
    Body.applyForce(paper1.body,paper1.body.position,{x:90,y:-170})
    
    }
    
}

