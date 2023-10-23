class particle {
  constructor(posX, posY, velAngle, velMag, mass, h, s, v, rotateSpeed) {
    this.pos = createVector(posX, posY);
    this.vel = createVector(1, 0);
    this.vel.mult(velMag);
    this.acc = createVector();
    this.mass = mass;
    this.rad = 3;
    this.color = color(h, s, v);
    this.rotate = velAngle;
    this.rotateSpeed = rotateSpeed;
  }

  applyForce(force) {
    const calcedAcc = p5.Vector.div(force, this.mass);
    // const calcedAcc = force.div(this.mass);
    this.acc.add(calcedAcc);
  }

  update() {
    this.vel.add(this.acc);
    this.vel.mult(0.75);
    // this.vel.limit(5);
    this.pos.add(this.vel);
    // this.acc.set(0, 0);
    // this.acc.setMag(0);
    this.acc.mult(0);
    this.rotate += this.rotateSpeed;
  }

  display() {
    push();
    translate(this.pos.x, this.pos.y);
    rectMode(RADIUS);
    rotate(this.rotate);
    fill(this.color);
    noStroke();
    rect(0, 0, 2 * this.rad);
    pop();
  }

  //함수는 동사, 명사 형태로 set- get-
  //상태를 물어볼때 is-

  //원이 화면 밖으로 벗어나면 없어지는 함수 = 죽으면 신경 안씀

  isDead() {
    return (
      this.pos.x < -this.rad ||
      this.pos.x > width + this.rad ||
      // this.pos.y < -this.rad || //위로나가는 볼들은 제외
      this.pos.y > height + this.rad
    );
  }
}
