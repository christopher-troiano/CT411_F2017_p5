var mic;

var backdrop = {
    x:1400,
    y:1000,    
    pic:0,
    music:1,
}

var songs = [
    "rockSong",
    "rapSong",
    "operaSong",
];


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
    
    songs[0] = loadSound("rock.mp3");
    songs[1] = loadSound("rap.mp3");
    songs[2] = loadSound("opera.mp3");
    
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
    
     
    
       //    IMAGE CHANGING IFS
    if(backdrop.pic == 0){
        image(guy,0,0, backdrop.x,backdrop.y);
    
    }else if(backdrop.pic == 1){
        image(rockImg,0,0, backdrop.x,backdrop.y);
        
        
        
        }else if(backdrop.pic==2){
       image(rapImg,0,0, backdrop.x,backdrop.y);
            
    
        }else if(backdrop.pic==3){
             image(operaImg,0,0, backdrop.x,backdrop.y);
        
        }

    
    
    
//    MOUTH MOVING
    var vol = mic.getLevel();
    noStroke();
    fill(96,0,0);
    ellipse(520,660,310,vol*600);
    
    console.log(vol);
    
//    image(playBut,1087,680,btn.x,btn.y);
    image(nextBut,1182,690,btn.x,btn.y);
    image(backBut,1013,690,btn.x,btn.y);
    
}

function mousePressed(){
    
    
//    NEXT BUTTON
    if (mouseX > 1182 && mouseX < 1182+btn.w && mouseY > 690 && mouseY < 690+btn.h){
        
         //    music CHANGING IFS
       
        if(backdrop.music == 0){
        songs[2].stop();
        
        }else if(backdrop.music == 1){
        songs[0].play();
     
        }else if(backdrop.music==2){
        songs[1].play(); 
        songs[0].stop();    
    
        }else if(backdrop.music==3){
        songs[2].play(); 
        songs[1].stop();
        }
        
        if(backdrop.pic < 3){
        backdrop.pic= backdrop.pic + 1;
        }else{
            backdrop.pic= backdrop.pic=0;
        }
        
          if(backdrop.music < 3){
        backdrop.music= backdrop.music + 1;
        }else{
            backdrop.music= backdrop.music=0;
        }
        
    }
    
    
//    BACK BUTTON
    if (mouseX > 1013 && mouseX < 1013+btn.w && mouseY > 690 && mouseY < 690+btn.h){
        
         //    music CHANGING IFS
       
        if(backdrop.music == 0){
        songs[2].stop();
        
        }else if(backdrop.music == 1){
        songs[0].play();
     
        }else if(backdrop.music==2){
        songs[1].play(); 
        songs[0].stop();    
    
        }else if(backdrop.music==3){
        songs[2].play(); 
        songs[1].stop();
        }
        
        if(backdrop.pic < 3){
        backdrop.pic= backdrop.pic + 1;
        }else{
            backdrop.pic= backdrop.pic=0;
        }
        
          if(backdrop.music < 3){
        backdrop.music= backdrop.music + 1;
        }else{
            backdrop.music= backdrop.music=0;
        }
       
        
    }

//    //    play BUTTON
//    if (mouseX > 1087 && mouseX < 1087+77 && mouseY > 680 && mouseY < 680+77){
//        
//        
//         //    music CHANGING IFS
//       
//    if(backdrop.music == 0){
//        songs[0].play();
//            songs[0].stop();
//        
//        }else if(backdrop.music == 1){
//            songs[2].stop();
//        songs[0].play();
//            
//     
//        }else if(backdrop.music==3){
////        songs[1].play(); 
//        songs[1].stop();    
//    
//        }else if(backdrop.music==3){
//        songs[2].play(); 
//        songs[1].stop();
//        }
//        
//        if(backdrop.pic < 1){
//        backdrop.pic= backdrop.pic + 1;
//        }else{
//            backdrop.pic= backdrop.pic=0;
//        }
//        
//          if(backdrop.music < 2){
//        backdrop.music= backdrop.music + 1;
//        }else{
//            backdrop.music= backdrop.music=0;
//        }
       
        
//    }

    
    
    
}