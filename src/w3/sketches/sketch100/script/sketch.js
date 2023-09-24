let posX;
let posY;
let posXAdd = 3;
let posYAdd = -2;

function setup() {
  setCanvasContainer('mySketchGoesHere', 3, 2, true);
  background(255);
  posX = width / 2; //원의 위치를 화면 너비 중앙
  posY = height / 2; //원의 위치를 화면 높이 중앙
  ellipse(posX, posY, 50);
}

function draw() {
  background(255);
  //계산하는 것을 먼저하고 도형을 그리기
  posX += posXAdd;
  posY += posYAdd;
  ellipse(posX, posY, 50);

  // posX++;
  // posX = posX + 1;
  // posX += 1;
}
