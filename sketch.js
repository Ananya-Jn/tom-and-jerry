var jungle, jungleimg
var tom, tomimg, cat1, cat4
var jerry, jerryimg, mouse1, mouse4

function preload() {
   jungleimg= loadImage('garden.png')
   tomimg = loadAnimation( 'tomTwo.png', 'tomThree.png')
   jerryimg= loadAnimation('jerryTwo.png', 'jerryThree.png')
   cat1= loadImage('tomOne.png')
   mouse1 = loadImage('jerryOne.png')
   cat4= loadAnimation('tomFour.png')
   mouse4= loadAnimation('jerryFour.png')
}

function Setup(){
  jungle = createSprite(1000, 1000);
  jungle.addImage(jungleimg);
  jungle.scale = 1;

  tom = createSprite(850, 50);
  tom.addImage(cat1);
  tom.scale = 1;

  jerry = createSprite(100, 50);
  jerry.addImage(mouse1);
  jerry.scale= 1;

}

function keyPressed(){

  if (keyDown('left')){
    tom.velocityX= -5
    tom.addAnimation('running', tomimg)
    tom.changeAnimation('running')
    jerry.addAnimation('teasing', jerryimg)
    jerry.changeAnimation('teasing')
  }
 
  if (tom.x - jerry.x < tom.width/2 - jerry.width/2){
    tom.velocityX=0
    tom.addAnimation('last', cat4)
    tom.changeAnimation('last')
    tom.x= 290
    jerry.addAnimation('Last',mouse4)
    jerry.changeAnimation('Last')
    }
 
 }
 