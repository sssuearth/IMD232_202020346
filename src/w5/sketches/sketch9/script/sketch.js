let nGon = 8; //다각형 조절하기
let rad = 250; //nGon의 크기 정의
let x; // nGon이 그려질 위치
let y;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background(255);
}

function draw() {
  x = width / 2;
  y = height / 2;

  background(255);

  noFill();
  stroke(0);
  strokeWeight(1);
  ellipse(x, y, 2 * rad);

  //삼각형
  noStroke();
  fill(0);
  for (let a = 0; a < nGon; a++) {
    //위를 시작점으로
    const angle = (TAU / nGon) * a - (TAU / 360) * 90;
    const pointX = cos(angle) * rad + x;
    const pointY = sin(angle) * rad + y;
    ellipse(pointX, pointY, 10); //점찍기
  }

  //세점에 이어서 도형그리기
  stroke('red');
  noFill();
  beginShape();
  for (let a = 0; a < nGon; a++) {
    const angle = (TAU / nGon) * a - (TAU / 360) * 90;
    const pointX = cos(angle) * rad + x;
    const pointY = sin(angle) * rad + y;
    vertex(pointX, pointY); //좌표로서 이어서 도형을 만든다
  }
  endShape(CLOSE);
}
