let p;
let ele;
let particles = [];
const num = 4000;
const noiseScale = 0.01/2;




function setup() {

  createCanvas(displayWidth, displayHeight);
  for(let i = 0; i < num; i ++) {
    particles.push(createVector(random(width), random(height)));
  }
  
  stroke(96, 225, 224);



  var num1 = int(random(1, 10));
  console.log(num1);
  var num2 = int(random(1, 10));
  console.log(num2);
  var num3 = int(random(1, 10));
  console.log(num3);
  var num4 = int(random(1, 10));
  console.log(num4);
  var num5 = int(random(1, 10));
  console.log(num5);
  var num6 = int(random(1, 10));
  console.log(num6);
  var num7 = int(random(1, 10));
  console.log(num7);
  var num8 = int(random(1, 10));
  console.log(num8);
  var num9 = int(random(1, 10));
  console.log(num9);
  var num10 = int(random(1, 10));
  console.log(num10);
  var num11 = int(random(1, 10));
  console.log(num11);

  ele = createAudio("../Audio/SoundChaos%20(" + num + ").wav");
  ele.volume(0.01);
  ele.loop();
  ele.autoplay(true);

  ele = createAudio("../Audio/SoundChaos%20(" + num1 + ").wav");
  ele.volume(0.01);
  ele.loop();
  ele.autoplay(true);

  ele = createAudio("../Audio/SoundChaos%20(" + num2 + ").wav");
  ele.volume(0.01);
  ele.loop();
  ele.autoplay(true);

  ele = createAudio("../Audio/SoundChaos%20(" + num3 + ").wav");
  ele.volume(0.01);
  ele.loop();
  ele.autoplay(true);

  ele = createAudio("../Audio/SoundChaos%20(" + num4 + ").wav");
  ele.volume(0.01);
  ele.loop();
  ele.autoplay(true);

  ele = createAudio("../Audio/SoundChaos%20(" + num5 + ").wav");
  ele.volume(0.01);
  ele.loop();
  ele.autoplay(true);

  ele = createAudio("../Audio/SoundChaos%20(" + num6 + ").wav");
  ele.volume(0.01);
  ele.loop();
  ele.autoplay(true);

  ele = createAudio("../Audio/SoundChaos%20(" + num7 + ").wav");
  ele.volume(0.01);
  ele.loop();
  ele.autoplay(true);

  ele = createAudio("../Audio/SoundChaos%20(" + num8 + ").wav");
  ele.volume(0.01);
  ele.loop();
  ele.autoplay(true);

  ele = createAudio("../Audio/SoundChaos%20(" + num9 + ").wav");
  ele.volume(0.01);
  ele.loop();
  ele.autoplay(true);

  ele = createAudio("../Audio/SoundChaos%20(" + num10 + ").wav");
  ele.volume(0.01);
  ele.loop();
  ele.autoplay(true);

  ele = createAudio("../Audio/SoundChaos%20(" + num11 + ").wav");
  ele.volume(0.01);
  ele.loop();
  ele.autoplay(true);
}

function draw() {
  background(0, 10);
  stroke(96, 225, 224);
  for(let i = 0; i < num; i ++) {
    let p = particles[i];
    point(p.x, p.y);
    let n = noise(p.x * noiseScale, p.y * noiseScale, frameCount * noiseScale);
    let a = TAU * n;
    p.x += cos(a);
    p.y += sin(a);
    if(!onScreen(p)) {
      p.x = random(width);
      p.y = random(height);
    }
  }
  
    
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


  
