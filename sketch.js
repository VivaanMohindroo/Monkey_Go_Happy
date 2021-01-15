var bananaImage
var bananaGroup
var obstacleImage
var obstacleGroup
var background
var score
var monkey
var ground

function preload(){
  backround=loadImage("jungle.png")
  monkey=loadAnimation("Monkey_01.png,Monkey_02.png,Monkey_03.png,Monkey_04.png,Monkey_05.png,Monkey_06.png,Monkey_07.png,Monkey_08.png,Monkey_09.png,Monkey_10.png")
  bananaImage=loadImage("banana.png")
  obstacleImage=loadImage("stone.png")
}

function setup() {
  createCanvas(500, 500);
  backround.addImage("jungle.png")
  ground.visibility=false
  backround.velocityX=6
}


function draw() {
  background.reset();
  if (bananaGroup.isTounching(player)){
    score=score+2
    bananaGroup.destroy();
  }
  switch(score){
    case 10: monkey.scale=0.12
      break
      case 20: monkey.scale=0.14
      break
      case 30: monkey.scale=0.16
      break
      case 40: monkey.scale=0.18
      break
      default:break
  }
    if(obsctaclesGroup.isTouching(monkey))
monkey.scale=0.2
  drawSprites();
      stroke("white")
      textSize(20)
      fill("white")
      text("Score: "+score,500,50)
}