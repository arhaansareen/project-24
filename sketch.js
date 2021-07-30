const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase;
var computer, computerBase;
var playerarcher,computerarcher;
var arrow;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  playerBase = new PlayerBase(340, random(450, height - 300), 180, 150);
  player = new Player(285, playerBase.body.position.y - 153, 50, 180);
 
  //Create Player Archer Object
  playerarcher = new PlayerArcher(300,playerBase.body.position.y - 200 ,90,100);

  computerBase = new ComputerBase(
    width - 300,
    random(450, height - 300),
    180,
    150
  );
  computer = new Computer(
    width - 280,
    computerBase.body.position.y - 153,
    50,
    180
  );
  computerArcher = new ComputerArcher(
    width - 340,
    computerBase.body.position.y - 180,
    120,
    120
  );
  
  //Create an arrow Object
  arrow = new PlayerArrow(playerarcher.body.position.x,playerarcher.body.position.y,100,10);
  
}

function draw() {
  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

 
  playerBase.display();
  player.display();
  
  playerarcher.display();

  computerBase.display();
  computer.display();
  

 


  //Display arrow();
  arrow.display()
  //if Space (32) key is pressed call shoot function of playerArrow
  if(keyCode === 32){  
    arrow.shoot(playerarcher.body.angle);
    //Call shoot() function and pass angle of playerArcher
  }
}



