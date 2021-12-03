
var delta,deltaImg;
var bg, bgImg;
var obstacle

function preload() {
deltaImg = loadAnimation("Run1.png","Run2.png","Run3.png","Run4.png");
groundImg = loadImage("Transporter1.png")
backImg = loadImage("1.png")
obstacleImg = loadImage("Bench.png")
}

function setup(){
    var canvas = createCanvas(750,400);
   
    delta = createSprite(100,285,40,40)
    delta.addAnimation("hello",deltaImg)
    delta.scale=0.2 
    ground1 = createSprite(95,350,600,100)
    ground1.addImage("zamen",groundImg)
    ground1.scale=1.5
    ground2 = createSprite(287.5,350,600,100)
    ground2.addImage("zamen",groundImg)
    ground2.scale=1.5
    ground3 = createSprite(480,350,600,100)
    ground3.addImage("zamen",groundImg)
    ground3.scale = 1.5;
    ground4 = createSprite(670,350,600,100)
    ground4.addImage("zamen",groundImg)
    ground4.scale = 1.5;

    
    
}

function draw(){
background(backImg)
drawSprites()
textSize(18)
stroke("blue")
text(mouseX+"x"+mouseY+"y",mouseX-10,mouseY)
spawnObs();




}
function spawnObs(){
if(frameCount % 60 === 0){
 obsatcle = createSprite(706,285,40,40)
//obstacle.addImage("bench",obstacleImg)
obsatcle.velocityX = -6
obsatcle.scale = 0.5;
obsatcle.lifetime = 120;
}








}