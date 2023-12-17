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
var engine = Engine.create({ gravity: { x: 0, y: 0 } }),
  world = engine.world;

// 러너 만들고 실행하기
var runner = Runner.create();
Runner.run(runner, engine);

// draw에서도 쓸 수 있게 변수 선언만 여기서
let stack;
const walls = [];

let m;
let mc;

// 창 사이즈 플렉서블
const originalWidth = 1080;
const originalHeight = 720;

// 이미지 로드할 변수 선언
let boxImage;
let ballImage;

// preload 함수에서 이미지 로드
function preload() {
  boxImage = loadImage('./img/box.png');
  ballImage = loadImage('./img/ball.png');
}

function setup() {
  setCanvasContainer('canvas', originalWidth, originalHeight, true);

  // 바디 만들기
  const offset = 20;
  const options = {
    isStatic: true,
  };

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
  stack = Composite.create();

  // Rectangle을 5개 생성하여 세계에 추가
  for (let i = 0; i < 5; i++) {
    const x = 20 + i * (boxImage.width + 0);
    const y = 20;
    const rectangle = Bodies.rectangle(x, y, boxImage.width, boxImage.height, {
      render: {
        strokeStyle: '#ffffff',
        sprite: {
          texture: boxImage,
        },
      },
    });
    Composite.add(stack, rectangle);
  }

  // Circle을 5개 생성하여 세계에 추가
  for (let i = 0; i < 5; i++) {
    const x = 20 + i * (ballImage.width + 0);
    const y = 120;
    const circle = Bodies.circle(x, y, ballImage.width / 2, {
      density: 0.0005,
      frictionAir: 0.06,
      restitution: 0.3,
      friction: 0.01,
      render: {
        sprite: {
          texture: ballImage,
        },
      },
    });
    Composite.add(stack, circle);
  }

  // 세계에 스택 추가
  Composite.add(world, stack);

  // 마우스
  m = Mouse.create(document.querySelector('canvas'));
  m.pixelRatio = (pixelDensity() * width) / originalWidth;
  mc = MouseConstraint.create(engine, {
    mouse: m,
    constraint: {
      stiffness: 0.2,
    },
  });

  Composite.add(world, mc);

  background('white');
}

function draw() {
  background('white');

  noStroke();
  fill('blue');

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

  noStroke();

  stack.bodies.forEach((eachBody) => {
    const pos = eachBody.position;
    const angle = eachBody.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);

    if (eachBody.render.sprite && eachBody.render.sprite.texture) {
      image(
        eachBody.render.sprite.texture,
        -eachBody.render.sprite.xOffset,
        -eachBody.render.sprite.yOffset,
        eachBody.render.sprite.width,
        eachBody.render.sprite.height
      );
    } else {
      fill(255, 0, 0);
      beginShape();
      eachBody.vertices.forEach((vertex) => {
        vertex(
          (vertex.x / originalWidth) * width,
          (vertex.y / originalHeight) * height
        );
      });
      endShape(CLOSE);
    }

    pop();
  });
}
