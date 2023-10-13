let x, y;
const rad = 50;
let isHover = false;
let isDragging = false;
let deltaX, deltaY; //눌린 위치 저장

let movableObj;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  x = width / 2;
  y = height / 2;

  movableObj = new MovableObj(width / 4, height / 4, 50);

  colorMode(HSL, 360, 100, 100, 100);
  background(0, 0, 10);
}

function draw() {
  background(0, 0, 100);
  display();
  movableObj.display(); // 초록원
}

// 물체가 이동시키려면 마우스가 물체안으로 들어가야한다
// 판별하기 위한 변수
// distSq > dist의 제곱

function chkHover(mX, mY) {
  const distSq = (x - mX) ** 2 + (y - mY) ** 2;
  return distSq <= rad ** 2;
}

//색 바뀜
function display() {
  noStroke();
  if (isHover) {
    fill(30, 80, 50);
  } else {
    fill(30, 60, 50);
  }
  ellipse(x, y, 2 * rad);
}

// 클릭하면 드래그해서 움직일 수 있도록

function mouseMoved() {
  isHover = chkHover(mouseX, mouseY);
  movableObj.mouseMoved(mouseX, mouseY);
}

//클릭하는 순간 원의 안쪽에 마우스가 있는가?
function mousePressed() {
  if (isHover) {
    isDragging = true; //드래그 활성화
    deltaX = mouseX - x; //중심에서 클릭된 지점까지
    deltaY = mouseY - y;
  }
  movableObj.mousePressed(mouseX, mouseY);
}

//클릭해서 움직일때, 마우스 위치에서 - 위에서 산출해놓은 값
function mouseDragged() {
  if (isDragging) {
    x = mouseX - deltaX;
    y = mouseY - deltaY;
  }
  movableObj.mouseDragged(mouseX, mouseY);
}
function mouseReleased() {
  isDragging = false;
  movableObj.mouseReleased();
}
