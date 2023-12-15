const {
  Engine,
  Render,
  Runner,
  Body,
  Composite,
  Composites,
  Constraint,
  MouseConstraint,
  Mouse,
  Vertices,
  Bodies,
  Common,
} = Matter;

Common.setDecomp(decomp);

// 창 사이즈가 바뀔때, 플렉서블하게, 비례에 맞게 반응할 수 있도록
// /originalWidth로 나누고 * width를 곱해서 환산
const originalWidth = 800;
const originalHeight = 600;

let ropeA; //1
let ropeB; //2
let ropeC; //3

let mouse;
//let mouseConstraint;

const engine = Engine.create(),
  world = engine.world;

const runner = Runner.create();

// ㄱㄱ
function setup() {
  setCanvasContainer('canvas', originalWidth, originalHeight, true);

  //별
  let star = Vertices.fromPath(
    '20 0 26 12 39 14 29 24 32 38 19 31 7 38 9 24 0 14 13 12'
  );
  //다각형
  let arrow = Vertices.fromPath('13 0 38 7 42 36 12 46 12 30 0 15');

  // add bodies
  // ropeA; //1
  group = Body.nextGroup(true);
  ropeA = Composites.stack(130, 40, 11, 1, 10, 10, function (x, y) {
    return Bodies.fromVertices(x, y, Common.choose([star]), {
      collisionFilter: { group: group },
    });
  });

  Composites.chain(ropeA, 0.4, 0, -0.5, 0, {
    stiffness: 0.8,
    length: 2,
    render: { type: 'line' },
  });
  Composite.add(
    ropeA,
    Constraint.create({
      bodyB: ropeA.bodies[0],
      pointB: { x: -25, y: 0 },
      pointA: { x: ropeA.bodies[0].position.x, y: ropeA.bodies[0].position.y },
      stiffness: 0.5,
    })
  );

  // ropeB; //2
  group = Body.nextGroup(true);

  ropeB = Composites.stack(370, 40, 11, 1, 10, 10, function (x, y) {
    return Bodies.circle(x, y, 18, { collisionFilter: { group: group } });
  });

  Composites.chain(ropeB, 0.5, 0, -0.5, 0, {
    stiffness: 0.4,
    length: 2,
    render: { type: 'line' },
  });
  Composite.add(
    ropeB,
    Constraint.create({
      bodyB: ropeB.bodies[0],
      pointB: { x: -20, y: 0 },
      pointA: { x: ropeB.bodies[0].position.x, y: ropeB.bodies[0].position.y },
      stiffness: 0.4,
    })
  );

  // ropeC; //3
  group = Body.nextGroup(true);

  ropeC = Composites.stack(600, 40, 11, 1, 10, 10, function (x, y) {
    return Bodies.fromVertices(x, y, Common.choose([arrow]), {
      collisionFilter: { group: group },
    });
  });

  Composites.chain(ropeC, 0.35, 0, -0.3, 0, { stiffness: 0.8, length: 10 });
  Composite.add(
    ropeC,
    Constraint.create({
      bodyB: ropeC.bodies[0],
      pointB: { x: -20, y: 0 },
      pointA: { x: ropeC.bodies[0].position.x, y: ropeC.bodies[0].position.y },
      stiffness: 0.4,
    })
  );

  Composite.add(world, [ropeA, ropeB, ropeC]);

  // add mouse control
  // 마우스로 도형 옮기기 = 마우스에 도형이 매달리다~

  //let mouse = Mouse.create(document.querySelector('.p5Canvas'));
  mouse = Mouse.create(canvas.elt);
  mouse.pixelRatio = (pixelDensity() * width) / originalWidth;
  let mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
      stiffness: 0.2,
    },
  });

  Composite.add(world, mouseConstraint);

  // console.log('ropeA', ropeA.bodies);
  // console.log('ropeB', ropeB);
  // console.log('ropeC', ropeC.bodies);

  background('#121214');
  Runner.run(runner, engine);
}

// 그리자
function draw() {
  // 플렉시블하게
  mouse.pixelRatio = (pixelDensity() * width) / originalWidth;
  background('#121214');
  //Engine.update(engine);

  noStroke();

  //1
  fill('#66FF66');
  ropeA.bodies.forEach((eachBody) => {
    eachBody.parts.forEach((eachPart, idx) => {
      if (idx === 0) return;
      beginShape();
      eachPart.vertices.forEach((eachVertex) => {
        vertex(
          (eachVertex.x / originalWidth) * width,
          (eachVertex.y / originalHeight) * height
        );
      });
      endShape(CLOSE);
    });
  });

  //2

  // fill('#FF00FF');
  // ropeB.bodies.forEach((eachBody) => {
  //   beginShape();
  //   eachBody.vertices.forEach((eachVertex) => {
  //     vertex(
  //       (eachVertex.x / originalWidth) * width,
  //       (eachVertex.y / originalHeight) * height
  //     );
  //   });
  //   endShape(CLOSE);
  // });

  ropeB.bodies.forEach((eachBody) => {
    beginShape();
    eachBody.vertices.forEach((eachVertex) => {
      // 색상 혼합
      let startColor = color('#ff00ff'); // 시작 색상
      let endColor = color('#00ffff'); // 종료 색상

      // 각 점에 대한 상대적인 위치를 계산 (0~1)
      let relativeX = (eachVertex.x / originalWidth) * width;
      let relativeY = (eachVertex.y / originalHeight) * height;

      // 그라데이션을 적용한 색상 계산
      let lerpedColor = lerpColor(startColor, endColor, relativeY / height);

      fill(lerpedColor);
      vertex(relativeX, relativeY);
    });
    endShape(CLOSE);
  });

  //3
  fill('#2137FF');
  ropeC.bodies.forEach((eachBody) => {
    eachBody.parts.forEach((eachPart, idx) => {
      if (idx === 0) return;
      beginShape();
      eachPart.vertices.forEach((eachVertex) => {
        vertex(
          (eachVertex.x / originalWidth) * width,
          (eachVertex.y / originalHeight) * height
        );
      });
      endShape(CLOSE);
    });
  });
}
