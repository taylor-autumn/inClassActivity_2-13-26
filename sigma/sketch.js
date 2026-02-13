let glitch1=[], glitch2=[],glitch3=[];
let r=5; let angle=0; let t=0;

//stretch 2 stuff
let r2=5; let angle2=0; let t2=0;

let msg="GLITCH"; let size=100;

function preload(){  
  font=loadFont("glitch.otf");
}


function setup() {
  createCanvas(600, 640);
  angleMode(DEGREES);
  
  glitch1=font.textToPoints(msg,35,180,size, {sampleFactor: 0.8});
  
  glitch2=font.textToPoints(msg,50,380,size, {sampleFactor: 0.8});
  
  glitch3=font.textToPoints(msg,50,580,size, {sampleFactor: 0.8});
  
  
}

function draw() {
  background("rgb(0,0,0)");
  let x = r*cos(angle);
  let y = r*sin(angle);
  
  let x2=r2*sin(angle2);
  let y2=r2*cos(angle2);
  
  let x3=r*4*cos(angle);
  
  for (let i=0; i<glitch1.length;i++){
    push();
    strokeWeight(0.7);
    stroke(0);
    fill(random(255), random(255), random(255));
    triangle(glitch1[i].x,glitch1[i].y,glitch1[i].x+x+5,glitch1[i].y,glitch1[i].x,glitch1[i].y+10);
    pop();
    
    push();
    stroke(random(255), random(255), random(255))
    line(glitch2[i].x+x3,glitch2[i].y,glitch2[i].x,glitch2[i].y);
    pop();
    
    push();
    stroke("white");
    line(glitch3[i].x,glitch3[i].y,glitch3[i].x+x2,glitch3[i].y-y);
    stroke(random(255), random(255), random(255));
    line(glitch3[i].x,glitch3[i].y,glitch3[i].x-x2,glitch3[i].y+y);
    pop();
    
  }
  
  // text on top of stretch1
  fill(random(255), random(255), random(255),100);
  textSize(size);
  textFont(font);
  text(msg,35+x3,180+y);
  
  // let increment = t;
  // t++;
  angle+=3;
  angle2+=5;  

}

