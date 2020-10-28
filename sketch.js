//Create variables here
var dog,happyDog,database,foodS,foodStock,dogImage;

function preload()
{
  dogImage = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png")
}

function setup() {
  database=firebase.database();
  createCanvas(500, 500);
  dog = createSprite(250,250,250,250);
  dog.addImage(dogImage);
  dog.scale=0.2;
  foodStock=database.ref('food');
  foodStock.on("value",readStock);
  
  
}


function draw() {  
background(46,139,87);
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
dog.addImage(happyDog);
}
  drawSprites();
  //add styles here

}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
database.ref('/').update({
  food:x
})

}

