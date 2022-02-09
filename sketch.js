let yoff;
let y;

let colors;


function setup() {
    createCanvas(windowWidth, windowHeight);


    yoff = 0;
    angleMode(DEGREES)

    colors = [color(255, 0, 0), color(0, 255, 0), color(0, 0, 255)];
    frameRate(24);

}

function draw() {
    let xoff = 0;
    let w = 100;
    let h = 200;

    blendMode(BLEND);
    background(55);
    blendMode(EXCLUSION);

    beginShape();
    strokeWeight(2);
    for (let x = 0; x <= mouseX; x += 5) {

        y = map(noise(xoff, yoff), 0, 1, 0, mouseY);

        fill(random(colors))
        // rectMode(CENTER)
        rect(x, y, w, h, 10);

        xoff += 0.05;

    }
    yoff += 0.01;
    endShape();
}