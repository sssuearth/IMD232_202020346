class Pendulum {
  //진자의 위치, 초기 앵글
  constructor(x, y, rad, angle, ballRad) {
    this.angle = angle; //진자의 각도
    this.angleVel = 0; //진자의 각도에 대한 속도
    this.angleAcc = 0; //진자의 각도에 대한 가속도
    this.pos = createVector(x, y); //진자의 중심점
    // this.length; //진자의 길이
    this.rad = rad; //진자에 달려있는 추, 공
    this.ballPos = createVector(x, y); //진자의 끝부분
    this.ballPos.add(cos(this.angle) * this.rad, sin(this.angle) * this.rad);
    this.ballRad = ballRad;
    this.movingOffset = createVector(); //클릭해서 이동시키기 위해
    this.isHover = false;
    this.isDragging = false;
  }

  //a=sin(angle) * g/rad
  applyForce(force) {
    this.angleAcc = (sin(this.angle - (TAU / 360) * 90) * -force.y) / this.rad;
  }

  update() {
    if (!this.isDragging) {
      this.angleVel *= 0.999; //시간이 지날수록 느려지게
      this.angleVel += this.angleAcc;
      this.angle += this.angleVel;
    }
    this.ballPos.set(
      cos(this.angle) * this.rad + this.pos.x,
      sin(this.angle) * this.rad + this.pos.y
    );
  }

  display() {
    //중심점
    noStroke();
    fill(127);
    ellipse(this.pos.x, this.pos.y, 20);

    //공을 드래그할때 컬러
    if (this.isDragging) {
      fill('#ff0000');
    } else if (this.isHover) {
      fill(127);
    } else {
      fill(191);
    }
    ellipse(this.ballPos.x, this.ballPos.y, 2 * this.ballRad);

    //선
    stroke(0);
    noFill();
    line(this.pos.x, this.pos.y, this.ballPos.x, this.ballPos.y);
  }

  mouseMoved(mX, mY) {
    this.isHover =
      (this.ballPos.x - mX) ** 2 + (this.ballPos.y - mY) ** 2 <=
      this.ballRad ** 2;
  }

  mousePressed(mX, mY) {
    if (this.isHover) {
      this.isDragging = true;
      this.movingOffset.set(mX - this.ballPos.x, mY - this.ballPos.y);
    }
  }

  // 고정점에서 마우스까지 향하는 백터를 구한다
  mouseDragged(mX, mY) {
    if (this.isDragging) {
      //공이 원래 있어야할 위치, 마우스 x,y의 위치에서 무빙옵셋 빼기
      const ballShouldBe = createVector(
        mX - this.movingOffset.x,
        mY - this.movingOffset.y
      );
      const angle = atan2(
        ballShouldBe.y - this.pos.y,
        ballShouldBe.x - this.pos.x
      );
      this.angle = angle;
    }
  }

  mouseReleased() {
    this.isDragging = false;
  }
}
