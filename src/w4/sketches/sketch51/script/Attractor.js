class Attractor {
  constructor() {
    //계산을 위해 위치, 질량이 필요
    this.pos = createVector(x, y); //위치에 초기값
    this.mass = mass; //질량
  }

  //디렉션벡터
  attract(mover) {
    let dirVector = p5.Vector.sub(this.pos, mover.pos);
    let distance = dirVector.mag();
    distance = constrain(distance, 5, 25);
    let strength = (this.mass * mover.mass) / distance ** 2;
    return dirVector.setMag(strength);
  }

  display() {
    ellipse(this.pos.x, this.pos.y, 100);
  }
}
