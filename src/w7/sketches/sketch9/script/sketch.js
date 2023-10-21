const tileSize = 40; //픽셀
let columnNum;
let rowNum;
let noiseCoordMult = 0.05; //관계성이 보이는 값

function setup() {
  setCanvasContainer('canvas', 1, 1, true);

  columnNum = floor(width / tileSize);
  rowNum = floor(height / tileSize);

  background(255);

  noiseSeed(5);
}

function draw() {
  // randomSeed(100);
  background(255);
  // noStroke();
  for (let row = 0; row < rowNum; row++) {
    for (let column = 0; column < columnNum; column++) {
      const idx = column + row * columnNum;
      // fill(random() * 255);
      // fill(noise(row * noiseCoordMult, column * noiseCoordMult) * 255);
      // rect(column * tileSize, row * tileSize, tileSize);

      push();

      translate(
        column * tileSize + tileSize * 0.5,
        row * tileSize + tileSize * 0.5
      );

      //회전
      rotate(
        radians(noise(row * noiseCoordMult, column * noiseCoordMult) * 360)
      );
      // ellipse(0, 0, tileSize);
      //라인으로 시각화 , 길이 조절
      line(-tileSize * 0.3, 0, tileSize * 0.3, 0);

      pop();
    }
  }
}
