class Vehicle {
  constructor(x, y, mass, rad, speedMx, forceMx) {
    this.pos = createVector(x, y);
    this.vel = createVector();
    this.acc = createVector();
    this.mass = mass;
    this.rad = rad; //화면에 표시하기 위한 크기개념
    this.speedMx = speedMx; //최고속도
    this.forceMx = forceMx; //적용할 수 있는 힘의 최대치
  }

  applyForce(force) {
    const acc = p5.Vector.div(force, this.mass);
    this.acc.add(acc);
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(this.speedMx);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  display() {
    // const headingAngle = atan2(this.vel.y, this.vel.x);
    // heading으로 각도
    const headingAngle = this.vel.heading();

    push();
    translate(this.pos.x, this.pos.y); //원점이 나의 위치로
    rotate(headingAngle);
    fill(0);
    noStroke();

    //화살표 그리기
    beginShape();
    vertex(this.rad, 0);
    vertex(this.rad * cos(radians(-135)), this.rad * sin(radians(-135)));
    vertex(0, 0);
    vertex(this.rad * cos(radians(135)), this.rad * sin(radians(135)));
    endShape(CLOSE);

    //둘러싼 원
    noFill();
    stroke('blue');
    ellipse(0, 0, 2 * this.rad);
    pop();
  }

  //쫒아오게 할 구문
  //타켓을 향해 움직이기
  seek(target) {
    //타켓에서 나의 위치 빼기
    const desiredVelocity = p5.Vector.sub(target, this.pos);
    desiredVelocity.setMag(this.speedMx);
    const steer = p5.Vector.sub(desiredVelocity, this.vel);
    steer.limit(this.forceMx);
    this.applyForce(steer);
  }
}
