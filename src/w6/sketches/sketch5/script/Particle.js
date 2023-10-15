class Particle {
  constructor(x, y, mass, rad, lifeSpan) {
    this.pos = createVector(x, y); //포지션
    // this.vel = createVector(0, 0);
    this.vel = createVector(1, 0); //속도
    this.vel.rotate((TAU / 360) * random(-120, -60));
    this.acc = createVector(0, 0); //가속도
    this.mass = mass; //질량
    this.rad = rad; //반지름
    this.lifeSpan = lifeSpan; //연기의 수명
    this.life = this.lifeSpan;
  }

  //외부의 힘
  applyForce(force) {
    //가속도 변환 = (외부의force, 나누기 질량)
    const acc = p5.Vector.div(force, this.mass);
    //가속도 합산
    this.acc.add(acc);
  }

  update() {
    this.vel.add(this.acc); //가속도(나의가속도)
    this.pos.add(this.vel); //위치(속도)
    this.acc.mult(0); //매번초기화
    this.life--;
  }

  display() {
    // noStroke();
    // fill(255, 255 * this.getNormalizedLife());
    // ellipse(this.pos.x, this.pos.y, this.rad * 2);
    tint(255, 255, 0, 255 * this.getNormalizedLife());
    image(texture, this.pos.x, this.pos.y);
  }

  getNormalizedLife() {
    return this.life / this.lifeSpan;
  }

  //연기 입자 수명
  isDead() {
    return this.life < 0;
  }
}
