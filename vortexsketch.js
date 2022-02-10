let p;
let ele;
let particles = [];
let arr = [];
let num;
const noiseScale = 0.01 / 2;

function setup() {
  createCanvas(windowWidth, windowHeight);

  //riprende il numero di file registrati nella cartella e li trasforma nella variabile num
  num = getItem("counter");
  arr.push(num);
  console.log(arr);

  for (let i = 0; i < num; i++) {
    particles.push(createVector(random(width), random(height)));
  }
  stroke(254, 0, 88);

  //riproduce il numero di audio equivalente alla variabile num
  for (let iA = 1; iA < num; iA++) {
    ele = createAudio("../Audio/mySound%20(" + iA + ").wav");
    ele.volume(1);
    ele.loop();
  }
}

function draw() {
  background(0, 10);

  flock();

  textFont("Roboto mono");
  textAlign(LEFT);
  textSize(30);
  noStroke();
  fill(255);
  text(" //chaos tendency", windowWidth - windowWidth + 30, windowHeight - 50);

  stroke(254, 0, 88);
}

function onScreen(v) {
  return v.x >= 0 && v.x <= width && v.y >= 0 && v.y <= height;
}

function refresh() {
  window.top.location.reload(true);
}

function flock() {
  for (let i = 0; i < num; i++) {
    let p = particles[i];
    point(p.x, p.y);
    let n = noise(p.x * noiseScale, p.y * noiseScale, frameCount * noiseScale);
    strokeWeight(4);
    let a = TAU * n;
    p.x += cos(a) * 3;
    p.y += sin(a) * 3;
    if (!onScreen(p)) {
      p.x = random(width);
      p.y = random(height);
    }
  }
}
