var jungle, jungleimg
var tom, tomimg, cat1, cat4
var jerry, jerryimg, mouse1, mouse4

function preload() {
   jungleimg= loadImage('images/garden.png')
   tomimg = loadAnimation( 'images/cat2.png', 'images/cat3.png')
   jerryimg= loadAnimation('images/mouse2.png', 'images/mouse3.png')
   cat1= loadAnimation('images/cat1.png')
   mouse1 = loadAnimation('images/mouse1.png')
   cat4= loadAnimation('images/cat4.png')
   mouse4= loadAnimation('images/mouse4.png')
}

function Setup(){
  createCanvas(1000,800);
  //jungle = createSprite(1000, 1000);
  //jungle.addImage(jungleimg);
 // jungle.scale = 1;

  tom = createSprite(850, 50);
  tom.addAnimation("tomSleeping",cat1);
  tom.scale = 1;

  jerry = createSprite(100, 50);
  jerry.addAnimation("jerryStanding",mouse1);
  jerry.scale= 1;

}
function draw(){
  background(jungleimg)

  if (tom.x - jerry.x < tom.width/2 - jerry.width/2){
    tom.velocityX=0
    tom.addAnimation('last', cat4)
    tom.changeAnimation('last')
    tom.x= 290
    jerry.addAnimation('Last',mouse4)
    jerry.changeAnimation('Last')
    }

    drawSprites();
}
function keyPressed(){

  if (keyDown('left')){
    tom.velocityX= -5
    tom.addAnimation('running', tomimg)
    tom.changeAnimation('running')
    jerry.addAnimation('teasing', jerryimg)
    jerry.changeAnimation('teasing')
  }
 
  
 
 }
 
 
