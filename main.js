song = "";
song2 = "";
leftWristX = 0;
leftWristY = 0;
rightWristX= 0;
rightWristY = 0;

function setup(){
    canvas = createCanvas(400, 300);
    canvas.position(500,250);

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function draw(){
    image(video, 0, 0, 400, 300);
}
function preload()
{
song = loadSound("music.mp3");
song2 = loadSound("music2.mp3");
}
function play()
{
    song2.play();
    song2.setVolume(1);
    song2.rate(1);
}
function gotPoses(results){
    if (results.length > 0) {
        console.log(results);
    }
    leftWristX = results[0].pose.leftWrist.x;
    leftWristY = results[0].pose.leftWrist.y;
    console.log ("leftWristX = " + leftWristX + "  , leftWristY = " + leftWristY);
    
    rightWristX = results[0].pose.rightWrist.x;
    rightWristY = results[0].pose.rightWrist.y;
    console.log ("rightWristX = " + rightWristX + "  , rightWristY = " + rightWristY);
    }
