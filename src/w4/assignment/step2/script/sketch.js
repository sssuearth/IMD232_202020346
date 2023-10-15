let mover;
let gravity;
let mVec;
let pMVec;
let throwingForce;

function setup() {
  setCanvasContainer('canvas', 1, 1, true);
  background(255);

  mover = new Mover(width / 2, height / 2, 20);
  gravity = createVector(0, 0.3);
  mVec = createVector();
  pMVec = createVector();
  throwingForce = createVector();
}

function draw() {
  background(255);

  let gravityA = createVector(gravity.x, gravity.y);
  gravityA.mult(mover.mass);
  mover.applyForce(gravityA);

  //공
  if (mover.contactEdge()) {
    let c = 0.5;
    let friction = mover.vel.copy();
    friction.mult(-1);
    friction.mult(c);
    mover.applyForce(friction);
  }
  mover.display();
  mover.update();
  mover.checkEdges();
}

function mouseMoved() {
  mover.mouseMoved(mouseX, mouseY);
}
function mousePressed() {
  mover.mousePressed(mouseX, mouseY);
}
function mouseDragged() {
  mover.mouseDragged(mouseX, mouseY);
}
function mouseReleased() {
  mover.mouseReleased(mouseX, mouseY);

  pMVec.set(pmouseX, pmouseY);
  mVec.set(mouseX, mouseY);

  let throwingForce = p5.Vector.sub(mVec, pMVec);
  throwingForce.mult(mover.mass);

  mover.applyForce(throwingForce);
}
