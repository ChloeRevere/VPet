//Create variables here
var dog
var happyDog
var database
var foodS
var foodStock
var dogImage
var happyDogImage

function preload()
{
  //load images here
  dogImage = loadImage("images/dogImg.png")
  happyDogImage = LoadImage("images/dogImg1.png")

}

function setup() {
  createCanvas(500, 500);
  
  dog = createSprite(250,250, 50, 50)
  dog.addImage(dogImage)
}


function draw() {  

  drawSprites();
  //add styles here

}



