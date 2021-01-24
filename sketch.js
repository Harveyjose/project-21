var box1,box2,box3,box4,mainBox,border1,border2,border3,border4;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    //canvas = createSprite(800,600);
    createCanvas(800,600)
    background("black")
    box1  =createSprite(100,550,180,30)
    box1.shapeColor = "green"
    box2  =createSprite(300,550,180,30)
    box2.shapeColor = "cyan"
    box3  =createSprite(500,550,180,30)
    box3.shapeColor = "red"
    box4  =createSprite(700,550,180,30)
    box4.shapeColor = "yellow"
    border1 = createSprite(400,10,800,10)
    border1.shapeColor = "purple"
    border2 = createSprite(400,590,800,10)
    border2.shapeColor = "brown"
    border3 = createSprite(790,300,10,600);
    border3.shapeColor = "blue"
    border4 = createSprite(10,300,10,600);
    border4.shapeColor = "white"
    mainbox = createSprite(random(25,500),100,30,30);
    mainbox.velocityX = 4;
    mainbox.velocityY = 4;
    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background("black");
    //mainbox.x = mouseX
    //mainbox.y = mouseY

    //create edgeSprite

    if(mainbox.isTouching(box1)){
       mainbox.shapeColor = "green"
       music.play();
        }
    if(mainbox.isTouching(box3)){
        mainbox.shapeColor = "red"
        music.play();
     }
     if(mainbox.isTouching(box4)){
        mainbox.shapeColor = "yellow"
        music.play();
     }
     if(mainbox.isTouching(box2)){
        mainbox.shapeColor = "cyan"
        music.stop();
        mainbox.velocityX = 0;
     }


     mainbox.bounceOff(box4);
     mainbox.bounceOff(box3);
     mainbox.bounceOff(box2);
     mainbox.bounceOff(box1);
     mainbox.bounceOff(border1);
     mainbox.bounceOff(border2);
     mainbox.bounceOff(border3);
     mainbox.bounceOff(border4);
    drawSprites();
    //add condition to check if box touching surface and make it box
}
function isTouching(box1,box2,box3,box4,mainbox){
       mainbox.x - box1.x <= mainbox.width/2 + box1.width/2
    && box1.x - mainbox.x <= mainbox.width/2 + box1.width/2
    && mainbox.y - box1.y <= mainbox.height/2 + box1.height/2
    && box1.y - mainbox.y <= mainbox.height/2 + box1.height/2
    mainbox.x - box2.x <= mainbox.width/2 + box2.width/2
    && box2.x - mainbox1.x <= mainbox.width/2 + box2.width/2
    && mainbox.y - box2.y <= mainbox.height/2 + box2.height/2
    && box2.y - mainbox.y <= mainbox.height/2 + box2.height/2
    mainbox.x - box3.x <= mainbox.width/2 + box3.width/2
    && box3.x - mainbox1.x <= mainbox.width/2 + box3.width/2
    && mainbox.y - box3.y <= mainbox.height/2 + box3.height/2
    && box3.y - mainbox.y <= mainbox.height/2 + box3.height/2
    mainbox.x - box4.x <= mainbox.width/2 + box4.width/2
    && box4.x - mainbox.x <= mainbox.width/2 + box4.width/2
    && mainbox.y - box4.y <= mainbox.height/2 + box4.height/2
    && box4.y - mainbox1.y <= mainbox.height/2 + box4.height/2
}
function bounceOff(mainbox,box1,box2,box4,box4) {
    if(mainbox.x - box1.x <= mainbox.width/2 + box1.width/2
    && box1.x - mainbox.x <= mainbox.width/2 + box1.width/2 
    && mainbox.x - box2.x <= mainbox.width/2 + box2.width/2
    && box2.x - mainbox.x <= mainbox.width/2 + box2.width/2
    && mainbox.x - box3.x <= mainbox.width/2 + box3.width/2
    && box3.x - mainbox.x <= mainbox.width/2 + box3.width/2
    && mainbox.x - box4.x <= mainbox.width/2 + box4.width/2
    && box4.x - mainbox.x <= mainbox.width/2 + box4.width/2
    ){
    box1.velocityX = box1.velocityX * (-1)
    mainbox.velocityX = mainbox.velocityX * (-1);
    box2.velocityX = box2.velocityX * (-1)
    mainbox.velocityX = mainbox.velocityX * (-1);
    box3.velocityX = box3.velocityX * (-1)
    mainbox.velocityX = mainbox.velocityX * (-1);
    box4.velocityX = box4.velocityX * (-1)}
        if(mainbox.y - box1.y <= mainbox.height/2 + box1.height/2
        && box1.y - mainbox.y <= mainbox.height/2 + box1.height/2 
        && mainbox.y - box2.y <= mainbox.height/2 + box2.height/2
        && box2.y - mainbox.y <= mainbox.height/2 + box2.height/2
        && mainbox.y - box3.y <= mainbox.height/2 + box3.height/2
        && box3.y - mainbox.y <= mainbox.height/2 + box3.height/2
        && mainbox.y - box4.y <= mainbox.height/2 + box4.height/2
        && box4.y - mainbox.y <= mainbox.height/2 + box4.height/2
    ){
           box1.velocityY = box1.velocityY * (-1)
           mainbox.velocityY = mainbox.velocityY * (-1);
           box2.velocityY = box2.velocityY * (-1)
           mainbox.velocityY = mainbox.velocityY * (-1);
           box3.velocityY = box3.velocityY * (-1)
           mainbox.velocityY = mainbox.velocityY * (-1);
           box4.velocityY = box4.velocityY * (-1)
           mainbox.velocityY = mainbox.velocityY * (-1);
          }

        }        
//&& mainbox.x - box2.x <= mainbox.width/2 + box2.width/2
    //&& box2.x - mainbox.x <= mainbox.width/2 + box2.width/2
    //&& mainbox.x - box3.x <= mainbox.width/2 + box3.width/2
    //&& box3.x - mainbox.x <= mainbox.width/2 + box3.width/2
    //&& mainbox.x - box4.x <= mainbox.width/2 + box4.width/2
    //&& box4.x - mainbox.x <= mainbox.width/2 + box4.width/2
    //box2.velocityX = box2.velocityX * (-1)
    //mainbox.velocityX = mainbox.velocityX * (-1);
    //box3.velocityX = box3.velocityX * (-1)
    //mainbox.velocityX = mainbox.velocityX * (-1);
    //box4.velocityX = box4.velocityX * (-1)
    //&& mainbox.y - box2.y <= mainbox.height/2 + box2.height/2
        //&& box2.y - mainbox.y <= mainbox.height/2 + box2.height/2
        //&& mainbox.y - box3.y <= mainbox.height/2 + box3.height/2
        //&& box3.y - mainbox.y <= mainbox.height/2 + box3.height/2
        //&& mainbox.y - box4.y <= mainbox.height/2 + box4.height/2
        //&& box4.y - mainbox.y <= mainbox.height/2 + box4.height/2
        