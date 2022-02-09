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

  //crea numero di particelle equivalente al numero di file audio
  for (let i = 0; i < num; i++) {
    particles.push(createVector(random(width), random(height)));
  }
  //stroke(96, 225, 224);
  stroke(227, 23, 10);

  //riproduce il numero di audio equivalente alla variabile num
  for (let iA = 1; iA < num; iA++) {
    ele = createAudio("../Audio/SoundChaos%20(" + iA + ").wav");
    ele.volume(0.1);
    ele.loop();
    ele.autoplay(true);
  }
}

function draw() {
  background(0, 10);
  //stroke(96, 225, 224);
  stroke(227, 23, 10);

  //funzione per flocking delle particelle
  flock();

  textFont("Quantico");
  textAlign(LEFT);
  textSize(30);
  noStroke();
  fill(255);
  text("THE SOUND\nOF CHAOS", 20, 50);
}

//function mouseReleased() {
//  noiseSeed(millis());
//}

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
    let a = TAU * n;
    p.x += cos(a);
    p.y += sin(a);
    if (!onScreen(p)) {
      p.x = random(width);
      p.y = random(height);
    }
  }
}
