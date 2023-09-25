class Mover {
  //생성자
  constructor(x, y, radius) {
    //쓰고싶은 변수를 아래 쭉 적는다
    this.pos = createVector(x, y); //무조건 this
    //  this.vel = createVector(0, 0);
    this.vel = p5.Vector.random2D();
    this.vel.mult(2);
    this.acc = createVector(0, 0);
    this.radius = radius; //반지름
    this.mass = radius ** (1 / 2); //질량 / 반지름의 제곱근
  }

  applyForce(force) {
    //외부에서 힘이들어오면 나의 질량으로 나눈다
    // force.div(this.mass);

    //force자체는 변화시키지 않음
    let divedForce = p5.Vector.div(force, this.mass);
    this.acc.add(divedForce);
  }
  update() {
    this.vel.add(this.acc); //속도에 가속도를 더해준다
    this.pos.add(this.vel); //포지션(위치)에 속도를 더해준다
    this.acc.mult(0); //매 프레인마다 가속도를 초기화 시켜 외부에서 다시 값을 받는다
  }

  //충돌하는 edges
  edgeBounce() {
    //공이 벽에 닿았는가?
    if (this.pos.x < 0 + this.radius) {
      //delta
      let delta = this.pos.x - (0 + this.radius);
      //선 대칭
      this.pos.x += -2 * delta;
      //왼쪽 벽에서 반대로
      this.vel.x *= -1;

      //오른쪽
    } else if (this.pos.y > height - 1 - this.radius) {
      let delta = this.pos.y - (height - 1 - this.radius);
      this.pos.y += -2 * delta;
      this.vel.y *= -1;
    }
  }

  display() {
    ellipse(this.pos.x, this.pos.y, 2 * this.radius);
  }
}
