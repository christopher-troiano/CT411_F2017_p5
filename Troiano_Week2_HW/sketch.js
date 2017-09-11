var x;



function setup(){
    createCanvas(1000,1000)
//    x = width/2;
    
}


function draw(){
    background(7,250,100);
    
    
    noFill();   
    stroke(250);
    strokeWeight(3);
    for(var i = 0; i<width; i+=30) {
       
        for(var j= 0; j<height; j+=30){  
        rect(i, j, 30, 30);
        }
 
for(var j= 0; j<height; j+=300){ 
    fill(random(255),50,random(255),random(200));
        ellipse(i, j, 150, 150);
        }
     
    
    
    }
  
    
}

