let cols = 5; 
let rows = 5; 
let glyphSize;

function setup() {
    createCanvas(windowWidth, windowHeight);
    noLoop();
    calculateGrid();
}

function draw() {
    background(255); 
    calculateGrid();

    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            let x = i * glyphSize + glyphSize / 2;
            let y = j * glyphSize + glyphSize / 2;
            drawGlyph(x, y, glyphSize * 0.4);
        }
    }
}

function calculateGrid() {
    glyphSize = min(width / cols, height / rows); 
}

function drawGlyph(x, y, size) {
    let numCircles = int(random(8, 12)); 
    for (let i = 0; i < numCircles; i++) {
        let angle = TWO_PI / numCircles * i;
        let offsetX = cos(angle) * size * random(0.3, 1); 
        let offsetY = sin(angle) * size * random(0.3, 1);

        fill(random(255), random(255), random(255), 150);
        noStroke();

        let circleSize = random(size * 0.3, size * 0.6);
        ellipse(x + offsetX, y + offsetY, circleSize, circleSize);
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    redraw();
}
