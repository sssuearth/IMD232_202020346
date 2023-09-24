let cv;
let mv;
let cvToMv;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('slateblue');
  cv = createVector(width / 2, height / 2);
  mv = createVector();
  cvToMv = createVector();
}

//중앙에서 마우스로 향하는선
//mag는 양수음수 개념이 없이 모두 양수로 나옴
function draw() {
  background('slateblue');

  mv.set(mouseX, mouseY);
  cvToMv = p5.Vector.sub(mv, cv);
  let mag = cvToMv.mag();

  //상단 바
  noStroke();
  fill('white');
  rect(10, 10, mag, 10);

  //마우스 따라가는 선
  strokeWeight(2);
  stroke('white');
  translate(cv.x, cv.y);
  line(0, 0, cvToMv.x, cvToMv.y);
}
