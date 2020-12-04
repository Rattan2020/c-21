var mR,fR;
var go1,go2,go3,go4;

function setup() {
  createCanvas(800,400);
  mR=createSprite(400, 200, 50, 30);
  fR=createSprite(400,200,30,50);

go1=createSprite(100,100,50,50);
go1.shapeColor="purple";
go2=createSprite(200,100,50,50);
go2.shapeColor="purple";
go3=createSprite(300,100,50,50);
go3.shapeColor="purple";
go4=createSprite(400,100,50,50);
go4.shapeColor="purple";



  mR.debug=true;
  fR.debug=true;
}

function draw() {
  background(0,0,0);  

mR.y=mouseY;
mR.x=mouseX;

if (isTouching(go1,mR)){
go1.shapeColor="red";
mR.shapeColor="red";
}
else{
  mR.shapeColor="green";
  go1.shapeColor="green";
}
  
  drawSprites();
}

