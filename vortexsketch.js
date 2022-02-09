let p;
let ele;
let particles = [];
let arr = [];
let num;
const noiseScale = 0.01 / 2;

function setup() {
  createCanvas(windowWidth, windowHeight);

  num = getItem("counter");
  arr.push(num);
  console.log(arr);

  for (let i = 0; i < num; i++) {
    particles.push(createVector(random(width), random(height)));
  }

  stroke(255, 0, 64);

  for (let iA = 0; iA < num; iA++) {
    ele = createAudio("../Audio/SoundChaos%20(" + iA + ").wav");
    ele.volume(0.1);
    ele.loop();
    ele.autoplay(true);
  }
}

function draw() {
  background(0, 10);
  stroke(255, 0, 74);

  flock();

  textFont("Roboto mono");
  textAlign(LEFT);
  textSize(30);
  noStroke();
  fill(255);
  text(" //chaos tendecy", windowWidth-windowWidth+30, windowHeight-50);
}

function mouseReleased() {
  noiseSeed(millis());  

}

function onScreen(v) {
  return v.x >= 0 && v.x <= width && v.y >= 0 && v.y <= height;
}

function refresh(){
  window.top.location.reload(true)
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
