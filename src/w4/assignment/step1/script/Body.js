class Body {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.mass = random(16, 100); //랜덤
    this.radius = map(this.mass, 16, 100, 20, 50);
    this.velVisualization = createVector(0, 0);
    this.accVisualization = createVector(0, 0);
  }

  attract(body) {
    let force = p5.Vector.sub(this.pos, body.pos);
    let distance = constrain(force.mag(), 5, 25);
    let strength = (G * (this.mass * body.mass)) / distance ** 3;
    force.setMag(strength);
    return force;
  }

  applyForce(force) {
    let forceDividedByMass = p5.Vector.div(force, this.mass);
    this.acc.add(forceDividedByMass);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);

    this.velVisualization.set(this.vel);
    this.velVisualization.mult(10);

    this.accVisualization.set(this.acc);
    this.accVisualization.mult(100);

    this.acc.set(0, 0);
  }

  display() {
    noStroke();
    fill(0, 94, 255, 50);
    circle(this.pos.x, this.pos.y, this.radius * 2);
  }
}
