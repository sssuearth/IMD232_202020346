// matter.js 쓰기 위한 기본 변수들
// 기본 변수 혹은 모듈들
var Engine = Matter.Engine,
  Render = Matter.Render,
  Runner = Matter.Runner,
  Composites = Matter.Composites,
  Events = Matter.Events,
  Constraint = Matter.Constraint,
  MouseConstraint = Matter.MouseConstraint,
  Mouse = Matter.Mouse,
  Body = Matter.Body,
  Composite = Matter.Composite,
  Bodies = Matter.Bodies;

// 엔진 만들기
var engine = Engine.create(),
  world = engine.world;

// 러너 만들고 실행하기
// 프로세싱이 60프레임에 맞춰 작동하도록
var runner = Runner.create();
Runner.run(runner, engine);

// set up 바깥에서, draw에서도 쓸 수 있게 변수 선언만 여기서
let ground;
let rocks = [];
let elastic;
let pyramid;
let ground2;
let pyramid2;

// Event.on 엔진 구현 = 총알
let m; //mouce
let mc; //mouceConstraint

// 창 사이즈가 바뀔때, 플렉서블하게, 비례에 맞게 반응할 수 있도록
// /originalWidth로 나누고 * width를 곱해서 환산
const originalWidth = 800;
const originalHeight = 600;

let released = false;

//p5.js 함수로 그리기

function setup() {
  setCanvasContainer('canvas', originalWidth, originalHeight, true);

  // 바디 만들기
  // 변수에 할당은 여기서
  ground = Bodies.rectangle(395, 600, 815, 50, {
    isStatic: true,
    render: { fillStyle: '#060a19' },
  });
  // 변수 rocks
  let aNewRock = Bodies.polygon(170, 450, 8, 20, { density: 0.004 });
  rocks.push(aNewRock);
  elastic = Constraint.create({
    pointA: { x: 170, y: 450 },
    bodyB: aNewRock,
    length: 0.01,
    damping: 0.01,
    stiffness: 0.05,
  });
  pyramid = Composites.pyramid(500, 300, 9, 10, 0, 0, function (x, y) {
    return Bodies.rectangle(x, y, 25, 40);
  });
  ground2 = Bodies.rectangle(610, 250, 200, 20, {
    isStatic: true,
    render: { fillStyle: '#060a19' },
  });
  pyramid2 = Composites.pyramid(550, 0, 5, 10, 0, 0, function (x, y) {
    return Bodies.rectangle(x, y, 25, 40);
  });

  // 만든 바디를 세계에 추가
  Composite.add(engine.world, [
    ground,
    pyramid,
    ground2,
    pyramid2,
    aNewRock,
    elastic,
  ]);

  // 마우스 활용, 새총 구현
  // m = Mouse.create(document.querySelector("#defaultCanvas0"));
  m = Mouse.create(document.querySelector('.p5Canvas'));

  // 픽셀 덴시티 pixelDensity 맞춰주기
  // m.pixelRatio = pixelDensity();
  // 캔버스 : 실제 매터.js 세계의 스케일이랑 화면에 투자되는 스케일 넣어주기
  // * width) / originalWidth;
  m.pixelRatio = (pixelDensity() * width) / originalWidth;
  mc = MouseConstraint.create(engine, {
    mouse: m,
    constraint: {
      stiffness: 0.2,
    },
  });

  Composite.add(world, mc);

  console.log('ground', ground);
  console.log('pyramid', pyramid);
  console.log('ground2', ground2);
  console.log('pyramid2', pyramid2);
  console.log('rock', aNewRock);
  console.log('elastic', elastic);

  background('white');
}

// 그리기
function draw() {
  // 플렉시블하게
  m.pixelRatio = (pixelDensity() * width) / originalWidth;

  // 마우스를 놓았을때 다각형이 튀어나가려고 한다면,
  // 스피드를 일정속도를 제어하고
  // 연결되어 있던 관계를 끊고 새 rocks를 추가한다
  if (released) {
    if (
      rocks[rocks.length - 1].position.x > 190 ||
      rocks[rocks.length - 1].position.y < 430
    ) {
      if (Body.getSpeed(rocks[rocks.length - 1]) > 45) {
        Body.setSpeed(rocks[rocks.length - 1], 45);
      }
      // Release current rock and add a new one.
      let aNewRock = Bodies.polygon(170, 450, 7, 20, { density: 0.004 });
      rocks.push(aNewRock);
      Composite.add(engine.world, aNewRock);
      elastic.bodyB = aNewRock;
      released = false;
    }
  }

  background('white');
  fill('cyan');

  // 아래 그라운드
  beginShape();
  ground.vertices.forEach((each) => {
    vertex(
      (each.x / originalWidth) * width,
      (each.y / originalHeight) * height
    );
  });
  endShape(CLOSE);

  // 윗 그라운드
  beginShape();
  ground2.vertices.forEach((each) => {
    vertex(
      (each.x / originalWidth) * width,
      (each.y / originalHeight) * height
    );
  });
  endShape(CLOSE);

  // 새총 선
  line(
    (elastic.pointA.x / originalWidth) * width,
    (elastic.pointA.y / originalHeight) * height,
    (elastic.bodyB.position.x / originalWidth) * width,
    (elastic.bodyB.position.y / originalHeight) * height
  );

  // 새총 총알 (8각형)
  rocks.forEach((eachRock) => {
    beginShape();
    eachRock.vertices.forEach((each) => {
      vertex(
        (each.x / originalWidth) * width,
        (each.y / originalHeight) * height
      );
    });
    endShape(CLOSE);
  });

  // 아래 피라미드
  pyramid.bodies.forEach((eachBody) => {
    beginShape();
    // 점을 찍어주기
    eachBody.vertices.forEach((each) => {
      vertex(
        (each.x / originalWidth) * width,
        (each.y / originalHeight) * height
      );
    });
    endShape(CLOSE);
  });

  // 윗 피라미드
  pyramid2.bodies.forEach((eachBody) => {
    beginShape();
    eachBody.vertices.forEach((each) => {
      vertex(
        (each.x / originalWidth) * width,
        (each.y / originalHeight) * height
      );
    });
    endShape(CLOSE);
  });
}

// 마우스를 드래그 했다가 놓을때,
function mouseReleased() {
  released = true;
}
