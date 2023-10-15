let emitter;
let emitters = []; //어레이화
let gravity = 0;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  //이미터가 뿜어낼 위치
  emitter = new Emitter(width / 2, 20);

  gravity = createVector(0, 0.1);

  background(255);
}

function draw() {
  //이미터가 계속해서 만들어지기
  emitter.addParticle();
  //어레이화
  for (let i = 0; i < emitters.length; i++) {
    emitters[i].addParticle();
  }

  background(255);
  emitter.update(gravity);
  emitter.display();

  for (let i = 0; i < emitters.length; i++) {
    emitters[i].update(gravity);
    emitters[i].display();
  }
  console.log(emitter.particles.length);
}

//마우스 클릭할때마다 뉴이미터가 생겨나게하기
function mousePressed() {
  emitters.push(new Emitter(mouseX, mouseY));
}
