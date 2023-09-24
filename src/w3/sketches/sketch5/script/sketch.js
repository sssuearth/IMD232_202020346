//원의 위치 변수
let x;
let y;
let p = {
  //add는 함수
  // add: function (otherVector) {
  //   this.x += otherVector.x;
  //   this.y += otherVector.y;
  // },
};

//방향성을 갖는 속도
// let velocityX = 5;
// let velocityY = 3;
let v = {
  x: 3,
  y: 5,
};

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('white');

  // //화면 너비의 중앙
  // x = width / 2.0;
  // y = height / 2.0;
  p.x = width / 2;
  p.y = height / 2;

  console.log('p', p);
  console.log('v', v);
}

function draw() {
  background('white');
  // x += velocityX;
  // y += velocityY;
  p.x += v.x; //포지션에 속도값 더하기
  p.y += v.y;
  // p.add(v);
  // ellipse(x, y, 50);
  ellipse(p.x, p.y, 50);

  // //공이 벽에 부딪히는 순간 튕기기
  // if (x < 0 || x > width) {
  //   velocityX *= -1;
  // }
  // if (y < 0 || y > height) {
  //   velocityY *= -1;
  // }

  if (p.x < 0 || p.x > width) {
    v.x *= -1;
  }
  if (p.y < 0 || p.y > height) {
    v.y *= -1;
  }
}
