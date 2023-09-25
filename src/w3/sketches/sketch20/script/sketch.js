let pos;
let vel;
let acc;

let mouseclick;
let mouseCir;

function setup() {
  setCanvasContainer('canvas', 3, 3, true);
  background('white');
  pos = createVector(random(width), random(height));
  vel = createVector(0, 0);
  acc = createVector(0, 0);
  mouseCir = createVector();
}

function draw() {
  background('white');
  update();
  //   console.log(pos);

  // 시안색 원
  fill('cyan');
  noStroke();
  ellipse(pos.x, pos.y, 70);

  stroke('CornflowerBlue');
  strokeWeight(3);
  line(pos.x, pos.y, mouseX, mouseY);
  translate(pos.x, pos.y); // 원점을 중앙으로 / W3 Sketch7

  // Indigo / vel 속도 10배
  stroke('Indigo');
  line(0, 0, vel.x * 10, vel.y * 10);

  // DeepPink / acc 가속도 100배
  stroke('DeepPink');
  line(0, 0, acc.x * 100, acc.y * 100);
}

function update() {
  if (mouseIsPressed) {
    let mouseCir = createVector(mouseX, mouseY);
    let velMouse = p5.Vector.sub(pos, mouseCir);
    velMouse.normalize();
    velMouse.mult(4);
    vel = velMouse;
  } else {
    // mouseclick = false;
    // accMouse = p5.Vector.sub(mouseCir, pos);
    let mouseCir = createVector(mouseX, mouseY);
    let accMouse = p5.Vector.sub(mouseCir, pos);
    accMouse.normalize();
    accMouse.mult(0.1);
    acc = accMouse;
  }
  vel.add(acc);
  pos.add(vel);
}
