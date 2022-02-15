let j;
function setup() {
  // put setup code here
  createCanvas(400,200);
  j = 0;
}
 function draw() {
  // put drawing code here
  background(200);
  strokeWeight(2);
 
  // warna latar 
  fill(0,0,0); 
 rect(200,-30,199,169); 

  // warna jalan dan jalan
  fill(105,105,105);
  rect(10,160,60,20);
  rect(90,160,60,20);
  rect(250,160,60,20);
  rect(330,160,60,20);

  //garis jalan
  line(400,140,0,140);

  // matahari
  var y = 200+20*Math.sin(PI*j/20);
  var r = 70+10*Math.sin(PI*j/20);
  j +=1;
  fill(253,154,115);
  ellipse(358,30,r,r);
  ellipse(345,20,2,2);
  ellipse(365,20,2,2);
  arc(355,27,40,40,radians(720),radians(180));

  //pembatas
  line(180,20000,200,0)
  
  // cover latar
  fill(255,255,255); 
 rect(1,-30,199,169); 

  // bulan 
  fill(255,255,0);
  ellipse(35,30,60,60);
  ellipse(19,20,9,9);
  ellipse(45,20,9,9);
  arc(34,30,40,40,radians(720),radians(180));
 
 // gunung 1 dan 2
 fill(0,255,0);
 
 arc(40,140,80,60,radians(180),radians(720));
 arc(130,140,80,60,radians(180),radians(720));

 // gunung 3 dan 4
 arc(250,140,r,r,radians(180),radians(720));
 arc(340,140,r,r,radians(180),radians(720));

}