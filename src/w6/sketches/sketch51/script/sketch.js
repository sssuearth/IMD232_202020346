let emitter;
let particle;
let g;

function setup() {
  setCanvasContainer('canvasGoesHere', 2, 1, true);

  background(255);

  colorMode(HSL, 360, 100, 100);
  particle = new Ball(width / 2, 0, 0, 0, 1, 0, 100, 50);

  emitter = new Emitter(width / 2, height);

  g = createVector(0, 0.1);
}

function draw() {
  background(255);
  const scaledG = p5.Vector.mult(g, particle.mass);
  particle.applyForce(scaledG);
  particle.update();
  particle.display();

  emitter.createBall();
  emitter.applyGravity(g);
  emitter.update();
  emitter.display();
}
