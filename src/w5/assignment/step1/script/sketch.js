const cNum = 8;
const rNum = 8;
let gridC;
let gridR;
let angleBegin = 0;
let angleBeginVel = 0.05;
let angleStep = 15;

function setup() {
  setCanvasContainer('canvas', 1, 1, true);
  colorMode(HSL, 360, 100, 100, 100);
  background(360, 0, 100);

  gridC = width / (cNum + 1.5);
  gridR = height / (rNum + 1.5);
}

function draw() {
  background(360, 0, 100);

  for (let r = 0; r < rNum; r++) {
    for (let c = 0; c < cNum; c++) {
      push();
      const x = ((c + 1) * width) / (cNum + 1);
      const y = ((r + 1) * height) / (rNum + 1);

      translate(x, y);
      rotate(radians(angleBegin + c * angleStep));

      const colorIndex = (c + r) % 4;
      const colors = ['Blue', 'Magenta', 'Green', 'Orange'];
      stroke(colors[colorIndex]);

      ellipse(0, 0, gridC / 1.5); //원
      line(0, 0, gridC / 3, 0); //반지름 선

      noStroke();
      fill('Black');
      ellipse(gridC / 3, 0, gridC * 0.2); //작은원

      pop();
    }
    angleBegin += angleBeginVel;
  }
}
