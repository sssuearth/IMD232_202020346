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
let mouseConstraint;

const engine = Engine.create(),
  world = engine.world;

const runner = Runner.create();

// ㄱㄱ
function setup() {
  setCanvasContainer('canvas', originalWidth, originalHeight, true);

  //1
  let star = Vertices.fromPath('27 0 36 17 54 27 36 36 27 54 17 36 0 27 17 17');
  //3
  let polygon = Vertices.fromPath('13 0 38 7 42 36 12 46 12 30 0 15');

  group = Body.nextGroup(true);

  // add bodies
  // ropeA; //1
  ropeA = Composites.stack(130, 40, 10, 1, 10, 10, function (x, y) {
    return Bodies.fromVertices(x, y, Common.choose([star]), {
      collisionFilter: { group: group },
    });
  });

  Composites.chain(ropeA, 0.2, 0, -0.5, 0, {
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
      stiffness: 0,
    })
  );

  // ropeB; //2
  group = Body.nextGroup(true);

  ropeB = Composites.stack(370, 50, 10, 1, 10, 10, function (x, y) {
    return Bodies.circle(x, y, 20, { collisionFilter: { group: group } });
  });

  Composites.chain(ropeB, 0.5, 0, -0.5, 0, {
    stiffness: 0.8,
    length: 2,
    render: { type: 'line' },
  });
  Composite.add(
    ropeB,
    Constraint.create({
      bodyB: ropeB.bodies[0],
      pointB: { x: -20, y: 0 },
      pointA: { x: ropeB.bodies[0].position.x, y: ropeB.bodies[0].position.y },
      stiffness: 0.5,
    })
  );

  // ropeC; //3
  group = Body.nextGroup(true);

  ropeC = Composites.stack(600, 40, 10, 1, 10, 10, function (x, y) {
    return Bodies.fromVertices(x, y, Common.choose([polygon]), {
      collisionFilter: { group: group },
      //chamfer: 5,
    });
  });

  Composites.chain(ropeC, 0.5, 0, -0.3, 0, { stiffness: 0.8, length: 0 });
  Composite.add(
    ropeC,
    Constraint.create({
      bodyB: ropeC.bodies[0],
      pointB: { x: -20, y: 0 },
      pointA: { x: ropeC.bodies[0].position.x, y: ropeC.bodies[0].position.y },
      stiffness: 0.5,
    })
  );

  Composite.add(world, [ropeA, ropeB, ropeC]);

  // add mouse control
  // 마우스로 도형 옮기기 = 마우스에 도형이 매달리다~

  //let mouse = Mouse.create(document.querySelector('.p5Canvas'));
  mouse = Mouse.create(canvas.elt);
  mouse.pixelRatio = (pixelDensity() * width) / originalWidth;
  mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
      stiffness: 0.2,
    },
  });

  Composite.add(world, mouseConstraint);
  // console.log('ropeA', ropeA.bodies);
  // console.log('ropeB', ropeB);
  // console.log('ropeC', ropeC.bodies);
  background('white');
  Runner.run(runner, engine);
}

// 그리자
function draw() {
  // 플렉시블하게
  mouse.pixelRatio = (pixelDensity() * width) / originalWidth;
  background('white');
  //Engine.update(engine);

  noStroke();

  //1
  fill('cyan');
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
  fill('#FF00FF');
  ropeB.bodies.forEach((eachBody) => {
    beginShape();
    eachBody.vertices.forEach((eachVertex) => {
      vertex(
        (eachVertex.x / originalWidth) * width,
        (eachVertex.y / originalHeight) * height
      );
    });
    endShape(CLOSE);
  });

  //3
  fill('green');
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
