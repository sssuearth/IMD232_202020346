//탈것
class Vehicle {
  //constructor 먼저~
  constructor(x, y, rad, speedMx, forceMx, color) {
    this.pos = createVector(x, y); //위치
    this.vel = createVector(); //위치를 매 프레임마다 얼마나 이동?
    this.acc = createVector(); //가속도 운동, 매번 속도가 얼마나 변하나?
    this.mass = 1; //질량
    this.rad = rad; //원, 화면에 표시하기 위한 크기개념
    this.speedMx = speedMx; //최고속도
    this.forceMx = forceMx; //적용할 수 있는 힘의 최대치
    this.color = color;
  }

  //쫒아오게 할 구문
  //타켓을 향해 움직이기
  //desiredVelocity를 desired로

  seek(target) {
    //타켓에게서 나의 위치를 빼기

    //target.sub(this.pos);
    let desired = p5.Vector.sub(target, this.pos);
    // desired.normalize();
    // desired.mult(this.speedMx);
    desired.setMag(this.speedMx);
    let steering = p5.Vector.sub(desired, this.vel);

    if (debug) {
      push();
      translate(this.pos.x, this.pos.y);
      noFill();
      stroke(127);
      line(0, 0, desired.x * 10, desired.y * 10);
      stroke(0, 0, 255);
      line(0, 0, steering.x * 10, steering.y * 10);
      pop();
    }
    steering.limit(this.forceMx);
    this.applyForce(steering);
  }

  //힘 적용

  //force가 외부에서 들어오는 힘,
  //힘을 나의 질량으로 나눈다
  //변수가 아닌 상황에서 const 써주기
  applyForce(force) {
    // force.div(this.mass);
    let calcedAcc = p5.Vector.div(force, this.mass);
    this.acc.add(calcedAcc);
  }

  //업데이트
  update() {
    this.vel.add(this.acc); //속도에 가속도를 더하기
    //this.vel.limit(this.speedMx);
    this.pos.add(this.vel); //위치에 속도를 더하기
    this.acc.mult(0); //매번 초기화, 가속도에 0을 더해 (0,0)
  }

  //
  display() {
    //const headingAngle = atan2(this.vel.y, this.vel.x);
    // heading으로 각도
    let angle = this.vel.heading();

    push();
    translate(this.pos.x, this.pos.y); //원점이 나의 위치로
    rotate(angle);
    fill(this.color);
    noStroke();

    //화살표 그리기
    //적는 순서대로 이어준다
    //radians 함수
    beginShape();
    vertex(this.rad, 0); //맨 앞 화살표
    vertex(this.rad * cos(radians(-135)), this.rad * sin(radians(-135)));
    vertex(0, 0);
    vertex(this.rad * cos(radians(135)), this.rad * sin(radians(135)));
    endShape(CLOSE); // close 마지막 점을 이어줌

    //둘러싼 원
    // noFill();
    // stroke(this.color);
    // ellipse(0, 0, 2 * this.rad);
    // pop();
  }

  //도망가는
  flee(target) {
    const desired = p5.Vector.sub(target, this.pos);
    //도망가는 방향으로 180도 뒤집기
    desired.mult(-1);
    desired.setMag(this.speedMx);
    desired.sub(this.vel);
    desired.limit(this.forceMx);
    this.applyForce(desired);
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
