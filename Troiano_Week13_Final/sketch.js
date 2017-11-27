var mic;

var backdrop = {
    x:1400,
    y:1000,    
    pic:0,
}

var btn = {
    w:75,
    h:75,  
}


var index = 0;

var state = 0;

var s0 = 0;
var s1 = 0;
var s2 = 0;
var s3 = 0;

function preload(){
    
    guy = loadImage("Character.png");
    rockImg = loadImage("rock.png");
    rapImg = loadImage("rap.png");
    operaImg = loadImage("opera.png");
    
    rockSong = loadSound("rock.mp3");
    rapSong = loadSound("rap.mp3");
    operaSong = loadSound("opera.mp3");
    
    playBut = loadImage("play.png");
    pauseBut = loadImage("pause.png");
    nextBut = loadImage("next.png");
    backBut = loadImage("back.png");

}

function setup(){
    
    createCanvas(1400, 1000);
    mic = new p5.AudioIn();
    mic.start();
    
}

function draw(){
   background(0);
    
    
    if(state == 0){
        image(guy,0,0, backdrop.x,backdrop.y);
    
    }else if(state ==1){
        image(rockImg,0,0, backdrop.x,backdrop.y);
//        rockSong.play();
        
        }else if(state==2){
       image(rapImg,0,0, backdrop.x,backdrop.y);
//        rapSong.play(); 
//        rockSong.stop();    
    
        }else if(state==3){
             image(operaImg,0,0, backdrop.x,backdrop.y);
//        operaSong.play();
        }

    
//    MOUTH MOVING
    var vol = mic.getLevel();
    noStroke();
    fill(96,0,0);
    ellipse(520,660,310,vol*600);
    
    console.log(vol);
    
    image(playBut,1087,680,btn.x,btn.y);
    image(nextBut,1182,690,btn.x,btn.y);
    image(backBut,1013,690,btn.x,btn.y);
    
}

function mousePressed(){
    
    if (mouseX > 1182 && mouseX < 1182+btn.w && mouseY > 690 && mouseY < 690+btn.h){
        rockSong.play();
        if(state < 3){

        state= state + 1;
        }else{
            state= state=0;
        }

    }
    
    
//    rockSong.play();
//    
//    if(state < 3){
//        
//    state= state + 1;
//    }else{
//        state= state=1;
//    }

    
}