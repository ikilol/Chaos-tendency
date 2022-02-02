let slider;
function setup() {
  slider = createSlider(0, 255, 100);
  slider.position(10, 10);
  slider.style('width', '80px');
}

function draw() {
  let val = slider.value();
  background(val);
}