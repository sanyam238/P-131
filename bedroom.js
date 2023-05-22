status="";
objects = [];

function preload(){
    img=loadImage("IMG_1286.jpg");
}

function setup(){
    canvas = createCanvas(600,640);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function draw(){
    image(img,0,0,600,640);

    if(status !=""){

        for (i=0; i < objects.length; i++) {
            
            document.getElementById("status").innerHTML = "Status: Objects Detected";
            fill("red");
            percent = floor(object[i].confidence * 100);
            text(objects[i].label+ " " + percent + "%", objects[i].x+15, objects[i].y+15);
            noFill();
            stroke("red");
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        }
    }
}

function modelLoaded(){
  console.log("model is loaded!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
  status = true;
  objectDetector.detect(img,gotResult);
}

function gotResult(error,result){
if(error){
    console.error(error);
}
  if(result) {
  console.log(result);
  object = result;
 }
}