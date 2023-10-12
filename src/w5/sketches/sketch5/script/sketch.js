function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background(255);

  noStroke();

  //연어색
  fill('salmon');
  rect(0, 0, 200, 100);

  //코랄, 진한블루와 비교
  fill('coral');
  rect(width / 2, height / 2, 300, 200); //화면의 정중앙에서부터

  //회전
  //컴퓨터 그래픽스에서는 시계방향 45도 회전
  rotate((TAU / 360) * 45); //tau는 3.14파이

  //하늘색
  fill('cornflowerblue');
  rect(0, 0, 300, 200);

  //진한블루, 코랄과 비교
  //물체 중심의 제자리 회전이 아님
  //위의 rotate이후 캔버스의 그리드 자체가 45도 회전, 사각형도 돌아간상태로 그려짐
  fill('slateblue');
  rect(width / 2, height / 2, 200, 100);
}

function draw() {}
