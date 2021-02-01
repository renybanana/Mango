
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

    mango1=new mango(1100,40,30);
	mango2=new mango(1120,100,30);
	mango3=new mango(1010,100,30);
	mango4=new mango(1150,200,30);
	mango5=new mango(1050,200,30);
	mango6=new mango(960,200,30);
	
	treeObj=new tree(1050,580);
	rock = new Rock(20,40,50,50);
	groundObject=new ground(width/2,600,width,20);
	chain= new Chain(rock.body,{x:240,y:420});

	Engine.run(engine);

}

function draw() {

  background(230);
  
  image(boy ,200,340,200,300);
  
  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  chain.display();
  rock.display();

  groundObject.display();
}
function mouseDragged(){
    Matter.Body.setPosition(rock.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    chain.fly()
}
