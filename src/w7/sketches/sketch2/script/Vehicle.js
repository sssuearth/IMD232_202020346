class Vehicle {
  constructor(x, y, mass, rad, speedMx, forceMx, color) {
    this.pos = createVector(x, y);
    this.vel = createVector();
    this.acc = createVector();
    this.mass = mass;
    this.rad = rad; //화면에 표시하기 위한 크기개념
    this.speedMx = speedMx; //최고속도
    this.forceMx = forceMx; //적용할 수 있는 힘의 최대치
    this.color = color;
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
    stroke(this.color);
    ellipse(0, 0, 2 * this.rad);
    pop();
  }

  //쫒아오게 할 구문
  //타켓을 향해 움직이기
  //desiredVelocity를 steer로

  seek(target) {
    const steer = p5.Vector.sub(target, this.pos);
    steer.setMag(this.speedMx);
    steer.sub(this.vel);
    steer.limit(this.forceMx);
    this.applyForce(steer);
  }

  //도망가는
  flee(target) {
    const steer = p5.Vector.sub(target, this.pos);
    //도망가는 방향으로 180도 뒤집기
    steer.mult(-1);
    steer.setMag(this.speedMx);
    steer.sub(this.vel);
    steer.limit(this.forceMx);
    this.applyForce(steer);
  }

  //화면 밖으로 나가지 못하게 영원히 가두기
  //화면을 벗어나면 반대방향에서 나오도록

  borderInfinite() {
    if (this.pos.x < -this.rad) {
      this.pos.x = width + this.rad;
    } else if (this.pos.x > width + this.rad) {
      this.pos.x = -this.rad;
    }
    if (this.pos.y < -this.rad) {
      this.pos.y = height + this.rad;
    } else if (this.pos.y > height + this.rad) {
      this.pos.y = -this.rad;
    }
  }
}
