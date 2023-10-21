let dataPoint = [];
let noiseX = 0;
let noiseXAdd = 0.05;
//1~9사이는 큰 랜덤, 0~0.03 작고 뭉근한 값

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
  // 값이 너무 랜덤하지는 않게 조절하기
  // dataPoint[dataPoint.length - 1] = random();
  dataPoint[dataPoint.length - 1] = noise(noiseX);

  background(255);
  noStroke();
  fill(0);
  for (let i = 0; i < dataPoint.length; i++) {
    const x = (width / (dataPoint.length + 1)) * (i + 1);
    const y = map(dataPoint[i], 0, 1, height, 0);
    ellipse(x, y, 10);
  }

  stroke(0);
  noFill();

  beginShape();
  //1열
  for (let i = 0; i < dataPoint.length; i++) {
    const x = (width / (dataPoint.length + 1)) * (i + 1);
    const y = map(dataPoint[i], 0, 1, height, 0);
    //1일때는 바닥에, 0일때는 위쪽에 > 을 뒤집기
    vertex(x, y);
  }

  //50개의 데이터, 49까지만 유효하기 때문에 -1
  endShape();
  for (let i = 0; i < dataPoint.length - 1; i++) {
    dataPoint[i] = dataPoint[i + 1];
  }
  noiseX += noiseXAdd;
}
