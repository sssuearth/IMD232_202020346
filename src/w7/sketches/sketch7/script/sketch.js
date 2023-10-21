let noiseXA = 0; //위
let noiseXB = 0; //아래
let noiseXAVel = 0.005; //더해지는
let noiseXBVel = 1;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  background(255);
}

function draw() {
  background(255);

  // ellipse(width / 2 + random(100, 200), height / 2, 50);
  // ellipse(width / 2 + random() * 100 + 100, height / 2 + 100, 50);

  // noise에는 0~1 사이 값만 넣기, 랜덤같이 최대, 최소값이 아님
  ellipse(width / 2 + noise(noiseXA) * 100 + 100, height / 2, 50);
  ellipse(width / 2 + noise(noiseXB) * 100 + 100, height / 2 + 100, 50);

  // 무작위긴 하나 덜 랜덤한 것을 표현하는 noise
  // 다만 noise는 랜덤을 사용하듯이 최대, 최소값을 사용하지 않고
  // 얼마나 크게 움직이는가(100) + 최소값은 몇인가(100) 계산
  // 최대값은 200, 최소값 100에서 최대값 200을 오가는 noise

  noiseXA += noiseXAVel;
  noiseXB += noiseXBVel;
}
