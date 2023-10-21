class Ball {
  constructor(posX, posY, velAngle, velMag, mass, h, s, v) {
    this.pos = createVector(posX, posY);
    this.vel = createVector(1, 0);
    this.vel.rotate(velAngle);
    this.vel.mult(velMag);
    this.acc = createVector();
    this.mass = mass;
    this.rad = this.mass * 5;
    this.color = color(h, s, v);
  }

  applyForce(force) {
    const calcedAcc = p5.Vector.div(force, this.mass);
    // const calcedAcc = force.div(this.mass);
    this.acc.add(calcedAcc);
  }

  update() {
    this.vel.add(this.acc);
    // this.vel.limit(5);
    this.pos.add(this.vel);
    // this.acc.set(0, 0);
    // this.acc.setMag(0);
    this.acc.mult(0);
  }

  display() {
    fill(this.color);
    noStroke();
    ellipse(this.pos.x, this.pos.y, 2 * this.rad);
  }

  //함수는 동사, 명사 형태로 set- get-
  //상태를 물어볼때 is-

  //원이 화면 밖으로 벗어나면 없어지는 함수 = 죽으면 신경 안씀
  isDead() {
    // this.pos.x가 0+ this.rad 보다 크다는 것은 화면 안에 있다는 것
    // if (this.pos.x >= 0 + this.rad)
    return (
      this.pos.x < -this.rad ||
      this.pos.x > width + this.rad ||
      // this.pos.y < -this.rad || //위로나가는 볼들은 제외
      this.pos.y > height + this.rad
    );
  }
}
