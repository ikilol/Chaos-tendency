let index = 0;
let lastIndex = 0;
let ele;
let dio = 0;

const balls = [];
const ballAmount = 2000;
const vectors = [];
const vectorAmount = 50;
const adjustRange = 0;

function setup() {
  console.log(5);
  let cnv = createCanvas(500, 500);

  var num = int(random(1, 10));
  console.log(num);
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
  ele.volume(0);
  ele.loop();
  ele.autoplay(true);

  ele = createAudio("../Audio/SoundChaos%20(" + num1 + ").wav");
  ele.volume(0);
  ele.loop();
  ele.autoplay(true);

  ele = createAudio("../Audio/SoundChaos%20(" + num2 + ").wav");
  ele.volume(0);
  ele.loop();
  ele.autoplay(true);

  ele = createAudio("../Audio/SoundChaos%20(" + num3 + ").wav");
  ele.volume(0);
  ele.loop();
  ele.autoplay(true);

  ele = createAudio("../Audio/SoundChaos%20(" + num4 + ").wav");
  ele.volume(0);
  ele.loop();
  ele.autoplay(true);

  ele = createAudio("../Audio/SoundChaos%20(" + num5 + ").wav");
  ele.volume(0);
  ele.loop();
  ele.autoplay(true);

  ele = createAudio("../Audio/SoundChaos%20(" + num6 + ").wav");
  ele.volume(0);
  ele.loop();
  ele.autoplay(true);

  ele = createAudio("../Audio/SoundChaos%20(" + num7 + ").wav");
  ele.volume(0);
  ele.loop();
  ele.autoplay(true);

  ele = createAudio("../Audio/SoundChaos%20(" + num8 + ").wav");
  ele.volume(0);
  ele.loop();
  ele.autoplay(true);

  ele = createAudio("../Audio/SoundChaos%20(" + num9 + ").wav");
  ele.volume(0);
  ele.loop();
  ele.autoplay(true);

  ele = createAudio("../Audio/SoundChaos%20(" + num10 + ").wav");
  ele.volume(0);
  ele.loop();
  ele.autoplay(true);

  ele = createAudio("../Audio/SoundChaos%20(" + num11 + ").wav");
  ele.volume(0);
  ele.loop();
  ele.autoplay(true);

  //generate field
  for (let y = 0; y < vectorAmount; y++) {
    for (let x = 0; x < vectorAmount; x++) {
      const offset = y * vectorAmount + x;
      vectors[offset] = createVector(1, 0);
    }
  }

  //add balls
  for (let i = 0; i < ballAmount; i++) {
    let r = random();
    balls.push({
      position: createVector(random(width), random(height)),
      velocity: createVector(1, 0),
      steeringStrength: 0.01 + r * 0.15,
      maxSpeed: 2 + r * 2,
      size: 4 + (1 - r) * 8,
      update() {
        //update position
        this.position.add(this.velocity);

        //bind position to viewport
        if (this.position.x > width) this.position.x = 0;
        if (this.position.x < 0) this.position.x = width;
        if (this.position.y > height) this.position.y = 0;
        if (this.position.y < 0) this.position.y = height;

        //change the velocity
        const bX = floor((this.position.x / width) * vectorAmount);
        const bY = floor((this.position.y / height) * vectorAmount);
        let fieldV = vectors[bY * vectorAmount + bX];
        if (fieldV) {
          fieldV = fieldV.copy();
          this.velocity.add(fieldV.mult(this.steeringStrength));
          this.velocity.limit(this.maxSpeed);
        }
      },
      display() {
        strokeWeight(this.size);
        point(this.position.x, this.position.y);
      },
    });
  }
}

function draw() {
  console.log(prova);

  background(220);

  //pressing shift: display vectors
  if (keyIsDown(16)) {
    stroke(0);
    strokeWeight(1);

    const xDim = width / (vectorAmount + 1);
    const yDim = height / (vectorAmount + 1);

    for (let y = 0; y < vectorAmount; y++) {
      for (let x = 0; x < vectorAmount; x++) {
        const offset = y * vectorAmount + x;
        const sX = x * xDim + xDim;
        const sY = y * xDim + yDim;
        line(
          sX,
          sY,
          sX + vectors[offset].x * xDim,
          sY + vectors[offset].y * yDim
        );
      }
    }
  }

  //update and display balls
  stroke(20, 20, 200, 150);
  for (let i = 0; i < ballAmount; i++) {
    balls[i].update();
    balls[i].display();
  }
}

function mousePressed() {
  document.querySelector("canvas").style.cursor = "grabbing";
}

function mouseReleased() {
  document.querySelector("canvas").style.cursor = "grab";
}

function mouseDragged() {
  //adjust the vectors in the field based on mouse movement direction
  const mX = floor((mouseX / width) * vectorAmount);
  const mY = floor((mouseY / height) * vectorAmount);

  const directionX = mouseX - pmouseX;
  const directionY = mouseY - pmouseY;

  if (dX * dY == 0) return;

  for (let y = -adjustRange; y < adjustRange; y++) {
    for (let x = -adjustRange; x < adjustRange; x++) {
      const nX = mX + x;
      const nY = mY + y;
      const inRange = x * x + y * y < adjustRange * adjustRange;

      //find vectors within adjustRange of the cursor positions
      if (
        (x == 0 && y == 0) ||
        !inRange ||
        nX < 0 ||
        nX >= vectorAmount ||
        nY < 0 ||
        nY >= vectorAmount
      )
        continue;

      const offset = nY * vectorAmount + nX;
      vectors[offset].set(directionX, directinY);
      vectors[offset].normalize();
    }
  }
}
