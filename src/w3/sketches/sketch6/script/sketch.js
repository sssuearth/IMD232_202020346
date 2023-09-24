let cv; //center
let mv; //mouseV

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('salmon');
  cv = createVector(width / 2, height / 2); //파란선
  mv = createVector(); //붉은선
}

//Vector Subtraction
//특정 백터에서 다른 백터로 향하는, 거기까지 도달하기 위해
//어느방향으로 얼마나 가야하는지 구하는 목적

function draw() {
  background('salmon');
  strokeWeight(2);

  //파란선 - 0,0에서 센터로 뻗어나가는 백터를 시각화
  stroke('blue');
  line(0, 0, cv.x, cv.y); //중앙점

  //붉은선 - 0,0에서 마우스를 따라가는
  mv.x = mouseX;
  mv.y = mouseY;
  stroke('crimson');
  line(0, 0, mv.x, mv.y);

  // blue와 crimson 두 선을 이어주는 길이, 방향을 가진 백터
  mv.sub(cv);
  translate(cv.x, cv.y); //원점을 옮겨주는 함수
  stroke('white');
  line(0, 0, mv.x, mv.y); //crimson에서 blue를 뺀만큼
}
