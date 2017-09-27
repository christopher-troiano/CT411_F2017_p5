var circX;
var circY;
var circDia = 100;
var circRad = circDia/2;
var d;
var redCol = 255;
var isClicked = false;

function setup(){
    createCanvas(windowWidth, windowHeight);
    
    circX = 1000
    circY = height/2;
}


function draw(){
    background(redCol,100,100);
    
    ellipse(circX,circY, circDia, circDia);
    d = dist(circX, circY, mouseX, mouseY);
    
//    if(d < circRad){
//        redCol = 0;
//            
//    }else{
//      redCol = 255;  
//        
//    }
     
    
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