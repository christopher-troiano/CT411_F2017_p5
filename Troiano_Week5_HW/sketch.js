var circX = 0;
var circY = 0;
var speed = 10;
var speedY = 6;


function preload(){
dvd = loadImage("dvd-512.png");  
    
}


function setup(){

    createCanvas (windowWidth,windowHeight);
}

function draw(){
    
    
  background(0);
    
    
    image(dvd,circX ,circY,400,400);
    circX = circX +speed;
    circY = circY +speedY;
    
   
    
    
    if (circX > windowWidth-400 || circX < 1){
        speed = speed *-1;
        }
    if(circY > windowHeight-275 || circY < -80){
       speedY = speedY *-1;
        
       
       }
}
 

