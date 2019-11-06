//noprotect

var SP;
var Korn;
var MM;
var Liam;
var Song;
var amp;
var volhistory = [];

function preload() {
  SP = loadSound('Solara.mp3');
  Korn = loadSound('ComingUndone.mp3');
  MM = loadSound('TheFightSong.mp3');
  Liam = loadSound('InvisibleSun.mp3');
  Song = loadSound('Wii.mp3');
}

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  SP.play();
  //Korn.play();
  //MM.play();
  //Liam.play();
  //Song.play();
  amp = new p5.Amplitude();
}

function draw() {
  scale(width/400, height/400);
  background(0);
  fill(random(160, 255), random(0, 120), random(0, 120), 30);
  stroke(random(160, 255), random(0, 120), random(0, 120), 175);
  var vol = amp.getLevel();
  if (vol > 0.35) {
    background(255);
    fill(random(0, 120), random(0, 120), random(160, 255), 50);
    stroke(random(0, 120), random(0, 120), random(160, 255), 175);
  }
  volhistory.push(vol);
  translate(200, 200);
  strokeCap(ROUND);
  
  strokeWeight(vol*20);
    circle(0, 0, vol*200);
    circle(0, 0, vol*400);
    circle(0, 0, vol*800);
    circle(0, 0, vol*1600);
  
  strokeWeight(3);
  noFill();

  soundWave(180);
  soundWave(180);

  if (volhistory.length > 1000) {
    volhistory.splice(0, 1);
  }
}

function soundWave(a) {
 
  stroke(random(160, 255), random(0, 120), random(0, 120));
  var vol = amp.getLevel();
  if (vol > 0.35) {
    stroke(random(0, 120), random(0, 120), random(160, 255));
  }  
  
  rotate(a);
  beginShape();
  for (var i = 0; i < 1000; i++) {
    var r = map(i/(volhistory[i] * 600), 0, 1, 0, 50);
    var x = r * cos(i * 2);
    var y = r * sin(i * 2);
    vertex(x, y);
  }
  endShape();
  
}