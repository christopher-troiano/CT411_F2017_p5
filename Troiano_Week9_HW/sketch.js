var counter = 0;
var speed = .5;

function preload(){
    rick= loadImage("rick.png");
    morty= loadImage("morty.png");
    portal= loadImage("portal.png");
    space= loadImage("background.jpg");
    
}

function setup(){
    createCanvas(1920,1080);
    imageMode(CENTER);
}

function draw(){
    
    push();
    translate(960,540);
    image(space,0,0,1920,1080)
    rotate(radians(counter));
    scale(1.25);
    image(portal,0,0)
    pop();

    push();
    translate(960,540);
    rotate(radians(counter*8));
    scale(mouseX/700);
    image(rick,0,0)
    pop();
    
    push();
    translate(960,540);
    rotate(radians(counter*8));
    scale(mouseY/500);
    image(morty,50,0)
    pop();
    

         counter+= speed;
   
    
    
   
}
    

function mousePressed(){

}

    