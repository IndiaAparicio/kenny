let sound1;
let sound2;
let sound3;
let sound4;
let sound5;
let sound6;
let sound7;
let sound8;
let sound9;
let sound10;
let sound11;
let sound12;
let sound13;
let sound14;
let sound15;
let running=false;

let song;

// function setup(){
//   sound1 = loadSound('./sound1.m4a');
// }

// function draw(){

// if(mouseIsPressed){
//   sound1.play();
// }

// }


//pong clone
//mouse to control both paddles

var paddleA, paddleB, ball, wallTop, wallBottom;
var MAX_SPEED = 20;
let face1;
let score = 0;
let gif;
let backgroundColor_R = 50;
let backgroundColor_G = 50;
let backgroundColor_B = 50;
let ballSize= 100;
let bool1 = false;
let bool2 = false;
let bool3 = false;
let bool4 = false;
let bool6 = false;
let bool5 = false;
let bool7 = false;
let bool8 = false;
let bool9 = false;
let bool10 = false;
let bool11 = false;
let bool12 = false;
let bool13 = false;
let bool14 = false;
let bool15 = false;
let bool16 = false;
let bool17 = false;
let bool18 = false;
let bool19 = false;
let bool20 = false;
let bool21 = false;
let bool22 = false;
let bool23 = false;
let bool24 = false;

let b1 = true;
let b2 = true;
let b3 = true;
let b4 = true;
let b5 = true;
let b6 = true;
let b7 = true;
let b8 = true;
let b9 = true;
let b10 = true;
let b11 = true;
let b12 = true;
let b13 = true;
let b14 = true;
let b15 = true;
let b16 = true;
let b17 = true;
let b18 = true;
let b19 = true;
let b20 = true;
let b21 = true;
let b22 = true;
let b23 = true;



function preload(){
  face1 = loadImage('./img/face-1.png');
  face2 = loadImage('./img/face-2.png');
  face3 = loadImage('./img/face-3.png');
  face4 = loadImage('./img/face-4.png');
  face5 = loadImage('./img/face-5.png');
  face6 = loadImage('./img/face-6.png');
  face7 = loadImage('./img/face-7.png');
  face8 = loadImage('./img/face-8.png');
  face9 = loadImage('./img/face-9.png');
  face10 = loadImage('./img/face-10.png');
  face11 = loadImage('./img/face-11.png');
  face12 = loadImage('./img/face-12.png');
  face13 = loadImage('./img/face-13.png');
  face14 = loadImage('./img/face-14.png');
  face15 = loadImage('./img/face-15.png');
  face16 = loadImage('./img/face-16.png');
  face17 = loadImage('./img/face-17.png');
  face18 = loadImage('./img/face-18.png');
  face19 = loadImage('./img/face-19.png');
  face20 = loadImage('./img/face-20.png');
  face21 = loadImage('./img/face-21.png');
  face22 = loadImage('./img/face-22.png');
  face23 = loadImage('./img/face-23.png');
  face24 = loadImage('./img/face-24.png');

 
}

function setup() {
  sound1 = loadSound('./sound1.m4a');
  sound2 = loadSound('./sound/sund2.m4a');
  sound3 = loadSound('./sound/sound3.m4a');
  sound4 = loadSound('./sound/sound4.m4a');
  sound5 = loadSound('./sound/sound5.m4a');
  sound6 = loadSound('./sound/sound6.m4a');
  sound7 = loadSound('./sound/sound7.m4a');
  sound8 = loadSound('./sound/sound8.m4a');
  sound9 = loadSound('./sound/sound9.m4a');
  sound10 = loadSound('./sound/sound10.m4a');
  sound11 = loadSound('./sound/sound11.m4a');
  sound12 = loadSound('./sound/sound12.m4a');
  sound13 = loadSound('./sound/sound13.m4a');
  sound14 = loadSound('./sound/sound14.m4a');
  sound15 = loadSound('./sound/sound15.m4a');

  song = loadSound('./sound/song.mpeg');

  createCanvas(windowWidth, windowHeight);
  //frameRate(6);

  paddleA = createSprite(30, height/2, 10, 100);
  paddleA.immovable = true;

  paddleB = createSprite(width-28, height/2, 10, 100);
  paddleB.immovable = true;

  wallTop = createSprite(width/2, -30/2, width, 30);
  wallTop.immovable = true;

  wallBottom = createSprite(width/2, height+30/2, width, 30);
  wallBottom.immovable = true;

  ball = createSprite(width/2, height/2, ballSize, ballSize);
  ball.addImage(face1);
  ball.maxSpeed = MAX_SPEED;

  paddleA.shapeColor = paddleB.shapeColor =ball.shapeColor = color(255, 255, 255);

  ball.setSpeed(MAX_SPEED, -180);
 
  
}

