let pos;
let vel;
let acc;
let mouse;
let centerToMouse;

function setup() {
  setCanvasContainer('canvas', 1, 1, true);
  background('white');
  pos = createVector(random(width), random(height));
  vel = createVector(0, 0);
  acc = p5.Vector.random2D();
  mouse = createVector();
}

function draw() {
  background('white');
  update();
  display();
  console.log(pos); //W3 Sketch12
}

function update() {
  mouse.set(mouseX, mouseY); //W3 sketch9
  centerToMouse = p5.Vector.sub(mouse, pos);
  centerToMouse.normalize();
  centerToMouse.mult(0.1);
  acc = centerToMouse;

  vel.add(acc);
  vel.limit(8); // 설정값 이상 커지지 않게 상한선 / W3 Sketch12
  pos.add(vel);
}

function display() {
  // 시안색 원
  fill('cyan');
  noStroke();
  ellipse(pos.x, pos.y, 70);

  // CornflowerBlue / 원에서 마우스로 향하는 선
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
