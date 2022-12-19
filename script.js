song1="";
song2="";
leftwristx= 0 ;
leftwristy= 0 ;
rightwristx=0 ;
rightwristy=0;
scoreleftwrist= 0 ;
status1="";

 function preload()
 {
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
 }
function setup()
{
    canvas=createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();

     poseNet = ml5.poseNet(video, modelLoaded);
     poseNet.on('pose',gotPoses)
}

function modelLoaded() {
  console.log(" PoseNet is intialized! ");
}

function gotPoses(results) {
    if(results.length > 0)
    {
  console.log(results);
  scoreleftwrist = results[0].pose.keypoints[9].score;
  leftwristx = results[0].pose.leftWrist.x;
  leftwristy = results[0].pose.leftWrist.y;
  rightwristx= results[0].pose.rightWrist.x;
  rightwristy = results[0].pose.rightWrist.y;
  console.log("left wrist X = "+ leftwristy + "leftWrist Y = " + leftwristy + "rightWristX = " + rightwristx + "rightWrist Y = " + rightwristy);
    }
}

function draw()
{
    image(video,0,0,600,500);
    song1.isPlaying();
    fill("#FF0000");
    stroke("#FF000");
    status1 = song1.isPlaying();
    if(scoreleftwrist > 0.2 )
{
     circle(leftwristx,leftwristy,20);
     song2.stop();
}
if(status= false){
  song1.play();
}

}

function play(){
    song1.play();
    song2.play();

}