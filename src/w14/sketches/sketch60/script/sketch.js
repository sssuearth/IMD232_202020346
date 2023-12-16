const {
  Engine,
  Render,
  Runner,
  Composites,
  Common,
  MouseConstraint,
  Mouse,
  Composite,
  Vertices,
  Bodies,
} = Matter;

// Common.setDecomp(decomp);

// create engine
const engine = Engine.create(),
  world = engine.world;

// create runner
const runner = Runner.create();

const oWidth = 800;
const oHeight = 600;

const walls = [];

let mouse;

function setup() {
  setCanvasContainer('canvas', oWidth, oHeight, true);

  walls.push(Bodies.rectangle(400, 0, 800, 50));
  walls.push(Bodies.rectangle(400, 600, 800, 50));
  walls.push(Bodies.rectangle(800, 300, 50, 600));
  walls.push(Bodies.rectangle(0, 300, 50, 600));

  // these static walls will not be rendered in this sprites example, see options
  Composite.add(world, walls);

  // // add bodies
  // var offset = 10,
  //   options = {
  //     isStatic: true,
  //   };

  world.bodies = [];

  var stack = Composites.stack(20, 20, 10, 4, 0, 0, function (x, y) {
    if (Common.random() > 0.35) {
      return Bodies.rectangle(x, y, 64, 64, {
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

  Composite.add(world, stack);

  mouse = Mouse.create(canvas.elt);
  mouse.pixelRatio = (pixelDensity() * width) / oWidth;
  let mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
      stiffness: 0.2,
    },
  });
  Composite.add(world, mouseConstraint);

  background('white');
  Runner.run(runner, engine);
}

function draw() {
  mouse.pixelRatio = (pixelDensity() * width) / oWidth;

  background('white');

  stroke(0);
  noFill();
  walls.forEach((eachWall) => {
    beginShape();
    eachWall.vertices.forEach((eachVertex) => {
      vertex(
        (eachVertex.x / oWidth) * width,
        (eachVertex.y / oHeight) * height
      );
    });
    endShape(CLOSE);
  });

  noStroke();
  fill('blue');
  stack.bodies.forEach((eachBody) => {
    eachBody.parts.forEach((eachPart, idx) => {
      if (idx === 0) return;
      beginShape();
      eachPart.vertices.forEach((eachVertex) => {
        vertex(
          (eachVertex.x / oWidth) * width,
          (eachVertex.y / oHeight) * height
        );
      });
      endShape(CLOSE);
    });
  });
}

// var Engine = Matter.Engine,
//   Render = Matter.Render,
//   Runner = Matter.Runner,
//   Composites = Matter.Composites,
//   Common = Matter.Common,
//   MouseConstraint = Matter.MouseConstraint,
//   Mouse = Matter.Mouse,
//   Composite = Matter.Composite,
//   Bodies = Matter.Bodies;

// // create engine
// var engine = Engine.create(),
//   world = engine.world;

// // create renderer
// var render = Render.create({
//   element: document.body,
//   engine: engine,
//   options: {
//     width: 800,
//     height: 600,
//     showAngleIndicator: false,
//     wireframes: false,
//   },
// });

// Render.run(render);

// // create runner
// var runner = Runner.create();
// Runner.run(runner, engine);

// // add bodies
// var offset = 10,
//   options = {
//     isStatic: true,
//   };

// world.bodies = [];

// var stack = Composites.stack(20, 20, 10, 4, 0, 0, function (x, y) {
//   if (Common.random() > 0.35) {
//     return Bodies.rectangle(x, y, 64, 64, {
//       render: {
//         strokeStyle: '#ffffff',
//         sprite: {
//           texture: './img/box.png',
//         },
//       },
//     });
//   } else {
//     return Bodies.circle(x, y, 46, {
//       density: 0.0005,
//       frictionAir: 0.06,
//       restitution: 0.3,
//       friction: 0.01,
//       render: {
//         sprite: {
//           texture: './img/ball.png',
//         },
//       },
//     });
//   }
// });

//Composite.add(world, stack);

// // add mouse control
// var mouse = Mouse.create(render.canvas),
//   mouseConstraint = MouseConstraint.create(engine, {
//     mouse: mouse,
//     constraint: {
//       stiffness: 0.2,
//       render: {
//         visible: false,
//       },
//     },
//   });

// Composite.add(world, mouseConstraint);

// // keep the mouse in sync with rendering
// render.mouse = mouse;

// // fit the render viewport to the scene
// Render.lookAt(render, {
//   min: { x: 0, y: 0 },
//   max: { x: 800, y: 600 },
// });
