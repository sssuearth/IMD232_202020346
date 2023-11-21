let aDrunkenObj;
let trace = [];
let path = [];

function setup() {
  setCanvasContainer('canvas', 1, 1, true);

  aDrunkenObj = new Drunken(width / 2, height / 2);
  //처음에 일단 패스를 하나 가지고 있게 함
  trace.push(path);

  background('white');
}

function draw() {
  // 계산해주기
  const randomForce = p5.Vector.random2D();
  randomForce.mult(1);

  aDrunkenObj.applyForce(randomForce);
  aDrunkenObj.update();
  aDrunkenObj.infiniteEdge();

  // 잔상이 남는 것 처럼
  if (aDrunkenObj.isCrossed) {
    // 새로 만들기
    path = [];
    // 새로운 패스를 만든다.
    trace.push(path);
    // 순간이동이 되는 순간 재연결
    path.push([aDrunkenObj.pos.x, aDrunkenObj.pos.y]);
  } else {
    path.push([aDrunkenObj.pos.x, aDrunkenObj.pos.y]);
  }

  if (aDrunkenObj.isCrossed) {
    background('blue');
  } else {
    background('white');
  }

  // 원래의 원보다 앞에 그리기 > 뒤에 그려짐
  for (let pathIdx = 0; pathIdx < trace.length; pathIdx++) {
    const aPath = trace[pathIdx];
    noFill();
    beginShape();
    for (let pointIdx = 0; pointIdx < trace[pathIdx].length; pointIdx++) {
      const point = trace[pathIdx][pointIdx];
      vertex(point[0], point[1]);
    }
    endShape();
  }
  aDrunkenObj.display();

  console.log(trace);
}
