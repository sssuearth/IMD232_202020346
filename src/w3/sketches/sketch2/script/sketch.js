let pos;
let vel;
let acc;
let radius = 50;

function setup() {
  setCanvasContainer('mySketchGoesHere', 3, 2, true);
  background('white');
  pos = createVector(width / 2, height / 2);
  vel = createVector(0, 0);
  acc = createVector(); //가속도
  console.log(pos);
  console.log(vel);
  // 괄호 안에값 필수 아님 / 백터기능 쓸 수 있는걸로 인식
  // posX = width / 2; //원의 위치를 화면 너비 중앙
  // posY = height / 2; //원의 위치를 화면 높이 중앙
  ellipse(pos.x, pos.y, 50);
}

function draw() {
  background(255);
  update();
  infiniteEdge();
  display();
}

function display() {
  fill('blue');
  ellipse(pos.x, pos.y, 2 * radius);
}

function update() {
  acc = p5.Vector.random2D();
  acc.mult(0.5);
  vel.add(acc);
  vel.limit(5);
  pos.add(vel);
}

function infiniteEdge() {
  if (pos.x < 0) {
    pos.x = width;
  } else if (pos.x > width) {
    pos.x = 0;
  }
  if (pos.y < 0) {
    pos.y = height;
  } else if (pos.y > height) {
    pos.y = 0;
  }
}

// posX++;
// posX = posX + 1;
// posX += 1;

// acc = p5.Vector.random2D();
// // 방향 랜덤 길이 무조건 1
// acc.mult(2);
// vel.add(acc);
// pos.add(vel);
// if (pos.x < 0) {
//   vel.x *= -1;
// } else if (pos.x > width) {
//   vel.x *= -1;
// // }

// if (pos.x < 0) {
//   pos.x = width;
// } else if (pos.x > width) {
//   pos.x = 0;
// }
// if (pos.y < 0) {
//   pos.y = height;
// } else if (pos.y > height) {
//   pos.y = 0;
// }

// if (pos.x < 0 || pos.x + radius > width) {
//   vel.x *= -1;
// }
// if (pos.y < 0 || pos.y + radius > height) {
//   vel.y *= -1;
// }
