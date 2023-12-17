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
//const aspectRatio = originalWidth / originalHeigh;

// 이미지 로드할 변수 선언
let box1Images = [];
let box2Images = [];
let box3Images = [];
let box4Images = [];
let box5Images = [];
let box6Images = [];
let box7Images = [];
let box8Images = [];
let box9Images = [];

// 현재까지 몇 번째 이미지를 선택했는지 추적하는 변수
let box1ImageIndex1 = 0;
let box2ImageIndex2 = 0;
let box3ImageIndex3 = 0;
let box4ImageIndex4 = 0;
let box5ImageIndex5 = 0;
let box6ImageIndex6 = 0;
let box7ImageIndex7 = 0;
let box8ImageIndex8 = 0;
let box9ImageIndex9 = 0;

// preload 함수에서 이미지 로드
function preload() {
  //1줄
  for (let i = 4; i <= 8; i++) {
    box1Images.push(loadImage(`./3dpng/0-${i}.png`));
  }
  //2줄
  for (let i = 9; i <= 14; i++) {
    box2Images.push(loadImage(`./3dpng/0-${i}.png`));
  }
  //3줄
  for (let i = 16; i <= 22; i++) {
    box3Images.push(loadImage(`./3dpng/0-${i}.png`));
  }
  //4줄
  for (let i = 23; i <= 29; i++) {
    box4Images.push(loadImage(`./3dpng/0-${i}.png`));
  }
  //5줄
  for (let i = 30; i <= 36; i++) {
    box5Images.push(loadImage(`./3dpng/0-${i}.png`));
  }
  //6줄
  for (let i = 37; i <= 43; i++) {
    box6Images.push(loadImage(`./3dpng/0-${i}.png`));
  }
  //7줄
  for (let i = 44; i <= 50; i++) {
    box7Images.push(loadImage(`./3dpng/0-${i}.png`));
  }
  //8줄
  for (let i = 51; i <= 57; i++) {
    box8Images.push(loadImage(`./3dpng/0-${i}.png`));
  }

  // 이미지 배열 랜덤 셔플
  shuffleArray(box1Images);
  shuffleArray(box2Images);
  shuffleArray(box3Images);
  shuffleArray(box4Images);
  shuffleArray(box5Images);
  shuffleArray(box6Images);
  shuffleArray(box7Images);
  shuffleArray(box8Images);
  shuffleArray(box9Images);
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
  walls.push(Bodies.rectangle(540, 720, 1080, 10, { isStatic: true }));
  //오른쪽
  walls.push(Bodies.rectangle(1080, 360, 10, 720, { isStatic: true }));
  //왼쪽
  walls.push(Bodies.rectangle(0, 360, 10, 720, { isStatic: true }));
  Composite.add(world, walls);

  //
  // 도형과 이미지
  stack = Composite.create();

  // 생성할 사각형 갯수
  const numRectangles1 = 5;
  const numRectangles2 = 6;
  const numRectangles3 = 7;
  const numRectangles4 = 7;
  const numRectangles5 = 7;
  const numRectangles6 = 7;
  const numRectangles7 = 7;
  const numRectangles8 = 7;
  const numRectangles9 = 6;

  //사각형에 이미지 넣기

  //1줄 5개
  for (let i = 0; i < numRectangles1; i++) {
    const x = 158 + i * 160; // x 위치를 고정
    const y = 50;

    Composite.add(
      stack,
      Bodies.rectangle(x, y, 100, 150, {
        render: {
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
    const x = 220 + i * 115; // x 위치를 고정
    const y = 235; // y 위치를 조절하여 15씩 차이 나게 설정

    Composite.add(
      stack,
      Bodies.rectangle(x, y, 40, 40, {
        render: {
          sprite: {
            texture: box2Images[box2ImageIndex2 % box2Images.length], // 중복을 방지하기 위해 배열 크기로 나눔
          },
        },
      })
    );

    box2ImageIndex2++;
  }
  //3줄 7개
  for (let i = 0; i < numRectangles3; i++) {
    const x = 245 + i * 90; // x 위치를 고정
    const y = 338; // y 위치를 조절하여 15씩 차이 나게 설정

    Composite.add(
      stack,
      Bodies.rectangle(x, y, 40, 40, {
        render: {
          sprite: {
            texture: box3Images[box3ImageIndex3 % box3Images.length], // 중복을 방지하기 위해 배열 크기로 나눔
          },
        },
      })
    );

    box3ImageIndex3++;
  }
  //4줄 7개
  for (let i = 0; i < numRectangles4; i++) {
    const x = 280 + i * 80; // x 위치를 고정
    const y = 415; // y 위치를 조절하여 15씩 차이 나게 설정

    Composite.add(
      stack,
      Bodies.rectangle(x, y, 40, 40, {
        render: {
          sprite: {
            texture: box4Images[box4ImageIndex4 % box4Images.length], // 중복을 방지하기 위해 배열 크기로 나눔
          },
        },
      })
    );

    box4ImageIndex4++;
  }
  //5줄 7개
  for (let i = 0; i < numRectangles5; i++) {
    const x = 308 + i * 70; // x 위치를 고정
    const y = 478; // y 위치를 조절하여 15씩 차이 나게 설정

    Composite.add(
      stack,
      Bodies.rectangle(x, y, 40, 40, {
        render: {
          sprite: {
            texture: box5Images[box5ImageIndex5 % box5Images.length], // 중복을 방지하기 위해 배열 크기로 나눔
          },
        },
      })
    );

    box5ImageIndex5++;
  }
  //6줄 7개
  for (let i = 0; i < numRectangles6; i++) {
    const x = 335 + i * 65; // x 위치를 고정
    const y = 533; // y 위치를 조절하여 15씩 차이 나게 설정

    Composite.add(
      stack,
      Bodies.rectangle(x, y, 40, 40, {
        render: {
          sprite: {
            texture: box6Images[box6ImageIndex6 % box6Images.length], // 중복을 방지하기 위해 배열 크기로 나눔
          },
        },
      })
    );

    box6ImageIndex6++;
  }
  //7줄 7개
  for (let i = 0; i < numRectangles7; i++) {
    const x = 360 + i * 58; // x 위치를 고정
    const y = 578; // y 위치를 조절하여 15씩 차이 나게 설정

    Composite.add(
      stack,
      Bodies.rectangle(x, y, 30, 30, {
        render: {
          sprite: {
            texture: box7Images[box7ImageIndex7 % box7Images.length], // 중복을 방지하기 위해 배열 크기로 나눔
          },
        },
      })
    );

    box7ImageIndex7++;
  }
  //8줄 7개
  for (let i = 0; i < numRectangles8; i++) {
    const x = 385 + i * 49; // x 위치를 고정
    const y = 620; // y 위치를 조절하여 15씩 차이 나게 설정

    Composite.add(
      stack,
      Bodies.rectangle(x, y, 30, 30, {
        render: {
          sprite: {
            texture: box8Images[box8ImageIndex8 % box8Images.length], // 중복을 방지하기 위해 배열 크기로 나눔
          },
        },
      })
    );

    box8ImageIndex8++;
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
