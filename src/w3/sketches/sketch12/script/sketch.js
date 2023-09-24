let pos;
let vel; //속도
let acc; //가속도

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('salmon');
  pos = createVector(random(width), random(height));
  vel = createVector(0, 0); //속도
  acc = p5.Vector.random2D(); //가속도 랜덤
  acc.mult(0.1);
  console.log('pos', pos);
  console.log('vel', vel);
  console.log('acc', acc);
  console.log('velMag', vel.mag());
  console.log('accMag', acc.mag());
}

function draw() {
  background('salmon');
  update();
  checkEdges();
  display();
  console.log('velMag', vel.mag());
  console.log('accMag', acc.mag());
}

function update() {
  acc = p5.Vector.random2D();
  acc.mult(1);
  vel.add(acc);
  vel.limit(10); //10이상 커지지 않게 한계값
  pos.add(vel);
}

//화면을 벗어나면 무한공간인 것처럼 이어짐
function checkEdges() {
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

//원
function display() {
  noStroke();
  fill('cornsilk');
  ellipse(pos.x, pos.y, 50);
}
