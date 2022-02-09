let mic, recorder, soundFile;
let state = 0;
let listen;


let counter;

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.mousePressed(canvasPressed);

  // counter per numero di audio registrati
  counter = getItem("counter");
  if (counter === null) {
    counter = "";
  }

  console.log(counter);

  // crea audio
  mic = new p5.AudioIn();

  // abilita microfono browser
  mic.start();

  // crea il sound recorder
  recorder = new p5.SoundRecorder();

  // connette il microfono al recorder
  recorder.setInput(mic);

  // salvataggio registrazione
  soundFile = new p5.SoundFile();

  text("tap to record", width / 2, height / 2);
}

function canvasPressed() {
  // assicura che l'audio è abilitato
  userStartAudio();

  // assicura che microfono è abilitato
  if (state === 0 && mic.enabled) {
    // registraa sul file salvato
    recorder.record(soundFile);

    text("Recording...", width / 2, height / 2);
    state++;
  } else if (state === 1) {

    // stop registrazione e salva file
    recorder.stop();

    text(
      "Done! Tap to play and upload it to the vortex",
      width / 2,
      height / 2,
      width - 20
    );
    state++;
  } else if (state === 2) {
    counter++;
    storeItem("counter", counter);
    soundFile.play(); // riproduce il risultato
    save(soundFile, "mySound.wav");
    state = 0;
  }
}

function draw() {
  background(0);


  textFont("Roboto mono");
  textAlign(CENTER);
  textSize(windowHeight / 35);
  noStroke();
  fill(255);
  let sendg = text("//chaos tendency", windowWidth / 12, windowHeight/ 15);

  textFont("Roboto mono");
  textAlign(LEFT);
  textSize(windowHeight / 35);
  noStroke();
  fill(255);
  let deletex = text("delete", windowHeight / 25, windowHeight / 1.05);

  textFont("Roboto mono");
  textAlign(LEFT);
  textSize(windowHeight / 35);
  noStroke();
  fill(255);
  let listen = text("listen", windowHeight / 5, windowHeight / 1.05);

  textFont("Roboto mono");
  textAlign(CENTER);
  textSize(windowHeight / 35);
  noStroke();
  fill(255);
  let record = text("record", windowWidth / 2, windowHeight / 1.05);

  textFont("Roboto mono");
  textAlign(CENTER);
  textSize(windowHeight / 35);
  noStroke();
  fill(255);
  let play = text("stop", windowWidth / 2, windowHeight / 1.05);

  textFont("Roboto mono");
  textAlign(CENTER);
  textSize(windowHeight / 35);
  noStroke();
  fill(255);
  let send = text("send", windowWidth / 1.05, windowHeight / 1.05);
}


