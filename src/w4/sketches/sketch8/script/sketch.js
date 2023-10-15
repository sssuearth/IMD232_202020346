let mover;
let gravity;

function setup() {
  setCanvasContainer('canvas', 1, 1, true);
  background(255);
  //원
  mover = new Mover(width / 2, height / 2, 30);
  //중력
  gravity = createVector(0, 0.3);
}

//중력
function draw() {
  background(255);

  let gravityA = createVector(gravity.x, gravity.y);
  gravityA.mult(mover.mass);
  mover.applyForce(gravityA);

  //공
  if (mover.contactEdge()) {
    let c = 0.5; //1에서 0사이에 해당하는 마찰계수
    let friction = mover.vel.copy(); // 가고있던 진행방향
    friction.mult(-1); //반대 방향으로 -1 뒤집기
    friction.mult(c); //값 곱하기, 위 C= 값
    mover.applyForce(friction); //힘으로서 넣어줌
  }

  mover.update();
  mover.checkEdges();
  mover.display();
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
}
