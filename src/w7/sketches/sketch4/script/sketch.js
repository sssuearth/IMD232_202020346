let dataPoint = [];

function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  //속도늦추기
  frameRate(5);

  for (let i = 0; i < 50; i++) {
    dataPoint.push(0.5);
    //1일때는 위쪽에
    //0일때는 바닥에
  }

  background(255);
}

function draw() {
  //맨 마지막 49번째 값을
  dataPoint[dataPoint.length - 1] = map(mouseY, 0, height, 1, 0);

  background(255);
  noStroke();
  fill(0);

  //1열
  for (let i = 0; i < dataPoint.length; i++) {
    const x = (width / (dataPoint.length + 1)) * (i + 1);
    const y = map(dataPoint[i], 0, 1, height, 0);
    //1일때는 바닥에, 0일때는 위쪽에 > 을 뒤집기
    ellipse(x, y, 10);
  }

  //50개의 데이터, 49까지만 유효하기 때문에 -1
  for (let i = 0; i < dataPoint.length - 1; i++) {
    dataPoint[i] = dataPoint[i + 1];
  }
}
