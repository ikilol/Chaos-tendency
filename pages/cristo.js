// low-pass filter
var lp_cutOffSlider;
var lp_resonanceSlider;
var lp_dryWetSlider;
var lp_outputSlider;

// dynamic compressor
var dc_attackSlider;
var dc_kneeSlider;
var dc_releaseSlider;
var dc_ratioSlider;
var dc_thresholdSlider;
var dc_dryWetSlider;
var dc_outputSlider;

// reverb
var rv_durationSlider;
var rv_decaySlider;
var rv_dryWetSlider;
var rv_outputSlider;
var rv_reverseButton;

// waveshaper distortion
var wd_amountSlider;
var wd_oversampleSlider;
var wd_dryWetSlider;
var wd_outputSlider;

// audio effects
var lowPass;
var distort;
var reverb;
var compressor;

function preload() {
    mySound = loadSound('/sounds/recording.mp3');
    audio = mySound;
    
    // audio effects
    lowPass = new p5.LowPass();
    distort = new p5.Distortion();
    compressor = new p5.Compressor();
    reverb = new p5.Reverb();
    delay = new p5.Delay();
}

function setup() {
    createCanvas(800, 600);
    background(180);
    
    var filterFreq, filterRes;
    filterFreq = map(mouseX, 0, width, 10, 22050);
    filterRes = map(mouseY, 0, height, 15, 5);
    soundFile = new p5.SoundFile();
    lp_cutOffSlider = createSlider(10, 22050, 10000);
    lp_cutOffSlider.position(10,110);
    text('cutoff frequency', 10,105);
    lp_resonanceSlider = createSlider(0, 1, 0.5);
    lp_resonanceSlider.position(10,155);
    text('resonance', 10,150);
    lp_dryWetSlider = createSlider(0, 1, 0.5, 0.01);
    lp_dryWetSlider.position(10,200);
    text('dry/wet', 10,195);
    lp_outputSlider = createSlider(0, 1, 0.5, 0.01);
    lp_outputSlider.position(10,245);
    text('output level', 10,240);

    dc_attackSlider = createSlider(0, 1, 0.5);
    dc_attackSlider.position(210,110);
    text('attack', 210,105);
    dc_kneeSlider = createSlider(0, 40, 30);
    dc_kneeSlider.position(210,155);
    text('knee', 210,150);
    dc_releaseSlider = createSlider(0, 1, 0.5);
    dc_releaseSlider.position(210,200);
    text('release', 210,195);
    dc_ratioSlider = createSlider(1, 20, 12);
    dc_ratioSlider.position(210,245);
    text('ratio', 210,240);
    dc_thresholdSlider = createSlider(0, -100, -24);
    dc_thresholdSlider.position(360,110);
    text('threshold', 360,105);
    dc_dryWetSlider = createSlider(0, 1, 0.5);
    dc_dryWetSlider.position(360,155);
    text('dry/wet', 360,150);
    dc_outputSlider = createSlider(0, 1, 0.5);
    dc_outputSlider.position(360,200);
    text('output level', 360,195);

    rv_durationSlider = createSlider(0, 10, 3);
    rv_durationSlider.position(10,335);
    text('duration', 10,330);
    rv_decaySlider = createSlider(0, 100, 2);
    rv_decaySlider.position(10,380);
    text('decay', 10,375);
    rv_dryWetSlider = createSlider(0, 1, 0.5, 0.01);
    rv_dryWetSlider.position(10,425);
    text('dry/wet', 10,420);
    rv_outputSlider = createSlider(0, 1, 0.5, 0.01);
    rv_outputSlider.position(10,470);
    text('output level', 10,465);
    rv_reverseButton = createButton('reverb reverse');
    rv_reverseButton.position(10, 510);

    wd_amountSlider = createSlider(0, 1, 0.5, 0.01);
    wd_amountSlider.position(210,335);
    text('distortion amount', 210,330);
    wd_oversampleSlider = createSlider(0, 4, 0, 2);
    wd_oversampleSlider.position(210,380);
    text('oversample', 210,375);
    wd_dryWetSlider = createSlider(0, 1, 0.5, 0.01);
    wd_dryWetSlider.position(210,425);
    text('dry/wet', 210,420);
    wd_outputSlider = createSlider(0, 1, 0.5, 0.01);
    wd_outputSlider.position(210,470);
    text('output level', 210,465);
    
    mySound.disconnect();
    
    // low pass
    lowPass.process(mySound);
    
    // waveshaper distortion
    distort.process(mySound);
    
    // dynamic compressor
    compressor.process(mySound);
    
    // reverb
    reverb.process(mySound);
}

function draw() {
    // low pass
    lowPass.freq(lp_cutOffSlider.value());
    lowPass.res(lp_resonanceSlider.value());
    lowPass.drywet(lp_dryWetSlider.value());
    lowPass.amp(lp_outputSlider.value());
    
    // waveshaper distortion
    distort.set(wd_amountSlider.value(), wd_oversampleSlider.value());
    distort.drywet(wd_dryWetSlider.value());
    distort.amp(wd_outputSlider.value());

    // dynamic compressor
    compressor.set(dc_attackSlider.value(), dc_kneeSlider.value(), dc_ratioSlider.value(), dc_thresholdSlider.value(), dc_releaseSlider.value());
    compressor.drywet(dc_dryWetSlider.value());
    compressor.amp(dc_outputSlider.value());

    // reverb
    reverb.set(rv_durationSlider.value(), rv_decaySlider.value());
    reverb.drywet(rv_dryWetSlider.value());
    reverb.amp(rv_outputSlider.value());
}