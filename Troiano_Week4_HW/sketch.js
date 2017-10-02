var circDia = 800;
var circRad = circDia/2;
var d;
var isClicked = false;

var happykid;
var sadkid;
var poppins;

function preload(){
    happykid=loadImage("icecream_fail-04.png");
    sadkid=loadImage("icecream_fail-03.png");
    poppins = loadFont(Poppins-MediumItalic.ttf); 
}

function setup(){
    createCanvas(1400, 1000);
    
    circX = 1000
    circY = height/2;
}


function draw(){
    background(52,148,155);
    
    d=dist(width/2, height/2, mouseX, mouseY);
    
    if(d < circRad){
       imageMode();
    image(sadkid, width/2, height/2); 
        fill(255);
           textSize(42);
           text("Nvm. =( ", 800, 650, 600, 700);
       }else{
           background(255,184,156);
       imageMode(CENTER);
    image(happykid, width/2, height/2); 
           fill(255);
           textSize(42);
           text("Nothing could ruin this day!", 800, 650, 600, 700);
       }
}

function mousePressed(){
    
    if(d < circRad && isClicked ==true){
        redCol = 0;
        isClicked = !isClicked;
            
    }else if(d < circRad && isClicked ==false) {
      redCol = 255; 
      isClicked = !isClicked;
    }
    
    
}