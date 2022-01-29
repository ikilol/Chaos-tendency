
let ele;
function setup() {

  ele = createAudio('Audio/mySound.wav');
  ele.volume(0.1);
  ele.loop();
  ele.autoplay(true);
  
}