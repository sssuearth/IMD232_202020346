class MatterRect {
  // 사각형 만들기 위해 필요
  constructor(x, y, w, h, options) {
    this.w = w;
    this.h = h;
    // 그라운드는 고정된 물체이기 때문에 isStatic: true,
    this.body = Bodies.rectangle(x, y, this.w, this.h, options);
    // 물체를 만든 후 엔진에 추가하기
    Composite.add(matterEngine.world, this.body);
    // console.log(this.body);
  }

  display() {
    // 1. 엔진에 등록된 물체(body)의 위치 가져오기
    // 2. 물체의 각도 가져오기
    // 3. 푸시
    // 4. 위치로 트랜스레이트
    // 5. 각도로 회전
    // 6. 0, 0 지점에 가로, 세로 크기로 직사각형 (RectMode가 Center)
    // 7. 팝

    const pos = this.body.position; //물체 위치 가져오기
    const angle = this.body.angle; //각도
    push();
    translate(pos.x, pos.y); //x, y의 포지션
    rotate(angle);
    rect(0, 0, this.w, this.h);
    pop();
  }

  // 화면 밖으로 벗어난 사각형들은 지우도록

  // 범위
  isDead() {
    return this.body.position.y > height + 100;
  }
  // 지우기
  remove() {
    Composite.remove(matterEngine.world, this.body);
  }
}
