const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var score;
score=0;
var bgImage;

function preload() {
  getTime();
}
function setup() {
  var canvas = createCanvas(1300,500);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(650,490,1300,20);
  base1 = new Ground(700,440,320,15);
  base2 = new Ground(1100,300,250,15);

  stone = new Stone(200,400,50);
  
  block1 = new Blocks(580,403);
  block2 = new Blocks(620,403);
  block3 = new Blocks(660,403);
  block4 = new Blocks(700,403);
  block5 = new Blocks(740,403);
  block6 = new Blocks(780,403);
  block7 = new Blocks(820,403);

  block8 = new Blocks(620,343);
  block9 = new Blocks(660,343);
  block10 = new Blocks(700,343);
  block11 = new Blocks(740,343);
  block12 = new Blocks(780,343);

  block13 = new Blocks(660,283);
  block14 = new Blocks(700,283);
  block15 = new Blocks(740,283);

  block16 = new Blocks(700,223);

  block17 = new Blocks(1020,263);
  block18 = new Blocks(1060,263);
  block19 = new Blocks(1100,263);
  block20 = new Blocks(1140,263);
  block21 = new Blocks(1180,263);

  block22 = new Blocks(1060,203);
  block23 = new Blocks(1100,203);
  block24 = new Blocks(1140,203);

  block25 = new Blocks(1100,143);

  sling = new Slingshot(stone.body,{x:200,y:250});
  Engine.run(engine);
}

function draw() {
  if (bgImage) {
    background(bgImage);
  }  

  fill("red");
  textFont("Franklin Gothic Medium");
  textSize(30);
  text("Score: "+score,50,50);
  ground.display();
  base1.display();
  base2.display();

stone.display();
sling.display();
  fill(135,206,234);
  block1.display();
  block1.score();
  block2.display();
  block2.score();
  block3.display();
  block3.score();
  block4.display();
  block4.score();
  block5.display();
  block5.score();
  block6.display();
  block6.score();
  block7.display();
  block7.score();

  fill("pink");
  block8.display();
  block8.score();
  block9.display();
  block9.score();
  block10.display();
  block10.score();
  block11.display();
  block11.score();
  block12.display();
  block12.score();

  fill("turquoise");
  block13.display();
  block13.score();
  block14.display();
  block14.score();
  block15.display();
  block15.score();

  fill("darkgrey");
  block16.display();
  block16.score();

  fill("pink");
  block17.display();
  block17.score();
  block18.display();
  block18.score();
  block19.display();
  block19.score();
  block20.display();
  block20.score();
  block21.display();
  block21.score();

  fill("turquoise");
  block22.display();
  block22.score();
  block23.display();
  block23.score();
  block24.display();
  block24.score();

  fill("darkgrey");
  block25.display();
  block25.score();

  fill ("white");
  stroke ("blue");
  strokeWeight(2);
  textSize(25);
  text("Drag the hexagonal stone and release it to launch and hit the blocks.",250,50);
  text("Press space to launch it again.",250,80);
  drawSprites();
}

function mouseDragged() {
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}
function mouseReleased() {
  sling.fly();
}
function keyPressed() {
  if (keyCode===32) {
    sling.attach(stone.body);
  }
}
async function getTime() {
  var date = await fetch('http://worldtimeapi.org/api/timezone/Asia/Kolkata');
  var dateJSON = await date.json();
  var timedate = dateJSON.datetime;
  var hour = timedate.slice(11,13);
  if (hour>06&&hour<12) {
    bgImage=loadImage("day.png");
  } 
  else if(hour>12&&hour<17) {
    bgImage=loadImage("afternoon.png");
  }
  else if(hour>17&&hour<21) {
    bgImage=loadImage("evening.png");
  } else {
    bgImage=loadImage("night.png");
  }
}