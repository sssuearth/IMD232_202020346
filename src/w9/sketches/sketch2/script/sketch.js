// let Engine = Matter.Engine,
//   Render = Matter.Render,
//   Runner = Matter.Runner,
//   Bodies = Matter.Bodies,
//   Composite = Matter.Composite;

// 객체 분해 구조 할당
let { Engine, Bodies, Composite, Runner } = Matter;

// 필수과정 1: 엔진 만들기
let engine = Engine.create();

// 필수과정 4: 자동으로 계속 동작하게 해주는 장치 만들기
let runner = Runner.create();

// 선언
let boxA;
let boxB;
let ground;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  rectMode(CENTER);

  // 옵션과정 1: 물체 만들기
  boxA = Bodies.rectangle(400, 200, 80, 80);
  boxB = Bodies.rectangle(450, 50, 80, 80);
  ground = Bodies.rectangle(width / 2, height - 80, width - 200, 160, {
    isStatic: true,
  });

  // 옵션과정 2: 물체를 세계에 추가하기
  // Composite.add(engine.world, [boxA, boxB, ground]);
  Composite.add(engine.world, boxA);
  Composite.add(engine.world, boxB);
  Composite.add(engine.world, ground);

  background(255);

  console.log(ground);

  // 필수과정 5: 자동 뺑뺑이에게 엔진을 등록해서 ㄱㄱㄱ
  // 60분의 1초
  Runner.run(runner, engine);
}

function draw() {
  //   Engine.update(engine);
  background(255);

  // 작은 사각형 2개와 회전 표현하기
  // 가로, 세로 값 임의로 설정 80, 80
  push();
  translate(boxA.position.x, boxA.position.y);
  rotate(boxA.angle);
  rect(0, 0, 80, 80);
  pop();

  push();
  translate(boxB.position.x, boxB.position.y);
  rotate(boxB.angle);
  rect(0, 0, 80, 80);
  pop();

  // 콘솔에서 rect 크기를 참고
  rect(ground.position.x, ground.position.y, width - 200, 160);
}
