// 1. 엔진만들기
// 2. 물체만들기
// 3. 물제를 엔진에 추가
// 4. 러너만들기
// 5. 러너에 엔진 등록해서 뺑뺑이

// console.log(Matter);
// Matter.~을 가져오기 위해 이름 제대로
const {
  Engine,
  Bodies,
  Composite,
  Runner,
  Body,
  Vector,
  Mouse,
  MouseConstraint,
} = Matter;

// 엔진
// console.log(Engine);
const matterEngine = Engine.create();

// 러너
// console.log(Runner);
const matterRunner = Runner.create();

// 사각형 여러개를 만들겠다~
const matterRects = [];
const matterShapes = [];

// 마우스
let m; //mouce
let mc; //mouceConstraint

function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  rectMode(CENTER);

  // 그라운드(왼쪽)
  matterRects.push(
    new MatterRect(width / 4, height - 50, width / 2, 50, { isStatic: true })
  );

  // 그라운드(오른쪽)
  matterRects.push(
    new MatterRect((width / 4) * 3, height - 200, width / 2, 50, {
      isStatic: true,
      // 회전
      angle: radians(-15),
    })
  );

  // 다각형의 7개의 점
  const vertices = [
    { x: 5.5 * 4, y: -4.8 * 4 },
    { x: 7.6 * 4, y: -1.6 * 4 },
    { x: 6.5 * 4, y: 1.8 * 4 },
    { x: 2.7 * 4, y: 4.5 * 4 },
    { x: -1.2 * 4, y: 4.2 * 4 },
    { x: -3.6 * 4, y: 1.9 * 4 },
    { x: -1.3 * 4, y: -2.8 * 4 },
  ];

  // 4개 조각
  for (let n = 0; n < 4; n++) {
    const randomVector = p5.Vector.random2D();
    randomVector.mult(5);
    const aNewShape = new MatterShape(width / 2, 50, vertices);
    Body.setVelocity(
      aNewShape.body,
      Vector.create(randomVector.x, randomVector.y)
    );
    Body.setAngularVelocity(radians(random(-15, 15)));
    matterShapes.push(aNewShape);
  }

  // 마우스로 도형 옮기기 = 마우스에 도형이 매달리다~

  m = Mouse.create(document.querySelector('.p5Canvas'));
  //   m = Mouse.create(canvas.elt);
  //   console.log(pixelDensity());
  m.pixelRatio = pixelDensity();
  mc = MouseConstraint.create(matterEngine, {
    mouse: m,
  });
  Composite.add(matterEngine.world, mc);

  background('white');

  // 5. 러너에 엔진 등록해서 뺑뺑이
  Runner.run(matterRunner, matterEngine);
}

function draw() {
  background('white');

  matterRects.forEach((each) => {
    each.display();
  });

  // 화면밖으로 벗어난 다각형 삭제
  for (let idx = matterShapes.length - 1; idx >= 0; idx--) {
    matterShapes[idx].display();
    if (matterShapes[idx].isDead()) {
      matterShapes[idx].remove();
      matterShapes.splice(idx, 1);
    }
  }
}
