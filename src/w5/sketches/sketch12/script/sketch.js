const dotNum = 30;
const freq = 1 / 2; //화면 내에서 몇번 웨이브
let angleStart = 0;
let angleStartVel;
let amp;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  //몇 초마다 물결치게 하는지? 1초 60, 2초 120
  angleStartVel = periodToVel(120);
  //   angleStartVel = 0;
  amp = height / 4; //2, 4는 원만하게

  background(255);
}

function draw() {
  background(255);
  for (let a = 0; a < dotNum; a++) {
    const ellipseX = (width / (dotNum - 1)) * a;
    const dia = width / (dotNum - 1);
    const angle = angleStart + (TAU / (dotNum - 1)) * a * freq; //앵글이 계속 바뀌게
    ellipse(ellipseX, height / 2 + sin(angle) * amp, dia);
  }

  angleStart += angleStartVel;
}

// 몇프레임마다 위를 치게 하겠다
function periodToVel(periodAsFrame) {
  return TAU / periodAsFrame;
}
