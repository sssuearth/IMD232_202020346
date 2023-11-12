// let = var

// let Engine = Matter.Engine,
//   Render = Matter.Render,
//   Runner = Matter.Runner,
//   Bodies = Matter.Bodies,
//   Composite = Matter.Composite;

// matter.js 렌더를 사용하려면 필수
let Engine = Matter.Engine; // 일어나는 일들 계산, 안에 월드
let Render = Matter.Render; // 그림그려주는
let Runner = Matter.Runner; // draw의 역할
let Bodies = Matter.Bodies; // 다각형 등의 물체를 만들 수 있음
let Composite = Matter.Composite; // 추가, 해당하는 물체를 넣어주는

// 필수과정 1: 엔진 만들기
// Engine = Matter.Engine
let engine = Engine.create();

// 캔버스 : 컨테이너 내 생성
let elem = document.querySelector('#canvas');
console.log(elem);

// 필수과정 2: 렌더러 만들기
let render = Render.create({
  element: elem,
  engine: engine,
  options: {
    wireframeBackground: '#29155c',
    width: elem.clientWidth,
    height: (elem.clientWidth / 4) * 3,
  },
});
console.log(render);

// 옵션과정 1: 물체 만들기
// 두개의 박스와 그라운드
let boxA = Bodies.rectangle(400, 200, 80, 80);
let boxB = Bodies.rectangle(450, 50, 80, 80);
let ground = Bodies.rectangle(400, 610, 400, 20, { isStatic: true });
console.log(ground);

// 옵션과정 2: 물체를 세계에 추가하기
// 어레이로 괄호(아래)
// Composite.add(engine.world, [boxA, boxB, ground]);
Composite.add(engine.world, boxA);
Composite.add(engine.world, boxB);
Composite.add(engine.world, ground);

// 필수과정 3: 그림그리기
Render.run(render);

// 필수과정 4: 자동으로 계속 동작하게 해주는 장치 만들기
let runner = Runner.create();

// 필수과정 5: 자동 뺑뺑이에게 엔진을 등록해서 ㄱㄱㄱ
Runner.run(runner, engine);
