let moverA;
let moverB;
let gravity;
let wind;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background(255);

  //A 큰 원은 둔한영향, B 작은 원은 강한영향
  moverA = new Mover(width / 3, height / 2, 10); //큰
  moverB = new Mover((2 * width) / 3, height / 2, 1); //작은
  //중력
  gravity = createVector(0, 0.1);
  // 바람 조절
  wind = createVector(0.2, 0); //오른쪽으로 0.2만큼 뻗은 백터
}

// 중력을 정확히 시뮬레이션
// 질량이 다르지만(질량에 비례해서) 동시에 떨어지도록 하기
// 바람은 그대로

function draw() {
  background(255);

  let gravityA = createVector(gravity.x, gravity.y);
  gravityA.mult(moverA.mass);
  moverA.applyForce(gravityA);
  if (mouseIsPressed && isMouseInsideCanvas()) {
    moverA.applyForce(wind);
  }

  //friction = -1*u*N

  //큰공
  if (moverA.contactEdge()) {
    let c = 0.01; //1에서 0사이에 해당하는 마찰계수
    // let friction = createVector(moverA.vel.x, moverA.vel.y);
    let friction = moverA.vel.copy(); // 가고있던 진행방향
    friction.mult(-1); //반대 방향으로 -1 뒤집기
    friction.mult(c); //값 곱하기, 위 C= 값
    moverA.applyForce(friction); //힘으로서 넣어줌
  }

  moverA.update();
  moverA.checkEdges();
  moverA.display();
  moverA.displayVectors();

  let gravityB = createVector(gravity.x, gravity.y);
  gravityB.mult(moverB.mass);
  moverB.applyForce(gravityB);
  if (mouseIsPressed && isMouseInsideCanvas()) {
    moverB.applyForce(wind);
  }

  //작은공
  if (moverB.contactEdge()) {
    let c = 0.9; //c=N
    // let friction = createVector(moverA.vel.x, moverA.vel.y);
    let friction = moverB.vel.copy();
    friction.mult(-1); //방향 뒤집기
    friction.mult(c); //위 0.5 값
    moverB.applyForce(friction);
  }

  moverB.update();
  moverB.checkEdges();
  moverB.display();
  moverB.displayVectors();
}
