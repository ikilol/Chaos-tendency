let slider;
let music;

function preload() {
  music = loadSound("Audio/ps4music.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  music.play();
  slider = createSlider(0, 2, 1);
  slider.position(windowWidth / 2, windowHeight / 2);
  slider.style("width", "80px");
}

function draw() {
  let val = slider.value();
  background(val);
  var mr = map(val, 1, 20, 1, 0.1);
  music.rate(mr);
  console.log(val);
}
