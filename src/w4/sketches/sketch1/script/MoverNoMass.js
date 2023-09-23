class MoverNoMass {
  constructor(x, y, r) {
    //위 r=radius는 매개변수, 하나의 공마다 넣어줄
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0.1);
    this.radius = r;
    //r=radius 저장해놓을 실질적인 칸, 위랑 다름
  }

  //위치 업데이트
  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
  }

  //공이 통통 튕기는 묘사
  //0을 넘었을때 탄성 충돌하게끔하기
  checkEdges() {
    if (this.pos.x < 0) {
      //   //0보다 얼마나 뚫고 갔는가?
      //   let delta = this.pos.x - 0;
      //   //뚫고 간 거리에 -1을 곱해 양의 방향으로 뒤집는다
      //   delta *= -1;
      //   //0을 기준으로 뒤집힌 거리를 더해준다 > 대칭으로
      //   this.pos.x = 0 + delta;

      this.pos.x -= 0;
      this.pos.x *= -1;
      this.pos.x += 0;
      this.vel.x *= -1;
    } else if (this.pos.x > width - 1) {
      this.pos.x -= width - 1;
      this.pos.x *= -1;
      this.pos.x += width - 1;
      this.vel.x *= -1;
    }
    // 바닥에 튕기기
    if (this.pos.y > height - 1) {
      this.pos.y -= height - 1;
      this.pos.y *= -1;
      this.pos.y += height - 1;
      this.vel.y *= -1;
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
    stroke('blue'); //가속도
    line(
      this.pos.x,
      this.pos.y,
      this.pos.x + this.acc.x * 100,
      this.pos.y + this.acc.y * 100
    );
  }
}
