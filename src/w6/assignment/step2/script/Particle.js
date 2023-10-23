class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(random(19, 20), 0);
    this.vel.rotate((TAU / 360) * random(0, 360));
    // this.vel.mult(3);
    this.acc = createVector(0, 0);
    this.mass = 10;
    this.rad = 10;
    this.lifespan = 60;
    // this.color = color(h, s, v);
  }

  applyForce(force) {
    // const calcedAcc = p5.Vector.div(force, this.mass);
    // const calcedAcc = force.div(this.mass);
    this.acc.add(force);
  }

  update() {
    this.vel.add(this.acc);
    this.vel.mult(magnitude);
    // this.vel.limit(5);
    this.pos.add(this.vel);
    // this.acc.set(0, 0);
    // this.acc.setMag(0);
    this.acc.mult(0);
    this.lifespan--;
  }

  display() {
    // colorMode(HSB, 100);
    // noStroke();
    // fill(200, this.lifeSpan * 3);
    // ellipse(this.pos.x, this.pos.y, this.rad * 2);
    // stroke(0, this.lifeSpan * 3);
    colorMode(HSB, 100);
    noStroke();
    let alpha = map(this.lifespan, 0, 60, 0, 100);
    fill(210, 100, 100, alpha); // 투명도 조절
    ellipse(this.pos.x, this.pos.y, this.rad);
  }

  isDead() {
    return (
      this.lifeSpan < 0 ||
      this.pos.x < 0 ||
      this.pos.x > width ||
      this.pos.y < 0 ||
      this.pos.y > height
    );
  }
}
