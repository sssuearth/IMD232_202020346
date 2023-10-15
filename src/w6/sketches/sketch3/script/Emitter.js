//sketchs 내용 Emitter를 사용해 하나로 묶어주기

class Emitter {
  constructor(x, y) {
    this.particles = [];
    this.pos = createVector(x, y); //파티클이 뿜어져 나올 위치
  }

  addParticle() {
    this.particles.push(new Particle(this.pos.x, this.pos.y));
  }

  update(gravity) {
    //죽는거 처리
    for (let i = this.particles.length - 1; i >= 0; i--) {
      this.particles[i].applyForce(gravity);
      this.particles[i].update();
      if (this.particles[i].isDead()) {
        this.particles.splice(i, 1);
      }
    }
  }

  display() {
    for (let i = 0; i < this.particles.length; i++) {
      this.particles[i].display();
    }
  }
}
