let moverA;
let moverB;
let gravity;
let wind;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background(255);

  //A 큰 원은 둔한영향, B 작은 원은 강한영향
  moverA = new MoverWithMass(width / 3, height / 2, 10); //큰
  moverB = new MoverWithMass((2 * width) / 3, height / 2, 1); //작은

  //중력
  gravity = createVector(0, 0.1);

  // 바람 조절
  wind = createVector(0.2, 0); //오른쪽으로 0.2만큼 뻗은 백터
}

function draw() {
  background(255);

  //A
  //중력과 바람, 다른 가속도를 넣어주기
  moverA.applyForce(gravity);
  //  moverA.addAcc(wind); //바람 키고 끄기

  //마우스 클릭했을때 작동 mouseIsPressed
  //마우스 캔버스안에서만 작동하게 isMouseInsideCanvas
  if (mouseIsPressed && isMouseInsideCanvas()) {
    moverA.applyForce(wind);
  }
  moverA.update();
  moverA.checkEdges();
  moverA.display();
  moverA.displayVectors();

  //B

  moverB.applyForce(gravity);
  if (mouseIsPressed && isMouseInsideCanvas()) {
    moverB.applyForce(wind);
  }
  moverB.update();
  moverB.checkEdges();
  moverB.display();
  moverB.displayVectors();
}
