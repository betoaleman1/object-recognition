img=" ";

function setup(){
    canvas=createCanvas(500,410);
    canvas.center();
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
}