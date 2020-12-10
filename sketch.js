const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var log1,log2,log3,log4;
var bird;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,360,70,70);
    box2 = new Box(920,360,70,70);
    ground = new Ground(600,height,1200,20);
    pig1=new pig(810,360);
    log1=new log(810,260,300,PI/2)

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig2=new pig(810,240);
    log2=new log(810,140,300,PI/2);
    
    box5= new Box(810,120,70,70);
    log3=new log(760,70,150,PI/7);
    log4=new log(885,70,150,PI/-7);

    bird=new Bird(100,100);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird.display();
    ground.display();
}