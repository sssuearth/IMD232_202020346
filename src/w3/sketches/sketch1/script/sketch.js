//원의 위치 변수
let x;
let y;
//방향성을 갖는 속도
let velocityX = 5;
let velocityY = 3;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('white');

  //화면 너비의 중앙
  x = width / 2.0;
  y = height / 2.0;
}

function draw() {
  background('white');
  x += velocityX;
  y += velocityY;
  ellipse(x, y, 50);

  //공이 벽에 부딪히는 순간 튕기기
  // if (x < 0) {
  //   velocityX *= -1;
  // } else if (x > width) {
  //   velocityX *= -1;
  // }

  // if (y < 0) {
  //   velocityY *= -1;
  // } else if (y > height) {
  //   velocityY *= -1;
  // }

  if (x < 0 || x > width) {
    velocityX *= -1;
  }
  if (y < 0 || y > height) {
    velocityY *= -1;
  }
}
