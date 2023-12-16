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
} = Matter;

Common.setDecomp(decomp);

// create engine
const engine = Engine.create(),
  world = engine.world;

// create runner
const runner = Runner.create();

const oWidth = 1080; //800
const oHeight = 720; //600

const walls = [];
const svgObjs = [];

let mouse;

function setup() {
  setCanvasContainer('canvas', oWidth, oHeight, true);

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

    // loadSvg('./svg1/1-04.svg').then(function (root) {
    //   // 크기 조절
    //   const scaleFactor = 1; // 원하는 비율로 조절
    //   // const svgElement = root.querySelector('svg');
    //   // const originalWidth = parseInt(svgElement.getAttribute('width'));
    //   // const originalHeight = parseInt(svgElement.getAttribute('height'));
    //   // svgElement.setAttribute('width', originalWidth * scaleFactor);
    //   // svgElement.setAttribute('height', originalHeight * scaleFactor);

    //   var vertexSets = select(root, 'path').map(function (path) {
    //     return Vertices.scale(
    //       Svg.pathToVertices(path, 30),
    //       scaleFactor,
    //       scaleFactor
    //     );
    //   });

    //   const aNewBody = Bodies.fromVertices(
    //     195,
    //     130,
    //     vertexSets,
    //     {
    //       isStatic: true, // 고정하기 위해 추가된 부분
    //       render: {
    //         fillStyle: color,
    //         strokeStyle: color,
    //         lineWidth: 1,
    //       },
    //     },
    //     true
    //   );

    //   svgObjs.push(aNewBody);
    //   Composite.add(world, aNewBody);
    // });

    [
      //다른요소들
      './svg1/0-64.svg',
    ].forEach(function (path, i) {
      loadSvg(path).then(function (root) {
        var vertexSets = select(root, 'path').map(function (path) {
          //return Vertices.scale(Svg.pathToVertices(path, 20), 0.4, 0.4);
          return Svg.pathToVertices(path, 2); //원본비율로
        });
        const aNewBody = Bodies.fromVertices(
          900,
          550,
          vertexSets,
          {
            isStatic: true,
            render: {
              fillStyle: color,
              strokeStyle: color,
              lineWidth: 1,
            },
          },
          true
        );
        svgObjs.push(aNewBody);
        Composite.add(world, aNewBody);
      });
    });
    [
      //1줄
      './svg1/1-04.svg',
      './svg1/1-05.svg',
      './svg1/1-06.svg',
      './svg1/1-07.svg',
      './svg1/1-08.svg',
    ].forEach(function (path, i) {
      loadSvg(path).then(function (root) {
        var vertexSets = select(root, 'path').map(function (path) {
          //return Vertices.scale(Svg.pathToVertices(path, 20), 0.4, 0.4);
          return Svg.pathToVertices(path, 5); //원본비율로
        });
        const aNewBody = Bodies.fromVertices(
          200 + i * 170,
          130,
          vertexSets,
          {
            isStatic: true,
            render: {
              fillStyle: color,
              strokeStyle: color,
              lineWidth: 1,
            },
          },
          true
        );
        svgObjs.push(aNewBody);
        Composite.add(world, aNewBody);
      });
    });

    [
      //2줄
      './svg1/2-09.svg',
      './svg1/2-10.svg',
      './svg1/2-11.svg',
      './svg1/2-12.svg',
      './svg1/2-13.svg',
      './svg1/2-14.svg',
      './svg1/2-15.svg',
    ].forEach(function (path, i) {
      loadSvg(path).then(function (root) {
        var vertexSets = select(root, 'path').map(function (path) {
          //return Vertices.scale(Svg.pathToVertices(path, 20), 0.4, 0.4);
          return Svg.pathToVertices(path, 5); //원본비율로
        });
        const aNewBody = Bodies.fromVertices(
          210 + i * 110,
          260,
          vertexSets,
          {
            isStatic: true,
            render: {
              fillStyle: color,
              strokeStyle: color,
              lineWidth: 1,
            },
          },
          true
        );
        svgObjs.push(aNewBody);
        Composite.add(world, aNewBody);
      });
    });

    [
      //3줄
      './svg1/3-16.svg',
      './svg1/3-17.svg',
      './svg1/3-18.svg',
      './svg1/3-19.svg',
      './svg1/3-20.svg',
      './svg1/3-21.svg',
      './svg1/3-22.svg',
    ].forEach(function (path, i) {
      loadSvg(path).then(function (root) {
        var vertexSets = select(root, 'path').map(function (path) {
          //return Vertices.scale(Svg.pathToVertices(path, 20), 0.4, 0.4);
          return Svg.pathToVertices(path, 5); //원본비율로
        });
        const aNewBody = Bodies.fromVertices(
          300 + i * 90,
          350,
          vertexSets,
          {
            isStatic: true,
            render: {
              fillStyle: color,
              strokeStyle: color,
              lineWidth: 1,
            },
          },
          true
        );
        svgObjs.push(aNewBody);
        Composite.add(world, aNewBody);
      });
    });

    [
      //4줄
      './svg1/4-23.svg',
      './svg1/4-24.svg',
      './svg1/4-25.svg',
      './svg1/4-26.svg',
      './svg1/4-27.svg',
      './svg1/4-28.svg',
      './svg1/4-29.svg',
    ].forEach(function (path, i) {
      loadSvg(path).then(function (root) {
        var vertexSets = select(root, 'path').map(function (path) {
          //return Vertices.scale(Svg.pathToVertices(path, 20), 0.4, 0.4);
          return Svg.pathToVertices(path, 5); //원본비율로
        });
        const aNewBody = Bodies.fromVertices(
          350 + i * 65,
          420,
          vertexSets,
          {
            isStatic: true,
            render: {
              fillStyle: color,
              strokeStyle: color,
              lineWidth: 1,
            },
          },
          true
        );
        svgObjs.push(aNewBody);
        Composite.add(world, aNewBody);
      });
    });

    [
      //5줄
      './svg1/5-30.svg',
      './svg1/5-31.svg',
      './svg1/5-32.svg',
      './svg1/5-33.svg',
      './svg1/5-34.svg',
      './svg1/5-35.svg',
      './svg1/5-36.svg',
    ].forEach(function (path, i) {
      loadSvg(path).then(function (root) {
        var vertexSets = select(root, 'path').map(function (path) {
          //return Vertices.scale(Svg.pathToVertices(path, 20), 0.4, 0.4);
          return Svg.pathToVertices(path, 5); //원본비율로
        });
        const aNewBody = Bodies.fromVertices(
          375 + i * 60,
          470,
          vertexSets,
          {
            isStatic: true,
            render: {
              fillStyle: color,
              strokeStyle: color,
              lineWidth: 1,
            },
          },
          true
        );
        svgObjs.push(aNewBody);
        Composite.add(world, aNewBody);
      });
    });

    [
      //6줄
      './svg1/6-37.svg',
      './svg1/6-38.svg',
      './svg1/6-39.svg',
      './svg1/6-40.svg',
      './svg1/6-41.svg',
      './svg1/6-42.svg',
      './svg1/6-43.svg',
    ].forEach(function (path, i) {
      loadSvg(path).then(function (root) {
        var vertexSets = select(root, 'path').map(function (path) {
          //return Vertices.scale(Svg.pathToVertices(path, 20), 0.4, 0.4);
          return Svg.pathToVertices(path, 5); //원본비율로
        });
        const aNewBody = Bodies.fromVertices(
          400 + i * 50,
          520,
          vertexSets,
          {
            isStatic: true,
            render: {
              fillStyle: color,
              strokeStyle: color,
              lineWidth: 1,
            },
          },
          true
        );
        svgObjs.push(aNewBody);
        Composite.add(world, aNewBody);
      });
    });

    [
      //7줄
      './svg1/7-44.svg',
      './svg1/7-45.svg',
      './svg1/7-46.svg',
      './svg1/7-47.svg',
      './svg1/7-48.svg',
      './svg1/7-49.svg',
      './svg1/7-50.svg',
    ].forEach(function (path, i) {
      loadSvg(path).then(function (root) {
        var vertexSets = select(root, 'path').map(function (path) {
          //return Vertices.scale(Svg.pathToVertices(path, 20), 0.4, 0.4);
          return Svg.pathToVertices(path, 5); //원본비율로
        });
        const aNewBody = Bodies.fromVertices(
          430 + i * 40,
          570,
          vertexSets,
          {
            isStatic: true,
            render: {
              fillStyle: color,
              strokeStyle: color,
              lineWidth: 1,
            },
          },
          true
        );
        svgObjs.push(aNewBody);
        Composite.add(world, aNewBody);
      });
    });

    [
      //7줄
      './svg1/8-54.svg',
      './svg1/8-55.svg',
      './svg1/8-56.svg',
      './svg1/8-57.svg',
      './svg1/8-58.svg',
      './svg1/8-59.svg',
      './svg1/8-50.svg',
    ].forEach(function (path, i) {
      loadSvg(path).then(function (root) {
        var vertexSets = select(root, 'path').map(function (path) {
          //return Vertices.scale(Svg.pathToVertices(path, 20), 0.4, 0.4);
          return Svg.pathToVertices(path, 5); //원본비율로
        });
        const aNewBody = Bodies.fromVertices(
          450 + i * 30,
          600,
          vertexSets,
          {
            isStatic: true,
            render: {
              fillStyle: color,
              strokeStyle: color,
              lineWidth: 1,
            },
          },
          true
        );
        svgObjs.push(aNewBody);
        Composite.add(world, aNewBody);
      });
    });
  }

  mouse = Mouse.create(canvas.elt);
  mouse.pixelRatio = (pixelDensity() * width) / oWidth;
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
  fill('BLACK');
  svgObjs.forEach((eachBody) => {
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
