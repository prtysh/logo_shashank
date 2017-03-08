var x = 250;
var reducing = true;
var limit = 250;
function setup() {
  createCanvas(400,400);
  background(51);
  }

function draw() {
  background(51);
  noFill();
  stroke(255);

  x=x-5;
  if (x<=-250){x=250}

  ellipse(200,200,x,250);
  console.log(x);
  console.log(reducing);



}
