let p;
let ele;
let particles = [];
let num;
const noiseScale = 0.01 / 2;
let numeroaudio;

function setup() {
  createCanvas(displayWidth, displayHeight);

  num = getItem("counter");
  console.log(num);

  for (let i = 0; i < num; i++) {
    particles.push(createVector(random(width), random(height)));
  }

  stroke(96, 225, 224);

  for (let ic = 0; ic < num; ic++) {
    ele = createAudio("../Audio/SoundChaos%20(" + ic + ").wav");
    ele.volume(0.1);
    ele.loop();
    ele.autoplay(true);
  }
}

function draw() {
  background(0, 10);
  stroke(96, 225, 224);

  flock();

  textFont("Quantico");
  textAlign(LEFT);
  textSize(30);
  noStroke();
  fill(255);
  text("THE SOUND\nOF CHAOS", 20, 50);
}

function mouseReleased() {
  noiseSeed(millis());
}

function onScreen(v) {
  return v.x >= 0 && v.x <= width && v.y >= 0 && v.y <= height;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function flock() {
  for (let i = 0; i < num; i++) {
    let p = particles[i];
    point(p.x, p.y);
    let n = noise(p.x * noiseScale, p.y * noiseScale, frameCount * noiseScale);
    let a = TAU * n;
    p.x += cos(a);
    p.y += sin(a);
    if (!onScreen(p)) {
      p.x = random(width);
      p.y = random(height);
    }
  }
}
