var ball,img,paddle;
var gameState;

function preload() {
  ballimg = loadImage('ball.png');
  paddleimg=loadImage("paddle.png")
}
function setup() {
  createCanvas(400, 400);

    ball=createSprite(60,200,20,20);
    ball.addImage (ballimg); 
    ball.velocityX=9;  
    paddle=createSprite(350,200,20,100);
    paddle.addImage(paddleimg);
  
}

function draw() {
  background(205,70,0);
  
  edges=createEdgeSprites();

  //Bounce Off the Left Edge only
  ball.bounceOff(edges[0]); 
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);

  paddle.collide(edges);

  if(keyDown(UP_ARROW)) {
    paddle.y=paddle.y-20;
  }

  if(keyDown(DOWN_ARROW)) {
    paddle.y=paddle.y+20;
  }

  if (ball.isTouching(paddle)) {
    explosion();  
  }
    
  if (ball.x>400) {
    ball.destroy();
    paddle.destroy();
    textSize(20);
    text("Game Over",150,200)
  }

  drawSprites();
}

function explosion() {
  rand=Math.round(random(-4,10));
  rand2=Math.round(random(-4,-10));
  ball.velocityY=rand;
  ball.velocityX=rand2;
}
