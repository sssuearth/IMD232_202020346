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
  Svg,
  Body,
} = Matter;

Common.setDecomp(decomp);

const engine = Engine.create();
const world = engine.world;
const runner = Runner.create();
const svgObjs = [];
const walls = [];

function setup() {
  setCanvasContainer('canvas', 1080, 720, true);

  //위
  walls.push(Bodies.rectangle(540, 0, 1080, 10, { isStatic: true }));
  //아래
  walls.push(Bodies.rectangle(540, 720, 1080, 10, { isStatic: true }));
  //오른쪽
  walls.push(Bodies.rectangle(1080, 360, 10, 720, { isStatic: true }));
  //왼쪽
  walls.push(Bodies.rectangle(0, 360, 10, 720, { isStatic: true }));
  Composite.add(world, walls);

  // add bodies
  if (typeof fetch !== 'undefined') {
    var select = function (root, selector) {
      return Array.prototype.slice.call(root.querySelectorAll(selector));
    };
    var loadSvg = function (url) {
      return fetch(url)
        .then(function (response) {
          return response.text();
        })
        .then(function (raw) {
          return new window.DOMParser().parseFromString(raw, 'image/svg+xml');
        });
    };

    //1줄
    const yOffset = 130;
    [
      './svg1/1-04.svg',
      './svg1/1-05.svg',
      './svg1/1-06.svg',
      './svg1/1-07.svg',
      './svg1/1-08.svg',
    ].forEach(function (path, i) {
      loadSvg(path).then(function (root) {
        var paths = select(root, 'path');
        var boundingBox = getBoundingBox(paths);

        var vertexSets = paths.map(function (path) {
          return Svg.pathToVertices(path, 5);
        });

        const aNewBody = Bodies.fromVertices(
          200 + i * (boundingBox.max.x - boundingBox.min.x + 20), // 간격을 20으로 설정하고 조절
          yOffset,
          vertexSets,
          {
            //isStatic: true,
            render: {
              fillStyle: color,
              strokeStyle: color,
              lineWidth: 1,
            },
          },
          true
        );

        // Adjust position based on bounding box
        Body.translate(aNewBody, {
          x: boundingBox.min.x - aNewBody.bounds.min.x,
          y: boundingBox.min.y - aNewBody.bounds.min.y,
        });

        svgObjs.push(aNewBody);
        Composite.add(world, aNewBody);
      });
    });
  }

  mouse = Mouse.create(canvas.elt);
  mouse.pixelRatio = (pixelDensity() * width) / 1080;
  let mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
      stiffness: 0.2,
    },
  });
  Composite.add(world, mouseConstraint);

  console.log('walls', walls);
  console.log('svgObjs', svgObjs);

  background('white');
  Runner.run(runner, engine);
}

function draw() {
  mouse.pixelRatio = (pixelDensity() * width) / 1080;

  background('white');

  stroke(0);
  noFill();
  walls.forEach((eachWall) => {
    beginShape();
    eachWall.vertices.forEach((eachVertex) => {
      vertex((eachVertex.x / 1080) * width, (eachVertex.y / 720) * height);
    });
    endShape(CLOSE);
  });

  noStroke();
  fill('black');
  svgObjs.forEach((eachBody) => {
    eachBody.parts.forEach((eachPart, idx) => {
      if (idx === 0) return;
      beginShape();
      eachPart.vertices.forEach((eachVertex) => {
        vertex((eachVertex.x / 1080) * width, (eachVertex.y / 720) * height);
      });
      endShape(CLOSE);
    });
  });
}

// Helper function to get bounding box of paths
function getBoundingBox(paths) {
  var minX = Infinity,
    minY = Infinity,
    maxX = -Infinity,
    maxY = -Infinity;

  paths.forEach(function (path) {
    var vertices = Svg.pathToVertices(path, 5);
    vertices.forEach(function (vertex) {
      minX = Math.min(minX, vertex.x);
      minY = Math.min(minY, vertex.y);
      maxX = Math.max(maxX, vertex.x);
      maxY = Math.max(maxY, vertex.y);
    });
  });

  return {
    min: { x: minX, y: minY },
    max: { x: maxX, y: maxY },
  };
}
