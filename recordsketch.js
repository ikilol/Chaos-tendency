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

let mic, recorder, soundFile;
let state = 0;
let listen;
let stops;
let record;
let ok1 = false;
var x = 0;
let fft;
let about;

let kMax; // maximal value for the parameter "k" of the blobs
let step = 0.01; // difference in time between two consecutive blobs
let n = 110; // total number of blobs
let radius = 0; // radius of the base circle
let inter = 0.05; // difference of base radii of two consecutive blobs
let maxNoise = 700; // maximal value for the parameter "noisiness" for the blobs

let counter;

let logo;

function preload() {
  logo = loadImage('chaos_logo.svg');
}

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  about = select("#top-right");

  
  cnv.mouseClicked(frecord);

  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 1);
  angleMode(DEGREES);
  noFill();
  //noLoop();
  kMax = random(0.6, 1.0);
  noStroke();

  // counter per numero di audio registrati
  counter = getItem("counter");
  if (counter === null) {
    counter = "";
  }


  console.log(counter);

  mic = new p5.AudioIn();

  mic.start();

  recorder = new p5.SoundRecorder();

  recorder.setInput(mic);

  soundFile = new p5.SoundFile();

  //add amplitude
  amplitude = new p5.Amplitude();

  fft = new p5.FFT();
  fft.setInput(mic);

  userStartAudio();
}

function draw() {
  background(0);
  image(logo, 40, 40);
  logo.resize(100, 100);


  
  if (state == 0) {
    textFont("Apfel Grotezk");
    textAlign(CENTER);
    textSize(windowHeight / 35);
    noStroke();
    fill(255);
    text("click to start recording", windowWidth / 2, windowHeight / 1.15);
  }

  if (state == 1) {
    recorder.record(soundFile);

    textFont("Apfel Grotezk");
    textAlign(CENTER);
    textSize(windowHeight / 35);
    noStroke();
    fill(255);

    text("click to stop", windowWidth / 2, windowHeight / 1.15);
  }

  if (state == 2) {
    recorder.stop();
    textFont("Apfel Grotezk");
    textAlign(CENTER);
    textSize(windowHeight / 35);
    noStroke();
    fill(255);
    text(
      "click to listen to your inner chaos & submit",
      windowWidth / 2,
      windowHeight / 1.15
    );
  }

  if (state == 3) {
    soundFile.play();
    counter++;
    storeItem("counter", counter);
    save(soundFile, "mySound.wav");
    state = 0;
  }

  let t = frameCount / 100;
  for (let i = n; i > 0; i--) {
    let alpha = 1 - i / n;
    fill((alpha / 5 + 0.9) % 9, 1, 2, alpha);
    let size = radius + i * inter;
    let k = kMax * sqrt(i / n);
    let noisiness = maxNoise * (i / n);
    blob(size, width / 2, height / 2.3, k, t - i * step, noisiness);
  }

  textFont("Apfel Grotezk");
  textAlign(CENTER);
  textSize(windowHeight / 35);
  noStroke();
  fill(255);
}

function blob(size, xCenter, yCenter, k, t, noisiness) {
  //let spectrum = fft.analyze();
  let level = mic.getLevel();
  beginShape();
  let angleStep = 360 / 10;
  for (let theta = 0; theta <= 360 + 2 * angleStep; theta += angleStep) {
    let r1, r2;
    r1 = cos(theta) + 1;
    r2 = sin(theta) + 1; // +1 because it has to be positive for the function noise
    /*let r =
      size +
      map(spectrum[theta], 0,255, 100, 0) +
      (noise(k * r1, k * r2, t) * noisiness) / 3;
*/
    let r =
      size +
      map(level, 0, 1, 60, 600) +
      (noise(k * r1, k * r2, t) * noisiness) / 2;
    //noise(k * r1, k * r2, t) * noisiness;
    //map(spectrum[theta], 0, 255, 200, 0);
    let x = xCenter + r * cos(theta);
    let y = yCenter + r * sin(theta);
    curveVertex(x, y);
  }
  endShape();
}

function frecord() {
  state++;
}