let tutorial = true;
function draw() {
  background(backgroundColor_R,backgroundColor_G,backgroundColor_B);



  if(score < 24){
    if(tutorial){
      textSize(30);
      fill(155);
      text('Zum starten klicken', windowWidth/2-155, windowHeight/2);
    }
    
    if(mouseIsPressed){
      tutorial = false;
      running = true;
      rect(0,0,200,200);
    }
    if(running){
      game();
    }
  }else{
    kenny();
  }


  

}



function game(){
  if(score === 1){
    ball.addImage(face1);
    bool1 = true;
    playSound(sound5, b1);
    b1 = false;
  }else if(score === 2){
    ball.addImage(face2);
    bool2 = true;
    playSound(sound2, b2);
    b2 = false;
  }else if(score === 3){
    ball.addImage(face3);
    bool3 = true;
    playSound(sound3, b3);
    b3 = false;
  }else if(score === 4){
    ball.addImage(face4);
    bool4 = true;
    playSound(sound4, b4);
    b4 = false;
  }else if(score === 5){
    ball.addImage(face5);
    bool5 = true;
    playSound(sound5, b5);
    b5 = false;
  }else if(score === 6){
    ball.addImage(face6);
    bool6 = true;
    playSound(sound6, b6);
    b6 = false;
  }else if(score === 7){
    ball.addImage(face7);
    bool7 = true;
    playSound(sound7, b7);
    b7 = false;
  }else if(score === 8){
    ball.addImage(face8);
    bool8 = true;
    playSound(sound8, b8);
    b8 = false;
  }else if(score === 9){
    ball.addImage(face9);
    bool9 = true;
    playSound(sound9, b9);
    b9 = false;
  }else if(score === 10){
    ball.addImage(face10);
    bool10 = true;
    playSound(sound10, b10);
    b10 = false;
  }else if(score === 11){
    ball.addImage(face11);
    bool11 = true;
    playSound(sound11, b11);
    b11 = false;
  }else if(score === 12){
    ball.addImage(face12);
    bool12 = true;
    playSound(sound12, b12);
    b12 = false;
  }else if(score === 13){
    ball.addImage(face13);
    bool13 = true;
    playSound(sound13, b13);
    b13 = false;
  }else if(score === 14){
    ball.addImage(face14);
    bool14 = true;
    playSound(sound14, b14);
    b14 = false;
  }else if(score === 15){
    ball.addImage(face15);
    bool15 = true;
    playSound(sound15, b15);
    b15 = false;
  }else if(score === 16){
    ball.addImage(face16);
    bool16 = true;
    playSound(sound1, b16);
    b16 = false;
  }else if(score === 17){
    ball.addImage(face17);
    bool17 = true;
    playSound(sound14, b17);
    b17 = false;
  }else if(score === 18){
    ball.addImage(face18);
    bool18 = true;
    playSound(sound9, b18);
    b18 = false;
  }else if(score === 19){
    ball.addImage(face19);
    bool19 = true;
    playSound(sound8, b19);
    b19 = false;
  }else if(score === 20){
    ball.addImage(face20);
    bool20 = true;
    playSound(sound4, b20);
    b20 = false;
  }else if(score === 21){
    ball.addImage(face21);
    bool21 = true;
    playSound(sound7, b21);
    b21 = false;
  }else if(score === 22){
    ball.addImage(face22);
    bool22 = true;
    playSound(sound2, b22);
    b22 = false;
  }else if(score === 23){
    ball.addImage(face23);
    bool23 = true;
    playSound(sound13, b23);
    b23 = false;
  }else if(score === 24){
    ball.addImage(face24);
    bool24 = true;
  }

  if(bool1){
    image(face1,width/2 -650,height-100);
  }
  if(bool2){
    image(face2,width/2 -550,height-100);
  }
  if(bool3){
    image(face3,width/2 -450,height-100);
  }
  if(bool4){
    image(face4,width/2 -350,height-100);
  }
  if(bool5){
    image(face5,width/2 -250,height-100);
  }
  if(bool6){
    image(face6,width/2 -150,height-100);
  }
  if(bool7){
    image(face7,width/2 -50,height-100);
  }
  if(bool8){
    image(face8,width/2 +50,height-100);
  }
  if(bool9){
    image(face9,width/2 +150,height-100);
  }
  if(bool10){
    image(face10,width/2 +250,height-100);
  }
  if(bool11){
    image(face11,width/2 +350,height-100);
  }
  if(bool12){
    image(face12,width/2 +450,height-100);
  }
  if(bool13){
    image(face13,width/2 +550,height-100);
  }
  if(bool14){
    image(face14,width/2 -600,height-200);
  }
  if(bool15){
    image(face15,width/2 -500,height-200);
  }
  if(bool16){
    image(face16,width/2 -400,height-200);
  }
  if(bool17){
    image(face17,width/2 -300,height-200);
  }
  if(bool18){
    image(face18,width/2 -200,height-200);
  }
  if(bool19){
    image(face19,width/2 -200,height-200);
  }
  if(bool20){
    image(face20,width/2 -100,height-200);
  }
  if(bool21){
    image(face21,width/2,height-200);
  }
  if(bool22){
    image(face22,width/2 +100,height-200);
  }
  if(bool23){
    image(face23,width/2 +200,height-200);
  }
  if(bool24){
    image(face24,width/2 +300,height-200);
  }
  

  paddleA.position.y = constrain(mouseY, paddleA.height/2, height-paddleA.height/2);
  paddleB.position.y = constrain(mouseY, paddleA.height/2, height-paddleA.height/2);

  ball.bounce(wallTop);
  ball.bounce(wallBottom);

  var swing;
  if(ball.bounce(paddleA)) {
    swing = (ball.position.y-paddleA.position.y)/3;
    ball.setSpeed(MAX_SPEED, ball.getDirection()+swing);
    score += 1;
    backgroundColor_R = 250;
    backgroundColor_B = 0;
    backgroundColor_G = 100;
    MAX_SPEED += 10;
  }

  if(ball.bounce(paddleB)) {
    swing = (ball.position.y-paddleB.position.y)/3;
    ball.setSpeed(MAX_SPEED, ball.getDirection()-swing);
    score += 1;
    backgroundColor_B = 200;
    backgroundColor_R = 0;
    backgroundColor_G = 100;
    MAX_SPEED += 10;
  }

  if(ball.position.x<0) {
    ball.position.x = width/2;
    ball.position.y = height/2;
    ball.setSpeed(MAX_SPEED, 0);
  }

  if(ball.position.x>width) {
    ball.position.x = width/2;
    ball.position.y = height/2;
    ball.setSpeed(MAX_SPEED, 180);
  }

  drawSprites();

  fill(255);
  textSize(30);

  text('Wie alt wird Kenny?', windowWidth/2-155, 50);
  textSize(150);
  text(score, windowWidth/2-75, 190);
  
}

songPlaying = true;

function kenny(){

  if (songPlaying){
    song.play();
    songPlaying = false;
  }
  
  gif_createImg = createImg("./img/kenny-gif.gif");
  gif_createImg.position(windowWidth/2-175, 200);

  fill(255);
  textAlign(CENTER);

  textSize(120);
  text('24 JAHRE KENNY!!!', width/2, 150);

  textSize(50);
  text('Du bist eingeladen!', width/2, height-50);

  for (let i = 0; i < 10; i++){
    noStroke();
    fill(random(0,255),random(0,255),random(0,255));
    ellipse(random(width),random(height),random(10,30));
  }
}

function playSound(sound,bool){
  if(bool){
    sound.play();
  }
  

  // if (sound.isPlaying()) {
  //   sound.stop();
  // } else {
  //   sound.play();
  // }
}