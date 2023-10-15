// let particle;
let particleArray = [];
let gravity = 0;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  // particle = new Particle(width / 2, 20);
  gravity = createVector(0, 0.1);

  background(255);
}

function draw() {
  particleArray.push(new Particle(width / 2, 20));
  //   console.log(particle.isDead());
  // if (particle.isDead()) {
  //   particle = new Particle(width / 2, 20);
  // }
  // particle.applyForce(gravity);
  // particle.update();
  background(255);

  for (let a = 0; a < particleArray.length; a++) {
    particleArray[a].applyForce(gravity);
    particleArray[a].update();
    particleArray[a].display();
  }

  for (let a = particleArray.length - 1; a >= 0; a--) {
    //특정파티클이 죽는다면 드러내고 뒤에 것을 당겨오기
    if (particleArray[a].isDead()) {
      particleArray.splice(a, 1); //127개를 넘지 않도록
    }
  }
  // particle.display();
  console.log(particleArray.length);
}
