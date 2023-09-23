let mover;
let gravity;
let wind;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background(255);
  mover = new MoverNoMass(width / 2, height / 2, 50);

  //중력
  gravity = createVector(0, 0.1);

  // 바람 조절
  wind = createVector(0.2, 0); //오른쪽으로 0.2만큼 뻗은 백터
}

function draw() {
  background(255);

  //중력과 바람, 다른 가속도를 넣어주기
  mover.addAcc(gravity);
  //  mover.addAcc(wind); //바람 키고 끄기

  //마우스 클릭했을때 작동 mouseIsPressed
  //마우스 캔버스안에서만 작동하게 isMouseInsideCanvas
  if (mouseIsPressed && isMouseInsideCanvas()) {
    mover.addAcc(wind);
  }

  mover.update();
  mover.checkEdges();
  mover.display();
  mover.displayVectors();
}
