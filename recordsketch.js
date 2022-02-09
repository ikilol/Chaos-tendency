let mic, recorder, soundFile;
let state = 0;
let listen;
let stops = "stop";
let record = "record";
let ok1 = false;

let fft;

let kMax; // maximal value for the parameter "k" of the blobs
let step = 0.01; // difference in time between two consecutive blobs
let n = 100; // total number of blobs
let radius = 0; // radius of the base circle
let inter = 0.05; // difference of base radii of two consecutive blobs
let maxNoise = 500; // maximal value for the parameter "noisiness" for the blobs

let counter;

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);

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

  fft = new p5.FFT();
  fft.setInput(mic);
}

userStartAudio();

function draw() {
  background(0);

  if (state == 0) {
    textFont("Roboto mono");
    textAlign(CENTER);
    record = createElement("h1", "record");
    record.style("color", "#ffffff");
    record.style("font-family", "Roboto mono");
    record.style("font-size", "windowHeight");
    record.position(windowWidth / 2, windowHeight / 1.05);
  }

  if (state == 1) {
    recorder.record(soundFile);

    textFont("Roboto mono");
    textAlign(CENTER);
    textSize(windowHeight / 35);
    noStroke();
    fill(255);

    text(stops, windowWidth / 2, windowHeight / 1.05);
  }

  if (state == 2) {
    recorder.stop();
    soundFile.play();
  }

  if (state == 3) {
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
    blob(size, width / 2, height / 2, k, t - i * step, noisiness);
  }

  textFont("Roboto mono");
  textAlign(CENTER);
  textSize(windowHeight / 35);
  noStroke();
  fill(255);
  let sendg = text("//chaos tendency", windowWidth / 12, windowHeight / 15);

  textFont("Roboto mono");
  textAlign(LEFT);
  textSize(windowHeight / 35);
  noStroke();
  fill(255);
  let deletex = text("delete", windowHeight / 25, windowHeight / 1.05);

  textFont("Roboto mono");
  textAlign(CENTER);
  textSize(windowHeight / 35);
  noStroke();
  fill(255);
  let send = text("submit", windowWidth / 1.05, windowHeight / 1.05);
}

function blob(size, xCenter, yCenter, k, t, noisiness) {
  let spectrum = fft.analyze();
  beginShape();
  let angleStep = 360 / 10;
  for (let theta = 0; theta <= 360 + 2 * angleStep; theta += angleStep) {
    let r1, r2;
    r1 = cos(theta) + 1;
    r2 = sin(theta) + 1; // +1 because it has to be positive for the function noise
    let r =
      size +
      map(spectrum[theta], 0, 255, 100, 0) +
      (noise(k * r1, k * r2, t) * noisiness) / 3;
    //noise(k * r1, k * r2, t) * noisiness;
    //map(spectrum[theta], 0, 255, 200, 0);
    let x = xCenter + r * cos(theta);
    let y = yCenter + r * sin(theta);
    curveVertex(x, y);
  }
  endShape();
}
