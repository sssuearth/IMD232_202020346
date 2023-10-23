let emitter;
let g = 0;
let magnitude = 0.9;

function setup() {
  setCanvasContainer('canvas', 2, 1, true);
  background('white');
  //particle = new Rect(width / 2, 0, 0, 0, 1, 0, 100, 50);
  g = createVector(0, 0.1);
  emitter = new Emitter();
}

function draw() {
  background('white');
  //emitter.applyGravity(g);
  emitter.update(g);
  emitter.display();
  console.log(emitter.particles.length);
}

//마우스 클릭시
function mouseClicked() {
  for (let i = 0; i < 100; i++) {
    emitter.particles.push(new Particle(mouseX, mouseY));
  }
}
