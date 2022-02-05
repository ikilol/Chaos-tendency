
let mic, recorder, soundFile;
let state = 0;
let listen;

function setup() {
  let cnv = createCanvas(windowWidth - 20, 550);
  cnv.mousePressed(canvasPressed);
  background(220);
  textAlign(CENTER, CENTER);

  // create an audio in
  mic = new p5.AudioIn();

  // prompts user to enable their browser mic
  mic.start();

  // create a sound recorder
  recorder = new p5.SoundRecorder();

  // connect the mic to the recorder
  recorder.setInput(mic);

  // this sound file will be used to
  // playback & save the recording
  soundFile = new p5.SoundFile();

  text('tap to record', width/2, height/2);
}

function canvasPressed() {
  // ensure audio is enabled
  userStartAudio();

  // make sure user enabled the mic
  if (state === 0 && mic.enabled) {

    // record to our p5.SoundFile
    recorder.record(soundFile);

    background(255,0,0);
    text('Recording!', width/2, height/2);
    state++;
  }
  else if (state === 1) {
    background(0,255,0);

    // stop recorder and
    // send result to soundFile
    recorder.stop();

    text('Done! Tap to play and download', width/2, height/2, width - 20);
    state++;
  }

  else if (state === 2) {
    soundFile.play(); // play the result!
    save(soundFile, 'mySound.wav');
    state++;
  }
}

function draw(){

  background(220);

  textFont("Quantico");
  textAlign(LEFT);
  textSize(windowHeight/30);
  noStroke();
  fill(255);
  let deletex = text("DELETE", windowHeight/25, windowHeight/1.4);

  textFont("Quantico");
  textAlign(LEFT);
  textSize(windowHeight/30);
  noStroke();
  fill(255);
  let listen = text("LISTEN", windowHeight/5, windowHeight/1.4);

  textFont("Quantico");
  textAlign(CENTER);
  textSize(windowHeight/30);
  noStroke();
  fill(255);
  let record = text("RECORD", windowWidth/2, windowHeight/1.4);

  textFont("Quantico");
  textAlign(CENTER);
  textSize(windowHeight/30);
  noStroke();
  fill(255);
  let play = text("STOP", windowWidth/2, windowHeight/1.4);

  textFont("Quantico");
  textAlign(CENTER);
  textSize(windowHeight/30);
  noStroke();
  fill(255);
  let send = text("SEND", windowWidth/0.9, windowHeight/1.4);


}

function changecolor(){
  fill(0);
  let listen = text("LISTEN", windowHeight/5, windowHeight/1.4);
}

