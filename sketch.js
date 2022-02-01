let c;

let originX;
let originY;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(200);
    frameRate(6);
}

function draw() {
    originX = width / 2;
    originY = height / 2;

    noStroke();
    
    c = color(random(255), random(255), random(255), random(15,196));
    fill(c);    
    circle(random(width), random(height), random(15,height));
}