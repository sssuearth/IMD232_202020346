let x;
let y;
// x,y 두개의 값을 만들고, 벽을 만나면 충돌되도록 한다, 충돌된 자표를 시각화
let velocityX = 3;
let velocityY = 5;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('white');
  x = width / 2.0;
  y = height / 2.0;
}
function draw() {
  background('white');
  x += velocityX;
  y += velocityY;
  ellipse(x, y, 50);

  //   if (x < 0) {
  //     velocityX *= -1;
  //   } else if (x > width) {
  //     velocityX *= -1;
  //   }
  if (x < 0 || x > width) {
    velocityX *= -1;
  }
  //   if (y < 0) {
  //     velocityY *= -1;
  //   } else if (y > height) {
  //     velocityY *= -1;
  //   }
  if (y < 0 || y > height) {
    velocityY *= -1;
  }
}
