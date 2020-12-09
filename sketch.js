//Create variables here
var dog, dogImg, happyDog, databaseFirbase, foodS, foodStock

function preload()
{

  //load images here
  happyDog = loadImage("dogImg1.png")
  dogImg = loadImage("dogImg.png")
}

function setup() {
  createCanvas(500, 500);
  dog = createSprite(250,250,10,10)
  dog.addImage(dogImg);
  databaseFirbase = firebase.database;
  foodStock=databaseFirbase.ref('food')
  foodStock.on("value",)
}


function draw() {  
background(46,139,87)
  
if(keyWentDown(UP_ARROW)) {
  writeStock(foodS)
  dog.addImage(happyDog)
}

  drawSprites();
dog.display();

}

function writeStock(x) {

  if( x<=0 ) {
    x=0
  } else {
    x=x-1
  }
  database.ref('/').update({
    Food:x
  })
}

function readStock(data) {
foodS=data.val();
}
