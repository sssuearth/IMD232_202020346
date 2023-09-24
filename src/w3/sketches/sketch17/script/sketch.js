let pos;
let vel; //속도
let acc; //가속도
let mv; //마우스로 뻗어가는 벡터

function setup() {
  setCanvasContainer('canvas', 3, 3, true);
  background('white');

  pos = createVector(random(width), random(height));
  vel = createVector(0, 0); //속도
  acc = p5.Vector.random2D(); //가속도 랜덤
  mv = createVector();
}

function draw() {
  background('white');
  update();
  infiniteEdge();
  display();
}

function update() {
  acc = p5.Vector.random2D();
  acc.mult(0.5); // 가속도 속력 2이하
  vel.add(acc);
  vel.limit(8); // 설정값 이상 커지지 않게 상한선 / W3 Sketch12
  pos.add(vel);
}

//화면을 벗어나면 무한공간인 것처럼 이어짐
function infiniteEdge() {
  if (pos.x < 0) {
    pos.x += width;
  } else if (pos.x >= width) {
    pos.x -= width;
  }
  if (pos.y < 0) {
    pos.y += height;
  } else if (pos.y >= height) {
    pos.y -= height;
  }
}

function display() {
  // 시안색 원
  fill('cyan');
  noStroke();
  ellipse(pos.x, pos.y, 70);

  //선
  mv.x = mouseX;
  mv.y = mouseY;
  mv.sub(pos);
  translate(pos.x, pos.y); //원점 옮기기 / W3 Sketch6

  // CornflowerBlue / 원에서 마우스로 향하는 선
  stroke('CornflowerBlue');
  strokeWeight(3);
  line(0, 0, mv.x, mv.y);

  // Indigo / vel 속도 10배
  stroke('Indigo');
  line(0, 0, vel.x * 10, vel.y * 10);

  // DeepPink / acc 가속도 100배
  stroke('DeepPink');
  line(0, 0, acc.x * 100, acc.y * 100);
}

//W3 Sketch 6, 12 토대로 제작
