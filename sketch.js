const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
function setup(){
var canvas = createCanvas(1200,400);
engine = Engine.create();
world = engine.world;
ground = new Ground(600,height - 10,1200,20);
platform = new Ground(900,height - 100,400,20);
constraint = new SlingShot(ground);
}
function draw(){
    background(0, 0, 0);
    Engine.update(engine);
    for (var i = 750; i < 1100; i = i + 50){
     block = new Box(i,height - 140, 50, 50);
     block.display();
    }
    for (var pos = 775; pos < 1050; pos = pos + 50 ){
        pink_block = new pinkBox(pos,height - 190, 50, 50);
        pink_block.display();
    }
    for (var posX = 800; posX < 1050; posX = posX + 50 ){
        green_block = new greenBox(posX,height - 240, 50, 50);
        green_block.display();
    }
    for (var X = 825; X < 1000; X = X + 50 ){
        gray_block = new grayBox(X,height - 290, 50, 50);
        gray_block.display();
    }
    for (var position = 850; position < 1000; position = position + 50 ){
        pink_block1 = new pinkBox(position,height - 340, 50, 50);
        pink_block1.display();
    }
    ground.display();
    platform.display();
    
}
