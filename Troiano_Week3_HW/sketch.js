var state = false;

function setup(){
    createCanvas(1000,1000);
    
}


function draw(){
background(50,160,150);

if(state ==false){    
   
    noStroke();
    fill(237,188,109);
    ellipse(501,582,500,500);
    
    noStroke();
    fill(185,28,27,19);
    ellipse(393,499,32,32);
        
        noStroke();
    fill(185,28,27,19);
    ellipse(609,499,32,32);
        
        noStroke();
    fill(0,19);
    ellipse(501,715,19,19);
    
    noStroke();
    fill(0);
    ellipse(501,160,85,85)
    
    noStroke();
    fill(237,203,109);
    ellipse(501,269,215,215);
    
    noStroke();
    fill(0);
    ellipse(459,232,50,5);
    
    noStroke();
    fill(0);
    ellipse(542,232,50,5);
    
     noStroke();
    fill(185,28,27);
    ellipse(500,313,90,5);
    
s = "DON'T TOUCH MY BELLY!";
    textSize(32);
fill(250);
text(s, 310, 900, 500, 100);
    
    }else{
        
     background(random(250),random(25), random(25));
                                             
//    body
    noStroke();
    fill(237,188,109);
    ellipse(501,582,500,500);
            
    noStroke();
    fill(185,28,27,19);
    ellipse(393,499,32,32);
        
        noStroke();
    fill(185,28,27,19);
    ellipse(609,499,32,32);
        
        noStroke();
    fill(0,19);
    ellipse(501,715,19,19);
        
        
    noStroke();
    fill(0);
    ellipse(501,160,85,85)
        
//    head
    noStroke();
    fill(237,203,109);
    ellipse(501,269,215,215);
        
//    left eye
    noStroke();
    fill(250);
    ellipse(459,232,50,50);
        
    noStroke();
    fill(0);
    ellipse(459,232,8,8);
        
//    right eye
    noStroke();
    fill(250);
    ellipse(542,232,50,50);
        
        noStroke();
    fill(0);
    ellipse(542,232,8,8);
        
//    mouth
     noStroke();
    fill(185,28,27);
    ellipse(500,313,90,90);

    }
    
}

function mousePressed(){
    state= !state;
    
}