let pendulumA;
let pendulumB;
let gravity;

function setup() {
  setCanvasContainer('canvas', 2, 1, true);

  pendulumA = new Pendulum(width / 2, 10, height / 3, (TAU / 360) * 45, 35);
  pendulumB = new Pendulum(
    width / 2,
    10,
    height / 3,
    (TAU / 360) * 45,
    25,
    pendulumA
  );
  gravity = createVector(0, 0.3);

  background(255);
}

function draw() {
  background(255);
  pendulumA.applyGravity(gravity);
  pendulumA.update();
  pendulumA.display();

  push();
  pendulumB.applyGravity(gravity);
  pendulumB.update();
  pendulumB.display();
  pop();
}

function mouseMoved() {
  pendulumA.mouseMoved(mouseX, mouseY);
  pendulumB.mouseMoved(mouseX, mouseY);
}

function mousePressed() {
  pendulumA.mousePressed(mouseX, mouseY);
  pendulumB.mousePressed(mouseX, mouseY);
}

function mouseDragged() {
  pendulumA.mouseDragged(mouseX, mouseY);
  pendulumB.mouseDragged(mouseX, mouseY);
}

function mouseReleased() {
  pendulumA.mouseReleased();
  pendulumB.mouseReleased();
}
