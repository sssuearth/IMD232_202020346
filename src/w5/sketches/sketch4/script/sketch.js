// let aMover;
let movers = [];
const moversNum = 1000;
let mVec; //마우스백터

function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  // 촉의 위치
  // aMover = new Mover(width / 2, height / 2, 10, 25, 'cornflowerblue');
  colorMode(HSL, 360, 100, 100, 100);
  for (let a = 0; a < moversNum; a++) {
    movers.push(
      new Mover(
        random(width),
        random(height),
        10, //mass
        25, //radius
        color(random(360), 100, 50, 25)
      )
    );
  }
  mVec = createVector();

  background(255);
}

function draw() {
  mVec.set(mouseX, mouseY);

  // // aMover의 위치에서 마우스로 향하는 백터
  // // aMover라는 원이 마우스의 위치까지 가는데 어느방향, 얼마나가 가야하는가?
  // // 마우스의 위치 -마이너스 aMover의 위치
  // const dirVec = p5.Vector.sub(mVec, aMover.pos);

  // dirVec.setMag(0.5); //마우스를 향한 동일한 가속력
  // aMover.applyForce(dirVec);
  // aMover.update();
  for (let a = 0; a < movers.length; a++) {
    const dirVec = p5.Vector.sub(mVec, movers[a].pos);
    dirVec.setMag(0.5);
    movers[a].applyForce(dirVec);
    movers[a].update();
  }

  background(255);

  //   aMover.display();
  //   aMover.displayVectors();
  //   for (let a = 0; a < movers.length; a++) {
  //     movers[a].display();
  //     movers[a].displayVectors();
  //   }

  //   movers.forEach(function (anyName) {
  //     anyName.display();
  //     anyName.displayVectors();
  //   });

  movers.forEach((anyName) => {
    anyName.display();
    anyName.displayVectors();
  });
}
