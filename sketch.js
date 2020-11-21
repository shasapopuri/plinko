const Engine = Matter.Engine;
const World= Matter.World;
const Constraint = Matter.Constraint;
const Bodies = Matter.Bodies;

var engine, world;
var division1,division2,division3,division4,division5,division6,division7;
var width=100;
var height=480;
var divisionheight=300;
var plinkos=[];
var particles=[];
var divisions=[];
var ground;

function setup() {
  var canvas = createCanvas(480,570);
  engine = Engine.create();
  world = engine.world;
  for(var k=0; k <= width; k = k+80){
    divisions.push(new Log(k,height-divisionheight/2,10,divisionheight))
  }
  for(var j = 40; j <= width; j=j+50){
    plinkos.push(new Plinko(j,75,5));
  }
  for(var j = 15; j <= width-10; j=j+50){
    plinkos.push(new Plinko(j,175,5));
  }
  
  ground=new Ground(240,570,500,20);
 
}

function draw() {
  background(0);  
  Engine.update(engine);
  for(var k = 0; k < divisions.length ; k++){
    divisions[k].display();
  }
  for(var k = 0; k < plinkos.length ; k++){
    plinkos[k].display();
  }
  if(frameCount%60===0){
    particles.push(new Particles(random(width/2-10,width/2+10),10,7));
  }

  for(var k = 0; k < particles.length ; k++){
    particles[k].display();
  }
 
ground.display();

}





/*
}*/

