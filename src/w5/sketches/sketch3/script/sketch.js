const stripeNum = 20;
const stripeNum2 = 15;

const stripeBegin = 15; //변수 상수 / 몇부터 시작
const stripeGap = 30; //스트라이프의 간격

function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  background(255);
}
function draw() {
  noStroke();
  background(255);

  // //20번을 그리겠다 / 그릴 스트라이프의 갯수를 정하는 방식
  // //너비를 채워서 사각형을 그리고 싶을때
  // //그려지는 양이 변하지 않는다. 창 크기에 따라 치수를 나눈다.
  // //stripeNum/스트라이프갯수 = 20

  // //가로줄
  // for (let a = 0; a < stripeNum; a++) {
  //   const rectWidth = width / (stripeNum + stripeNum + 1);
  //   const rectX = (width / (stripeNum + stripeNum + 1)) * (2 * a + 1);
  //   rect(rectX, 0, rectWidth, height);
  // }

  // //세로줄
  // for (let a = 0; a < stripeNum; a++) {
  //   const rectHeight = height / (stripeNum + stripeNum + 1);
  //   const rectY = (height / (stripeNum + stripeNum + 1)) * (2 * a + 1);
  //   rect(0, rectY, width, rectHeight);
  // }

  rectMode(CENTER); //2중 for구문
  for (let a = 0; a < stripeNum; a++) {
    for (let b = 0; b < stripeNum2; b++) {
      fill((255 / stripeNum) * a, (255 / stripeNum2) * b, 255);
      // //지정간격
      // let x = (a + 1) * 55; //가로 간격
      // let y = (b + 1) * 50; //세로 간격
      // ellipse(x, y, 10);

      //Responsive 반응형
      let x = ((a + 1) * width) / (stripeNum + 1); //
      let y = ((b + 1) * height) / (stripeNum2 + 1);
      if (a % 2 == 0) {
        ellipse(x, y, 10); //a가 짝수면 원을그려라
      } else {
        rect(x, y, 10); //a가 짝수가 아니면 사각형을 그려라
      }
    }
  }

  //지정된 사이즈로 -씩 마다 그리겠다
  //그려지는 양이 줄어든다

  // for (let a = stripeBegin; a < width; a += 2 * stripeGap) {
  //   rect(a, 0, stripeGap, height);
  // }
}
