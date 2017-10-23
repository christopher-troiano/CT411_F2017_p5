var space = {
    x:0,
    y:0,
    left:0,
    right:0,
    top:0,
    bottom:0 
}

var btn ={
    w: 157,
    h: 47
}

var b1;
var meow;

function preload(){
   
    space.create = createImg("space.gif");
    
    sound3 = loadSound("UFO_Gun.mp3");
    sound2 = loadSound("UFO_landing.mp3");
    sound1 = loadSound("UFO_Takeoff.mp3");
    sound4 = loadSound("Warp_speed.mp3");
  
    b1 = loadImage("button-01.png");
    b2 = loadImage("button-02.png");
    b3 = loadImage("button-03.png");
    b4 = loadImage("button-04.png");
    
    hb1 = loadImage("button-01hover.png");
    hb2 = loadImage("button-02hover.png");
    hb3 = loadImage("button-03hover.png");
    hb4 = loadImage("button-04hover.png");
}

function setup(){
    canvas = createCanvas(1500,844);
    
    canvas.position(0,0)
};

function draw(){
    space.create.position(space.x,space.y);
  
    image(b1,545,588,btn.w,btn.h);
    image(b2,715,588,btn.w,btn.h);
    image(b3,545,645,btn.w,btn.h);
    image(b4,715,645,btn.w,btn.h);
    
    //    btn1 hover
    if (mouseX > 545 && mouseX < 545+btn.w && mouseY > 588 && mouseY < 588+btn.h){
        image(hb1,545,588,btn.w,btn.h);
    }
    
//    btn2 hover
     if (mouseX > 715 && mouseX < 715+btn.w && mouseY > 588 && mouseY < 588+btn.h){
       image(hb2,715,588,btn.w,btn.h);
    }
    
//       btn3 hover
     if (mouseX > 545 && mouseX < 545+btn.w && mouseY > 645 && mouseY < 645+btn.h){
       image(hb3,545,645,btn.w,btn.h);
    }
    
//       btn4 hover
     if (mouseX > 715 && mouseX < 715+btn.w && mouseY > 645 && mouseY < 645+btn.h){
        image(hb4,715,645,btn.w,btn.h);
    }
    
}



function mousePressed(){
    
//    btn1 sound
    if (mouseX > 545 && mouseX < 545+btn.w && mouseY > 588 && mouseY < 588+btn.h){
        sound2.play();
    }
    
//    btn2 sound
     if (mouseX > 715 && mouseX < 715+btn.w && mouseY > 588 && mouseY < 588+btn.h){
        sound1.play();
    }
    
//       btn3 sound
     if (mouseX > 545 && mouseX < 545+btn.w && mouseY > 645 && mouseY < 645+btn.h){
        sound3.play();
    }
    
//       btn4 sound
     if (mouseX > 715 && mouseX < 715+btn.w && mouseY > 645 && mouseY < 645+btn.h){
        sound4.play();
    }
}

    