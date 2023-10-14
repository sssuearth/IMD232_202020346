let bodies = [];
const moversNum = 40;
let G = 0.3;

let showVector = false;

function setup() {
  setCanvasContainer('canvas', 1, 1, true);
  init();
}

function draw() {
  background(255);

  for (let i = 0; i < moversNum; i++) {
    for (let j = 0; j < moversNum; j++) {
      if (i !== j) {
        let forceForJ = bodies[i].attract(bodies[j]);
        bodies[j].applyForce(forceForJ);
      }
    }
    bodies[i].update();
    bodies[i].display();
    if (showVector) {
      bodies[i].displayVectors();
    }
  }
}

function mousePressed() {
  if (isMouseInsideCanvas()) {
    init();
  }
}

function init() {
  for (let i = 0; i < moversNum; i++) {
    bodies[i] = new Body(random(width), random(height), random(16, 100));
  }
}
