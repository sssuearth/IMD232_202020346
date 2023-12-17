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

const originalWidth = 1080;
const originalHeight = 720;

// 이미지 로드할 변수 선언
let box1Images = [];
let box2Images = [];

// 현재까지 몇 번째 이미지를 선택했는지 추적하는 변수
let box1ImageIndex1 = 0;
let box2ImageIndex2 = 0;

// preload 함수에서 이미지 로드
function preload() {
  for (let i = 4; i <= 8; i++) {
    // 5개의 다른 이미지를 불러와 배열에 추가
    box1Images.push(loadImage(`./3dpng/0-${i}.png`));
  }

  for (let i = 9; i <= 15; i++) {
    // 5개의 다른 이미지를 불러와 배열에 추가
    box2Images.push(loadImage(`./3dpng/0-${i}.png`));
  }

  // 이미지 배열 랜덤 셔플
  shuffleArray(box1Images);
  shuffleArray(box2Images);
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function setup() {
  setCanvasContainer('canvas', originalWidth, originalHeight, true);

  // 바디 만들기
  // 할당은 여기서

  world.bodies = [];

  //위
  walls.push(Bodies.rectangle(540, 0, 1080, 10, { isStatic: true }));
  //아래
  walls.push(Bodies.rectangle(540, 600, 1080, 10, { isStatic: true }));
  //오른쪽
  walls.push(Bodies.rectangle(1080, 360, 10, 720, { isStatic: true }));
  //왼쪽
  walls.push(Bodies.rectangle(0, 360, 10, 720, { isStatic: true }));

  Composite.add(world, walls);

  // 도형과 이미지
  stack = Composite.create();

  // 생성할 사각형 및 원의 갯수 설정
  const numRectangles1 = 5;
  const numRectangles2 = 7;

  //
  //
  //1줄 5개
  for (let i = 0; i < numRectangles1; i++) {
    const x = 180 + i * 150; // x 위치를 고정
    const y = 50;

    Composite.add(
      stack,
      Bodies.rectangle(x, y, 50, 50, {
        render: {
          strokeStyle: '#ffffff',
          sprite: {
            texture: box1Images[box1ImageIndex1 % box1Images.length], // 중복을 방지하기 위해 배열 크기로 나눔
          },
        },
      })
    );

    box1ImageIndex1++;
  }

  //2줄 7개
  for (let i = 0; i < numRectangles2; i++) {
    const x = 200 + i * 100; // x 위치를 고정
    const y = 210; // y 위치를 조절하여 15씩 차이 나게 설정

    Composite.add(
      stack,
      Bodies.rectangle(x, y, 40, 40, {
        render: {
          strokeStyle: '#ffffff',
          sprite: {
            texture: box2Images[box2ImageIndex2 % box2Images.length], // 중복을 방지하기 위해 배열 크기로 나눔
          },
        },
      })
    );

    box2ImageIndex2++;
  }

  // 만든 바디를 세계에 추가
  Composite.add(world, stack);

  // 마우스s
  m = Mouse.create(document.querySelector('canvas'));
  m.pixelRatio = (pixelDensity() * width) / originalWidth;
  mc = MouseConstraint.create(engine, {
    mouse: m,
    constraint: {
      stiffness: 0.2,
    },
  });

  Composite.add(world, mc);

  console.log('stack', stack);
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

    push(); // push and pop are used to isolate the transformation
    translate(pos.x, pos.y);
    rotate(angle);

    if (eachBody.render.sprite && eachBody.render.sprite.texture) {
      // 이미지가 있는 경우 이미지로 채우기
      image(
        eachBody.render.sprite.texture,
        -eachBody.render.sprite.xOffset,
        -eachBody.render.sprite.yOffset,
        eachBody.render.sprite.width,
        eachBody.render.sprite.height
      );
    } else {
      // 이미지가 없는 경우 기본 색상으로 채우기
      fill(255, 0, 0);
      beginShape();
      eachBody.vertices.forEach((vertex) => {
        vertex(
          ((vertex.x - pos.x + eachBody.render.sprite.xOffset) /
            originalWidth) *
            width,
          ((vertex.y - pos.y + eachBody.render.sprite.yOffset) /
            originalHeight) *
            height
        );
      });
      endShape(CLOSE);
    }

    pop();
  });
}
