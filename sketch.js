//Create variables here
var dog;
var happyDog;
var database;
var foodS;
var foodStock;

function preload()
{
  //load images here
  dogHappy=loadImage("dogImg1.png")
  dogImage=loadImage("dogImg.png")
}

function setup() {
  database=firebase.database();
	createCanvas(500, 500);
  dog=createSprite(300,250,10,10)
  dog.addImage(dogImage)
  dog.scale=0.2
  foodStock=database.ref('Food')
  foodStock.on("value",readStock)
}

function draw() {  
 background(46,139,87)
 if(keyWentDown(UP_ARROW)){
  writeStock(foodS)
  dog.addImage(dogHappy)
}
  drawSprites();
  fill("white")
  text("NOTE: Press UP_ARROW to feed Milk", 10,10)
  text("FOOD STOCK:"+foodS,100,100)
  

}
function readStock(data){
foodS=data.val();
}

function writeStock(x){

  if(x<=0){
    x=0
  }else{
    x=x-1
  }
  database.ref('/').update({
    Food:x
  })
}



