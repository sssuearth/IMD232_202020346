// let x;
// let y;
let pos = [];
// let velocityX = 5;
// let velocityY = 3;
let vel = [3, 5];

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('white');
  // x = width / 2.0;
  // y = height / 2.0;
  pos = [width / 2, height / 2];

  console.log('pos', pos);
  console.log('vel', vel);
}

function draw() {
  background('white');
  // x += velocityX;
  // y += velocityY;

  //0번지에 있는 값에 vel 0번 값을 더한다
  pos[0] += vel[0];
  pos[1] += vel[1];

  // ellipse(x, y, 50);
  ellipse(pos[0], pos[1], 50);

  //화면 밖으로 나가지 않고 튕기게 처리

  // if (x < 0 || x > width) {
  //   velocityX *= -1;
  // }
  // if (y < 0 || y > height) {
  //   velocityY *= -1;
  // }

  if (pos[0] < 0 || pos[0] > width) {
    vel[0] *= -1;
  }
  if (pos[1] < 0 || pos[1] > height) {
    vel[1] *= -1;
  }
}
