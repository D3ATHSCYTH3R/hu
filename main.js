mx=0;
my=0;
function preload(){
cn=loadImage("2.png");
}
function setup(){
canvas=createCanvas(640, 440);
canvas.position(325, 150);
video=createCapture(VIDEO);
video.size(640,440);
video.hide();
posenet=ml5.poseNet(video, callanyfunction);
posenet.on('pose', callanotherfunction);

}
function draw(){
image(video,0,0,650,450);
image(cn,mx-147,my-90,290,291);

}
function t(){
    save("safe.png");
}
function callanyfunction(){
    console.log("posenet is loaded");
}
function callanotherfunction(results){
if(results.length>0){
    console.log(results);
    mx=results[0].pose.nose.x;
    my=results[0].pose.nose.y;
    
    console.log("nose,x="+mx);
    console.log("nose,y="+my);
}
}