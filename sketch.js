var dog,happydog,database,food,foodStock;

function preload(){
dog1=loadImage("images/dogImg.png");
happydog=loadImage("images/dogImg1.png");
	
}

function setup() {
	createCanvas(500,500);
  
   database = firebase.database();
  dog=createSprite(250,250,250,250);
  dog.addImage("dog",dog1);
  dog.scale=0.2;

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
 
}


function draw() { 
  background(46,139,87); 

  if(keyWentDown(UP_ARROW)){
    writeStock(food);
    dog.addImage("dog",happydog);
  }

  drawSprites();
  

}
function readStock(data){
  food=data.val();
}
function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}



