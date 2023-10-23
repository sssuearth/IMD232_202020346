let emitter;
let particles = [];
let g;
let angle;

function setup() {
  setCanvasContainer('canvas', 2, 1, true);

  colorMode(HSL, 360, 100, 100);
  background('white');
  //particle = new Rect(width / 2, 0, 0, 0, 1, 0, 100, 50);
  // emitter = new Emitter(width / 2, height);
  g = createVector(0, 0.5);
  rectMode(CENTER);
}

function draw() {
  background('white');
  // const scaledG = p5.Vector.mult(g, particle.mass);
  // particle.applyForce(scaledG);
  // particle.update();
  // particle.display();
  // emitter.update();
  // emitter.display();
  particles.push(
    new particle(
      random(width),
      -height / 10,
      (TAU / 360) * random(360),
      0,
      1,
      random(360),
      100,
      60,
      random(0.05, 0.1)
    )
  );

  for (let i = particles.length - 1; i >= 0; i--) {
    const scaledG = p5.Vector.mult(g, particles[i].mass);
    particles[i].applyForce(scaledG);
    particles[i].update();
    if (particles[i].isDead()) {
      particles.splice(i, 1);
    }
    particles[i].display();
  }
  console.log('파티클 갯수:' + particles.length);
}
