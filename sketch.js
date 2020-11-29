
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  boy= new Boy(200,650)
tree= new Tree(450,450)
stone1=new Stone(100,575)
chain1=new Chain(stone1.body,{x:100,y:575})
mango1=new Mango(700,350)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  boy.display()
tree.display()
  stone1.display()
  chain1.display()
  mango1.display()


detectollision(stone1,mango1);




  drawSprites();
 
}

function mouseDragged(){
    
    Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
    
}

 
function mouseReleased(){
    
    chain1.fly();
}

