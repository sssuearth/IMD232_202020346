//위치, 속도, 가속도라는 개념을 가지고있으며
//중력을 받아 뚝 떨어진다
//주기를 만들어놓고 주기가 넘으면 다시 반복

class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(1, 0);
    this.vel.rotate((TAU / 360) * random(-150, -30));
    this.acc = createVector(0, 0);
    this.rad = 8;
    this.lifeSpan = 255; //수명ㄴ
  }

  applyForce(force) {
    this.acc.set(force);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    this.lifeSpan -= 2;
  }

  display() {
    stroke(0, this.lifeSpan);
    fill(127, this.lifeSpan); //색에 라이프스펜/수명을 넣어 투명
    ellipse(this.pos.x, this.pos.y, this.rad * 2);
  }

  //수명이 0보다 작으면
  isDead() {
    return this.lifeSpan < 0;
  }
}
