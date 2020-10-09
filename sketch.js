const Engine = Matter.Engine,
      World = Matter.World,
      Events = Matter.Events,
      Bodies = Matter.Bodies

var engine,world; 
var particles = [];
var plinkos=[];
var rows=[];
var ground;
var rows;
var partice;
var score = 0;
var place;
var gameState = "play";
var count = 0;



var rowsHeight = 150;

function setup() {

  
  createCanvas(500,500);
  
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,500,3000,10);

  for(var j = 40; j<= width; j = j+50){
    plinkos.push(new Plinko(j , 55))
  }

  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,85))
  }

  for(var j = 40; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,120))
  }

  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,150))
  }

  for(var j = 40; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,185))
  }

  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,225))
  }

  for(var j = 40; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,265))
  }

  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,305))
  }

  for(var k = 0; k <=width; k = k+80){
    rows.push(new Rows(k, height-rowsHeight/2, 10, rowsHeight));
  }
}

function draw() {
  background(0);

  Engine.update(engine,30);
  textSize(35);
  text("Score : " + score , 50 , 50);
  mousePressed();
  textSize(35)
  text(" 500 ", 5, 400);
  text(" 500 ", 80, 400);
  text(" 500 ", 160, 400);
  text(" 500 ", 240, 400);
  text(" 400 ", 320, 400);
  text(" 400 ", 400, 400);
  

    for(var i = 0; i < particles.length; i++){
      particles[i].display();
    }

  
    for(var k = 0; k<rows.length;k++){
      rows[k].display();
    }


    for(var j = 0; j<plinkos.length;j++){
      plinkos[j].display();
    }

    if (score === 2500) {
      gameState = "end";
    }

    if (count = 5) {
      gameState = "end";
    }

    if (gameState === "end") {
      textSize(100);
    text("Game Over", 250,250);
    }

    if (partice !== null) {
      partice.display();
      if (partice.body.position.y > 400) {
        if (partice.body.position.x < 300) {
          score = score + 500;
        }
        else{
          score = score + 400;
        }
      }
    }
//rows.display();
 ground.display();

  drawSprites();
}

function mousePressed() {
  if (gameState !== "end") {
    count++
    partice = new Particle(mouseX , 10 , 10 , 10);
  }
}