let angle = 0;
let angleVel; //앵글에 특정한 값만큼 더하기
let amplitude = 50; //떠다니는 ellipse뒤에 곱해주는 숫자
let period = 180; //주기 - 중앙에서 시작>위>아래
//60일때 1초, 120일때 2초, 180일때 3초

function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  // angleVel = (TAU / 260) * 16; //1도 움직이는데 6초, 2도 3초
  angleVel = periodToAngleVel(period);

  background(255);
}

function draw() {
  //콘솔 변화가 빨라 캐치가 어렵기 때문에 조절
  angle += angleVel;

  background(255);

  line(0, height / 2, width, height / 2);

  //둥실둥실 떠다니는 느낌
  ellipse(width / 2, height / 2 + sin(angle) * amplitude, 50);

  // console.log(sin(angle));
}

//주기, 프레임단위
function periodToAngleVel(periodAsFrame) {
  return TAU / periodAsFrame;
}
