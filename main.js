img=" ";

status=" ";

function setup(){
    canvas=createCanvas(500,410);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="status:detectando objetos...";
}

function preload(){
    img=loadImage("dog_cat.jpg")
}

function draw(){
    image(img,0,0,500,410);
    fill("#FF0000");
    text("perro",45,75)
    noFill();
    stroke("FF0000");
    rect(25,55,420,380);
    fill("#0000FF");
    text("gato",255,85)
    noFill();
    stroke("0000FF");
    rect(235,65,210,380)
}

function modelLoaded(){
    console.log("modelo cargado");
    status="true";
    objectDetector.detect(img,gotResult);
}

function gotResult(error,results){
    if(error){
     console.log(error);   
    }
    console.log(results);
}