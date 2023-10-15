//위치, 속도, 가속도라는 개념을 가지고있으며
//중력을 받아 뚝 떨어진다
//주기를 만들어놓고 주기가 넘으면 다시 반복

class Particle {
  constructor(x, y, mass, lifeSpan) {
    this.pos = createVector(x, y);
    this.vel = createVector(1, 0);
    this.vel.rotate((TAU / 360) * random(-150, -30));
    this.acc = createVector(0, 0);
    this.mass = mass; //질량
    this.rad = this.mass ** 0.5 * 5; //mass에 비례
    this.lifeSpan = lifeSpan;
    this.life = this.lifeSpan;
  }

  //force에 외부의 힘이 들어올때  this.mass 질량으로 나눠
  //acc 가속도로 삼아서 acc에 더해줌
  applyForce(force) {
    const acc = p5.Vector.div(force, this.mass);
    this.acc.add(acc);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    this.life--;
  }

  display() {
    const normalizedLife = constrain(this.life / this.lifeSpan, 0, 1);
    //최소값과 최대값 한정
    stroke(0, 255 * normalizedLife);
    fill(127, 255 * normalizedLife);
    ellipse(this.pos.x, this.pos.y, this.rad * 2);
  }

  //수명이 0보다 작으면
  isDead() {
    return this.life < 0;
  }
}
