//makes the 3 components of the physics engine
const Engine = Matter.Engine; //namespacing
const World = Matter.World;
const Bodies = Matter.Bodies;

//makes the objects which will obey physics
 var engine,world,ground,ball;
function setup() {
  //creates canvas
  createCanvas(400,400);
  //creates the engine
  engine = Engine.create();
  //creating the world
  world = engine.world;

  //makes the ground static due to its settings
  var ground_options = {
    isStatic: true 
  }
  //makes the ground in your computer's memory
  ground = Bodies.rectangle(200,390,400,30,ground_options);
  //adds ground to the world
  World.add(world,ground);
  
  //makes the ball bounce like a normal ball when it hits a surface
  var ball_options = {
    restitution: 1
  }
  //makes the ball in the computer's memory
  ball = Bodies.circle(200,200,10,ball_options);
  //adds the ball in the world
  World.add(world,ball);

  //console.log(object.position.x);
  //console.log(object.position.y);

}

function draw() {
  //makes the background and gives it a color
  background(0);  
  //constantly updates the engine
  Engine.update(engine);
  //makes the x and y positioning of the rect function like sprite positioning
  rectMode(CENTER);
  //displays the ground using the rect function
  rect(ground.position.x,ground.position.y,400,30);
  //works like rectMode, but for the ellipse function
  ellipseMode(RADIUS);
  //displays the ball using the ellipse function
  ellipse(ball.position.x,ball.position.y,10);
}