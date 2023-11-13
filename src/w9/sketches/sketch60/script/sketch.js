let Engine = Matter.Engine;
let Render = Matter.Render;
let Runner = Matter.Runner;
let Body = Matter.Body;
let Composite = Matter.Composite; //물체를 추가
let Composites = Matter.Composites;
let Constraint = Matter.Constraint;
let MouseConstraint = Matter.MouseConstraint;
let Mouse = Matter.Mouse;
let Bodies = Matter.Bodies; //물체

// 필수과정1 : 엔진 만들기
// create engine
let engine = Engine.create(),
  world = engine.world;

// 필수과정2 : 렌더러 만들기
// create renderer
let elem = document.querySelector('#canvas');
console.log(elem);

let render = Render.create({
  element: elem,
  engine: engine,
  options: {
    //wireframeBackground: 'white',
    width: elem.clientWidth,
    height: (elem.clientWidth / 4) * 3,
    showAngleIndicator: true,
    showCollisions: true,
    showVelocity: true,
  },
});
console.log(render);

Render.run(render);

// create runner
let runner = Runner.create();
Runner.run(runner, engine);

// add bodies
let group = Body.nextGroup(true);

let ropeA = Composites.stack(100, 50, 8, 1, 10, 10, function (x, y) {
  return Bodies.rectangle(x, y, 50, 50, {
    collisionFilter: { group: group },
  });
});

Composites.chain(ropeA, 0.5, 0, -0.5, 0, {
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

group = Body.nextGroup(true);

let ropeB = Composites.stack(350, 50, 10, 1, 10, 10, function (x, y) {
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

group = Body.nextGroup(true);

let ropeC = Composites.stack(600, 50, 13, 1, 10, 10, function (x, y) {
  return Bodies.rectangle(x - 20, y, 50, 20, {
    collisionFilter: { group: group },
    chamfer: 5,
  });
});

Composites.chain(ropeC, 0.3, 0, -0.3, 0, { stiffness: 1, length: 0 });
Composite.add(
  ropeC,
  Constraint.create({
    bodyB: ropeC.bodies[0],
    pointB: { x: -20, y: 0 },
    pointA: { x: ropeC.bodies[0].position.x, y: ropeC.bodies[0].position.y },
    stiffness: 0.5,
  })
);

Composite.add(world, [
  ropeA,
  ropeB,
  ropeC,
  //Bodies.rectangle(400, 600, 1200, 50.5, { isStatic: true }),
]);

// add mouse control
let mouse = Mouse.create(render.canvas),
  mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
      stiffness: 0.2,
      render: {
        visible: false,
      },
    },
  });

Composite.add(world, mouseConstraint);

// keep the mouse in sync with rendering
render.mouse = mouse;

// fit the render viewport to the scene
Render.lookAt(render, {
  min: { x: 0, y: 0 },
  max: { x: 700, y: 600 },
});
