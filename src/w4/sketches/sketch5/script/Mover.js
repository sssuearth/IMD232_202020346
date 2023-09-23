class Mover {
  constructor(x, y, mass) {
    //무게, mess 질량을 받도록
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    //고정된 가속도에 바람같은 외부 가속도를 추가해서 집어넣기
    this.acc = createVector(0, 0);
    this.accDisplay = createVector(0, 0);
    this.mass = mass;
    this.radius = this.mass ** 0.5 * 10;
    //반지름 = 질량에 비례하기, 제곱
  }

  //외부에서 들어오는 힘,을 질량으로 나누고, 나눈 힘을 가속도 시스템에 더해줌
  applyForce(force) {
    let forceDividedByMass = createVector(force.x, force.y);
    forceDividedByMass.div(this.mass); //가속도
    this.acc.add(forceDividedByMass);
  }

  //위치 업데이트
  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.accDisplay.set(this.acc);
    this.acc.mult(0);
  }

  // 바닥에 닿았는가? 마찰로 힘을 잃게 하기, 굴러다니지 않게 하기
  contactEdge() {
    if (this.pos.y >= height - 1 - this.radius - 1) {
      return true;
    } else {
      return false;
    }
  }

  //공이 통통 튕기는 묘사
  //0을 넘었을때 탄성 충돌하게끔하기
  // this.radius로 원 반지름대로 벽에 딱 맞닿게끔
  // bounce -0.9 농구공 / 스쿼시 공 -0.25
  checkEdges() {
    const bounce = -0.9;
    if (this.pos.x < 0 + this.radius) {
      this.pos.x -= 0 + this.radius;
      this.pos.x *= -1;
      this.pos.x += 0 + this.radius;
      this.vel.x *= bounce;
    } else if (this.pos.x > width - 1 - this.radius) {
      this.pos.x -= width - 1 - this.radius;
      this.pos.x *= -1;
      this.pos.x += width - 1 - this.radius;
      this.vel.x *= bounce;
    }
    // 바닥에 튕기기
    if (this.pos.y > height - 1 - this.radius) {
      this.pos.y -= height - 1 - this.radius;
      this.pos.y *= -1;
      this.pos.y += height - 1 - this.radius;
      this.vel.y *= bounce;
    }
  }

  //화면에 표현하기, 그림그리기
  display() {
    noStroke();
    fill(0);
    ellipse(this.pos.x, this.pos.y, 2 * this.radius);
  }

  //그려지는 공의 속도와 가속도 묘사
  //10배 > 배수를 안걸어두면 작아서 점으로 보임
  displayVectors() {
    stroke('red'); //속도
    line(
      this.pos.x,
      this.pos.y,
      this.pos.x + this.vel.x * 10,
      this.pos.y + this.vel.y * 10
    );
    stroke('lime'); //가속도
    line(
      this.pos.x,
      this.pos.y,
      this.pos.x + this.accDisplay.x * 100,
      this.pos.y + this.accDisplay.y * 100
    );
  }
}
