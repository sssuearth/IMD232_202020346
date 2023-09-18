let pos;
let vel;
let acc;
let radius = 50;

function setup() {
  setCanvasContainer('mySketchGoesHere', 3, 2, true);
  background(255);
  pos = createVector(width / 2, height / 2);
  vel = createVector(0, 0);
  acc = createVector(); //가속도
  console.log(acc);
  console.log(vel);
  // posX = width / 2; //원의 위치를 화면 너비 중앙
  // posY = height / 2; //원의 위치를 화면 높이 중앙
  ellipse(pos.x, pos.y, 50);
}

function draw() {
  background(255);
  acc = p5.Vector.random2D();
  acc.mult(0.5);
  vel.add(add);
  pos.add(vel);
  infiniteEdge();
  ellipse(pos.x, pos.y, 2 * radius);

  if (pos.x - radius < 0 || pos.x + radius > width) {
    vel.x += -1;
  }
  if (pos.y - radius < 0 || pos.y + radius > height) {
    vel.y += -1;
  }

  // posX++;
  // posX = posX + 1;
  // posX += 1;
}
