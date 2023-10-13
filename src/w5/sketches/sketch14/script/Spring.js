class Spring {
  constructor(x, y, length, k) {
    this.pos = createVector(x, y);
    this.restLength = length;
    this.k = k;
  }

  //늘어났을떄, 늘어난 만큼에 비례에 튕기기
  spring(hangingObj) {
    // 거리구하기 고정된 점과 원
    const dist = p5.Vector.dist(hangingObj.pos, this.pos);
    // 판별하기, 원래 스프링의 길이를 빼기
    const distDelta = dist - this.restLength;
    // 방향 bob으로 향하는 백터, bob의 위치에서 나의 포지션 빼기
    const towardBob = p5.Vector.sub(hangingObj.pos, this.pos);
    // 크기 정하기
    const force = towardBob.setMag(-1 * this.k * distDelta);
    hangingObj.applyForce(force);
  }

  //표현, hangingObj 매달린
  display(hangingObj) {
    //고정된 점
    noStroke();
    fill(127);
    ellipse(this.pos.x, this.pos.y, 20);
    //연결된 선
    noFill();
    stroke('#00FF00');
    line(this.pos.x, this.pos.y, hangingObj.pos.x, hangingObj.pos.y);
  }
}
