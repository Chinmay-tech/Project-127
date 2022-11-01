Peter_pan_song="";
Belupacito_song="";

function setup(){
    canvas = createCanvas(600,450);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide()
}

function preload(){
    Peter_pan_song = loadSound(music2.mp3);
    Belupacito_song = loadSound(music.mp3);
}

function draw(){
    image(video,0,0,600,450);
}