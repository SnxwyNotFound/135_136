function setup(){
    canvas = createCanvas(320,320);
    canvas.center();
    canvas.position(520, 220)
    video = createCapture(VIDEO);
    video.size(380,380);
    video.hide()
}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
}

function draw(){
    image(video, 0, 0, 380, 380);
}