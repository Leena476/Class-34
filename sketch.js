const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup(){
    
    createCanvas(800,800);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground (400,775,800,50);

    //last column
    box1 = new Box(700,700,80,80);
    box2 = new Box(700,620,80,80);
    box3 = new Box(700,540,80,80);
    box4 = new Box(700,460,80,80);
    box5 = new Box(700,380,80,80);
    box6 = new Box(700,300,80,80);
    box7 = new Box(700,220,80,80);

    //middle column
    box8 = new Box(620,700,80,80);
    box9 = new Box(620,620,80,80);
    box10 = new Box(620,540,80,80);
    box11 = new Box(620,460,80,80);
    box12 = new Box(620,380,80,80);
    box13 = new Box(620,300,80,80);
    box14 = new Box(620,220,80,80);

    //first column
    box15 = new Box(540,700,80,80);
    box16 = new Box(540,620,80,80);
    box17 = new Box(540,540,80,80);
    box18 = new Box(540,460,80,80);
    box19 = new Box(540,380,80,80);
    box20 = new Box(540,300,80,80);
    box21 = new Box(540,220,80,80);

    ball = new Ball(300,700,75);
    slingshot = new Slingshot(ball.body,{x:300,y:200});

}

function draw(){

    background(0);

    Engine.update(engine);

    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    ball.display();
    slingshot.display();

    textFont("Georgia");
    textSize(70);
    fill(random(100,255));
    text("Wrecking Ball",50,100);

}

function mouseDragged(){

    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});

}