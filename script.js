let colorOffset = 0;
let colorOffsetX = 0;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    for (let y = 0; y < height; y++) {
        let inter = map(y, 0, height, 0, 1);
        let c = lerpColor(color(255, 100 + colorOffsetX, 150 + colorOffset), color(100, 100, 255 - colorOffsetX), inter);
        stroke(c);
        line(0, y, width, y);
    }
    colorOffset = (colorOffset + 1) % 255;
    colorOffsetX = (colorOffsetX + 0.5) % 255;
}
