const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var lstone, lmango
var boy, boyIMG;
var ground
var stone
var slingshot
var mango1,mango2,mango3,mango4,mango5,mango6,mango7;

function preload(){

  childIMG = loadImage("boy.png");
  treeIMG = loadImage("tree.png");
}

function setup() {

  createCanvas(1200, 600);

  engine = Engine.create();
  world = engine.world;

  boy = createSprite(300,520);
  boy.addImage(childIMG);
  boy.scale = 0.11;

  tree = createSprite(900,300);
  tree.addImage(treeIMG);
  tree.scale = 0.47;

  ground = new Ground(600,595,1200,10);

  stone = new Stone(242,460,50,50);

  mango1 = new Mango(700,180,60,60);
  mango2 = new Mango(820,100,60,60);
  mango3 = new Mango(860,230,60,60);
  mango4 = new Mango(990,210,60,60);
  mango5 = new Mango(1100,200,60,60);
  mango6 = new Mango(980,70,60,60);
  mango7 = new Mango(900,150,60,60);

  slingshot = new SlingShot(stone.body,{x: 242,y: 460});

  Engine.run(engine);
}

function draw() {
  
  background(200);
  
  drawSprites();

  ground.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();

  stone.display();

  slingshot.display();

  detectcollision(stone,mango1);
  detectcollision(stone,mango2);
  detectcollision(stone,mango3);
  detectcollision(stone,mango4);
  detectcollision(stone,mango5);
  detectcollision(stone,mango6);
  detectcollision(stone,mango7);
}

function mouseDragged(){

	Matter.Body.setPosition(stone.body,{x: mouseX, y: mouseY});
}
	
function mouseReleased(){
	
  slingshot.fly();
}

function keyPressed(){

if(keyCode === 32){

Matter.Body.setPosition(stone.body,{x: 242, y: 460});
slingshot.attach(stone.body);
}
}

function detectcollision(lstone,lmango){

  var distance = dist(lstone.body.position.x,lstone.body.position.y,lmango.body.position.x,lmango.body.position.y);
 
  if(distance <= lmango.r+lstone.r){

    Matter.Body.setStatic(lmango.body,false);
  }
}