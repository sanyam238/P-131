
status="";

function preload(){
loadImage("IMG_1287.jpg");
}

function setup(){
canvas = createCanvas(600,620);
canvas.center()
objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function draw(){

}

function modelLoaded(){
    status = true
    console.log("model loaded!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
}

function gotResult(result,error){
if(error){
    console.error(error);
}
if(result){
    console.log(result);
}
}