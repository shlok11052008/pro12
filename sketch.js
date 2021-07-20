var garden,rabbit;
var gardenImg,rabbitImg;
var appleImg;
var orangeLeafImg;
var leafImg;
var redleaf

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeLeafImg = loadImage("orangeleaf.png");
  leafImg = loadImage("leaf.png")
  redlImg = loadImage("redImage.png")
  }
   


function setup(){
  
  createCanvas(400,400);
  

garden=createSprite(200,200);
garden.addImage(gardenImg);


rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  if(frameCount%80 === 0){
  
  createApple();
  createOrangeleaf();
  createleaf();
  createredleaf();
  }



rabbit.x = World.mouseX;



    
    
  








  drawSprites();

}
function createApple(){
     
    apple = createSprite(random(50,350,),40,10,10);
    apple.addImage(appleImg);
    apple.scale = 0.05;
    apple.velocityY = 1;
    
  }

  function createOrangeleaf() {
    if(frameCount%60 === 0){
    orangeLeaf = createSprite(random(50,350,),40,10,10);
    orangeLeaf.addImage(orangeLeafImg);
    orangeLeaf.scale = 0.05;
    orangeLeaf.velocityY = 3;
    }
     }
  function createleaf() {
    if(frameCount%90 === 0){
  leaf = createSprite(random(50,350,),40,10,10);
  leaf.addImage(leafImg);
  leaf.scale = 0.05;
  leaf.velocityY =  2;
    }
    }
    function createredleaf() {
      if(frameCount%50 === 0){
      redleaf = createSprite(random(50,350,),40,10,10)
      redleaf.addImage(redlImg)
      redleaf.scale = 0.05;
      redleaf.velocityY = 1;
      }
      
    }