function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background(255);
  line(width / 2, 0, width / 2, height);
  line(0, height / 2, width, height / 2);
  line(200, 0, 200, height);
  line(0, 100, width, 100);

  //push, pop까지만 저장, 나머지 초기화
  // translate, rotate가 들어가는 순간 감싸주는게 좋음
  push();
  translate(width / 2, height / 2); //필름 이동, 물체가 그려질 위치로 이동
  rotate((TAU / 360) * 25); //회전, translate가 꼭 먼저
  noStroke();
  fill('salmon');
  rect(0, 0, 50); //0,0 중앙을 위치삼아 그린다

  stroke('salmon');
  line(200, 0, 200, height);
  line(0, 100, width, 100);
  pop();

  // 위에서 했던 설정값 번복
  //   rotate((TAU / 360) * -25);
  //   translate(-width / 2, -height / 2);

  translate(200, 100);
  rotate((TAU / 360) * -15);
  noStroke();
  fill('slateblue');
  rect(0, 0, 50);
  rect(100, 100, 50);
}

function draw() {}
