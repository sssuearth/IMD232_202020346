// 매터 쓰기 위한 기본 변수
var Engine = Matter.Engine,
  Render = Matter.Render,
  Runner = Matter.Runner,
  Composites = Matter.Composites,
  Common = Matter.Common,
  MouseConstraint = Matter.MouseConstraint,
  Mouse = Matter.Mouse,
  Composite = Matter.Composite,
  Bodies = Matter.Bodies;

// 엔진 만들기
var engine = Engine.create(),
  world = engine.world;

// 러너 만들고 실행하기
var runner = Runner.create();
Runner.run(runner, engine);

// draw에서도 쓸 수 있게 변수 선언만 여기서
let offset;
let stack;
const walls = [];

let m;
let mc;

// 창 사이즈가 바뀔때, 플렉서블하게, 비례에 맞게 반응할 수 있도록
// /originalWidth로 나누고 * width를 곱해서 환산
const originalWidth = 1080; //1080 //800
const originalHeight = 720; //720 //600

function setup() {
  setCanvasContainer('canvas', originalWidth, originalHeight, true);

  // 바디 만들기
  // 할당은 여기서
  (offset = 20),
    (options = {
      isStatic: true,
    });

  world.bodies = [];

  //위 벽
  walls.push(Bodies.rectangle(540, -offset, 1080 + 2 * offset, 50.5, options));
  //아래 벽
  walls.push(
    Bodies.rectangle(540, 720 + offset, 1080 + 2 * offset, 50.5, options)
  );
  //오른쪽 벽
  walls.push(
    Bodies.rectangle(1080 + offset, 360, 50.5, 720 + 2 * offset, options)
  );
  //왼쪽 벽
  walls.push(Bodies.rectangle(-offset, 360, 50.5, 720 + 2 * offset, options));

  Composite.add(world, walls);

  // 도형과 이미지
  stack = Composites.stack(20, 20, 10, 4, 0, 0, function (x, y) {
    if (Common.random() > 0.35) {
      return Bodies.rectangle(x, y, 80, 80, {
        render: {
          strokeStyle: '#ffffff',
          sprite: {
            texture: './img/box.png',
          },
        },
      });
    } else {
      return Bodies.circle(x, y, 46, {
        density: 0.0005,
        frictionAir: 0.06,
        restitution: 0.3,
        friction: 0.01,
        render: {
          sprite: {
            texture: './img/ball.png',
          },
        },
      });
    }
  });

  //만든 바디를 세계에 추가
  Composite.add(world, stack);

  // 마우스

  m = Mouse.create(document.querySelector('.p5Canvas'));
  // m.pixelRatio = pixelDensity();
  m.pixelRatio = (pixelDensity() * width) / originalWidth;
  mc = MouseConstraint.create(engine, {
    mouse: m,
    constraint: {
      stiffness: 0.2,
    },
  });

  Composite.add(world, mc);

  console.log('offset', offset);
  console.log('stack', stack);
  background('white');
}

function draw() {
  background('white');

  noStroke();
  fill('red');

  walls.forEach((eachWall) => {
    beginShape();
    eachWall.vertices.forEach((each) => {
      vertex(
        (each.x / originalWidth) * width,
        (each.y / originalHeight) * height
      );
    });
    endShape(CLOSE);
  });

  fill('black');
  stack.bodies.forEach((eachBody) => {
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

// // create renderer
// const elem = document.querySelector('#canvas');
// var render = Render.create({
//   element: elem,
//   engine: engine,
//   options: {
//     width: 800,
//     height: 600,
//     showAngleIndicator: false,
//     wireframes: false,
//   },
// });
// Render.run(render);
