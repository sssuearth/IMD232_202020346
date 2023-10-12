let angle = 0;
// let angleVel = (TAU / 360) * 1;
let angleVel;
let angleAcc;

function setup() {
  setCanvasContainer('canvas', 2, 1, true);

  //   angleVel = (TAU / 360) * 1;
  angleVel = 0;
  angleAcc = (TAU / 360) * 0.01; //회전하도록

  background(255);
}

function draw() {
  angleVel += angleAcc;
  angleVel = constrain(angleVel, -5, 5);
  //한계, 값이 가질수 있는 최대치, 최소치
  angle += angleVel;

  background(255);

  translate(width / 2, height / 2); //캔버스 중앙
  // rotate(TAU / 360) * 0.01; //각도가 계속바뀌면 애니메이션

  rotate(angle);
  //   line(0, 0, 100, 0);
  //   line(0, 0, -100, 0);
  line(-100, 0, 100, 0);
  ellipse(0, 0, 20);
}
