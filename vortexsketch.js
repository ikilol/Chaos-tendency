/**
 *! The Sound of Chaos !

 * "The sound of Chaos" is a project developed by a group of Communication design students at Politecnico di Milano. 
 * Inspired by the first book of Ovid’s Metamorphosis, 
 * this project considers Chaos as the forgotten parent of reality and humans as its children.
 *
 *  DEVELOPED BY
 *  Chiara Barberi, Luca Bottani, Federica Pasquini, Andrea Laura Sanguineti, Riccardo Ventura
 *
 *  FACULTY
 *  Michele Mauri, Andrea Benedetti, Tommaso Elli
 *
 *  Creative Coding 2021/2022
 *  Politecnico di Milano
 */


let p;
let ele;
let particles = [];
let arr = [];
let num;
const noiseScale = 0.01 / 2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  function preload() {
    logo = loadImage('chaos_logo2.svg');
  }

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
    ele = createAudio("../Audio/SoundChaos%20(" + iA + ").wav");
    ele.volume(0.1);
    ele.loop();
    ele.autoplay(true);
  }
}

function draw() {

  image(logo, 40, 40);
  logo.resize(100, 100);
  background(0, 40);



  flock();
  noStroke();

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
    p.x += cos(a) * 4;
    p.y += sin(a) * 4;
    if (!onScreen(p)) {
      p.x = random(width);
      p.y = random(height);
    }
  }
}
