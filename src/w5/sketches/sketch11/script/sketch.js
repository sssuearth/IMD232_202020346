let angle;
let angleVel;
let amplitude = [100, 100]; //이동거리

function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  // angleVel을 두개의 값을 가진 createVector로 생각

  // angle = createVector(0, 0);
  angle = createVector(0, TAU / 4); //시작각도의 차이
  //주기, 리사주 도형, 1:1 비율로 도형 그리기
  angleVel = createVector(periodToAngleVel(120), periodToAngleVel(120));

  background(255);
}

function draw() {
  //콘솔 변화가 빨라 캐치가 어렵기 때문에 조절
  angle.add(angleVel);

  background(255);
  line(0, height / 2, width, height / 2);
  line(width / 2, 0, width / 2, height);

  //둥실둥실 떠다니는 느낌
  ellipse(
    width / 2 + sin(angle.x) * amplitude[0],
    height / 2 + sin(angle.y) * amplitude[1], //뒤집을떈 - 마이너스로
    5 //원
  );
  // console.log(sin(angle));
}

//주기, 프레임단위
function periodToAngleVel(periodAsFrame) {
  return TAU / periodAsFrame;
}
