class Mover {
  constructor(x, y, mass) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    //this.accDisplay = createVector(0, 0);
    this.mass = mass;
    this.radius = this.mass ** 0.5 * 13;
    this.isHover = false;
    this.isDragging = false;
    this.movingOffset = createVector();
  }

  //외부에서 들어오는 힘,을 질량으로 나누고, 나눈 힘을 가속도 시스템에 더해줌
  applyForce(force) {
    const acc = p5.Vector.div(force, this.mass);
    this.acc.add(acc);
  }

  //위치 업데이트
  update() {
    if (this.isDragging) {
    } else {
      this.vel.add(this.acc);
      this.pos.add(this.vel);
      this.acc.mult(0);
    }
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
    const bounce = -0.6;
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
    fill(0, 94, 255);
    ellipse(this.pos.x, this.pos.y, 2 * this.radius);
  }
  mouseMoved(mX, mY) {
    this.isHover =
      (this.pos.x - mX) ** 2 + (this.pos.y - mY) ** 2 <= this.radius ** 2;
  }

  mousePressed(mX, mY) {
    if (this.isHover) {
      this.isDragging = true;
      this.movingOffset.set(mX - this.pos.x, mY - this.pos.y);
    }
  }

  mouseDragged(mX, mY) {
    if (this.isDragging) {
      this.pos.set(mX - this.movingOffset.x, mY - this.movingOffset.y);
    }
  }

  mouseReleased() {
    this.isDragging = false;
  }
}
