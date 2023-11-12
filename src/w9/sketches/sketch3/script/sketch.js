// 1. 엔진만들기
// 2. 물체만들기
// 3. 물제를 엔진에 추가
// 4. 러너만들기
// 5. 러너에 엔진 등록해서 뺑뺑이

// console.log(Matter);
// Matter.~을 가져오기 위해 이름 제대로
const { Engine, Bodies, Composite, Runner } = Matter;

// 엔진
// console.log(Engine);
const matterEngine = Engine.create();

// 러너
// console.log(Runner);
const matterRunner = Runner.create();

console.log(Composite);

// 사각형 여러개를 만들겠다~
const matterRects = [];

function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  rectMode(CENTER);

  // 사각형들 만들기
  matterRects.push(new MatterRect(width / 2, 50, random(8, 16), random(8, 16)));

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

  background('white');

  // 5. 러너에 엔진 등록해서 뺑뺑이
  Runner.run(matterRunner, matterEngine);
}

function draw() {
  background('white');

  //   matterRects.forEach((each) => {
  //     each.display();
  //   });

  // 화면밖으로 벗어난 사각형
  for (let idx = matterRects.length - 1; idx >= 0; idx--) {
    matterRects[idx].display();
    if (matterRects[idx].isDead()) {
      matterRects[idx].remove();
      matterRects.splice(idx, 1);
    }
  }
  console.log('matterRects.length', matterRects.length);
  console.log('world.bodies.length', matterEngine.world.bodies.length);
}

// 우수수 떨어지는 rect 사각형들 // 드래그할때
// function mousePressed() //클릭할때
function mouseDragged() {
  matterRects.push(
    new MatterRect(mouseX, mouseY, random(8, 16), random(8, 16))
  );
}
