let cv; //center
let mv; //mouseV
let cvToMv; //흰선과 분홍선을 잇는

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('slateblue');
  cv = createVector(width / 2, height / 2); // 0,0에서 센터로 향하는 흰선
  mv = createVector(); //0,0에서 마우스를 따라가는 분홍선
  cvToMv = createVector(); //흰선과 분홍선을 잇는
}
function draw() {
  background('slateblue');

  //0,0에서 센터로 향하는 흰선
  strokeWeight(2);
  stroke('white');
  line(0, 0, cv.x, cv.y);

  //0,0에서 마우스를 따라가는 분홍선
  mv.set(mouseX, mouseY);
  stroke('fuchsia');
  line(0, 0, mv.x, mv.y);

  //흰선과 분홍선을 잇는
  cvToMv = p5.Vector.sub(mv, cv);
  stroke('lime');
  translate(cv.x, cv.y); //cvToMv의 원점을 화면 중앙으로 옮기기
  line(0, 0, cvToMv.x, cvToMv.y);

  //절반
  cvToMv.mult(0.5);
  strokeWeight(4);
  stroke('black');
  line(0, 0, cvToMv.x, cvToMv.y);
}
